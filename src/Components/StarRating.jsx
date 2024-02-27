/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarAndCrescent,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { themeConfig } from "../Utils/themeConfig";

const starContainerStyle = { display: "flex" };

// -Making component reusable for every developer

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 42,
  ratings,
  setRatings,
  label,
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const avgRating = ratings.reduce((acc, el) => acc + el.rating, 0) / 5;

  function handleRating(rating) {
    setRating(rating);

    const isPresent = ratings.some((rating) => rating.label === label);
    const index = ratings.findIndex((obj) => obj.label === label);

    const updatedRatings = [...ratings];

    isPresent
      ? (updatedRatings[index].rating = rating)
      : updatedRatings.push({ label: label, rating: rating });

    console.log(ratings);
    setRatings(updatedRatings);
  }

  return (
    <Flex>
      <Flex color="whiteAlpha.900" flex={1}>
        <Text fontWeight="bold">{label}</Text>
      </Flex>

      <Flex>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}

        <Flex color="whiteAlpha.900" px={4}>
          <Text fontWeight="bold">{rating ? rating : tempRating}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height={6}
      width={8}
      pointerEvents="painted"
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      fontSize={size}
    >
      {full ? (
        <FontAwesomeIcon icon={faStar} color={color} size="xs" />
      ) : (
        <FontAwesomeIcon icon={faStar} color="#2B363A" size="xs" />
      )}
    </Flex>
  );
}
