export {}

declare global {         // We are extending Express's Request interface so TypeScript recognizes 'userId' as a valid property
    namespace Express {
        export interface Request {
            userId?: string;
        }
    }
}