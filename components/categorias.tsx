import React from "react";

import { Box, Button, chakra, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const Categorias = () => {
  return (
    <Flex
    bgGradient='linear(to-br, #191511 20%, #181411 60%, #4b2520 120%)'
      p={4}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <Box
        shadow="xl"
       
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "orange.300" }}
              lineHeight={{ md: "shorter" }}
              
            >
              Encontranos
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "orange.100" }}
              fontSize={{ md: "lg" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim in sem pulvinar tincidunt nec ut dui. Nullam felis sem, tempus quis sapien a, suscipit tincidunt tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi porttitor turpis in turpis ornare tempor.
            </chakra.p>
            <Button
                   w={{ base: "full", sm: "auto" }}
                   variant="outline"
                   borderColor={"orange.300"}
                   size="lg"
     
                   _hover={{ color: "orange.300", _dark: { bg: "orange.500" } }}
                   color="orange.300"
                   as="a"
            >
              Ver ubicación
            </Button>
          </Box>
         <Image ml={20} maxH={"300px"} src="https://i.postimg.cc/65dXsKP4/toppng-com-dinner-food-png-freeuse-stock-plate-of-food-792x797.png"/>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "orange.300" }}
              lineHeight={{ md: "shorter" }}
            >
              Visita nuestra carta online
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "orange.100" }}
              fontSize={{ md: "lg" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim in sem pulvinar tincidunt nec ut dui. Nullam felis sem, tempus quis sapien a, suscipit tincidunt tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              variant="outline"
              borderColor={"orange.300"}
              size="lg"

              _hover={{ color: "orange.300", _dark: { bg: "orange.500" } }}
              color="orange.300"
              as="a"
            >
              Ver carta
            </Button>
          </Box>
         <Image maxH={"400px"} src="https://i.postimg.cc/vT2GctWg/pngkit-food-in-plate-png-3597252.png"/>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Categorias