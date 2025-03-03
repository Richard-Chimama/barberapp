import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";

export const Container = styled(Box)(() =>({
    backgroundColor: '#4a403d',
    minHeight: '800px',
    height: '100%',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
}))

export const SectionWrapper = styled(Box).attrs(() =>({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: {xs: "50px"},
    width: { xs: "90%", md: "80%" },
    py: { sm: "5%", md: "10%" },
}))``

export const Section1 = styled(Box).attrs(() =>({
    display: 'flex',
    flexDirection: 'column',
    gap: '65px',
    width: '30%',
    minWidth: {xs: '400px',sm:'450px', md:'400px'},
    marginBottom: {xs: "100px"},
    paddingRight: '70px',
}))``

export const Section1Header = styled(Typography).attrs(() =>({
    fontSize: {xs:'38px', md:'46px'},
    fontWeight: 800,
    color: Theme.colors.secondary,
}))``

export const Section1Text = styled(Typography)(() =>({
    fontSize: '18px',
    fontWeight: 300,
    color: Theme.colors.secondary,
}))

export const SubmitButton = styled(Button)(() =>({
    backgroundColor: Theme.colors.tertiary,
    color: Theme.colors.primary,
    height: '50px',
    fontWeight: 700,
}))

export const MapWrapper = styled(Box)(() => ({
    position: 'relative',
}))

export const IframeLayer = styled(Box)(() =>({
    position: 'absolute',
    top:'0',
    left: '0',
    backgroundColor: 'rgba(252,170,93, 0.4)',
    width:"100%",
    height:"500px"

}))

export const LocationSection = styled(Box)(() => ({
    minWidth: '300px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:' center',
    gap: '75px',
}))

export const Spacer = styled(Box)(() =>({
    width: '80%',
    border: `2px solid ${Theme.colors.neutral[0]}`,
    marginLeft: 'auto',
    marginRight: 'auto'
}))
