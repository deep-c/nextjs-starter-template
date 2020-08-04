import { Seeder, Factory } from 'typeorm-seeding';
import User from '@/models/User';

export default class CreateUsers implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(User)().createMany(10);
    }
}
