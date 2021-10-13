import { BlitzPage, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProducts from "app/products/queries/getProducts"
import { SplitScreenProduct } from "app/products/components/SplitScreenProduct"
import { Stack } from "@chakra-ui/react"
export const ProductsList = () => {
  const [products] = useQuery(getProducts, null)

  return (
    <Stack spacing={"50px"}>
      {products.map((product, index) => (
        <SplitScreenProduct
          key={product.id}
          position={index % 2 == 0 ? "right" : "left"}
          product={product}
        />
      ))}
    </Stack>
  )
}

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <ProductsList />
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
