import React from 'react';
import { Flex ,Box,Spacer, Heading} from '@chakra-ui/react';
import Toggler from './toggler';
import { useBreakpointValue } from "@chakra-ui/react";

const Header = () => {
  const headingSizes = {
    base: "md",
    md: "xl",
    lg: "2xl",
    xl: "3xl",
  };
  const headingSizeValue = useBreakpointValue(headingSizes);

  return (
    <>
     <Flex m={4}>
        <Box  boxShadow={'dark-lg'} p={2} rounded={'md'}
              borderWidth={"1px"} borderColor={"blue.500"} 
              _focus={{ boxShadow: "outline" }}
        >
          <Heading size={headingSizeValue} color={'teal.300'}>S-Visualizer</Heading>
        </Box>
        <Spacer />
        <Box p={2} >
          <Toggler/>
        </Box>
      </Flex>
    
    </>
  )
}

export default Header