import styled from "styled-components";

const Gradient = styled.div`
  margin-top: ${props => props.theme.headerHeight};
  background-image: ${props =>
    (props.skills && "linear-gradient(-90deg,#d62d2d, #dc5a32)") ||
    (props.portfolio && "linear-gradient(-90deg,#F2C94C,#F2994A)") ||
    "blue"};
  /* background-size: 100% 150px; */
  background-repeat: no-repeat;
  /* background-position: 0 0; */
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};
`;

export default Gradient;

// gradient:
// props.skills
// 	? "linear-gradient(-90deg,#d62d2d, #dc5a32)"
// 	: props.portfolio
// 	? "linear-gradient(-90deg,#F2C94C,#F2994A)"
// 	: "blue"
