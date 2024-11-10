import Image from "next/image";
import Link from "next/link";
interface Blog {
  title: string;
  img: string;
  description: string;
  link: string;
}
interface project {
  title: string;
  img: string;
  description: string;
  link: string;
}
let blogs: Blog[] = [
  {
    title: "AI in Healthcare",
    img: "/ai-in-healthcare.jpg",
    description:
      "Artificial Intelligence is rapidly revolutionizing healthcare by enhancing diagnostic accuracy, improving patient ...",
    link: "/AIBlog",
  },
  {
    title: "Rise of Robotics: Shaping a High-Tech Tomorrow",
    img: "robotics.jpg",
    description: "Robotics has rapidly evolved beyond ...",
    link: "/Robotics",
  },
  {
    title: "Freelancing Fever: Why More People are Choosing Independence",
    img: "freelancing.jpeg",
    description: "Freelancing has emerged as a popular  ...",
    link: "/freelancing",
  },
  {
    title: "The Power of Cloud Computing",
    img: "cloud.jpeg",
    description:
      " Cloud computing has revolutionized the way businesses operate and  ... ",
    link: "/cloud",
  },
];

let projects: project[] = [
  {
    title: "Blog Website",
    img: "blog.jpeg",
    description: "Blog website using NextJS deployed on vercel",
    link: "https://blog-website-six-rosy.vercel.app/",
  },
  {
    title: "ATM Machine",
    img: "ATM.jpeg",
    description: "ATM Machine Using TypeScript",
    link: "https://github.com/Ayesha788/ATM.git",
  },
  {
    title: "Number Guessing Game",
    img: "game.jpeg",
    description:
      "An Interesting Number Guessing game Guess the number between 1 and 10 and it will tell you wheather you guesses right or wrong",
    link: "https://github.com/Ayesha788/CLI_numberGuessingGame.git",
  },
  {
    title: "Currency Converter",
    img: "currency converter.jpeg",
    description: "Currency Converter using TypeScript",
    link: "https://github.com/Ayesha788/Currency-Converter.git",
  },
];

export default function Home() {
  return (
    <>
      <div className="intro">
        <div className="childContainer">
          "Hello! I'm <span className="text-cyan-700">Ayesha</span>,
          <img id="profilePic" src="/profilePic.jpg"></img>
          <br />
          an enthusiastic IT graduate and educator
          <br />
          with a passion for cloud technology, web development,
          <br />
          and AI engineering.{" "}
          <span className="text-cyan-700">Welcome to my portfolio!"</span>
          
        </div>
        
      </div>
      <div className="childContainer"></div>
      <div className="quote">
        <img
          src="AI.jpeg"
          alt="Artificial intelligence"
          className="w-1/3 h-64 "
        />
        Fei-Fei Li said <br />
        "AI is not just a tool.
        <br /> It is a transformation of the world."
      </div>

      <div>
        <h2 className="text-3xl text-cyan-700 text-center font-bold mt-8">
          Blogs
        </h2>

        <div className="flex">
          {blogs.map((blog, i) => (
            <div key={i}>
              <div className="childContainer2 shadow-pop-tr">
                <img src={blog.img} className="imageContainer"></img>

                <h1 className="title">{blog.title}</h1>
                <p className="description">{blog.description}</p>
                <Link href={blog.link}>
                  <button className="readmore">Read More</button>
                </Link>
              </div>
            </div>
          ))}
          ;
        </div>

        <h2 className="text-4xl text-cyan-700 text-center font-bold mt-8">
          Projects
        </h2>
        <div className="flex">
          {projects.map((project, i) => (
            <div key={i}>
              <div className="childContainer2 shadow-pop-tr">
                <img src={project.img} className="imageContainer"></img>

                <h1 className="title">{project.title}</h1>
                <p className="description">{project.description}</p>
                <Link href={project.link}>
                  <button className="readmore">Click to see the code</button>
                </Link>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <br />
      <br />
      <div></div>
    </>
  );
}
