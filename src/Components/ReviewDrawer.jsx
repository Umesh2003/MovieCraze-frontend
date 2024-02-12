/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { StarIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Mark,
  Radio,
  RadioGroup,
  Stack,
  TagLabel,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { themeConfig } from "../Utils/themeConfig";
import StarRating from "./StarRating";

function ReviewDrawer({
  movie = { name: "Uri : The Surgical Strike" },
  btnColor = "blue",
  size = "md",
  btnVarient = "solid",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const labels = [
    "Acting",
    "Music",
    "Storyline",
    "Cinematography",
    "Direction",
  ];

  const ratings = [];

  return (
    <>
      <Button
        onClick={() => handleClick(size)}
        leftIcon={<StarIcon />}
        colorScheme={btnColor}
        variant={btnVarient}
        size={size}
      >
        Write Review
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent shadow="dark-lg" bg="#1a202c" py={4}>
          <DrawerCloseButton color={themeConfig.iconstextColor} />

          <DrawerHeader borderBottom="1px solid #2B363B">
            {" "}
            <Text color="#ffff" fontWeight="bold">
              {movie.name}
            </Text>
          </DrawerHeader>

          <DrawerBody color="#fff">
            <Text
              fontSize="sm"
              fontWeight="bold"
              color={themeConfig.iconstextColor}
            >
              YOUR RATINGS
            </Text>

            <Flex
              justifyContent="center"
              flexDirection="column"
              borderBottom="1px solid #2B363B"
            >
              {labels.map((label) => (
                <StarRating
                  maxRating={10}
                  size={34}
                  label={label}
                  key={label}
                  ratings={ratings}
                />
              ))}
            </Flex>

            <Text
              fontSize="sm"
              fontWeight="bold"
              color={themeConfig.iconstextColor}
              pt={2}
            >
              YOUR REVIEW
            </Text>

            <form>
              <Input
                placeholder="Write a headline for your review here"
                focusBorderColor="blackAlpha.300"
                bgColor="whiteAlpha.100"
                isRequired
                mb={4}
              />

              <Text textAlign="right">
                Required characters :{" "}
                <Mark fontWeight="bold" color="red.300">
                  600
                </Mark>
              </Text>

              <Textarea
                focusBorderColor="blackAlpha.300"
                bgColor="whiteAlpha.100"
                placeholder="Write your review here"
                mb={4}
              />

              <Flex justifyContent="space-between" mb={4}>
                <Text>Does this review contain spoilers?</Text>

                <RadioGroup>
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="2">
                      Yes
                    </Radio>
                    <Radio colorScheme="red" value="1">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>

              <Button type="submit" colorScheme="green">
                Submit
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ReviewDrawer;
