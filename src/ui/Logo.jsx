import { Box, HStack } from "@chakra-ui/react";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logo() {
  return (
    <HStack>
      <FontAwesomeIcon
        icon={faClapperboard}
        style={{ color: "#e4d804", fontSize: "30px" }}
      />
      <Box paddingRight={20} fontSize={30} fontWeight={600}>
        MovieCraze
      </Box>
    </HStack>
  );
}

export default Logo;
