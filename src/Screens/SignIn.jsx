import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { login, selectLoading } from "../Redux/usersSlice";
import AuthPageContainer from "./Authentication";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(
      login(data, () => {
        navigate("/");
      })
    );
  }

  return (
    <AuthPageContainer>
      {loading && <Loading mssg="Logging In..." />}
      <Box color="#ffff">
        <form onSubmit={handleSubmit}>
          <FormControl mb={8}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
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
                to="/signup"
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
    </AuthPageContainer>
  );
}

export default SignIn;
