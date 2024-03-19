/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
  Divider,
} from "@chakra-ui/react";
import ReviewDrawer from "./ReviewDrawer";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { themeConfig } from "../Utils/themeConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ReviewLabels from "./ReviewLabels";
import { selectLoading, selectReviews } from "../Redux/reviewSlice";
import Loading from "./Loading";
import ReviewTable from "./ReviewTable";
import Footer from "../Sections/Footer";

function ReviewDetails({ movie_id, movie_name }) {
  const labels = [
    "Acting",
    "Music",
    "Storyline",
    "Cinematography",
    "Direction",
  ];

  const reviews = useSelector(selectReviews);
  const loading = useSelector(selectLoading);

  if (loading) {
    return <Loading mssg="Loading Favourites...." />;
  }

  return (
    <Box pb={2} px={8} bgColor="blackAlpha.500">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="2px solid #fff"
        py={2}
      >
        <Text pt={3} fontSize="lg" fontWeight="bold">
          User Reviews{" "}
          <Text as="sup" fontWeight="thin">
            {reviews && reviews.length}
          </Text>
          <ArrowRightIcon mx={4} color={themeConfig.iconstextColor} />
        </Text>
        <ReviewDrawer size="sm" movie_name={movie_name} movie_id={movie_id} />
      </Flex>

      <Grid gridTemplateColumns="repeat(2,1fr)" gap={6} my={6}>
        {reviews &&
          reviews.map((review) => (
            <Card
              maxW="10xl"
              key={review.id}
              bgColor={themeConfig.bgDark}
              color="#fff"
            >
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={review.userName}
                      src={`https://bit.ly/${review.userName}`}
                    />

                    <Box>
                      <Heading size="sm">{review.userName}</Heading>
                    </Box>

                    {/* {review.isPositive ? ( */}
                    {/*   <Badge colorScheme="green">Positive</Badge> */}
                    {/* ) : ( */}
                    {/*   <Badge colorScheme="red">Negative</Badge> */}
                    {/* )} */}

                    {review.isSpoiler !== "1" && (
                      <Badge colorScheme="red">Spoilers</Badge>
                    )}
                  </Flex>
                </Flex>
              </CardHeader>
              <Divider />
              <CardBody>
                <Box borderBottom="1px solid gray" pb={4}>
                  <Heading size="md" mb={4}>
                    {review.review_title}
                  </Heading>

                  {review.isSpoiler !== "1" ? (
                    <Flex gap={2}>
                      <Accordion allowMultiple flex={1}>
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
                            {/* <Text>{review.review}</Text> */}
                            <Text>
                              The action sequences, particularly the depiction
                              of the surgical strikes, were highly praised for
                              their realism, intensity, and technical finesse.
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                      <ReviewTable review={review} />
                    </Flex>
                  ) : (
                    <Flex justifyContent="space-between">
                      {/* <Text>{review.review}</Text> */}
                      <Text width="60%">
                        Vicky Kaushal's portrayal of Major Vihaan Singh Shergill
                        received widespread acclaim. His performance was praised
                        for its intensity, sincerity, and emotional depth.
                      </Text>
                      <ReviewTable review={review} />
                    </Flex>
                  )}
                </Box>
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

                  <Button
                    flex="1"
                    variant="solid"
                    size="sm"
                    alignItems="center"
                    gap={2}
                  >
                    <FontAwesomeIcon size="xl" icon={faThumbsUp} />
                    <Text as="span" fontSize="lg">
                      20
                    </Text>
                  </Button>

                  <Button
                    flex="1"
                    size="sm"
                    variant="solid"
                    alignItems="center"
                    gap={2}
                  >
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
