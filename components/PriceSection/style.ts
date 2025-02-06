import { Box, Typography, fabClasses } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled(Box)(props =>({
    width: '100vw',
    backgroundColor: Theme.colors.neutral[3],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'100px 10px',
}))

export const SectionWrapper = styled(Box).attrs(props =>({
   paddingInline: {md:'4%'},
   display: 'flex',
    flexDirection: 'column',
    gap: '50px',
}))``

export const Section1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: {xs: 'column', md:'row'},
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
    height: '440px',
    paddingInline: ' 20px',
    width: '90vw',
    outline: '1px solid red',
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

}))

export const ImageSection = styled(Box).attrs(props =>({
    height: '400px',
}))``

export const Section2 = styled(Box).attrs(prop =>({

}))``;