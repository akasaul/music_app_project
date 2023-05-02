import styled from "@emotion/styled";
import { Box, Card, Image, Heading, Text} from "rebass";
import { color, fontFamily, fontSize } from "styled-system";

const BaseCard = ({title, imageUrl, artist}) => {
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
        src={imageUrl}
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
              {title}
          </CardHeading>

          <CardBody 
            color='textSecondary'
            fontSize='xs'
          >
            {artist}
          </CardBody>
      </Box>

    </BasicCard>
  )
}

export default BaseCard