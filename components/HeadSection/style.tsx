import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Image2 from "../../public/images/image2.webp";
import Theme from "../../theme";

export const HeadContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-image: url(${Image2.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  pt: '40px',

`;
export const NavWrapper = styled(Box)(prop =>({
    paddingTop: '20px'
}))

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const HeadSection = styled(Box).attrs((prop) => ({
  sx: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: { xs: "90%", md: "80%" },
    py: { sm: "5%", md: "10%" },
  },
}))``;

export const FormSection = styled(Box).attrs((prop) => ({
  sx: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: { xs: "530px", sm: "500px" },
    width: { xs: "100%", md: "500px" },
  },
}))``;

export const TextSection = styled(Box).attrs((prop) => ({
  sx: {
    height: { xs: "50px", sm: "200px" },
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row-reverse" },
    justifyContent: {xs:"flex-start" ,sm:"space-between"},
    alignItems: {xs:"flex-start",  sm:"center"},
    marginTop: { xs: "-50px" },
  },
}))``;

export const FormContainer = styled(Box).attrs((props) => ({}))``;

export const MissionLabelWrapper = styled(Box).attrs((prop) => ({
  height: { md: "300px" },
  width: { xs: "100%", sm: "500px" },
  position: "relative",
}))``;

export const MissionLabel = styled(Typography).attrs((prop) => ({
  fontSize: "18px",
  textshadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  position: { md: "absolute" },
  bottom: "0px",
  borderLeft: `15px solid white ${Theme.colors.secondary}`,
  pl: "10px",
}))``;

export const MottoLabel = styled(Typography).attrs((prop) => ({
  fontSize: { xs: "35px", sm: "36px", md: "56px" },
  fontWeight: "900",
  textAlign: {xs:"left", md:"right"},
  textTransform: "uppercase",
  textshadow: "2px 2px 4px rgba(0, 0, 0, 1)",
  lineHeight: { xs: "35px", md: "50px" },
  marginBottom: {xs:"10px"},
}))``;
