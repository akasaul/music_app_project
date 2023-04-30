import { Button } from "rebass";
import styled from "@emotion/styled";
import { buttonStyle, color, fontFamily, variant } from 'styled-system';

const TextButton = ({btnText, onClick}) => {
  const MyButton = styled(Button)`
  ${color}
  ${variant}
  ${buttonStyle}
  ${fontFamily}
`;
  return (
      <MyButton
          variant='textButton'
          fontFamily='dmSans'
          onClick={onClick}
          // color='black'
        >
          {btnText}
        </MyButton>
  )
}

export default TextButton