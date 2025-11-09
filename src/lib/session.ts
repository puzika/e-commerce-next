'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { daysToMilliseconds, daysToSeconds } from "./helpers";
import { SESSION_COOKIE_NAME } from "./constants";

const key = new TextEncoder().encode(process.env.SECRET_KEY);
const lifespan = Number(process.env.COOKIE_LIFESPAN);
const algorithm = String(process.env.ENCRYPTION_ALGORITHM);

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setExpirationTime("20 secs")
    .sign(key);
}

export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, key, { algorithms: [algorithm] });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(payload: JWTPayload) {
  const iat = new Date().getTime();
  const exp = iat + daysToMilliseconds(lifespan);

  const session = await encrypt({ exp, iat, ...payload});

  (await cookies()).set({
    name: SESSION_COOKIE_NAME,
    value: session,
    maxAge: daysToSeconds(lifespan),
  });
}

export async function updateSession() {
  const cookie = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  
  if (!cookie) return;

  const payload = await decrypt(cookie);

  if (!payload) return;

  payload.exp = new Date().getTime() + daysToMilliseconds(lifespan);

  (await cookies()).set({
    name: SESSION_COOKIE_NAME,
    value: await encrypt(payload),
    maxAge: daysToSeconds(lifespan),
  })
}

export async function removeSession() {
  (await cookies()).delete(SESSION_COOKIE_NAME);
}