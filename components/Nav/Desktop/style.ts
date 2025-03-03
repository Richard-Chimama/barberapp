import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "../../../theme";

export const Container = styled(Box).attrs(() =>({
    sx:{
        display:{xs:'none', md:'flex'},
        height:'60px',
        width: '100vw',
        px: '20px',
        justifyContent:'space-between',
        alignItems: 'center',
    }
}))``

export const LogoWrapper = styled(Box)(() =>({
    height: '50px',
    width: '20%',
}))

export const Logo = styled(Typography)(() =>({
    color: `${Theme.colors.secondary}`,
    fontSize: '28px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    minWidth:'150px',
    height: '50px',
    textAlign: 'left',
}))

export const MenuWrapper = styled(Box)(() =>({
    width: '35%',
    minWidth: '400px',
    height: '50px',
    outline: `1px solid ${Theme.colors.secondary}`,
    borderRadius: '8px',
}))

export const MenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`

export const MenuItem = styled.li`
    display: block;
    text-align: center;
    
    & a{
        padding: 14px 16px;
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 18px;
    }
    
    & a:hover{
        color: ${Theme.colors.primary};
        background-color: ${Theme.colors.secondary};
        border-radius: 6px;
        margin: 2px;
    }


`

export const ContactWrapper = styled(Box)(() =>({
    width: '10%',
    minWidth:'120px',
    height: '50px',
}))

export const ContactButton = styled(Button)(() =>({
    backgroundColor: Theme.colors.secondary,
    color: Theme.colors.primary,
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    fontWeight: 600,
}))