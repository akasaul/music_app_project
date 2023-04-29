import { useDispatch, useSelector } from "react-redux";
import { test } from "./app/features/auth/authSlice";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { color, space, fontSize } from 'styled-system';

function App() {

  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.auth);

  // useEffect(() => {
  //   dispatch(test());
  // }, [dispatch]);

  const Button = styled.button`
    ${color},
    ${space},
    ${fontSize}

  `

  const Box = Button.withComponent('div');

 
  return (
    <div className="App">
      <h1>What's Good</h1>
      <div>
        <Button
        color={['potato', 'navy', 'black']}
        bg="potato"
        fontSize={['sm', 'lg']}
        >Gang</Button>
        <Box>box</Box>
      </div>
    </div>
  );
}

export default App;
