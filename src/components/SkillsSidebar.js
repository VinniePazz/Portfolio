import React, { Fragment } from "react";
import styled from "styled-components";
import posed from "react-pose";
import ProgressBar from "./styled/ProgressBar";
import Logo from "./Logo";

const StyledSkillsSidebar = styled.div`
  grid-area: sidebar;
  /* display: flex;
	flex-direction: column; */
  overflow-y: auto;

  background: ${({ theme }) => theme.lightDark1};
  border-radius: 3px;
`;

const ListItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.dark};
  height: auto;
  display: flex;
  cursor: pointer;
`;

const Icon = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${({ isOpen }) =>
    isOpen ? "10px 10px 0 10px" : " 0 10px 10px 10px;"};
  border-color: ${({ isOpen }) =>
    isOpen
      ? "#535353 transparent transparent transparent"
      : "transparent transparent #535353 transparent"};
`;

const AnimatedContent = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

const Content = styled(AnimatedContent)`
  background: #333333;
  font-size: 0.7rem;
  font-weight: 300;
  color: ${({ theme }) => theme.creamy};
  overflow: hidden;
  /* height: ${({ isOpen }) => (isOpen ? "auto" : "0")}; */
`;

const SkillsSidebar = props => {
  return (
    <StyledSkillsSidebar>
      {props.data.map(({ id, percentage, color, x }) => (
        <Fragment key={id}>
          <ListItem onClick={() => props.toogleItem(id)}>
            <Icon>
              <Logo type={x ? x : "default"} />
            </Icon>
            <ProgressBar percentage={percentage} color={color} />
            <Arrow>
              <Triangle isOpen={id === props.itemToReveal ? true : false} />
            </Arrow>
          </ListItem>
          <Content
            isOpen={id === props.itemToReveal ? true : false}
            pose={id === props.itemToReveal ? "open" : "closed"}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            deleniti, sit veritatis totam iste, vitae dolore ab adipisci quos
            placeat aspernatur sequi facilis fugiat quaerat saepe architecto
            praesentium non aliquid.
          </Content>
        </Fragment>
      ))}
    </StyledSkillsSidebar>
  );
};

export default SkillsSidebar;
