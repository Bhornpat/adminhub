// Infra repository (PostgreSQL) 
// ทำหน้าที่ติดต่อกับฐานข้อมูลจริง (เป็น implement ของ interface ใช้ PostgreSQL จริง)
// SELECT เพื่อตรวจสอบ email ซ้ำ, INSERT เพื่อบันทึก user
   import { User } from '../domain/User'
   import { UserRepository } from '../domain/UserRepository'
   import { db } from './db'

   export class PgUserRepository implements UserRepository {
     async findByEmail(email: string): Promise<User | null> {
       const res = await db.query('SELECT * FROM users WHERE email = $1', [email])
       if (res.rows.length === 0) return null
       const u = res.rows[0]
       return new User(u.id, u.name, u.email, u.password)
     }

     async save(user: User): Promise<void> {
       await db.query(
         'INSERT INTO users(id, name, email, password) VALUES($1, $2, $3, $4)',
         [user.id, user.name, user.email, user["password"]]
       )
     }
   }

// หลักการคือ "controller -> application service -> domain -> repository
// graph TD
// A[main.ts] --> B[RegisterUser.ts]
// B --> C[User.ts]
// B --> D[UserRepository.ts]
// D --> E[PgUserRepository.ts]
// E --> F[db.ts]
