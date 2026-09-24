import { cookies } from "next/headers";

export const ADMIN_COOKIE = "ssk-admin";
const MAX_AGE = 60 * 60 * 24 * 7;

function getPassword() {
  return process.env.ADMIN_PASSWORD?.trim() ?? "";
}

export function isAdminConfigured() {
  return getPassword().length > 0;
}

async function hmac(value: string) {
  const secret = getPassword().padEnd(32, "s").slice(0, 32);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );
  return Buffer.from(signature).toString("hex");
}

export async function createAdminToken() {
  const expires = Date.now() + MAX_AGE * 1000;
  const payload = `ssk:${expires}`;
  return `${payload}.${await hmac(payload)}`;
}

export async function isValidAdminToken(token?: string | null) {
  if (!token || !isAdminConfigured()) {
    return false;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return false;
  }

  const expected = await hmac(payload);
  if (expected.length !== signature.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) {
    mismatch |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  if (mismatch !== 0) {
    return false;
  }

  const expires = Number(payload.split(":")[1]);
  return Number.isFinite(expires) && expires > Date.now();
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  return isValidAdminToken(store.get(ADMIN_COOKIE)?.value);
}

export function verifyAdminPassword(password: string) {
  const expected = getPassword();
  if (!expected || password.length !== expected.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < expected.length; i += 1) {
    mismatch |= password.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  };
}
