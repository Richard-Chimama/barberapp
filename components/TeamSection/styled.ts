import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";
import { StaticImageData } from "next/image";

export const Container = styled(Box)(prop =>({
    height: '800px',
    width: '100vw',
    backgroundColor: 'white', 
}))

export const SectionWrapper = styled(Box).attrs(prop =>({
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: {xs: '100%', sm: '100%', md: '80%'},
    marginLeft: {xs: '10px', sm: '10px', md: '10%'},
    marginRight: {xs: '10px', sm: '10px', md: '10%'},
}))``

export const TitleLabel = styled(Typography)(prop =>({
    fontSize: '56px',
    fontWeight: 800,
    color: Theme.colors.primary,
    textAlign: 'center',
    textTransform: 'uppercase',

}))

export const MottoTLabel = styled(Typography)(prop =>({
    color: Theme.colors.primary,
    fontSize: '18px',
    textAlign: 'center',
    textJustify: 'inter-word'
}))

export const CardWrapper = styled(Box)(prop =>({
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
}))

interface CardProps {
    picture: StaticImageData;
}

export const Card = styled(Box)<CardProps>(prop =>({
    height: '450px',
    width: '335px',
    minWidth: '300px',
    backgroundImage: `url(${prop.picture.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${Theme.colors.tertiary}`,
    borderRadius: '15px',
    marginTop: '100px',

}))

export const NameWrapper = styled(Box)(prop =>({
    borderRadius: '10px',
    backgroundColor: Theme.colors.secondary,
    marginTop: '10px',
    width: '150px',
    padding: '5px',
}))

export const IconWrapper = styled(Box)(prop =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
}))

export const InfoWrapper = styled(Box)(prop =>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: '15px',
    height: '100px',
}))

export const BarberName = styled(Typography)(prop=>({
    fontWeight: 800,
    fontSize: '22px',
}))

export const PositionLabel = styled(Typography)(prop => ({
    marginTop: '-5px',
}))