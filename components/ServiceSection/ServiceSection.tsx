import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import * as S from "./style";
import InfoSection from "./InfoSection";

const ServiceSection = () => {
  return (
    <S.Container>
      <S.SectionWrapper>
        <S.Section1>
          <div>
            <S.Section1Header>SERVICE BEYOND</S.Section1Header>
            <S.Section1Header>EXPECTATION</S.Section1Header>
          </div>

          <S.Section1Text>
            Our barbershop is the territory created purely for men who
            appreciate premium quality, time and flawless look. We'll help you
            to look stylish and confident in the most discreet way.
          </S.Section1Text>
          <S.SubmitButton>
            Submit Request <ArrowRightAltIcon />
          </S.SubmitButton>
        </S.Section1>

        <S.MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.0560030097095!2d18.076105988854973!3d59.31532180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f99b090b67%3A0xb7043168af644a06!2sAdam&#39;s%20Barberare%20Drop%20in!5e0!3m2!1ssv!2sse!4v1737926803234!5m2!1ssv!2sse"
            width="100%"
            height="500"
          ></iframe>
          <S.IframeLayer />
        </S.MapWrapper>

        <S.LocationSection>
            <InfoSection icon={LocationOnIcon} headerLabel="Location" textLabel="123 kungsgatan, stockholm" />
            <S.Spacer />
            <InfoSection icon={PhoneIcon} headerLabel="+123456789" textLabel="Monday -Saturday: 9am - 8pm \nSunday:9am - 6pm" />
        </S.LocationSection>
      </S.SectionWrapper>
    </S.Container>
  );
};

export default ServiceSection;
