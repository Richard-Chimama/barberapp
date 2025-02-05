import { Box } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(Box)(prop =>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
}))

export const ImageWrapper = styled(Box)(props =>({
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    transition: 'transform 0.3s ease-in-out',
}))

export const Img = styled(Image)(props =>({
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
}))