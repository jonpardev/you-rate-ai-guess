import dotenv from 'dotenv';

if (process.env.NODE_ENV) dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const returnEnvOrThrowError = (varName: string): string => {
    const envVar = process.env[varName];
    if (!envVar) throw new Error(`[ENV_ERROR] Set environment variable: ${varName}`);
    return envVar;
}

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const PORT = process.env.PORT || '5000';
export const ORIGIN_URI = returnEnvOrThrowError('ORIGIN_URI');
export const OPENAI_ORG = returnEnvOrThrowError('OPENAI_ORG');
export const OPENAI_KEY = returnEnvOrThrowError('OPENAI_KEY');
export const TMDB_KEY = returnEnvOrThrowError('TMDB_KEY');
export const FIREBASE_PROJECT_ID = returnEnvOrThrowError('FIREBASE_PROJECT_ID');
export const FIREBASE_CLIENT_EMAIL = returnEnvOrThrowError('FIREBASE_CLIENT_EMAIL');
export const FIREBASE_KEY = returnEnvOrThrowError('FIREBASE_KEY');