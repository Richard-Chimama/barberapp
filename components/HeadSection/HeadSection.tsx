import { Box } from "@mui/material";
import * as S from "./style";
import Form from "../Form";
import Nav from "../Nav";

const statement = {
  mission:
    "our mission is to provide exception grooming service in a relaxed and friendly environment. Whether you're here for a classic haircut, a moderm fade, or a clean shave, our skilled barbers are dedicated to ensuring you leave looking and feeling your best.",
  motto: "Where tradition, meets modern styles",
};

const HeadSection = () => {
  return (
    <S.HeadContainer>
      <S.NavWrapper>
        <Nav />
      </S.NavWrapper>

      <S.Wrapper>
        <S.HeadSection>
          <S.FormSection>
            <Form />
          </S.FormSection>

          <S.TextSection>
            <div>
              <S.MottoLabel>{statement.motto.split(",")[0]}</S.MottoLabel>
              <S.MottoLabel>{statement.motto.split(",")[1]}</S.MottoLabel>
            </div>

            <S.MissionLabelWrapper>
              <S.MissionLabel>{statement.mission}</S.MissionLabel>
            </S.MissionLabelWrapper>
          </S.TextSection>
        </S.HeadSection>
      </S.Wrapper>
    </S.HeadContainer>
  );
};

export default HeadSection;
