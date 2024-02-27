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
import { useSelector,useDispatch } from "react-redux";
import { themeConfig } from "../Utils/themeConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ReviewLabels from "./ReviewLabels";
import { selectLoading, selectReviews} from "../Redux/reviewSlice";
import Loading from "./Loading";

function ReviewDetails({movie_id,movie_name}) {
  const labels = [
    "Acting",
    "Music",
    "Storyline",
    "Cinematography",
    "Direction",
  ];

  const reviews=useSelector(selectReviews)
  const loading=useSelector(selectLoading);

  if (loading) {
    return (
      <Loading mssg="Loading Favourites...."/>
    )
  }



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
            {reviews && reviews.length}
          </Text>
          <ArrowRightIcon mx={4} color={themeConfig.iconstextColor} />
        </Text>
        <ReviewDrawer size="sm" movie_name={movie_name} movie_id={movie_id}/>
      </Flex>

      <Grid templateColumns="repeat(2,1fr)" gap={4} my={6}>
        {reviews && reviews.map((review) => (
          <Card maxW="6xl" key={review.id}>
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

                  {review.isSpoiler!=="1" && (
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
                <Heading size="sm">{review.review_title}</Heading>

                {review.isSpoiler!=="1" ? (
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
                        <Text>{review.review}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Text>{review.review}</Text>
                )}
              </Box>

              {/* <Flex justifyContent="space-between" py={2}> */}
              {/*   <Heading size="sm" colorScheme="blue"> */}
              {/*     Overall rating */}
              {/*   </Heading> */}
              {/*   <Heading size="sm"> */}
              {/*     <FontAwesomeIcon icon={faStar} color="gold" /> */}
              {/*     {review.ratings.reduce((ac, i) => ac + i, 0) / 5}/10 */}
              {/*   </Heading> */}
              {/* </Flex> */}

              {/* <Flex> */}
              {/*   <Flex flex={1} flexDirection="column"> */}
              {/*     {labels.map((label) => ( */}
              {/*       <ReviewLabels key={label} label={label} /> */}
              {/*     ))} */}
              {/*   </Flex> */}

              {/*   <Flex flexDirection="column" justifyContent="center"> */}
              {/*     {review.ratings.map((rating) => ( */}
              {/*       <ReviewLabels key={rating} label={rating} /> */}
              {/*     ))} */}
              {/*   </Flex> */}
              {/* </Flex> */}
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
