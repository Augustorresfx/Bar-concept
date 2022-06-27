import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";
import Navbar from "./navbar";
import Link from "next/link";

const Hero = () => {
    return (
        <Box
        w="full"
        zIndex={0}
        h="container.md"
        backgroundImage="url(https://i.postimg.cc/PNsmsT0q/pexels-david-guerrero-2945691.jpg)"
        bgPos="center"
        bgSize="cover"
      >
        <Navbar/>
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          maxH={688}
          bg="blackAlpha.600"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
          <Image w={48} h={48} src="https://www.seekpng.com/png/full/441-4414180_logo-bar-png-logo-para-bar-png.png"/>
            <Heading
              fontSize={["3xl"]}
              fontFamily={"poppins"}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Lorem ipsum{" "}
              <chakra.span color="orange.200" textDecor="">
                Dolor
              </chakra.span>
            </Heading>
            <Link href={'#more'}>
            <Button
            colorScheme={'orange'}
              variant={'outline'}
              textTransform="uppercase"
              w="fit-content"
            >
              See More
            </Button></Link>
          </Stack>
        </Flex>
      </Box>
    ) 
}

export default Hero