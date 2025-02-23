"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import * as S from "./style";
import HeadSection from "../../components/HeadSection";
import ServiceSection from "../../components/ServiceSection";
import PriceSection from "../../components/PriceSection";
import TeamSection from "../../components/TeamSection";

export default function Home() {
  return (
    <S.MainContainer>
      <HeadSection />
      <ServiceSection />
      <PriceSection />
      <TeamSection />
    </S.MainContainer>
  );
}
