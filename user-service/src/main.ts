 //เป็น Entry Point ของ user-service
 //HTTP server + controller
 //Express server with /register endpoint (RegisterUser.ts)
 //สั่ง app.listen() เพื่อรอรับคำสั่ง HTTP
 import express from 'express'
 import { RegisterUser } from './application/RegisterUser'
 import { PgUserRepository } from './infrastructure/PgUserRepository'

   const app = express()
   app.use(express.json())

   const repo = new PgUserRepository()

   app.post('/register', async (req, res) => {
     try {
       const { name, email, password } = req.body
       const service = new RegisterUser(repo)
       const user = await service.execute(name, email, password)
       res.status(201).json({ id: user.id, name: user.name, email: user.email })
     } catch (err: any) {
       res.status(400).json({ error: err.message })
     }
   })

   app.listen(4001, () => console.log('User service running on http://localhost:4001'))
