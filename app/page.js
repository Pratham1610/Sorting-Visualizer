'use client';


import { ChakraProvider} from "@chakra-ui/react";

import Visualizer from "../components/Visualizer";

export default function Home() {
  return (
    
   <>
   <ChakraProvider >
      <Visualizer/>
   </ChakraProvider>  
   </>
  )
}
