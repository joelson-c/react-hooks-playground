import styled, { css } from 'styled-components';

type TResultTextProps = {
  color: string,
  /**
   * This prop only sets the font-family.
   * The font fetching itself should be handled on component due to `styled-components` gotchas with `@imports`
   */
  fontFamily?: string,
}

export const StyledResultText = styled.span<TResultTextProps>`
  position: absolute;

  ${props => props.fontFamily && css`
    font-family: ${props.fontFamily}, sans-serif;
  `}

  top: 10px;
  left: 10px;
  width: calc(100% - 10px);

  font-size: 25px;
  color: ${props => props.color};
  text-align: left;

  overflow: visible;
  word-break: break-all;
  z-index: 1;
`
