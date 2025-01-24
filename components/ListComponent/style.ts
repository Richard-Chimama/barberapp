"use client"

import { Box, Typography } from "@mui/material"
import styled from "styled-components"

export const ListComponentConainer = styled(Box)`
    display: flex;
    flex-direction: column;
`

export const ListItemContainer = styled(Box).attrs(props =>({
    sx:{
        width:{
            xs:'100%'
        }
    }
}))`
    display: flex;
    flex-direction: row;
    gap: 10;
    align-item: center;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 8px;
    width: 100%;
`

export const ListItemLabel = styled(Typography)`
    color: black;
`