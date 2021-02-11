import User, { UserSchema } from './User';
import Session, { SessionSchema } from './Session';
import Account, { AccountSchema } from './Account';
import VerificationRequest, { VerificationRequestSchema } from './VerificationRequest';

export default {
    User: {
        model: User,
        schema: UserSchema,
    },
    Session: {
        model: Session,
        schema: SessionSchema,
    },
    Account: {
        model: Account,
        schema: AccountSchema,
    },
    VerificationRequest: {
        model: VerificationRequest,
        schema: VerificationRequestSchema,
    },
};
