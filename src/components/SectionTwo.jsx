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
    return (
      <SectionContainer>
        <InfoBlock section="vinyl">
          <Heading section="vinyl">Vinyl</Heading>
          <Description>E-commerce store with database integration</Description>
          <Technologies section="vinyl">
            #React, #Redux, #MongoDB, #Material-UI
          </Technologies>
          <Language>language: en</Language>
          <ActionBar>
            <VisitLink
              section="vinyl"
              href="https://mysterious-dusk-48725.herokuapp.com/"
              target="blank"
            >
              demo
            </VisitLink>
            <GithubLink
              section="vinyl"
              href="https://github.com/VinniePazz/Vinyl"
              target="blank"
            >
              source
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
