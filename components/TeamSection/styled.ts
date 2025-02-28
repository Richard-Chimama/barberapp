import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Theme from "../../theme";
import { StaticImageData } from "next/image";

export const Container = styled(Box)(({ theme }) => ({
    height: '800px',
    width: '100vw',
    backgroundColor: 'white', 
}));

export const SectionWrapper = styled(Box).attrs(() => ({
    marginTop: '100px',
}))``;

export const Section = styled(Box).attrs(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: { xs: '100%', sm: '100%', md: '80%' },
    marginLeft: { xs: '10px', sm: '10px', md: '10%' },
    marginRight: { xs: '10px', sm: '10px', md: '10%' },
}))``;

export const TitleLabel = styled(Typography).attrs(() => ({
    fontSize: { xs: '38px', md: '46px' },
    fontWeight: 800,
    color: Theme.colors.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingInline: '10px',
}))``;

export const MottoTLabel = styled(Typography).attrs(() => ({
    color: Theme.colors.primary,
    fontSize: { xs: '14px', sm: '18px' },
    textAlign: 'center',
    paddingInline: '20px',
}))``;

export const CardWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '50px',
}));

interface CardProps {
    picture: StaticImageData;
}

export const Card = styled(Box)<CardProps>(({ picture }) => ({
    height: '450px',
    width: '300px',
    minWidth: '300px',
    backgroundImage: `url(${picture.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${Theme.colors.tertiary}`,
    borderRadius: '15px',
    marginTop: '10px'
}));

export const NameWrapper = styled(Box)(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor: Theme.colors.neutral[1],
    marginTop: '10px',
    width: '150px',
    padding: '5px',
    color: 'white',
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
}));

export const InfoWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: '15px',
    height: '100px',
}));

export const BarberName = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    fontSize: '22px',
}));

export const PositionLabel = styled(Typography)(({ theme }) => ({
    marginTop: '-5px',
}));

export const Divider = styled(Box)(({ theme }) => ({
    borderTop: `1px solid ${Theme.colors.neutral[1]}`,
    marginTop: '100px',
}));