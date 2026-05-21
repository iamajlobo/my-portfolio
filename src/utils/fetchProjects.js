import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/lobogames.png"
import project3 from "../assets/projects/lobomovies.png"
import project4 from "../assets/projects/lobodex.png";


export const projects = [
    {
        id: 4,
        title: "Lobodex",
        description:
  "A Pokédex-inspired web app that allows users to explore Pokémon data, including stats, types, and evolution chains, with a responsive and interactive interface.",
        image: project4,
        tech: ["React", "Tailwind"],
        github: "https://github.com/iamajlobo/lobodex",
        live: "https://iamajlobo.github.io/lobodex/"
    },
    {
        id: 3,
        title: "My Portfolio",
        description:
            "A personal portfolio website showcasing projects, skills, and experience with a responsive and modern UI.",
        image: project1,
        tech: ["React", "Tailwind"],
        github: "https://github.com/iamajlobo/my-portfolio",
        live: "https://iamajlobo.github.io/my-portfolio/"
    },
    {
        id: 2,
        title: "Lobo Mini Games",
        description:
            "A collection of browser-based mini games built with JavaScript, featuring interactive gameplay and simple animations.",
        image: project2,
        tech: ["HTML5", "CSS", "JavaScript"],
        github: "https://github.com/iamajlobo/mini-projects",
        live: "https://iamajlobo.github.io/mini-projects/"
    },
    {
        id: 1,
        title: "Lobo Movies",
        description:
            "A movie browsing app that allows users to explore films, view details, and manage favorites using a dynamic React interface.",
        image: project3,
        tech: ["HTML5","CSS","React"],
        github: "https://github.com/iamajlobo/lobo-react-movies",
        live: "https://iamajlobo.github.io/lobo-react-movies/"
    }
]