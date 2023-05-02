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
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar';
import AddSong from "./pages/AddSong";
import { setUserReq } from "./app/features/user/userSlice";
import useAuthStatus from "./hooks/useAuthStatus";

function App() {

  // const dispatch = useDispatch();
  // const { auth } = useSelector(state => state.auth);

  // useEffect(() => {
  //   dispatch(test());
  // }, [dispatch]);

  const { isLoggedIn } = useAuthStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserReq());
  },[isLoggedIn, dispatch]);
    
    const Container = styled.div`
    ${color}
    ${layout}
    ${background}
  ` 
  return (
    <Container 
      display='flex '
      bg='primary'
      width='100%'
      minHeight='100vh'
      style={{
        gap: '10px',
        paddingInline: '10px'
      }}
    >
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/add-song' element={<AddSong />} />
        <Route path='/edit/:songId' element={<AddSong isEdit={true} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </Container>
  );
}

export default App;
