import { Entity, PrimaryGeneratedColumn, Column, Decimal128 } from "typeorm"

@Entity()
export class Expense {

  @Column()
  purpose: string

  @Column()
  amount: Decimal128
}