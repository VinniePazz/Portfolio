import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Icon from "./Icon";

const AboutContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 1.5em;
`;

const HeadingOne = styled(Heading)``;

const HeadingTwo = styled(Heading)`
  margin-top: 2rem;
`;

const Info = styled.div`
  text-align: center;
  margin-top: 2rem;
  line-height: 140%;

  * {
    margin-top: 2rem;
  }
`;

const LinkToProjects = styled.a`
  color: ${({ theme }) => theme.pallette.secondary};
  text-decoration: underline;
  font-weight: 700;
`;

const Technologies = styled.div`
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.pallette.main};
  }
`;

const Dots = styled.span`
  font-weight: 700;
`;

const Action = styled.div`
  margin-top: 4rem;

  a {
    color: ${({ theme }) => theme.pallette.secondary};
    text-decoration: underline;
    font-weight: 700;
  }
`;

const Social = styled.ul`
  text-align: center;

  @media (max-width: 850px) {
    a {
      margin: 0 1rem;
    }
  }
`;

const socialLinks = [
  {
    name: "linkedin",
    linkTo: "https://www.linkedin.com/in/dima-smakouz-9ab590188/"
  },
  { name: "github", linkTo: "https://github.com/VinniePazz" },
  {
    name: "mail",
    linkTo: "mailto:dimasmakouz@gmail.com"
  },
  {
    name: "resume",
    linkTo: "/resume.pdf"
  }
];

const AboutContent = ({ language }) => {
  return (
    <AboutContainer>
      <HeadingOne>
        {language === "en" ? "Hi there! I'm Dima" : "Здравствуй"}.
      </HeadingOne>
      <HeadingTwo>
        {language === "en"
          ? "Novice web developer"
          : "Я начинающий веб-разработчик"}
        ,
      </HeadingTwo>
      <Info>
        <p>
          {language === "en"
            ? "currently looking for the opportunity to work in the web development team where people realize their dreams via code. I haven't commercial experience in web development ... but I have a goal and 24 hours per day to learn how to develop quality products at the same level of people who have such experience"
            : "который ищет команду людей, где идеи и воображение воплощаются в реальность. У меня нет коммерческого опыта в веб-разработке... но у меня есть цель и 24 часа каждый день, для того, чтобы научиться разрабатывать приложения на уровне людей у которых даный опыт есть"}
          .
        </p>
        <p>
          {language === "en"
            ? "My amateur projects you can find"
            : "Мои любительские проекты вы можете просмотреть"}{" "}
          <LinkToProjects
            as={Link}
            to={{
              pathname: "/",
              state: { fromAboutPage: true }
            }}
          >
            {language === "en" ? "here." : "здесь."}
          </LinkToProjects>
        </p>
        <Technologies>
          <span>
            {language === "en"
              ? "Skills I'm currently working on"
              : "Технические навыки"}
            :
          </span>{" "}
          HTML5, CSS3, Javascript (ES5 - ES8), React 16+, Redux, Node.js,
          Express, MongoDB (Mongoose), Firebase / Firestore, Webpack / Gulp,
          npm, Styled-Components, SCSS, 'PUG', Material UI / Semantic UI /
          Bootstrap4, D3 / Victory.js, GIT / Github, Heroku / Netlify, Figma,
          Avocode, Inkscape, Trello <Dots>...</Dots>
        </Technologies>
        <Action>
          {language === "en"
            ? "You can reach me at"
            : "Буду рад сотрудничеству и общению"}{" "}
          <a href="mailto:dimasmakouz@gmail.com" target="blank">
            dimasmakouz@gmail.com.
          </a>
        </Action>
        <Social>
          {socialLinks.map(link => (
            <Icon key={link.name} type={link.name} linkTo={link.linkTo} />
          ))}
        </Social>
      </Info>
    </AboutContainer>
  );
};

export default AboutContent;
