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

function SignIn() {
  const [username, setUsrname] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username, password);
  }

  return (
    <Box color="#ffff">
      <form onSubmit={handleSubmit}>
        <FormControl mb={8}>
          <FormLabel>Username</FormLabel>
          <Input
            type="email"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsrname(e.target.value)}
            isRequired
          />
        </FormControl>

        <FormControl mb={10}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            isRequired
          />
        </FormControl>

        <Button
          marginBottom={4}
          type="submit"
          width="100%"
          colorScheme="yellow"
          variant="solid"
        >
          Sign in
        </Button>

        <Text textAlign="center" fontSize="md">
          Don`t have an account?{" "}
          <span>
            <Link
              to="/authentication/signup"
              style={{
                color: "#e4d804",
              }}
            >
              Sign up
            </Link>
          </span>
        </Text>
      </form>
    </Box>
  );
}

export default SignIn;
