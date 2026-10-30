/**
 * rateLimiter.ts
 * Express-rate-limit configurations.
 */

import rateLimit from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import { env } from '../config/env';

// Typed no-op middleware used as the dev bypass for both limiters
const devBypass = (_req: Request, _res: Response, next: NextFunction): void => next();

/** General limiter applied to all API routes */
export const generalLimiter = env.isDev
  ? devBypass
  : rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 200,
      standardHeaders: true,
      legacyHeaders: false,
      skip: (req) => req.path === '/health' || req.path.endsWith('/health'),
      handler: (_req, _res, next) => {
        next(ApiError.tooManyRequests('Too many requests, please try again later.'));
      },
    });

/** Stricter limiter for auth routes */
export const authLimiter = env.isDev
  ? devBypass
  : rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 20,
      standardHeaders: true,
      legacyHeaders: false,
      handler: (_req, _res, next) => {
        next(
          ApiError.tooManyRequests(
            'Too many authentication attempts, please try again in 15 minutes.'
          )
        );
      },
    });