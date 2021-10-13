import db, { Prisma } from "db"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const products = await db.product.findMany()
  res.write(JSON.stringify(products))
  return res.end()
}

export default handler
