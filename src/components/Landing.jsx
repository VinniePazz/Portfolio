import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import _ from "lodash";
import { withRouter } from "react-router-dom";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1em;
`;

const AnimatedLanding = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 1200, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 1000, ease: "easeIn" }
  }
});

class Landing extends Component {
  constructor(props) {
    super(props);
    this.sectionOne = React.createRef();
    this.sectionTwo = React.createRef();
    this.sectionThree = React.createRef();
    super(props);
    this.state = {
      activeSection: 0
    };
  }

  handleScroll = _.throttle(e => {
    const sectionOne = this.sectionOne.current.clientHeight - 100;
    const sectionTwo =
      this.sectionTwo.current.clientHeight +
      this.sectionTwo.current.offsetTop -
      100;
    const sectionThree = this.sectionThree.current.offsetTop - 300;
    const offsetTop = window.pageYOffset;
    
    if (offsetTop <= sectionOne && this.state.activeSection !== 0) {
      this.setState({
        activeSection: 0
      });
    }

    if (
      offsetTop > sectionOne &&
      offsetTop <= sectionTwo &&
      this.state.activeSection !== 1
    ) {
      this.setState({
        activeSection: 1
      });
    }

    if (offsetTop > sectionThree && this.state.activeSection !== 2) {
      this.setState({
        activeSection: 2
      });
    }
  }, 200);

  handlePress = e => {
    if (e.key === "1") {
      this.sectionTwo.current.scrollIntoView({
        behavior: "smooth"
      });
    }
    if (e.key === "2") {
      this.sectionThree.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("keypress", this.handlePress, true);
    this.handleScroll();
    if(this.props.location.state && this.props.location.state.fromAboutPage) {
      this.sectionTwo.current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
    window.removeEventListener("scroll", this.handlePress, true);
  }

  render() {
    return (
      <>
        <Header
          activeSection={this.state.activeSection}
          changeLanguage={this.props.changeLanguage}
          language={this.props.language}
        />
        <AnimatedLanding>
          <Container>
            <section ref={this.sectionOne}>
              <SectionOne language={this.props.language} />
            </section>
            <section ref={this.sectionTwo}>
              <SectionTwo language={this.props.language} />
            </section>
            <section ref={this.sectionThree}>
              <SectionThree language={this.props.language} />
            </section>
          </Container>
        </AnimatedLanding>
        <Footer
          activeSection={this.state.activeSection}
          toSectionTwo={() =>
            this.sectionTwo.current.scrollIntoView({
              behavior: "smooth"
            })
          }
          toSectionThree={() =>
            this.sectionThree.current.scrollIntoView({
              behavior: "smooth"
            })
          }
        />
      </>
    );
  }
}

export default withRouter(Landing);
