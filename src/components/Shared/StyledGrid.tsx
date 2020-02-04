import styled, { css } from 'styled-components';

type TContainerProps = {
  flexDirection?: 'column' | 'row',
  alignAllItems?: 'center',
  disableWrap?: boolean
}

type TGridItemProps = {
  desktopFlexBasis?: string,
  disableGrowing?: boolean
  disablePadding?: boolean,
  minWidth?: string
}

export const StyledContainer = styled.div<TContainerProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  flex-wrap: ${props => props.disableWrap ? 'nowrap' : 'wrap'};
  align-items: ${props => props.alignAllItems || null};
`;

export const StyledGridItem = styled.div<TGridItemProps>`
  flex: ${props => Number(!props.disableGrowing) ?? 1} 1 ${props => props.desktopFlexBasis ?? 'auto'};

  ${props => props.desktopFlexBasis && css`
    @media screen and (max-width: 1024px) {
      flex-basis: auto;
    }
  `}

  padding: ${props => props.disablePadding ? '0' : '1rem'};
  min-width: ${props => props.minWidth ?? 'auto'};
`;
