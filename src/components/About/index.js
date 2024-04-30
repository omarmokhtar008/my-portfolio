import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3,faGitAlt, faHtml5,faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])
  
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
        />
        </h1>
        <p>
          Hey there, I'm Omar, a forward-thinking front-end developer driven by ambition and a passion for crafting exceptional digital experiences. With a keen interest in TypeScript, I'm continually expanding my skill set to stay ahead in the ever-evolving tech landscape.
        </p>
        <p>
          In the short term, my goal is to dive into my career headfirst, striving for excellence in every project and gaining valuable experience along the way. I'm proud of completing a challenging frontend game project, which tested my perseverance and problem-solving skills, showcasing my ability to tackle complex tasks effectively.
        </p>
        <p>
          In addition, I'm passionate about self-learning and exploring new opportunities to gain valuable experience.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faBootstrap} color="#563D7C" />
          </div>
          <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )

}

export default About