import React from "react";
import './globals.css'
import HomeComp from "@/components/home";
import Speciality from "@/components/speciality";
import NavBarComp from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavBarComp />
      <div className="container-fluid">
        <HomeComp />
        <Speciality />
      </div>
    </>
  )
}
