import styled from 'styled-components';
import { InputBorder, InputFocus, InputFont } from '../commonStyles';

type TTextInputProps = { maxLength?: number; fullWidth?: boolean };

export const BaseTextInput = styled.input<TTextInputProps>`
    appearance: none;
    display: block;

    outline: 0;
    width: 100%;
    padding: 5px;

    ${InputFont}

    ${InputBorder}

    ${InputFocus}
`;
