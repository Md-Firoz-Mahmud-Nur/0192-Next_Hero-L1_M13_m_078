import AboutContents from "@/Components/AboutContents";
import React from "react";
import { Headland_One } from "next/font/google";

const poppinsFont = Headland_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about", "next", "hero", "page", "us"],
};

const AboutPage = () => {
  return (
    <div className={poppinsFont.className}>
      about page
      <AboutContents></AboutContents>
    </div>
  );
};

export default AboutPage;
