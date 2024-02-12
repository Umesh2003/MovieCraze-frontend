import {
  Avatar,
  Box,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  Button,
  Card,
  Badge,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Accordion,
  AccordionButton,
} from "@chakra-ui/react";
import ReviewDrawer from "./ReviewDrawer";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { themeConfig } from "../Utils/themeConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ReviewLabels from "./ReviewLabels";

function ReviewDetails() {
  const labels = [
    "Acting",
    "Music",
    "Storyline",
    "Cinematography",
    "Direction",
  ];

  const reviews = [
    {
      id: 1,
      name: "Umesh Hivarale",
      isPositive: true,
      date: "14/02/2019",
      spoiler: false,
      commentHeading: "Masterpiece ",
      commentBody:
        "The movie was very gripping from the very start. Excellent all round acting especially by Vicky Kaushal. The VFX effects were better then most that we have seen recently.",

      ratings: [7, 8, 9, 7, 9],
    },

    {
      id: 2,
      name: "Rishav Thapliyal",
      isPositive: false,
      date: "14/05/2019",
      spoiler: true,
      commentHeading: "LAZY SCREENPLAY",
      commentBody:
        "Just a movie with exaggorated theme.Oroginality and seriousness of the story is lost somewhere.Sucha wasted potential but they are lucky to get a hit with such bad screenplay and direction.Should have been better. ",
      ratings: [4, 5, 6, 3, 6],
    },

    {
      id: 3,
      name: "Aditya Ugale",
      isPositive: true,
      date: "24/04/2019",
      spoiler: false,
      commentHeading: "Watch for knowing deeply about a soldier's life.",
      commentBody:
        "This movie is so real. Direction is superb. Vicky kausal is brilliant in his performance. Script is tightly bound. Music just complements the action, makes it even better.",

      ratings: [8, 8, 9, 6, 7],
    },
  ];

  return (
    <Box px={8} bgColor="blackAlpha.500">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="2px solid #fff"
        py={2}
      >
        <Text pt={3} fontSize="lg" fontWeight="bold">
          User Reviews{" "}
          <Text as="sup" fontWeight="thin">
            {reviews.length}
          </Text>
          <ArrowRightIcon mx={4} color={themeConfig.iconstextColor} />
        </Text>
        <ReviewDrawer size="sm" />
      </Flex>

      <Grid templateColumns="repeat(2,1fr)" gap={4} my={6}>
        {reviews.map((review) => (
          <Card maxW="6xl" key={review.id}>
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name={review.name}
                    src={`https://bit.ly/${review.name}`}
                  />

                  <Box>
                    <Heading size="sm">{review.name}</Heading>
                  </Box>

                  {review.isPositive ? (
                    <Badge colorScheme="green">Positive</Badge>
                  ) : (
                    <Badge colorScheme="red">Negative</Badge>
                  )}

                  {review.spoiler && (
                    <Badge colorScheme="orange">Spoilers</Badge>
                  )}
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Box borderBottom="1px solid gray">
                <Heading size="sm">{review.commentHeading}</Heading>

                {review.spoiler ? (
                  <Accordion allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <Text color="red.600"> Warning : Spoiler</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <Text>{review.commentBody}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Text>{review.commentBody}</Text>
                )}
              </Box>

              <Flex justifyContent="space-between" py={2}>
                <Heading size="sm" colorScheme="blue">
                  Overall rating
                </Heading>
                <Heading size="sm">
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  {review.ratings.reduce((ac, i) => ac + i, 0) / 5}/10
                </Heading>
              </Flex>

              <Flex>
                <Flex flex={1} flexDirection="column">
                  {labels.map((label) => (
                    <ReviewLabels key={label} label={label} />
                  ))}
                </Flex>

                <Flex flexDirection="column" justifyContent="center">
                  {review.ratings.map((rating) => (
                    <ReviewLabels key={rating} label={rating} />
                  ))}
                </Flex>
              </Flex>
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Flex justifyContent="center" gap={6} alignItems="center">
                <Text pt={4} color="gray.500" fontSize="md" fontWeight="bold">
                  Was this review helpful?
                </Text>

                <Button flex="1" variant="ghost" alignItems="center" gap={2}>
                  <FontAwesomeIcon size="xl" icon={faThumbsUp} />
                  <Text as="span" fontSize="lg">
                    20
                  </Text>
                </Button>

                <Button flex="1" variant="ghost" alignItems="center" gap={2}>
                  <FontAwesomeIcon size="xl" icon={faThumbsDown} />
                  <Text as="span" fontSize="lg">
                    5
                  </Text>
                </Button>
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

export default ReviewDetails;
