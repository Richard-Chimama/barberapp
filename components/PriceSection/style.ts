import { Box, Typography, fabClasses } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled(Box).attrs(props =>({
    width: '100vw',
    backgroundColor: Theme.colors.neutral[3],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:{xs:'150px', md:'100px'},
    paddingLeft: {md:'20%'},
    paddingRight: {md:'20%'},
    paddingBottom: '100px',

}))``

export const SectionWrapper = styled(Box).attrs(props =>({
    display: 'flex',
    flexDirection: 'column',
    gap: '100px',
    width: {xs: '100%', sm: '100%', md: '80%'},
    marginLeft: {xs: '10px', sm: '10px', md: '10%'},
    marginRight: {xs: '10px', sm: '10px', md: '10%'},
}))``

export const Section1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: {xs: 'column', md:'row'},
    justifyContent: 'center',
    alignItems: 'center',
    gap: {xs: '0px',md:'100px'},
    height: {xs: '600px' ,md:'440px'},
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
    fontSize: {xs:'38px', md:'46px'},
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
    marginTop: {xs: '20px', md:'0px'},
}))``

export const Section2 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: {xs: 'column-reverse', md:'row'},
    gap: {xs: '50px',md:'0px'},
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '100px',
}))``;

export const PriceList = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: {xs: 'space-around', sm:'space-between'},
    width: {xs: '80%', sm:'500px'},
    height: '350px',
}))``

export const PriceListLabel = styled(Typography).attrs(prop => ({
    textTransform: 'uppercase',
    lineHeight: '50px',
    fontSize: {xs:'38px', md:'46px'},
    fontWeight: 800,
}))``

export const PriceItemContainer = styled(Box).attrs(prop =>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid black',
    height: '50px',
}))`
`

export const TableWrapper = styled(Box).attrs(prop =>({

}))``