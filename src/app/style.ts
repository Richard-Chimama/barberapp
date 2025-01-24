"use client"

import { Container, Grid2 } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled(Container).attrs(props => ({

}))`
    margin: 0 !import,
    padding: 0 !important,
    min-height: 100%;
`;

export const GridContainer = styled(Grid2).attrs(props =>({
    container:true,
    gap: 2
}))``

export const HeaderContainer = styled(Grid2).attrs(props =>({
    sx:{
        width:{xs:'100%'}
    }
}))`
    margin-top: 25px;
    margin-bottom: 20px;
`

export const ShopLabel = styled.div`
    font-size: 24px;
    font-weigth: 900;
    color: black;
`

export const DisplayContainer = styled(Grid2).attrs(props=>({
}))`
    justify-content: center;
`

export const BookingContainer = styled(Grid2).attrs(props=>({
    sx:{
        width:{xs:'100%'}
    }
}))`

`

export const Label = styled.h3`
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`