import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, email, password);
  }

  return (
    <Box color="#ffff">
      <form onSubmit={handleSubmit}>
        <FormControl mb={8} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl mb={8} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl mb={8} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          marginBottom={4}
          width="100%"
          colorScheme="yellow"
          variant="solid"
        >
          Create Account
        </Button>

        <Text textAlign="center" fontSize="md">
          Already have an account?{" "}
          <span>
            <Link
              to="/authentication/signin"
              style={{
                color: "#e4d804",
              }}
            >
              Sign In
            </Link>
          </span>
        </Text>
      </form>
    </Box>
  );
}

export default SignUp;
