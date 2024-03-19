/* eslint-disable react/prop-types */
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Thead,
} from "@chakra-ui/react";

function ReviewTable({ review }) {
  return (
    <TableContainer overflow="hidden" border="1px solid gray" height="50%">
      <Table variant="unstyled" size="sm">
        <Thead bgColor="blue.700">
          <Tr>
            <Th>Overall</Th>
            <Th>{review.avg_score}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Acting</Td>
            <Td>{review.acting}</Td>
          </Tr>
          <Tr>
            <Td>Music</Td>
            <Td>{review.music}</Td>
          </Tr>
          <Tr>
            <Td>Storyline</Td>
            <Td>{review.storyline}</Td>
          </Tr>
          <Tr>
            <Td>Cinematography</Td>
            <Td>{review.cinematography}</Td>
          </Tr>
          <Tr>
            <Td>Direction</Td>
            <Td>{review.direction}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ReviewTable;
