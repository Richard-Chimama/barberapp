import { Box, Typography, fabClasses } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled(Box).attrs(props =>({
    width: '100vw',
    backgroundColor: Theme.colors.neutral[3],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:'100px',
    paddingLeft: {md:'20%'},
    paddingRight: {md:'20%'},
    paddingBottom: '100px',

}))``

export const SectionWrapper = styled(Box).attrs(props =>({
   display: 'flex',
    flexDirection: 'column',
    gap: '100px',
}))``

export const Section1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: {xs: 'column', md:'row'},
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
    height: '440px',
    paddingInline: ' 20px',
}))``;

export const TextSection1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '65px',
}))``

export const TextLabel = styled(Box)(prop =>({
    width: '100px',
}))

export const HeadTextSection1 = styled(Typography).attrs(prop =>({
    color: Theme.colors.neutral[2],
    textTransform: 'uppercase',
    fontSize: {sm: '46px',md:'56px'},
    fontWeight: 800,
    lineHeight: '50px',
    width: '400px',
}))``

export const ContentTextSection1 = styled(Typography)(props =>({
    color: Theme.colors.neutral[2],
}))

export const IconContainer = styled(Box)(props =>({
    display: 'flex',
    gap: '5px',
}))

export const IcontButton = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 100px;
    height: 50px;
    width: 50px;
    outline: none;
    transparent: true;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ImageSection = styled(Box).attrs(props =>({
    height: '400px',
}))``

export const Section2 = styled(Box).attrs(prop =>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))``;

export const PriceList = styled(Box)(prop =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '500px',
    height: '350px',
}))

export const PriceListLabel = styled(Typography)(prop => ({
    fontSize: '56px',
    textTransform: 'uppercase',
    fontWeight: 800,
    lineHeight: '50px',
}))

export const PriceItemContainer = styled(Box).attrs(prop =>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid black',
}))`
 &
`