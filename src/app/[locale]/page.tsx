"use client"
import { useEffect, useState } from "react";
import ArticleSection from "../components/homepage/ArticleSection";
import ImagesBanner from "../components/homepage/ImagesBanner";
import MainCarousel from "../components/homepage/MainCarousel";
import SubArticle from "../components/homepage/SubArticle";
import logo from '@/images/logo-beyaz.png'
import Image from "next/image";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // 1 saniye sonra fade-out başlar
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowLogo(false); // 2.5 saniye sonra tamamen kaldırılır
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (<>
    <div className="relative overflow-hidden">
      {/* Splash Screen */}
      {showLogo && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-primary z-50 transition-opacity duration-[2000ms] ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image src={logo} width={500} height={500} alt="3H Logo" />
        </div>
      )}

      {/* Ana İçerik */}
      <div>
        <MainCarousel />
        <ArticleSection />
        <ImagesBanner />
        <SubArticle />
      </div>
    </div>
  </>)
}


