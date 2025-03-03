import { Box } from "@mui/material";
import * as S from "./style";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState } from "react";

const reviewData = [
  {
    name: "John",
    message:
      "I recently visited Elite Cuts Barbershop, and I must say, it was one of the best haircut experiences I’ve had. The barbers are highly skilled and pay great attention to detail. I showed a picture of the style I wanted, and they nailed it perfectly. The shop has a clean and modern look, and the staff is super friendly. They even offer a complimentary drink while you wait! Definitely my new go-to spot. Highly recommended!",
  },
  {
    name: "Chris",
    message:
      "The barbers at Sharp Styles Barbershop are talented and know what they’re doing. I was really happy with my fade and beard trim—the results were on point. However, the wait time was longer than expected, even though I had an appointment. I would suggest they improve their scheduling system to avoid long delays. Other than that, great barbers and a chill atmosphere!",
  },
  {
    name: "Patrick",
    message:
      "I had high expectations when I walked into Precision Cuts Barbershop, but unfortunately, my experience wasn’t great. The barber seemed rushed and didn’t listen carefully to what I wanted. My haircut ended up shorter than I asked for, and the lines weren’t even. The shop itself is nice, but customer service could be better. I might give them another chance, but I’d be more specific about my request next time.",
  },
];

const TextCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handlePrevClick = () => {
    setSelectedIndex((prev: number) =>
      prev === 0 ? reviewData.length - 1 : prev - 1
    );
  };

  const handleNextClick = () => {
    setSelectedIndex((prev: number) =>
      prev === reviewData.length - 1 ? 0 : prev + 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <S.Wrapper>
      <S.Container
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        {reviewData.map((txt, idx) => (
          <Box key={idx}>
            <S.Text>{txt.message}</S.Text>
          </Box>
        ))}
      </S.Container>
      <S.IndicatorWrapper>
        {reviewData.map((_, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => handleIndicatorClick(idx)}
            style={{
              background: "none",
              border: "none",
              color: selectedIndex === idx ? "white" : "black",
              fontSize: "24px",
              cursor: "pointer",
              padding: 0,
            }}
          >
            _
          </button>
        ))}
      </S.IndicatorWrapper>

      <S.BottomSection>
        <S.NameLabel variant="body1" style={{ fontWeight: "bold" }}>
          {reviewData[selectedIndex].name}
        </S.NameLabel>
        <S.NavWrapper>
          <S.IconWrapper>
            <S.ButtonThumb
              type="button"
              right="60px"
              onClick={handlePrevClick}
            >
              <ArrowBack onClick={handlePrevClick} />
            </S.ButtonThumb>
            <S.ButtonThumb
              type="button"
              right="20px"
              onClick={handleNextClick}
            >
              <ArrowForward onClick={handleNextClick} />
            </S.ButtonThumb>
          </S.IconWrapper>
        </S.NavWrapper>
      </S.BottomSection>
    </S.Wrapper>
  );
};

export default TextCarousel;
