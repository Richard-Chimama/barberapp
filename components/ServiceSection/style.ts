import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled(Box)(prop =>({
    backgroundColor: '#4a403d',
    minHeight: '800px',
    height: '100%',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
}))

export const SectionWrapper = styled(Box)(prop =>({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '90vw',
    
}))

export const Section1 = styled(Box).attrs(prop =>({
    display: 'flex',
    flexDirection: 'column',
    gap: '65px',
    width: '30%',
    minWidth: {sm:'300px', md:'400px'},

}))``

export const Section1Header = styled(Typography).attrs(prop =>({
    fontSize: {sm:'32px', md:'46px'},
    fontWeight: 800,
    color: Theme.colors.secondary,
}))``

export const Section1Text = styled(Typography)(prop =>({
    fontSize: '18px',
    fontWeight: 300,
    color: Theme.colors.secondary,
}))

export const SubmitButton = styled(Button)(prop =>({
    backgroundColor: Theme.colors.tertiary,
    color: Theme.colors.primary,
    height: '50px',
    fontWeight: 700,
}))

export const MapWrapper = styled(Box)(prop => ({
    position: 'relative',
}))

export const IframeLayer = styled(Box)(prop =>({
    position: 'absolute',
    top:'0',
    left: '0',
    backgroundColor: 'rgba(252,170,93, 0.4)',
    width:"400px",
    height:"500px"

}))

export const LocationSection = styled(Box)(prop => ({
    minWidth: '300px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:' center',
    gap: '75px',
}))

export const Spacer = styled(Box)(prop =>({
    width: '80%',
    border: `2px solid ${Theme.colors.neutral[0]}`,
    marginLeft: 'auto',
    marginRight: 'auto'
}))
