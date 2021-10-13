import { Box, Container, Stack, Text, Link, useColorModeValue, HStack } from "@chakra-ui/react"

export default function WithFooter() {
  return (
    <Box
      mt={"40px"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        w={{ md: "80%" }}
        m={"auto"}
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack spacing={8} alignItems={"center"}>
          <img src="blitzJsExamplelogo.png" alt="Logo" width="55px" />
          <Stack direction={"row"} spacing={6}>
            <Link href={"/login"}>admin</Link>
          </Stack>
        </HStack>
        <Text>© 2020 BlitzJs example. All rights reserved</Text>
      </Container>
    </Box>
  )
}
