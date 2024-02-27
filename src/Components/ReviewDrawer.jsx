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
import {useState} from "react";
import { themeConfig } from "../Utils/themeConfig";
import StarRating from "./StarRating";
import { useSelector,useDispatch } from "react-redux";
import { selectUser } from "../Redux/usersSlice";
import {addReview, selectLoading} from "../Redux/reviewSlice";
import {useNavigate} from "react-router-dom";
import {displayToast} from "../Redux/toastSlice";
import Loading from "./Loading";

function ReviewDrawer({
  btnColor = "blue",
  size = "md",
  btnVarient = "solid",
  movie_id,
  movie_name
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch=useDispatch();


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

  const [ratings,setRatings]=useState([]);
  const [reviewTitle,setReviewTitle]=useState("");
  const [review,setReview]=useState("");
  const [isSpoiler,setIsSpoiler]=useState(false);
  const navigate=useNavigate();


  function submitHandler(e) {
    e.preventDefault();

    if (!user) {
      navigate("/signin");
      dispatch(displayToast("Please Login First"))
      return; 
    }else{
      const updatedRatings = {} 
      ratings.forEach((item) => {
        if (item.label === "Acting") {
          return updatedRatings[item.label]=item.rating
        } else if (item.label === "Music") {
          return updatedRatings[item.label]=item.rating
        } else if (item.label === "Storyline") {
          return updatedRatings[item.label]=item.rating
        } else if (item.label === "Cinematography") {
          return updatedRatings[item.label]=item.rating
        } else if (item.label === "Direction") {
          return updatedRatings[item.label]=item.rating
        }
      });
      const payload = {
        user_id:user.user_id,
        userName:user.userName,
        movie_id,
        ...updatedRatings,
        reviewTitle,
        review,
        isSpoiler,
      };
      dispatch(addReview(payload));
    }

  }



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
              {movie_name}
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
                  setRatings={setRatings}
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
                onChange={(e)=>{setReviewTitle(e.target.value)}}
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
                onChange={(e)=>{setReview(e.target.value)}}
              />

              <Flex justifyContent="space-between" mb={4}>
                <Text>Does this review contain spoilers?</Text>

                <RadioGroup value={isSpoiler} onChange={(val)=>{setIsSpoiler(val)}}>
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

              <Button onClick={submitHandler}type="submit" colorScheme="green">
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
