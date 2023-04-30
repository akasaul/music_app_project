import { Button } from "rebass";
import styled from "@emotion/styled";
import { buttonStyle, color, fontFamily, variant } from 'styled-system';

const TextButton = ({children, onClick}) => {
  const MyButton = styled(Button)`
  ${color}
  ${variant}
  ${buttonStyle}
  ${fontFamily}
  &:hover {
    text-decoration: underline;
  }
`;
  return (
      <MyButton
          variant='textButton'
          fontFamily='dmSans'
          onClick={onClick}
          // color='black'
        >
          {children}
        </MyButton>
  )
}

export default TextButton