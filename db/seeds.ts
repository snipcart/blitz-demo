import db from "./index"
import { SecurePassword } from "blitz"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const admins = [
  {
    email: "admin@admin.com",
    password: "admin12345",
  },
]

const seed = async () => {
  for (let i = 0; i < admins.length; i++) {
    const admin = admins[i]
    if (admin) {
      const hashedPassword = await SecurePassword.hash(admin.password)
      await db.user.create({
        data: { email: admin.email, hashedPassword, role: "USER" },
        select: { id: true, name: true, email: true, role: true },
      })
    }
  }
}

export default seed
