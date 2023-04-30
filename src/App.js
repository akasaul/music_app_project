import { useDispatch, useSelector } from "react-redux";
import { test } from "./app/features/auth/authSlice";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { color, space, fontSize, background, display, fontWeight, layout } from 'styled-system';
import './App.css';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { Box } from "rebass";

function App() {

  // const dispatch = useDispatch();
  // const { auth } = useSelector(state => state.auth);

  // useEffect(() => {
  //   dispatch(test());
  // }, [dispatch]);
    
    const Container = styled.div`
    ${color}
    ${layout}
    ${background}
  ` 
  return (
    <Container 
      bg='primary'
      width='100%'
      minHeight='200vh'
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
