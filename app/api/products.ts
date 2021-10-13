import db, { Prisma } from "db"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse } from "blitz"

const handler: BlitzApiHandler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  const products = await db.product.findMany()
  const formattedProducts = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      url: `${req.headers.host}/api/products`,
      image: product.image,
      price: product.price,
    }
  })

  res.write(JSON.stringify(formattedProducts))
  return res.end()
}

export default handler
