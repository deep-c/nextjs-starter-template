import * as Sentry from '@sentry/node';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

Sentry.init({ enabled: process.env.NODE_ENV === 'production', dsn: process.env.SENTRY_DSN });

export const sentryMiddleware = (apiHandler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            return await apiHandler(req, res);
        } catch (error) {
            console.error(error);
            Sentry.captureException(error);
            await Sentry.flush(2000);
            throw error;
        }
    };
};
