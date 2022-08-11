import React from "react";
import styled from "styled-components";

const StyledTilte = styled.h1`
  color: ${(props) => props.color || props.theme.colors.primary};
`;

const Title = (props) => {
  return <StyledTilte {...props} />;
};

export default Title;
