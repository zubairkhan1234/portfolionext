import React from "react";
import './globals.css'
import HomeComp from "@/components/home";
import Speciality from "@/components/speciality";
import NavBarComp from "@/components/navbar";
import AboutComp from "@/components/about";
import ServicesComp from "@/components/services";
import SkillsSectionComp from "@/components/skills";

export default function Home() {
  return (
    <>
      <NavBarComp />
      <div className="container-fluid d-flex flex-column justify-content-center">
        <HomeComp />
        <AboutComp />
        <ServicesComp />
        <SkillsSectionComp />

        {/* <Speciality /> */}
      </div>
    </>
  )
}
