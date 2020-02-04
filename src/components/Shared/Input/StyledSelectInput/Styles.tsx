import styled from 'styled-components';
import { InputBorder, InputFont, InputFocus } from '../commonStyles';

export const SelectInputWrapper = styled.div`
    position: relative;
    width: 100%;

    &::after {
        content: '▼';
        position: absolute;
        top: 8px;
        right: 10px;
        font-size: 15px;
        pointer-events: none;
    }
`;

export const BaseSelectInput = styled.select`
    appearance: none;
    background-color: transparent;

    width: 100%;
    padding: 5px;

    ${InputFont}

    ${InputBorder}

    ${InputFocus}

    /** IE11 indicator fix */
    &::-ms-expand {
        display: none;
    }
`
