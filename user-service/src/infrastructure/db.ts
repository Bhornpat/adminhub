//เป็น Database Connection Layer
//ใช้ pg.Pool เพื่อเชื่อมต่อกับ PostgreSQL
//เป็น global connection ที่ใช้ทั้งระบบ
//ถ้าใช้ production จริงควรแยก ENV config ไป .env
 import { Pool } from 'pg'

   export const db = new Pool({
     user: 'root',
     host: 'localhost',
     database: 'adminhub',
     password: 'root',
     port: 5432
   })