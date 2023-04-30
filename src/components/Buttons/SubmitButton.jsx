import { Button } from "rebass";
import styled from "@emotion/styled";
import { buttonStyle, color, fontFamily, variant } from 'styled-system';

const SubmitButton = ({styles, children}) => {
  const MyButton = styled(Button)`
  ${color}
  ${variant}
  ${buttonStyle}
  ${fontFamily}
`;
  return (
      <MyButton
          variant='submit'
          fontFamily='dmSans'
          type='submit'
          style={styles}
          py='10px'
          // color='black'
        >
          {children}
      </MyButton>
  )
}

export default SubmitButton