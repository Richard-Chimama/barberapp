import ResponsiveCarousel from './ResponsiveCarousel';
import * as S from './style';
import image1 from "../../public/images/image1.webp"
import image2 from "../../public/images/image2.webp"
import { StaticImageData } from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';
import { Fab } from '@mui/material';

export interface CarouselRef {
    moveLeft: () => void;
    moveRight: () => void;
  }

const images: StaticImageData[] = [image1, image2, image1, image2];

const PriceSection = ()=>{
    const carouselRef = useRef<CarouselRef>(null);

    const handleClikLeft = ()=>{
        carouselRef.current?.moveLeft()
    }

    const handleClikRight = ()=>{
        carouselRef.current?.moveRight()
    }

    return (
        <S.Container>
            <S.SectionWrapper>
                <S.Section1>
                    <S.TextSection1>
                        <div>
                            <S.HeadTextSection1>Discover</S.HeadTextSection1>
                            <S.HeadTextSection1>Our Works</S.HeadTextSection1>
                        </div>
                        <S.ContentTextSection1>
                            Our team of expereinced barbers is dedicated to their craft.
                            We stay  updated with the latest techniques and styled to 
                            ensure you get the best service possible. 
                        </S.ContentTextSection1>

                        <S.IconContainer>
                            <Fab color="primary" onClick={handleClikLeft}>
                             <ArrowBackIcon /> 
                            </Fab>
                            <Fab color="primary" onClick={handleClikRight}>
                                <ArrowForwardIcon />
                            </Fab>
                        </S.IconContainer>

                    </S.TextSection1>

                    <S.ImageSection>
                        <ResponsiveCarousel ref={carouselRef} images={images} />
                    </S.ImageSection>
                </S.Section1>

                <S.Section2></S.Section2>
            </S.SectionWrapper>
        </S.Container>
    )
}

export default PriceSection;