import { Button } from "rebass";
import styled from "@emotion/styled";
import { buttonStyle, color, fontStyle, variant } from 'styled-system';

const SecondaryButton = () => {
  const MyButton = styled(Button)`
  ${color}
  ${variant}
  ${buttonStyle}
  // ${fontStyle}
`;
  return (
      <MyButton
          variant='secondary'
          fontFamily='dmSans'
          // color='black'
        >
          Sign Up
        </MyButton>
  )
}

export default SecondaryButton