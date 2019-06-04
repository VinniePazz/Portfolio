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

class SectionTwo extends Component {
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
        <InfoBlock section="vinyl">
          <Heading section="vinyl">Vinyl</Heading>
          <Description>
            {language === "en"
              ? "E-commerce store with database integration"
              : "Интернет-магазин с базой данных"}
          </Description>
          <Technologies section="vinyl">
            #React, #Redux, #MongoDB, #Material-UI
          </Technologies>
          <Language>
            {" "}
            {language === "en" ? "language: en" : "язык: английский"}
          </Language>
          <ActionBar>
            <VisitLink
              section="vinyl"
              href="https://mysterious-dusk-48725.herokuapp.com/"
              target="blank"
            >
              <span />
              <span />
              <span />
              <span />
              {language === "en" ? "demo" : "демо"}
            </VisitLink>
            <GithubLink
              section="vinyl"
              href="https://github.com/VinniePazz/Vinyl"
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
        <MediaBlock>
          <VideoWrapper onClick={this.handleClick}>
            {this.state.pause && <PlayButton color="tomato" />}
            <video
              width="100%"
              height="100%"
              loop
              autoPlay
              muted
              ref={this.videoRef}
            >
              <source src="/Vinyl-compressed.mp4" type="video/mp4" />
              If you are reading this, it is because your browser does not
              support the HTML5 video element.
            </video>
          </VideoWrapper>
        </MediaBlock>
      </SectionContainer>
    );
  }
}

export default SectionTwo;
