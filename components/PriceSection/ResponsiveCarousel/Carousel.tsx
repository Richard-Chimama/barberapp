import { FC, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import * as S from "./style";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

export interface CarouselRef {
  moveLeft: () => void;
  moveRight: () => void;
}

const ResponsiveCarousel: FC<Props> = forwardRef<CarouselRef, Props>(
  ({ images }, ref) => {
    const [index, setIndex] = useState<number>(0);
    const totalImages = images.length;

    const [screenWidth, setScreenWidth] = useState<number| null >(null)
    const isMobile = screenWidth ? screenWidth > 700: false;
    const showMoreItems = isMobile ? 50: 0;


    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
        window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); 

    const moveLeft = () => {
      setIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
    };

    const moveRight = () => {
      setIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
    };

    useImperativeHandle(
      ref,
      () => ({ moveLeft, moveRight, totalImages, index }),
      [index]
    );

    return (
      <S.Container
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={index}
        onChange={(idx) => setIndex(idx)}
        centerMode={isMobile}
        centerSlidePercentage={showMoreItems}
        dynamicHeight={true}

      >
        {images.map((img, idx) => (
          <S.Img key={idx} src={img} alt={"hair cut image"} />
        ))}
      </S.Container>
    );
  }
);

export default ResponsiveCarousel;
