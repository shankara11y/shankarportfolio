import { createSlice } from "@reduxjs/toolkit";
import portfolioImg from "../assets/portfolio_project.png";
import cleanCityImg from "../assets/clean_city_project.png";
import damsAerospaceImg from "../assets/dams_aerospace.png";

const initialState = {
  list: [
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "A modern, highly-responsive developer portfolio website built using React, Vite, and Tailwind CSS. Connects to a central Redux store and utilizes React Router navigation to showcase skills, projects, and learning journey.",
      tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Redux"],
      image: portfolioImg,
      liveLink: "#",
      githubLink: "https://github.com/shankara11y"
    },
    {
      id: "cleancity",
      title: "Clean City Reporting Platform",
      description: "A citizen-led reporting platform enabling users to anonymously report local garbage blackspots, submit photos, and pin geographic coordinates to help municipal clean-up drives.",
      tech: ["React.js", "Firebase", "Tailwind CSS", "Web APIs"],
      image: cleanCityImg,
      liveLink: "https://clean-bengaluru.com/",
      githubLink: "https://github.com/shankara11y"
    },
    {
      id: "damsaerospace",
      title: "DAMS Aerospace Website",
      description: "A premium, fully responsive corporate landing page for an aerospace technology company. Focuses on futuristic dark UI grids, clean space visual panels, service lists, and custom layout systems.",
      tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox/Grid"],
      image: damsAerospaceImg,
      liveLink: "https://shankara11y.github.io/DAMS-Aerospace-Website/",
      githubLink: "https://github.com/shankara11y/DAMS-Aerospace-Website"
    }
  ]
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {}
});

export default projectsSlice.reducer;
