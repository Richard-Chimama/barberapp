import { FC, forwardRef, useImperativeHandle, useState } from "react";
import * as S from "./style";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

export interface CarouselRef {
  moveLeft: () => void;
  moveRight: () => void;
}


const ResponsiveCarousel: FC<Props> = forwardRef<CarouselRef, Props>(({ images }, ref) => {
  const [index, setIndex] = useState<number>(0);
  const totalImages = images.length + 1;

  const moveLeft = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const moveRight = () => {
    setIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  useImperativeHandle(ref, () => ({ moveLeft, moveRight, totalImages, index }), [index]);

  return (
    <S.Container>
      <S.ImageWrapper sx={{ transform: `translateX(-${index * 100}px)` }}>
        {images.map((img, idx) => (
          <S.Img key={idx} src={img} alt={"hair cut image"} />
        ))}
      </S.ImageWrapper>
    </S.Container>
  );
});

export default ResponsiveCarousel;
