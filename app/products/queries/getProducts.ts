import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

export default resolver.pipe(resolver.authorize(), async () => {
  const products = await db.product.findMany()
  return products
})
