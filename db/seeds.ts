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
const products = [
  {
    price: 30.99,
    description: "Art by Neven Krcmarek",
    image: "Pattern3.jpeg",
    name: "Lonely Island",
  },
  {
    price: 29.99,
    description: "Art by Pawel Czerwinski",
    image: "Pattern2.jpeg",
    name: "The Triangle Forest",
  },
  {
    price: 29.99,
    description: "Art by Pawel Czerwinski",
    image: "Pattern1.jpeg",
    name: "Candy Land",
  },
]

const seed = async () => {
  for (let i = 0; i < admins.length; i++) {
    const admin = admins[i]

    if (admin) {
      const adminAlreadyExist = await db.user.findFirst({ where: { email: admin.email } })
      if (!adminAlreadyExist) {
        const hashedPassword = await SecurePassword.hash(admin.password)
        await db.user.create({
          data: { email: admin.email, hashedPassword, role: "USER" },
          select: { id: true, name: true, email: true, role: true },
        })
      }
    }
  }

  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    if (product) {
      const productAlreadyExist = await db.product.findFirst({ where: { name: product.name } })
      if (!productAlreadyExist) {
        await db.product.create({ data: product })
      }
    }
  }
}

export default seed
