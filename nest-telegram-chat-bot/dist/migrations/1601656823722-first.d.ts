import { MigrationInterface, QueryRunner } from "typeorm";
export declare class first1601656823722 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}