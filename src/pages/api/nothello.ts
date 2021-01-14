import { NextApiRequest, NextApiResponse } from 'next';
import { initSentry } from 'common/sentry';

initSentry();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.statusCode = 200;
    throw new Error('api test error');
    res.json({ name: 'John Doe' });
};
