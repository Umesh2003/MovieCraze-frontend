/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import { themeConfig } from "../Utils/themeConfig";
// import StarRating from "./StarRating";
import { StarIcon } from "@chakra-ui/icons";
import StarRating from "./StarRating";

function ModalContainer({
  movie = { name: "Uri : The Surgical Strike" },
  btnColor = "red",
  size = "md",
  btnVarient = "solid",
}) {
  const labels = [
    "Acting",
    "Music",
    "Storyline",
    "Cinematography",
    "Direction",
  ];

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(6px) " />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const ratings = [];

  function handleRating() {
    console.log("ok");
  }

  return (
    <>
      <Button
        leftIcon={<StarIcon />}
        colorScheme={btnColor}
        variant={btnVarient}
        size={size}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Review
      </Button>

      <Modal
        size="full"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        variant="black"
      >
        {overlay}
        <ModalContent bg="blackAlpha.900" py={4}>
          <ModalHeader textAlign="center">
            <Text color="#ffff" fontWeight="bold">
              {movie.name}
            </Text>
          </ModalHeader>

          <ModalCloseButton color="#fff" />
          <ModalBody>
            <Text
              fontSize="sm"
              fontWeight="bold"
              color={themeConfig.iconstextColor}
              pt={2}
            >
              YOUR RATINGS
            </Text>

            <Flex justifyContent="center" flexDirection="column">
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

            <Textarea color="whiteAlpha.900"></Textarea>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" w="100%" onClick={handleRating}>
              Rate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalContainer;
