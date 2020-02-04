import styled from 'styled-components';

type TButtonProps = {
  secondary?: boolean,
  isBlock?: boolean
}

export const StyledButton = styled.button<TButtonProps>`
  display: inline-block;
  appearance: none;
  cursor: pointer;

  border: 0;
  border-radius: 2px;

  background-color: #009688;
  color: #fff;
  box-shadow: 0 2px 4px #009688;

  padding: 13px;

  transition: background-color 0.3s;

  &:hover {
    background-color: #00796B;
    transition: background-color 0.3s;
  }

  &:disabled {
    background-color: #E0E0E0;
    color: rgba(0,0,0,0.65);
    box-shadow: none;
  }

  &:focus {
    outline: 2px solid black;
  }
`
