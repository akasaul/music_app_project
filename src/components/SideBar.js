import styled from "@emotion/styled";
import { color, flex, width } from "styled-system";

const SideBar = () => {
  const SideBar = styled.aside`
    ${color}
    ${width}
    ${flex}

  `
  return (
    <SideBar 
      bg='white'
      // flex={['none', '1']}
      width='200px'
    >SideBar</SideBar>
  )
}

export default SideBar