import styled from 'styled-components';

export const StyledCloseButton = styled.button`
  display: inline-block;
  appearance: none;
  cursor: pointer;
  margin-left: 3px;

  background-color: transparent;
  color: inherit;
  border: 0;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transition: all 0.2s;
  }

  &:focus {
    outline: 2px solid black;
  }
`
