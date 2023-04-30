import styled from "@emotion/styled";
import { useMemo, useRef } from "react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { Flex } from "rebass";
import { color, fontSize, variant } from "styled-system";
import { Input } from "theme-ui";

// Gives neccessary styling for input
const BaseInputWrapper = ({children}) => {
  const Container = styled(Flex)`
  `;

  return  (
    <Container
      alignItems='center'
      bg='inputBg'
      p='5px'
      width={['250px', '350px', '400px']}
      >
      {children}
    </Container>
  );
}

export default BaseInputWrapper