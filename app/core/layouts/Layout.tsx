import { ReactNode } from "react"
import { Head } from "blitz"
import { Suspense } from "react"
import WithMenu from "app/core/components/WithMenu"
import WithFooter from "app/core/components/WithFooter"
import { Box } from "@chakra-ui/react"
type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "blitzjs-example"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://cdn.snipcart.com"></link>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
      </Head>
      <div>
        <div
          hidden
          id="snipcart"
          data-api-key="NzhiM2E3MTItYTUyNC00ODVlLWI1N2YtNTA5ZGFhZWE3Y2E4NjM3MzM5MDA3OTY4NTExMzY0"
        ></div>
        <Suspense fallback="Loading...">
          <WithMenu />
          <Box w={"80%"} m={"40px auto"}>
            {children}
          </Box>
          <WithFooter />
        </Suspense>
      </div>
    </>
  )
}

export default Layout
