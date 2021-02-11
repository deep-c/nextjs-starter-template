import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1613035612156 implements MigrationInterface {
    name = 'InitialMigration1613035612156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "compoundId" character varying NOT NULL, "userId" integer NOT NULL, "providerType" character varying NOT NULL, "providerId" character varying NOT NULL, "providerAccountId" character varying NOT NULL, "refreshToken" text, "accessToken" text, "accessTokenExpires" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f37504801eec226e0a88345599a" UNIQUE ("compoundId"), CONSTRAINT "UQ_f37504801eec226e0a88345599a" UNIQUE ("compoundId"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "userId" ON "account" ("userId") `);
        await queryRunner.query(`CREATE INDEX "providerId" ON "account" ("providerId") `);
        await queryRunner.query(`CREATE INDEX "providerAccountId" ON "account" ("providerAccountId") `);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying, "email" character varying, "emailVerified" TIMESTAMP, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "dob" TIMESTAMP, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "session" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "expires" TIMESTAMP NOT NULL, "sessionToken" character varying NOT NULL, "accessToken" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_31ee7107a0ed316df2086cbf5f1" UNIQUE ("sessionToken"), CONSTRAINT "UQ_69ed5ce783e0c16540f12630a00" UNIQUE ("accessToken"), CONSTRAINT "UQ_31ee7107a0ed316df2086cbf5f1" UNIQUE ("sessionToken"), CONSTRAINT "UQ_69ed5ce783e0c16540f12630a00" UNIQUE ("accessToken"), CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "verification_request" ("id" SERIAL NOT NULL, "identifier" character varying NOT NULL, "token" character varying NOT NULL, "expires" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5ebed08ac78d30f9b04a2c4bcba" UNIQUE ("token"), CONSTRAINT "UQ_5ebed08ac78d30f9b04a2c4bcba" UNIQUE ("token"), CONSTRAINT "PK_9d9499e0fabae343c7ec3ecfac9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "verification_request"`);
        await queryRunner.query(`DROP TABLE "session"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "providerAccountId"`);
        await queryRunner.query(`DROP INDEX "providerId"`);
        await queryRunner.query(`DROP INDEX "userId"`);
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
