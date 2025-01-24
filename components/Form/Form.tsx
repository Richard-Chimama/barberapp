import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
  useFormControl,
} from "@mui/material";
import * as S from "./style";
import React from "react";

const Form = () => {
  return (
    <S.Wrapper>
      <S.FormContainer autoComplete="off">
        <S.HeadingLabel>Make an appoitment</S.HeadingLabel>
        <FormControl>
          <S.FormInput placeholder="Enter your name" />
        </FormControl>
        <S.Spacer />
        <FormControl>
          <S.FormInput type="email" placeholder="Enter email" />
          <MyFormHelperText onFocus="Enter a valid email" />
        </FormControl>
        <S.Spacer />
        <FormControl>
          <S.FormInput type="text" placeholder={'2025-02-10   10:00'} />
          <MyFormHelperText onFocus="Select your time" />
        </FormControl>

        <S.Spacer />
        <S.SubmitButton>Submit</S.SubmitButton>
      </S.FormContainer>
    </S.Wrapper>
  );
};

function MyFormHelperText({onFocus}:{onFocus: string}) {
  const { focused } = useFormControl() || {};
  const helperText = React.useMemo(() => {
    if (focused) {
      return onFocus;
    }

    //return 
  }, [focused]);

  return <FormHelperText sx={{color:'white'}}>{helperText}</FormHelperText>;
}

export default Form;
