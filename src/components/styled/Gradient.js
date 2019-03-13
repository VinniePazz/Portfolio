import styled from "styled-components";


const Gradient = styled.div`
  margin-top: ${props => props.theme.headerHeight};
  background-image: linear-gradient(-90deg, #dc5a32, #c44a67);
  background-size: 100% 150px;
  background-repeat: no-repeat;
  background-position: 0 0;
`;

export default Gradient;