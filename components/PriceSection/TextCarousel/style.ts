import { Box, Typography, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Theme from "../../../theme";

export const Wrapper = styled(Box)((props) => ({
  backgroudColor: "white",
  position: 'relative',
  height: '400px',
  width: "400px",
  backgroundColor: Theme.colors.tertiary,

}));

export const Container = styled(Carousel)((prop) => ({
  color: Theme.colors.primary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "10px 20px",
  borderRadius: "15px",
  border: '1px solid limegreen',
}));


export const BottomSection = styled(Box)((prop) => ({
  display: "flex",
  justifyContent: " space-between",
  alignItems: "center",
  marginTop: "20px",
}));

export const ButtonThumb = styled(Button)<{isRight: boolean}>(prop =>({
    position: 'absolute',
    bottom: '10px',
    right: prop.isRight ? '20px': '60px',
    zIndex: 2,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
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
  fontWeight: "bolder",
  fontSize: "22px",
  textAlign: "left",
}));

export const NavWrapper = styled(Box)((prop) => ({}));
