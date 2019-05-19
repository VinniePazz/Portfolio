import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import _ from "lodash";

import Layout from "./Layout";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1em;
`;

const AnimatedLanding = posed.div({
  enter: {
    opacity: 1,
    x: "0%",
    transition: { duration: 1000, ease: "easeIn" }
  },
  exit: {
    opacity: 0,
    x: "-100%",
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
    console.log(offsetTop, sectionThree);
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
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
    window.removeEventListener("scroll", this.handlePress, true);
  }

  render() {
    return (
      <>
        <Header />
        <AnimatedLanding>
          <Container>
            <section ref={this.sectionOne}>
              <SectionOne />
            </section>
            <section ref={this.sectionTwo}>
              <SectionTwo />
            </section>
            <section ref={this.sectionThree}>
              <SectionThree />
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

export default Landing;
