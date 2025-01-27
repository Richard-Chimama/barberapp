import { OverridableComponent } from '@mui/material/OverridableComponent'
import * as S from './style'
import { SvgIconTypeMap } from '@mui/material'


interface Props {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    headerLabel: string,
    textLabel: string
}

const InfoSection = ({icon:Icon, headerLabel, textLabel}:Props)=>{
    return(
        <S.Container>
            <S.IconWrapper>
                <Icon sx={{fontSize:'40px'}} />
            </S.IconWrapper>
            <S.Wrapper>
                <S.HeadLabel>{headerLabel}</S.HeadLabel>
                <S.LabelText>{textLabel}</S.LabelText>
            </S.Wrapper>
        </S.Container>
    )
}

export default InfoSection