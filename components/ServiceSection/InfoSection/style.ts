import { Box, styled, Typography } from "@mui/material";
import Theme from "../../../theme";

export const Container = styled(Box)(prop => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
}))

export const Wrapper = styled(Box)(prop =>({
    width: '70%',
}))

export const IconWrapper = styled(Box)(prop =>({
    backgroundColor: Theme.colors.secondary,
    borderRadius: '8px',
    height: '75px',
    width: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const HeadLabel = styled(Typography)(prop =>({
    fontSize: '30px',
    fontWeight: 600,
    color: Theme.colors.secondary,
}))

export const LabelText = styled(Typography)(prop =>({
    color: Theme.colors.secondary,
}))