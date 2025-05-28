import AboutContents from "@/Components/AboutContents";
import React from "react";

export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about", "next", "hero", "page", "us"],
};

const AboutPage = () => {
  return (
    <div>
      about page
      <AboutContents></AboutContents>
    </div>
  );
};

export default AboutPage;
