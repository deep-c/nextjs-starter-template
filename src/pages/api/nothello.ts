import { NextApiRequest, NextApiResponse } from 'next';
import { sentryMiddleware } from '@/common/middleware';

export default sentryMiddleware(async (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    throw new Error('api test error');
    res.json({ name: 'John Doe' });
});
