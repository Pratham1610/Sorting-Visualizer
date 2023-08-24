import { Box,useColorMode ,Flex } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import Algorithm from '../utils/Algorithm';
 
const BuildGrid = ({ data ,s1 ,s2, setSorting, setswap1, setswap2, setArr,
   algo, sorting, rendering, setRendering,}) => {
    const { colorMode } = useColorMode();
    const clr = colorMode === "dark" ? "black" : "gray.100";


  const run = () => {
    Algorithm.get(algo)(data, setswap1, setswap2, setArr, setSorting);
  };
  
  useEffect(() => {
    const handleRun = () => {
      setRendering(false);
      run();
    };
  
    if (rendering && sorting) {
      handleRun();
    }
  }, [rendering, sorting, run, setRendering, setswap1, setswap2, setArr, setSorting]);
  
  useEffect(() => {
    if (!sorting) {
      setRendering(true);
    }
  }, [sorting, setRendering]);
  
 

  return (
   <Flex height={'28vh'} mb={18} >
    <Box
      rounded={"lg"}
      display="grid"
      gridAutoFlow={"column"}
      gridAutoColumns={"auto"}
      bg={clr}
      borderWidth={"1px"} 
      borderColor={"blue.500"}
      minH={"full"}
      overflow={"hidden"}
      m={4}
      flex="1"
    >
      {Array.isArray(data) && data.map((d,ind) => {
        
        return (
          <Box
            display={"flex"}
            justifyContent="flex-end"
            textAlign="center"
            flexDirection="column"
            key={ind}
          >
            
            {/* <p>{d}</p> */}
         
            <Box
             roundedTop={"sm"}
             mr={1}
             ml={ind==0?1:0}
             bg={ind === s1 || ind === s2 ? "red" :"teal.300" }
             style={{ height: `${d}px` }}
            >
            </Box>
          
          </Box>
        );
      })}
    </Box>
    </Flex>  
  );
};
export default BuildGrid;