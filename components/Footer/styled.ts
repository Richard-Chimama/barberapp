import styled from "styled-components"
import { Box } from "@mui/material"
import Theme from "../../theme"

export const Container = styled(Box)(prop =>({
    hegith: '400px',
    marginTop: '50px',
    marginBottom: '100px',
}))

export const Wrapper = styled(Box)(prop =>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export const Section = styled(Box)(prop =>({}))
export const Footer = styled(Box)(prop =>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '100px',
}))
export const IconWrapper = styled(Box)(prop =>({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    fontSize: '24px',
    color: Theme.colors.primary,
}))

export const HeaderLabel = styled(Box)(prop =>({
    color: Theme.colors.primary,
    fontSize: '24px',
    fontWeight: 800,
    marginBottom: '20px',
}))

export const Label = styled(Box)(prop =>({
    color: Theme.colors.primary,
    fontSize: '16px',
    marginBottom: '10px',
    fontFamily: 'Roboto',
}))

export const ReserveButton = styled(Box)(prop =>({
    backgroundColor: Theme.colors.tertiary,
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    textAlign: 'center',
    '&:hover':{
        backgroundColor: Theme.colors.neutral[2],
    }
}))