import { BlitzPage, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProducts from "app/products/queries/getProducts"
import { SplitScreenProduct } from "app/products/components/SplitScreenProduct"
import { Stack } from "@chakra-ui/react"
export const ProductsList = ({ jsonProductApi }) => {
  const [products] = useQuery(getProducts, null)
  const productsWithJsonUrl = products.map((product) => {
    product.url = jsonProductApi
    return product
  })

  return (
    <Stack spacing={"50px"}>
      {productsWithJsonUrl.map((product, index) => (
        <SplitScreenProduct
          key={product.id}
          position={index % 2 == 0 ? "right" : "left"}
          product={product}
        />
      ))}
    </Stack>
  )
}

const Home: BlitzPage = ({ jsonProductApi }) => {
  return (
    <div className="container">
      <main>
        <ProductsList jsonProductApi={jsonProductApi} />
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

export async function getServerSideProps(context) {
  const jsonProductApi = `${context.req.headers.host}/api/products`
  return {
    props: { jsonProductApi }, // will be passed to the page component as props
  }
}
