import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // -> Get token.
    const authToken = req.headers.authorization;

    // -> Verify if authToken is not empty.
    if (!authToken) {
        return res.status(401).end();
    }

    // -> Valid token.
    const [, token] = authToken.split(' ');

    try {
        const { sub } = verify(token, '9e789ed2961818bfe640d1cc6b5fee84') as IPayload;
        req.user_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }

    // -> Recover user infos.
}
