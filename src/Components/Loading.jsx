/* eslint-disable react/prop-types */
import { Box, Center, Spinner, Text, VStack } from '@chakra-ui/react';
import loaderSvg from "/loader.svg"

    {/* <Box */}
    {/*   position="fixed" */}
    {/*   top="0" */}
    {/*   left="0" */}
    {/*   width="100%" */}
    {/*   height="100%" */}
    {/*   backgroundColor="rgba(0, 0, 0, 0.5)" */} 
    {/*   zIndex="1000" */} 
    {/* > */}
    {/*   <Center w='100%' h='100vh'> */}
    {/*     <VStack> */}
    {/*       <Spinner color='white' size={'xl'} bg="transparent"/> */}
    {/*       <Text color='white'>{props.mssg}</Text> */}
    {/*     </VStack> */}
    {/*   </Center> */}
    {/* </Box> */}

const Loading = (props) => {
  return (
    <Box 
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="1000" 
      display="grid"
      placeItems="center"
      backgroundColor="#171D22"
    >
      <img 
        src={loaderSvg} 
        style={{
          backgroundSize:"cover"
        }}
      />
    </Box>
  );
};

export default Loading;
