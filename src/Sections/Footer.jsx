import {
  Box,
  Flex,
  Text,
  Input,
  Center,
  Divider,
  InputGroup,
  InputRightElement,
  // List,
  // ListItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const customFontStyle = {
    fontFamily: "Poppins, sans-serif",
  };

  const categories = [
    { name: "Action Movies", count: 5 },
    { name: "Crime", count: 3 },
    { name: "Drama", count: 5 },
    { name: "Comedy", count: 4 },
    { name: "Biography", count: 4 },
  ];
  return (
    <Box>
      <Flex
        h={"70vh"}
        color="white"
        bgImage="url('https://themehut.co/wp/movflx/wp-content/uploads/2022/08/footer_bg.jpg')"
        bgPosition="center"
        bgSize="cover"
        style={customFontStyle}
        justifyContent="center"
        gap={24}
        pt={20}
      >
        {/* Address */}
        <Flex flexDirection="column" alignItems="flex-start" marginRight={16}>
          <Flex alignItems="center" justifyContent="center">
            <FontAwesomeIcon
              icon={faClapperboard}
              style={{ color: "#e4d804", marginRight: "6px", fontSize: "30px" }}
            />
            <Text fontWeight="1000" fontSize="25px" paddingTop={5}>
              MovieCraze
            </Text>
          </Flex>

          <Text color="#D2CFCF" fontSize="15px" fontWeight={500}>
            Movflx Online the relase etras
            <br />
            thats sheets continig passag.
          </Text>

          <Flex flexDirection="row">
            {/* icoons */}
            <Flex flexDirection="column" justifyContent="center" gap={6}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#D2CFCF", paddingRight: "7px" }}
              />
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#D2CFCF", paddingRight: "7px" }}
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#D2CFCF", paddingRight: "5px" }}
              />
            </Flex>

            {/* text */}
            <Flex flexDirection="column" justifyContent="center" paddingTop={4}>
              <Text> Address : PO Box W75 Street</Text>
              <Text> Phone : +24 1245 654 235 </Text>
              <Text> Email : info@example.com </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Address end */}

        {/* Categories */}
        <Flex flexDirection="column">
          <Text fontWeight="600" fontSize="20px">
            Categories
          </Text>
          <Divider
            borderColor="yellow"
            borderWidth="2px"
            marginY="2"
            width="55px"
            borderRadius="2px"
            marginBottom={8}
          />

          <Flex flexDirection="row" gap={16} marginTop={2}>
            <Flex flexDirection="column">
              {categories.map((category, index) => (
                <Text key={index} color="#D2CFCF" fontSize="15px">
                  {category.name}
                </Text>
              ))}
            </Flex>
            <Flex flexDirection="column" justifyContent="center" gap={4}>
              {categories.map((category, index) => (
                <span key={index}>{`(${category.count})`}</span>
              ))}
            </Flex>
          </Flex>
        </Flex>
        {/* Categories end */}

        {/* Follow Us */}
        <Flex flexDirection="column">
          <Text fontWeight="600" fontSize="20px">
            Follow Us
          </Text>
          <Divider
            borderColor="yellow"
            borderWidth="2px"
            marginY="2"
            width="55px"
            borderRadius="2px"
          />
          <Flex flexDirection="row" alignItems="center" mt={6} gap={2}>
            <FontAwesomeIcon
              icon={faFacebook}
              color="#0866FF"
              size="2xl"
              style={{ paddingRight: "10px" }}
            />
            <FontAwesomeIcon
              icon={faPinterest}
              color="	#E60023"
              size="2xl"
              style={{ paddingRight: "10px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#0072b1"
              size="2xl"
              style={{ paddingRight: "10px" }}
            />
            <FontAwesomeIcon icon={faInstagram} color="#DA0C81" size="2xl" />
          </Flex>
          <br />

          <Flex>
            <InputGroup width={300}>
              <Input
                variant="outline"
                placeholder="Enter your email"
                color="white"
                borderRadius="25px"
                height="52px"
                border="none"
                bgColor="black"
                focusBorderColor="black"
              />
              <InputRightElement
                mt={1}
                borderRadius="50%"
                mr={1}
                bgColor="#1d222b"
              >
                <FontAwesomeIcon icon={faRocket} size="lg" color="#e4d804" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
      <Center
        bgColor="Black"
        color="#D2CFCF"
        height="70px"
        px="48"
        fontSize="12px"
      >
        Copyright © 2023 All Rights Reserved By MovieCraze
      </Center>
    </Box>
  );
}

export default Footer;
