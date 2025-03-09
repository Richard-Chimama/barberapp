import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)(()=> ({
  backgroundColor:` rgba(0,0,0,0.4)`,
  borderRadius: "15px",
  outline: "1px solid rgba(255,255,255,06)",
}))

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  padding-inline: 15px;
  padding-bottom: 15px;
`;

export const FormInput = styled(OutlinedInput)(() => ({
  color: "white",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.6)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "2px solid rgb(252, 170, 93)",
  },
}));

export const Spacer = styled(Box).attrs(() => ({
  sx: {
    width: "100%",
    height: "20px",
  },
}))``;

export const HeadingLabel = styled(Typography)(() => ({
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "10px",
}));

export const SubmitButton = styled(Button)(() =>({
    backgroundColor: "#fcaa5d",
    color: 'black',
    height: '48px',
    borderRadius: '8px',
}))

export const SelectSlot = styled(Box)(() => ({
    height: '48px',
    width: '100%',
    border: '1px solid rgba(255,255,255,0.6)'
}))