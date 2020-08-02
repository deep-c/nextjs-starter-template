import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1596268487309 implements MigrationInterface {
    name = 'InitialMigration1596268487309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(256) NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "code" character varying(50) NOT NULL, "title" character varying(100) NOT NULL, "description" character varying(256) NOT NULL, CONSTRAINT "UQ_30e166e8c6359970755c5727a23" UNIQUE ("code"), CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "content_type" ("id" SERIAL NOT NULL, "model" character varying(256) NOT NULL, CONSTRAINT "UQ_90d32ba06509823991c52909054" UNIQUE ("model"), CONSTRAINT "PK_897d132e80d29e6a50e458f9b06" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_permissions_permission" ("roleId" integer NOT NULL, "permissionId" integer NOT NULL, CONSTRAINT "PK_b817d7eca3b85f22130861259dd" PRIMARY KEY ("roleId", "permissionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b36cb2e04bc353ca4ede00d87b" ON "role_permissions_permission" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bfbc9e263d4cea6d7a8c9eb3ad" ON "role_permissions_permission" ("permissionId") `);
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "compoundId" character varying NOT NULL, "userId" integer NOT NULL, "providerType" character varying NOT NULL, "providerId" character varying NOT NULL, "providerAccountId" character varying NOT NULL, "refreshToken" text, "accessToken" text, "accessTokenExpires" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f37504801eec226e0a88345599a" UNIQUE ("compoundId"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "session" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "expires" TIMESTAMP NOT NULL, "sessionToken" character varying NOT NULL, "accessToken" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_31ee7107a0ed316df2086cbf5f1" UNIQUE ("sessionToken"), CONSTRAINT "UQ_69ed5ce783e0c16540f12630a00" UNIQUE ("accessToken"), CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying, "email" character varying, "emailVerified" TIMESTAMP, "image" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "phoneNumber" character varying, "dob" date, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "verification_request" ("id" SERIAL NOT NULL, "identifier" character varying NOT NULL, "token" character varying NOT NULL, "expires" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_5ebed08ac78d30f9b04a2c4bcba" UNIQUE ("token"), CONSTRAINT "PK_9d9499e0fabae343c7ec3ecfac9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "role_permissions_permission" ADD CONSTRAINT "FK_b36cb2e04bc353ca4ede00d87b9" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_permissions_permission" ADD CONSTRAINT "FK_bfbc9e263d4cea6d7a8c9eb3ad2" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_permissions_permission" DROP CONSTRAINT "FK_bfbc9e263d4cea6d7a8c9eb3ad2"`);
        await queryRunner.query(`ALTER TABLE "role_permissions_permission" DROP CONSTRAINT "FK_b36cb2e04bc353ca4ede00d87b9"`);
        await queryRunner.query(`DROP TABLE "verification_request"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "session"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP INDEX "IDX_bfbc9e263d4cea6d7a8c9eb3ad"`);
        await queryRunner.query(`DROP INDEX "IDX_b36cb2e04bc353ca4ede00d87b"`);
        await queryRunner.query(`DROP TABLE "role_permissions_permission"`);
        await queryRunner.query(`DROP TABLE "content_type"`);
        await queryRunner.query(`DROP TABLE "permission"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
