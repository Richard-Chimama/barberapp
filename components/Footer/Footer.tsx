import { FacebookOutlined, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.Container>
        <S.Wrapper>
            <S.Section>
                <S.HeaderLabel>Barber Shop</S.HeaderLabel>
                <S.Label>Wood Lane Forest Hills, NY 11375</S.Label>
                <S.Label>(123) 456-7890</S.Label>
                <S.Label>reserve@modernmane.com</S.Label>
                <S.Label>info@moddername.com</S.Label>
            </S.Section>

            <S.Section>
                <S.HeaderLabel>Menu</S.HeaderLabel>
                <S.Label>Home</S.Label>
                <S.Label>About</S.Label>
                <S.Label>Gallery</S.Label>
                <S.Label>News</S.Label>
            </S.Section>
            <S.Section>
                <S.HeaderLabel>Quick Links</S.HeaderLabel>
                <S.Label>Menu</S.Label>
                <S.Label>Opportunities</S.Label>
                <S.Label>Privacy Policy</S.Label>
                <S.Label>Location & Contact</S.Label>
            </S.Section>
            <S.Section>
                <S.HeaderLabel>Operational</S.HeaderLabel>
                <S.Label>Monday - Friday: 9am - 8pm</S.Label>
                <S.Label>Saturday: 9am - 6pm</S.Label>
                <S.Label>Sunday: 9am - 4pm</S.Label>
                <S.ReserveButton>Reserve Now</S.ReserveButton>
            </S.Section>
        </S.Wrapper>
            <S.Footer>
                <S.IconWrapper>
                    <FacebookOutlined />
                    <Twitter />
                    <Instagram />
                    <LinkedIn />
                </S.IconWrapper>
                <S.Label>Copyright © MODERN MANE. All Rights Reserved. Richard C.</S.Label>
            </S.Footer>
    </S.Container>
  );
}

export default Footer;