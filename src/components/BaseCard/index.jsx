import styled from "@emotion/styled";
import { Box, Card, Image, Heading, Text} from "rebass";
import { color, fontFamily, fontSize } from "styled-system";

const BaseCard = () => {
  const BasicCard = styled(Card)`
    ${color}
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 7px;
  `;

  const CardHeading = styled(Heading)`
    ${fontFamily}
    ${fontSize}
  `;

  const CardBody = styled(Text)`
    ${color}
    ${fontSize}
  `;

  return (
    <BasicCard
      alignItems='center'
      width={['200px']}
      color='textPrimary'
      p='15px'
      bg='cardDark'
      >
      <Image 
        height='170px'
        src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        sx={{
          objectFit: 'cover',
          borderRadius: '4px'
        }}
        />

      <Box
        display='flex'
        flexDirection='column'
        alignSelf='start'
      >
          <CardHeading
            fontFamily='dmSans'
            fontSize='sm'
          >
              Card
          </CardHeading>

          <CardBody 
            color='textSecondary'
            fontSize='xs'
          >
            Card Footer
          </CardBody>
      </Box>

    </BasicCard>
  )
}

export default BaseCard