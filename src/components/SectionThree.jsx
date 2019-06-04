import React, { Component } from "react";

import {
  SectionContainer,
  InfoBlock,
  Heading,
  MediaBlock,
  VideoWrapper,
  PlayButton,
  ActionBar,
  Description,
  Technologies,
  Language
} from "../styled-components";

import { VisitLink, GithubLink } from "../styled-components";

class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      pause: false
    };
  }

  handleClick = () => {
    const video = this.videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    this.setState(prev => ({ pause: !prev.pause }));
  };

  render() {
    const { language } = this.props;
    return (
      <SectionContainer>
        <MediaBlock>
          <VideoWrapper onClick={this.handleClick}>
            {this.state.pause && <PlayButton color="azure" />}
            <video width="100%" loop autoPlay muted ref={this.videoRef}>
              <source src="/Ki-events.mp4" type="video/mp4" />
              If you are reading this, it is because your browser does not
              support the HTML5 video element.
            </video>
          </VideoWrapper>
        </MediaBlock>
        <InfoBlock section="ki-events">
          <Heading section="ki-events">Ki-events</Heading>
          <Description>
            {language === "en"
              ? "Social network with realtime changings"
              : "Социальная сеть с изменениями в реальном времени"}
          </Description>
          <Technologies>#React, #Redux, #Firebase, #Semantic-UI</Technologies>
          <Language>
            {language === "en" ? "language: ru" : "язык: русский"}
          </Language>
          <ActionBar>
            <VisitLink
              section="ki-events"
              href="https://kievents-3bba0.firebaseapp.com/"
              target="blank"
            >
              <span />
              <span />
              <span />
              <span />
              {language === "en" ? "demo" : "демо"}
            </VisitLink>
            <GithubLink
              section="ki-events"
              href="https://github.com/VinniePazz/Ki-events"
              target="blank"
            >
              {language === "en" ? "source" : "код"}
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </GithubLink>
          </ActionBar>
        </InfoBlock>
      </SectionContainer>
    );
  }
}

export default SectionThree;
