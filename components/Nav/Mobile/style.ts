import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "../../../theme";

export const Container = styled(Box).attrs(() =>({
    sx:{
        display:{xs:'flex', md:'none'},
        height:'60px',
        width: '100vw',
        px: '10px',
        justifyContent:'space-between',
        alignItems: 'center',
    }
}))``

export const LogoWrapper = styled(Box)(() =>({
    height: '50px',
}))

export const Logo = styled(Typography)(() =>({
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    height: '50px',
    textAlign: 'center',
}))

export const IconWrapper = styled(Button)(() =>({

}))

export const MenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: ${Theme.colors.neutral[2]};
    width: 250px;
    height: 100%;
`

export const MenuItem = styled.li`
    display: block;
    text-align: left;

    & a{
        padding: 14px 16px;
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 18px;
        display: flex;
        gap: 10px;
        align-items: center;

    }
    
    & a:hover{
        color: ${Theme.colors.primary};
        background-color: ${Theme.colors.secondary};
    }


`