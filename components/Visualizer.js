import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import BuildGrid from '@/components/BuildGrid';
import { VStack,Box } from "@chakra-ui/react";



const Visualizer = () => {
  const [formState, setFormState] = useState({
    size: 10,
    algo1: "Bubble-sort",
    algo2: "Bubble-sort",
  });

  
  const [generating, setGenerating] = useState(false);
 

  const [Swap_a1,setSwap_a1] = useState(0);  // for screen first (a)
  const [Swap_a2,setSwap_a2] = useState(0);
  const [sorting_a, setSorting_a] = useState(false);
  const [rendering_a,setRendering_a] = useState(true);
  const [arr_a, setArr_a] = useState([]);


  const [Swap_b1,setSwap_b1] = useState(0);  // for screen second (b)
  const [Swap_b2,setSwap_b2] = useState(0);
  const [sorting_b, setSorting_b] = useState(false);
  const [rendering_b,setRendering_b] = useState(true);
  const [arr_b, setArr_b] = useState([]);


  


  const generateArr = (formState) => {
    setGenerating(true);
    setTimeout(() => {
      let newArr = [];
      while (newArr.length <= formState.size) {
      let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      setArr_a([...newArr]);
      setArr_b([...newArr]);
      setGenerating(false);
    }, 500);
  };
    
 
  useEffect(() => {
    generateArr({ size: 10 });
  }, []);

  const sort = () => {
    setSorting_a(true)
    setSorting_b(true)
  };

  return (
    <> 
    <Box mb={4}>
     <Header/>
      <VStack width={"100%"} alignItems={"stretch"}>
        <Sidebar
          generateArr={generateArr}
          sort={sort}
          sorting_a={sorting_a}
          sorting_b={sorting_b}
          formState={formState}
          setFormState={setFormState}
        />
       
        <BuildGrid data={arr_a} s1={Swap_a1} s2={Swap_a2} setSorting={setSorting_a} setswap1={setSwap_a1}
          setswap2={setSwap_a2} setArr={setArr_a} algo={formState.algo1} sorting={sorting_a} rendering={rendering_a}
         setRendering={setRendering_a} />

        <BuildGrid data={arr_b} s1={Swap_b1} s2={Swap_b2} setSorting={setSorting_b} setswap1={setSwap_b1}
          setswap2={setSwap_b2} setArr={setArr_b}  algo={formState.algo2} sorting={sorting_b} rendering={rendering_b}
          setRendering={setRendering_b}/>

     </VStack>
     
    </Box>
    </>
  )
};

export default Visualizer