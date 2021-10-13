import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getProducts from "app/products/queries/getProducts"

const ITEMS_PER_PAGE = 100

export const ProductsList = () => {
  const [{ products }] = useQuery(getProducts, null)

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={Routes.ShowProductPage({ productId: product.id })}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ProductsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewProductPage()}>
            <a>Create Product</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ProductsList />
        </Suspense>
      </div>
    </>
  )
}

ProductsPage.authenticate = true
ProductsPage.getLayout = (page) => <Layout>{page}</Layout>

export default ProductsPage
