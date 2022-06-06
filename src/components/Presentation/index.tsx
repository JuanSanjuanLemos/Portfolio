import { Button } from "../Button";
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Container } from "./style";

export function Presentation(){
  return(
    <Container id="home" className="container">
      <div className="box-image">
        <div className="presentation-content">
          <div className="wrapper-texts">
            <h2>OLÁ, EU SOU</h2> <br />
            <h2><span>JUAN LEMOS</span></h2> <br />
            <h2>DESENVOLVEDOR FRONT-END</h2>
          </div>

          <div className="wrapper-buttons">
            <Button color='blue' text='Linkedin' link='https://www.linkedin.com/in/juan-lemos-75830b1a2/'>
              {<FiLinkedin />}
            </Button>
            <Button color='pink' text='Github' link="https://github.com/JuanSanjuanLemos">
              {<FiGithub />}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}