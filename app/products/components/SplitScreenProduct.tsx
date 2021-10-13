import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react"

function ProductImage(props: { imageURL }) {
  return (
    <Flex flex={1} m={"auto"}>
      <Image alt={"Login Image"} objectFit={"contain"} alignItems="center" src={props.imageURL} />
    </Flex>
  )
}

function ProductSummary(props: { product }) {
  return (
    <Flex m={"auto"} flex={1} align={"center"} justify={"center"}>
      <Stack spacing={6} w={"full"} maxW={"lg"}>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          <Text color={"black.400"} as={"span"}>
            {props.product.name}
          </Text>{" "}
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
          {props.product.description}
        </Text>
        <Stack align="strech" direction={"row"} spacing={4} width={"100%"}>
          <Text fontSize={{ base: "2xl", lg: "3xl" }} color={"black.400"} as={"span"}>
            {props.product.price} {"$"}
          </Text>
          <Button
            className="snipcart-add-item"
            data-item-id={props.product.id}
            data-item-price={props.product.price}
            data-item-url={props.product.url}
            data-item-description={props.product.description}
            data-item-image={props.product.image}
            data-item-name={props.product.name}
            fontSize={{ base: "1xl", lg: "2xl" }}
            flex={1}
            w={"80%"}
            h={"auto"}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export function SplitScreenProduct(props: { product; position }) {
  return (
    <Box flex="1">
      <Stack display={{ base: "none", md: "flex" }} direction={{ md: "row" }}>
        {props.position == "left" && <ProductImage imageURL={props.product.image} />}
        <ProductSummary product={props.product} />
        {props.position == "right" && <ProductImage imageURL={props.product.image} />}
      </Stack>
      <Stack display={{ md: "none" }} direction={{ base: "column" }}>
        <ProductImage imageURL={props.product.image} />
        <ProductSummary product={props.product} />
      </Stack>
    </Box>
  )
}
