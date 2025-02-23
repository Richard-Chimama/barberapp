import * as S from './styled'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image3 from '../../public/images/image3.jpg'
import image4 from '../../public/images/image4.jpg'
import image5 from '../../public/images/image5.jpg'
import image6 from '../../public/images/image6.jpg'
import image7 from '../../public/images/image7.jpg'
import Theme from '../../theme';

const data = [
  {
    name: 'John Doe',
    position: 'Barber',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com',
    avatar: image3,
  },
  {
    name: 'Cristina Doe',
    position: 'Barber',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com',
    avatar: image4,
  },
  {
    name: 'Mark Done',
    position: 'Barber',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com',
    avatar: image5,
  },
  {
    name: 'Anna Doe',
    position: 'Barber',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com',
    avatar: image6,
  },
]

const TeamSection = () => {

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <S.Container>
        <S.SectionWrapper>
            <S.TitleLabel>Meet our experts</S.TitleLabel>
            <S.MottoTLabel>Each nember of our team is committed to providing an exceptional grooming</S.MottoTLabel>
            <S.MottoTLabel>expereince, ensuring you leave our shop looking and feeling your best.</S.MottoTLabel>

            <S.CardWrapper>
            {
              data.map((item, index) => (
                <S.Card key={index} picture={item.avatar}>
                  <S.InfoWrapper>
                    <S.NameWrapper>
                      <S.BarberName>{item.name}</S.BarberName>
                      <S.PositionLabel>{item.position}</S.PositionLabel>
                    </S.NameWrapper>
                    <S.IconWrapper>
                      <InstagramIcon onClick={()=> handleLinkClick(item.instagram)}  sx={{color:Theme.colors.secondary, cursor: 'pointer'}} />
                      <LinkedInIcon onClick={()=> handleLinkClick(item.linkedin)} sx={{color:Theme.colors.secondary, cursor:'pointer'}} />
                    </S.IconWrapper>
                  </S.InfoWrapper>
                </S.Card>
              ))
            }
            </S.CardWrapper>

        </S.SectionWrapper>
    </S.Container>
  )
}

export default TeamSection
