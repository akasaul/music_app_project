import styled from "@emotion/styled";
import { color, display, flex, width } from "styled-system";

const SideBar = () => {
  const SideBar = styled.aside`
    ${color}
    ${width}
    ${flex}
  `
  return (
    <SideBar 
      display={['none', 'flex ']}
      bg='white'
      // flex={['none', '1']}
      width='200px'
    >SideBar</SideBar>
  )
}

export default SideBar