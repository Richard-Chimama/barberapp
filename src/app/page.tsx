"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import * as S from "./style";
import HeadSection from "../../components/HeadSection";
import ServiceSection from "../../components/ServiceSection";
import PriceSection from "../../components/PriceSection";

export default function Home() {
  return (
    <S.MainContainer>
      <HeadSection />
      <ServiceSection />
      <PriceSection />
    </S.MainContainer>
  );
}
