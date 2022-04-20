import { Button } from "../Button";
import { Container } from "./style";

export function Presentation(){
  return(
    <Container id="home">
      <div className="presentation-content">
        <div className="wrapper-texts">
          <h2>OLÁ, EU SOU</h2> <br />
          <h2><span>JUAN LEMOS</span></h2> <br />
          <h2>Desenvolvedor Front-end</h2>
        </div>

        <div className="wrapper-buttons">
          <Button color='blue' text='Linkedin' imgURL="/images/linkedin.svg" link='https://www.linkedin.com/in/juan-lemos-75830b1a2/' />
          <Button color='pink' text='Github' imgURL="/images/github.svg" link="https://github.com/JuanSanjuanLemos" />
        </div>
      </div>
    </Container>
  )
}