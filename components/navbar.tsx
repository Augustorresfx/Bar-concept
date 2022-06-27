import React from 'react';
import { Link, Popover, PopoverContent, PopoverCloseButton, PopoverTrigger, IconButton, HStack, Box, SimpleGrid, Stack, VStack, Button, CloseButton, Flex,  useColorMode, useColorModeValue, useDisclosure, chakra, Image  } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { AiOutlineMenu,  } from 'react-icons/ai'

const Navbar = () => {

    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={'blackAlpha.600'}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Restaurant Home Page"
                display="flex"
                alignItems="center"
              >
               
               <Image w={12} h={12} src="https://www.seekpng.com/png/full/441-4414180_logo-bar-png-logo-para-bar-png.png"/>
              </chakra.a>
              
              <chakra.h1 mt={2} fontSize="xl" fontWeight="medium" ml="4">
                Bar
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button variant="ghost">Inicio</Button>
                <Button variant="ghost">Menú</Button>
                <Button variant="ghost">Dónde estamos</Button>
              </HStack>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  zIndex={1}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={'gray.900'}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
  
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">Menu</Button>
                <Button variant="ghost">Dónde estamos</Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };

  export default Navbar