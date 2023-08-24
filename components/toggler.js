import { useColorMode, Button} from "@chakra-ui/react";
import { MoonIcon,SunIcon} from '@chakra-ui/icons';
import { useBreakpointValue } from "@chakra-ui/react";

const Toggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconVAL = useBreakpointValue({ base: 6, md: 8 });
  const buttonSize = useBreakpointValue({ base: "md", lg: "lg" });
  return (
    <>
  
        <Button onClick={toggleColorMode} size={buttonSize}>
         {colorMode === 'light' ? <SunIcon boxSize={iconVAL} color={'teal.300'}  /> : <MoonIcon boxSize={iconVAL} color={'teal.300'}/>}
        </Button>
    
    </>
  )
};

export default Toggler;