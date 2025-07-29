// เป็น Interface สำหรับการเข้าถึงข้อมูล User (ที่กำหนดสิ่งที่ระบบต้องการ)
// เป็นสัญญาระหว่าง domain กับ infrastructure
// กำหนดว่าคลาสไหนที่อยากจะดึง/บันทึก User ต้องทำผ่านอะไร
// ใช้เพื่อ business logic ออกจากฐานข้อมูล (Loose Coupling)
import { User } from './User'

  export interface UserRepository {
     findByEmail(email: string): Promise<User | null>
     save(user: User): Promise<void>
   }
