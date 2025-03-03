import { Box, Typography, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Theme from "../../../theme";

export const Wrapper = styled(Box).attrs(() => ({
  position: 'relative',
  height: {xs:'500px', md:'400px'},
  width: {xs:'340px', md:'400px'},
  backgroundColor: Theme.colors.tertiary,
  borderRadius: "25px",

}))``;

export const Container = styled(Carousel)(() => ({
  color: Theme.colors.primary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "10px 20px",
}));


export const IndicatorWrapper = styled(Box)(() =>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}))


export const Text = styled(Typography)(() => ({
  color: Theme.colors.primary,
  fontSize: "18px",
  textAlign: "center",
  paddingTop: '25px',
}));


export const NameLabel = styled(Typography)(() => ({
  fontWeight: 'bolder',
  position: 'absolute',
  left: '20px',
  bottom: '20px',
}))

export const NavWrapper = styled(Box)(() => ({}));

export const IconWrapper = styled(Box)(() =>({
}))

export const ButtonIndicator = styled(Button)<{isSelected: boolean}>`
    background: none;
    border: none;
    color: ${({isSelected})=> isSelected ? "white" : "black"};
    font-size: 24px;
    cursor: pointer;
    margin: 0 4px;
    padding: 0;
`

export const BottomSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: " space-between",
  alignItems: "center",
  marginTop: "20px",
}));

export const ButtonThumb = styled(Button)<{right: string}>(prop =>({
    position: 'absolute',
    bottom: '20px',
    right: prop.right,
    zIndex: 2,
    backgroundColor: 'transparent',
    borderRadius: '100px',
    cursor: 'pointer',
    color: 'black',
}))