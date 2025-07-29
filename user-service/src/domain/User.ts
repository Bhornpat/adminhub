// Represents the core user entity
// แทนตัวผู้ใช้งานระบบ เช่น ลูกค้า, แอดมิน
//เก็บข้อมูลสำคัญ เช่น id, name, email, password
export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    private password: string
  ) {}

  // มี business logic เฉพาะของ user เช่น checkPassword()
  checkPassword(input: string): boolean {
    return this.password === input;
  }
}
