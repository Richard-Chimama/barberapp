import * as S from './style'

const DesktopNav = ()=>{
    return(
        <S.Container>
            <S.LogoWrapper>
                <S.Logo>My BarberShop</S.Logo>
            </S.LogoWrapper>
            <S.MenuWrapper>
                <S.MenuList>
                    <S.MenuItem><a href='#'>Home</a></S.MenuItem>
                    <S.MenuItem><a href='#'>Service</a></S.MenuItem>
                    <S.MenuItem><a href='#'>Prices</a></S.MenuItem>
                    <S.MenuItem><a href='#'>About us</a></S.MenuItem>
                </S.MenuList>
            </S.MenuWrapper>
            <S.ContactWrapper>
                <S.ContactButton>Contact us</S.ContactButton>
            </S.ContactWrapper>
        </S.Container>
    )
}

export default DesktopNav