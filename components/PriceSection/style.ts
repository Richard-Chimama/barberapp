import { Box, Typography, fabClasses } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled(Box)(props =>({
    width: '100vw',
    height: '800px',
    backgroundColor: Theme.colors.neutral[3],
}))

export const SectionWrapper = styled(Box)(props =>({

}))

export const Section1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: {xs: 'column', md:'row'},
    gap: '100px',
    height: '200px',
    paddingInline: ' 20px',
    width: '100%',
}))``;

export const TextSection1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '65px',
    width: {xs: '100%', md:'330px' }
}))``

export const HeadTextSection1 = styled(Typography).attrs(prop =>({
    color: Theme.colors.neutral[2],
    textTransform: 'uppercase',
    fontSize: {sm: '46px',md:'56px'},
    fontWeight: 800,
    lineHeight: '50px'
}))``

export const ContentTextSection1 = styled(Typography)(props =>({
    color: Theme.colors.neutral[2],
}))

export const IconContainer = styled(Box)(props =>({

}))

export const ImageSection = styled(Box)(props =>({
    border: '1px solid black',
    backgroundColor: 'white',
    minWidth: '400px',

    height: '400px',
}))

export const Section2 = styled(Box).attrs(prop =>({

}))``;