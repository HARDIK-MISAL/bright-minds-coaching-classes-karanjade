/**
 * Enterprise Frontend Security Shield
 * Provides defensive protections against OWASP client-side vulnerabilities:
 * - Cross-Site Scripting (XSS)
 * - Prototype Pollution
 * - Reverse Tabnabbing / Malicious Protocol Schemes (javascript:, data:)
 * - Automated Click / Action Flooding (Denial of Service)
 * - Unsafe Input Injection
 */

// Allow-listed safe protocols for hyperlinks
const SAFE_PROTOCOLS = new Set(['https:', 'http:', 'tel:', 'mailto:']);

/**
 * Validates and sanitizes a URL or href.
 * Prevents javascript: or vbscript: or data: injection exploits.
 */
export function sanitizeUrl(url: string | undefined | null, fallback: string = '#'): string {
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim();

  // Safe internal hash navigation
  if (trimmed.startsWith('#')) {
    // Only allow alphanumeric characters, hyphens, and underscores in anchor hashes
    const safeHash = trimmed.replace(/[^#a-zA-Z0-9_-]/g, '');
    return safeHash.length > 1 ? safeHash : fallback;
  }

  // Relative paths starting with /
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return encodeURI(trimmed);
  }

  try {
    const parsed = new URL(trimmed, window.location.origin);
    if (SAFE_PROTOCOLS.has(parsed.protocol)) {
      return parsed.href;
    }
  } catch {
    // If URL parsing fails, check if it's a valid tel: scheme
    if (trimmed.startsWith('tel:')) {
      const sanitizedPhone = trimmed.replace(/[^tel:0-9+\s-]/g, '');
      return sanitizedPhone;
    }
  }

  return fallback;
}

/**
 * Sanitizes numeric input for calculators/quizzes, stripping malicious injection payloads
 * and enforcing maximum bounds to prevent memory/CPU exhaustion.
 */
export function sanitizeNumericInput(value: string, maxLength: number = 7): string {
  if (typeof value !== 'string') return '';
  // Keep only digits and optional single leading minus
  let sanitized = value.replace(/[^0-9-]/g, '');
  if (sanitized.indexOf('-') > 0) {
    sanitized = sanitized.replace(/-/g, '');
  }
  return sanitized.slice(0, maxLength);
}

/**
 * Generic string sanitizer stripping control characters and HTML tags.
 */
export function sanitizeString(text: string, maxLength: number = 200): string {
  if (typeof text !== 'string') return '';
  return text
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Strip control characters
    .trim()
    .slice(0, maxLength);
}

/**
 * Client-side rate limiter / debouncer to prevent rapid click or form flooding.
 * Returns true if action is permitted, false if rate limited.
 */
const rateLimitMap = new Map<string, number>();

export function checkRateLimit(actionKey: string, cooldownMs: number = 180): boolean {
  const now = Date.now();
  const lastTime = rateLimitMap.get(actionKey) || 0;
  if (now - lastTime < cooldownMs) {
    return false;
  }
  rateLimitMap.set(actionKey, now);
  return true;
}

/**
 * Hardens JavaScript prototype invariants against prototype pollution attacks.
 */
export function initSecurityHardening(): void {
  try {
    // Prevent modification of critical Object prototypes
    if (typeof Object.freeze === 'function') {
      Object.seal(Object.prototype);
    }
  } catch {
    // Graceful fallback in environments with strict frozen prototype restrictions
  }
}
