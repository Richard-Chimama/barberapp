import { Box, Typography, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Theme from "../../../theme";

export const Wrapper = styled(Box)((props) => ({
  position: 'relative',
  height: '400px',
  width: "400px",
  backgroundColor: Theme.colors.tertiary,
  borderRadius: "25px",

}));

export const Container = styled(Carousel)((prop) => ({
  color: Theme.colors.primary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "10px 20px",
}));


export const BottomSection = styled(Box)((prop) => ({
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

export const IndicatorWrapper = styled(Box)(prop =>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}))

export const ButtonIndicator = styled(Button)<{isSelected: boolean}>`
    background: none,
    border: none,
    color: ${({isSelected})=> isSelected ? "white" : "black"},
    fontSize: 24px,
    cursor: pointer,
    margin: 0 4px,
    padding: 0,
`

export const Text = styled(Typography)((prop) => ({
  color: Theme.colors.primary,
  fontSize: "18px",
  textAlign: "center",
  paddingTop: '25px',
}));

export const NavWrapper = styled(Box)((prop) => ({}));

export const NameLabel = styled(Typography)(prop => ({
  fontWeight: 'bolder',
  position: 'absolute',
  left: '20px',
  bottom: '20px',
}))

export const IconWrapper = styled(Box)(prop =>({
}))
