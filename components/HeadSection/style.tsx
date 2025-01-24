import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Image2 from "../../public/images/image2.webp";

export const HeadContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-image: url(${Image2.src}); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const HeadSection = styled(Box).attrs(prop =>({
    sx:{
        position: 'relative',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        width: {xs:'90%',md:'80%'},
        py:{sm:'5%',md:'10%'},
    }
}))``

export const FormSection = styled(Box).attrs(prop =>({
    sx:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: {xs:'600px', sm: '500px'},
        width: {xs:'100%', md:'500px'},
    }
}))``

export const TextSection = styled(Box).attrs(prop =>({
    sx:{
        height: {xs:'200px', sm: '200px'},
        width: '100%',
        display: 'flex',
        flexDirection: {xs:'column', sm:'column', md:'row-reverse'},
        justifyContent: 'space-between',
        marginTop: {xs: '-100px'}
    }
}))``

export const FormContainer = styled(Box).attrs(props =>({

}))``

export const MissionLabelWrapper = styled(Box).attrs(prop => ({
    height:{md: '300px'},
    width: {xs:'100%',sm:'500px'},
    position: 'relative',
}))``

export const MissionLabel = styled(Typography).attrs(prop =>({
    fontSize: '18px',
    textshadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    position: {md:'absolute'},
    bottom: '0px',
    borderLeft: '15px solid white',
    pl:'10px',
    
}))``

export const MottoLabel = styled(Typography).attrs(prop =>({
    fontSize: {xs:'30px',sm:'36px',md:'56px'},
    fontWeight:'900',
    textAlign:'right',
    textTransform: 'uppercase',
    textshadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    lineHeight: {xs:'35px', md:'50px'},
}))``