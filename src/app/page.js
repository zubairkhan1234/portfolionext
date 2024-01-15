import React from "react";
import "./globals.css";
import "../style/mediaQuery.css";
import "../style/style.css";
import HomeComp from "@/components/home";
import Qualification from "@/components/qualification";
import NavBarComp from "@/components/navbar";
import AboutComp from "@/components/about.js";
import ServicesComp from "@/components/services";
import SkillsSectionComp from "@/components/skills";

export default function Home() {
  return (
    <>
      <NavBarComp />
      <div className="container-fluid d-flex flex-column justify-content-center">
        <Qualification />
        <HomeComp />
        <AboutComp />
        <ServicesComp />
        <SkillsSectionComp />
      </div>
    </>
  );
}
