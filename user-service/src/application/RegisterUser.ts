//Application service
//ประสานงานกับ UserRepository เพื่อ เช็คว่าผู้ใช้มีอยู่หรือยัง
//สร้าง User ใหม่
//บันทึกลงฐานข้อมูล
//ไม่เขียน logic ดิบใน controller แต่ให้ logic อยู่ตรงนี้แทน
   import { User } from '../domain/User'
   import { UserRepository } from '../domain/UserRepository'
   import { v4 as uuidv4 } from 'uuid'

   export class RegisterUser {
     constructor(private readonly repo: UserRepository) {}

     async execute(name: string, email: string, password: string): Promise<User> {
       const existing = await this.repo.findByEmail(email)
      if (existing) throw new Error('Email already registered')

      const user = new User(uuidv4(), name, email, password)
       await this.repo.save(user)
       return user
     }}