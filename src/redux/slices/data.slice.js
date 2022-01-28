import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    aboutMe: [
      "I am an engineer who recently became in love with web development and started studying Front-End using ReactJS, JavaScript, TypeScript, HTML, CSS, SASS, etc. This, combined with my C++ and Python experience, could help me become a Full-Stack developer.",

      "I enjoyed learning about web development technologies a lot, and I feel very motivated to keep learning both Front-End and Back-End skills.",

      "I am currently looking for jobs in that area. I speak Spanish (native), English (advanced) and some French (I currently have courses three times a week now).",
    ],
    experience: {
      title: "Work Experience",
      list: [
        {
          name: "Developer",
          date: "Nov 2019 - Oct 2021",
          enterprice: "CEA - France",
          logo: "./logos/CEA_logo.png",
          details:
            "Development of advanced perturbation and sensitivity methods for Monte Carlo simulations. Submitted paper at PHYSOR 2022. ",
          skills: ["C++", "Tripoli-4", "Git", "Python", "Linux"],
        },
        {
          name: "Internship",
          date: "Sep 2018 - Mar 2019",
          enterprice: "CNRS - France",
          logo: "./logos/CNRS_logo.png",
          details:
            "Fast neutron detection (10 keV up to 20 MeV) with MIMAC-FastN, a 3D nuclear recoil track detector studying nuclear reactions for neutron production: 9Be(d (1.5MeV), n) , 9Be(p (3.6 MeV),n) and 7Li (p (2.5 MeV),n).",
          skills: ["C++", "Linux"],
        },
        {
          name: "Internship",
          date: "Jan 2017 - Feb 2017",
          enterprice: "CNEA-Constituyentes - Argentina",
          logo: "./logos/CNEA_logo.png",
          details:
            "Comparison of methodologies using X-ray fluorescence in the determination of alloying and impuri-ties in Zry samples TXRF vs. WDXRF. Supervised by Dr. Luciana Cerchietti",
          skills: [],
        },
        {
          name: "Internship",
          date: "Jan 2016 - Feb 2016",
          enterprice: "CNEA-Ezeiza - Argentina",
          logo: "./logos/CNEA_logo.png",
          details:
            "Metallographic analysis at the level of the microstructure of a Zircaloy-4 alloy, after having gonethrough three different stages of the industrial process. Supervised by Eng. Gabriel A. Juárez.",
          skills: [],
        },
        {
          name: "Internship",
          date: "Mar 2015 - Jul 2015",
          enterprice: "Universidad Tecnológica Nacional (UTN-FRGP) - Argentina",
          logo: "./logos/UTN_logo.png",
          details:
            "Analytical prediction, conditions for measurement, limits of acceptance and mitigation of vibrationsin structures originated by human activity. Supervised by Dr. Eng. Raúl D. Bertero and Ms. Eng. German Ivaldi.",
          skills: [],
        },
        {
          name: "Internship",
          date: "Jan 2015 - Feb 2015",
          enterprice: "CNEA-Bariloche - Argentina",
          logo: "./logos/CNEA_logo.png",
          details:
            "Study of tungsten alloys subjected to deformations for applications in fusion reactors.Publication on the XLII AATN. Supervised by Dr. Juana L. Gervasoni",
          skills: ["CYPE – Metal 3D"],
        },
      ],
    },
    courses: {
      title: "Courses",
      list: [
        {
          name: "Frontend Developer / Platzi",
          logo: "./logos/platzi_logo.png",
          skills: ["HTML", "CSS", "SASS", "grid & flexbox", "responsive"],
        },
        {
          name: "Basic Javascript / Platzi",
          logo: "./logos/platzi_logo.png",
          skills: ["JavaScript"],
        },
        {
          name: "Modern Javascript Definitive Guide / Udemy",
          logo: "./logos/udemy_logo.png",
          skills: ["JavaScript", "DOM", "React", "OOP"],
        },
        {
          name: "React.js practice course / Plazi",
          logo: "./logos/platzi_logo.png",
          skills: ["ReactJS", "Route", "Redux", "React", "Hooks"],
        },
        {
          name: "Frameworks and Librearies of JavaScipt / Plazi",
          logo: "./logos/platzi_logo.png",
          skills: [
            "React functional components",
            "Styled components",
            "CSS-in-JS",
          ],
        },
        {
          name: "Python Introductory course / IEEE - ITBA",
          logo: "./logos/ITBA_logo.png",
          skills: ["Python"],
        },
        {
          name: "Data Analysis / IEEE - ITBA",
          logo: "./logos/ITBA_logo.png",
          skills: ["Python", "Pandas", "Numpy", "Matplotlib"],
        },
      ],
    },
    education: {
      title: "Education",
      list: [
        {
          logo: "./logos/IDB_logo2.png",
          degreeTitle: "Nuclear Engineer",
          date: "Aug 2015 -Jul 2018",
          degreeLevel: "Master",
          rate: "16.5 / 20 (Top 1)",
          university: "Instituto Tecnológico Dan Beninson (IDB), Argentina",
          details:
            "Master Thesis about deterministic analysis of the RA-10 loop in presence of a LOFA in relation with different flywheels using the thermo-hydraulic simulation software RELAP. Co-funder and vice-president of the student association.",
          skills: ["Relap5"],
          others: "Vice-President & Co-founder of the Student Center IDB",
        },
        {
          // logo: "./logos/UTN_logo.png",
          logo: "./logos/UTN_logo2.png",
          degreeTitle: "Civil Engineer",
          date: "Mar 2012 -Aug 2015",
          degreeLevel: "Bachelor",
          rate: "15.5 / 20",
          university:
            "Universidad Tecnológica Nacional (UTN – FRGP), Argentina",
          details:
            "Scholarship for investigation supervised by Dr. Eng. Raúl D. Bertero: Analytical prediction, conditions for measurement, limits of acceptance and mitigation of vibrationsin structures originated by human activity.",
          skills: [""],
          others: "",
        },
      ],
    },
    skills: {
      title: "Skills",
      languages: [
        { title: "Spanish native", level: "100%" },
        { title: "English advanced", level: "90%" },
        { title: "French beginner", level: "25%" },
      ],
      programming: [
        {
          title: "C++",
          image: "./logos/programming/c_plus_plus.png",
        },
        {
          title: "JavaScript",
          image: "./logos/programming/javascript_logo.png",
        },
        {
          title: "Python",
          image: "./logos/programming/python_logo.png",
        },
        {
          title: "Matlab",
          image: "./logos/programming/matlab_logo.png",
        },
      ],
      web: [
        {
          title: "ReactJS",
          image: "./logos/programming/react_logo.png",
        },
        {
          title: "HTML",
          image: "./logos/programming/html_logo.png",
        },
        {
          title: "CSS",
          image: "./logos/programming/CSS3_logo.png",
        },
        {
          title: "SASS",
          image: "./logos/programming/sass_logo.png",
        },
        {
          title: "Json",
          image: "./logos/programming/JSON_logo.png",
        },
        {
          title: "Redux",
          image: "./logos/programming/redux_logo.png",
        },
      ],
      dataScience: [
        {
          title: "Pandas",
          image: "./logos/programming/pandas_logo.png",
        },
        {
          title: "Numpy",
          image: "./logos/programming/numpy_logo.svg",
        },
        {
          title: "Matplotlib",
          image: "./logos/programming/mathplotlib_logo.png",
        },
      ],
      others: [
        {
          title: "Git",
          image: "./logos/others/git_logo.png",
        },
        {
          title: "Linux",
          image: "./logos/others/linux_logo.png",
        },
        {
          title: "Tripoli-4",
          image: "./logos/others/tripoli_logo.png",
        },
        {
          title: "RELAP",
          image: "./logos/others/relap_logo.png",
        },
        {
          title: "Autodesk - AutoCAD 2D",
          image: "./logos/others/autocad_logo.png",
        },
        {
          title: "MCNP - Los Alamos National Lab",
          image: "./logos/others/mcnp_logo.png",
        },
        {
          title: "Mathcad PTC",
          image: "./logos/others/mathcad_logo.png",
        },
        {
          title: "GammaVision (Gamma Spectroscopy)",
          image: "./logos/others/gammavision_logo.png",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      list: [
        {
          title: "E-Commerce site",
          gitHub: "https://github.com/catwin94/e-commerce",
          url: "https://catwin94.github.io/e-commerce/",
          skills: [
            "ReactJS",
            "Redux",
            "Route",
            "Json",
            "API",
            "SASS",
            "JavaScript",
            "CSS",
            "HTML",
          ],
          image: "./assets/webProjects/eCommerce.png",
        },
        {
          title: "Rock Paper Scissor game site",
          gitHub: "https://github.com/catwin94/stone-paper-scissor",
          url: "https://catwin94.github.io/stone-paper-scissor/",
          skills: ["JavaScript", "CSS", "HTML"],
          image: "./assets/webProjects/rpsGame.png",
        },
      ],
    },
  },
  reducers: {},
});

// export const {} = dataSlice.actions;
export default dataSlice.reducer;
