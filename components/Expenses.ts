import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import '~/server/input.css'

// Create table for the transactions
@Entity()
class Transactions {

  @Column()
  month!: string
}

export default Transactions