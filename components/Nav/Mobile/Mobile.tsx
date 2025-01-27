import { useState } from "react";
import * as S from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Drawer } from "@mui/material";

const Mobile = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo>My BarberShop</S.Logo>
      </S.LogoWrapper>
      <S.IconWrapper onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ height: "50px", width: "50px", color: "white" }} />
      </S.IconWrapper>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <S.MenuList>
          <S.MenuItem><a href="#"><HomeIcon /> Home</a></S.MenuItem>
          <S.MenuItem><a href="#"><BusinessIcon /> Service</a></S.MenuItem>
          <S.MenuItem><a href="#"><PaymentIcon /> Prices</a></S.MenuItem>
          <S.MenuItem><a href="#"><InfoIcon /> About us</a></S.MenuItem>
          <S.MenuItem><a href="#"><CallIcon /> Contact us</a></S.MenuItem>
        </S.MenuList>
      </Drawer>
    </S.Container>
  );
};

export default Mobile;
