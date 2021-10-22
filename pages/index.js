import Head from "next/head";
import About from "../components/About";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import React, { useEffect, useState } from "react";
import MyWork from "../components/MyWork";
import Contact from "../components/Contact";

export default function Home() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => setResumeData(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Tom Rago Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <Navbar />
      <LandingPage />
      <About />
      <Resume data={resumeData.resume} />
      <MyWork data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
    </div>
  );
}
