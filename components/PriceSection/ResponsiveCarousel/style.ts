import { Box } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const Container = styled(Carousel)`
    position: relative;
    overflow: hidden;

    @media(min-width: 768px){
        width:100%;
    }

    @media( max-width: 768px){
        min-width: 100 !important;
    }

`;

export const ImageWrapper = styled(Box)((props) => ({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  transition: "transform 0.3s ease-in-out",
}));

export const Img = styled(Image)((props) => ({
  width: "100%",
  maxWidth: "400px",
  height: "400px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  paddingLeft:'5px',
  paddingRight: '5px'
}));
