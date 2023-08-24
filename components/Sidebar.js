
import {
    Button,Flex,FormControl,
    FormLabel,Stack,Select,Slider,
    SliderFilledTrack,SliderThumb,
    SliderTrack } from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";


  const Sidebar = ({ generateArr, sort, sorting_a,sorting_b, formState, setFormState }) => {
    const { colorMode } = useColorMode();
    const clr = colorMode === "dark" ? "black" : "gray.100";
    const sClr = colorMode === "dark" ? "gray.900" : "white";
    const maxSliderValue = useBreakpointValue({ base: 60, md: 200 });

   
    return (

      <Stack minW="xs" p={"4"} borderRadius="lg" rounded={'md'}
           bg={clr} borderWidth={"1px"} borderColor={"blue.500"}
           overflow="hidden" mt={4} ml={4} mr={4} direction={['column', 'row']}>

            <FormControl>
                <FormLabel htmlFor="size">{`Array Size (${formState.size})`}</FormLabel>
                <Slider
                    onChangeEnd={(v) => setFormState({ ...formState, size: v })}
                    aria-label={"10"}
                    min={10}
                    max={maxSliderValue}
                    defaultValue={10}
                    isDisabled={sorting_a || sorting_b}
                >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>

                        <SliderThumb />
                </Slider>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="algo1">First-Tab</FormLabel>

                <Select
                    onChange={(value) => setFormState({ ...formState, algo1: event.target.value})}
                    bg={sClr}
                    id="algo1"
                    variant={"outline"}
                    isDisabled={sorting_a || sorting_b}
                >
                    <option value="Bubble-sort">Bubble-sort</option>
                    <option value="Selection-sort">Selection-sort</option>
                    <option value="Insertion-sort">Insertion-sort</option>
                    <option value="Merge-sort">Merge-sort</option>
                    <option value="Quick-sort">Quick-sort</option>
                    <option value="Shell-sort">Shell-sort</option>
                </Select>

            </FormControl>

            <FormControl>
                <FormLabel htmlFor="algo2">Second-Tab</FormLabel>
                <Select
                    onChange={(value) => setFormState({ ...formState, algo2: event.target.value  })}
                    bg={sClr}
                    id="algo2"
                    variant={"outline"}
                    isDisabled={sorting_a || sorting_b}
                >
                    <option value="Bubble-sort">Bubble-sort</option>
                    <option value="Selection-sort">Selection-sort</option>
                    <option value="Insertion-sort">Insertion-sort</option>
                    <option value="Merge-sort">Merge-sort</option>
                    <option value="Quick-sort">Quick-sort</option>
                    <option value="Shell-sort">Shell-sort</option>
                </Select>
            </FormControl>


            <Flex gap={"3"} mt={"5"} direction="row">
                <Button
                    mt={2}
                    onClick={() => {
                    generateArr(formState);
                    }}
                    colorScheme="purple"
                    isDisabled={sorting_a || sorting_b}
                >
                    Generate Array
                </Button>

                <Button
                mt={2}
                    onClick={sort}
                    colorScheme="purple"
                    variant="outline"
                    isDisabled={sorting_a || sorting_b}
                >
                    Sort
                </Button>
            </Flex>

      </Stack>
    );
  };
  export default Sidebar;