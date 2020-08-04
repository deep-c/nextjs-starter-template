import User, { UserSchema } from './User';
import Account, { AccountSchema } from './Account';
import ContentType, { ContentTypeSchema } from './ContentType';
import Permission, { PermissionSchema } from './Permission';
import Role, { RoleSchema } from './Role';
import Session, { SessionSchema } from './Session';
import VerificationRequest, { VerificationRequestSchema } from './VerificationRequest';

export default {
    User: {
        model: User,
        schema: UserSchema,
    },
    Account: {
        model: Account,
        schema: AccountSchema,
    },
    ContentType: {
        model: ContentType,
        schema: ContentTypeSchema,
    },
    Permission: {
        model: Permission,
        schema: PermissionSchema,
    },
    Role: {
        model: Role,
        schema: RoleSchema,
    },
    Session: {
        model: Session,
        schema: SessionSchema,
    },
    VerificationRequest: {
        model: VerificationRequest,
        schema: VerificationRequestSchema,
    },
};
