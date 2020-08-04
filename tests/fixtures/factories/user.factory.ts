import Faker from 'faker';
import { define } from 'typeorm-seeding';
import User from '@/models/User';

define(User, (faker: typeof Faker) => {
    const name = faker.name.firstName(1) + ' ' + faker.name.lastName(1);
    const email = faker.internet.email();

    return new User(name, email);
});
