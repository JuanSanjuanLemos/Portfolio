import { Button } from "../Button";

import { Container } from "./style";

export function Presentation(){
  return(
    <Container id="home">
      <div className="presentation-content">
        <div className="wrapper-texts">
          <h2>OLÁ, EU SOU</h2> <br />
          <h2><span>JUAN LEMOS</span></h2> <br />
          <h2>DESENVOLVEDOR FRONT-END</h2>
        </div>

        <div className="wrapper-buttons">
          <Button color='blue' text='Linkedin' imgURL="/images/linkedin.svg" link='https://www.linkedin.com/in/juan-lemos-75830b1a2/' />
          <Button color='pink' text='Github' imgURL="/images/github.svg" link="https://github.com/JuanSanjuanLemos" />
        </div>
        <a href="https://us14.list-manage.com/contact-form?u=0b5d5f99c48e5fa345a8750c9&form_id=3bbda1173c53b7a3401b149bae5d1d96">aa</a>
      </div>
    </Container>
  )
}