import React, { Ref, HTMLAttributes } from 'react';
import { InputLabel } from '../InputLabel';
import { BaseTextInput } from './Styles';

interface ISelectInputProps extends HTMLAttributes<HTMLDivElement> {
  inputKey: string,
  labelText: string
};

type TRef = Ref<HTMLInputElement>;

const StyledTextInput = React.forwardRef(
  ({ inputKey, labelText, ...inputProps }: ISelectInputProps, fowardedRef: TRef) => (
    <>
      <InputLabel htmlFor={inputKey}>{labelText}</InputLabel>
      <BaseTextInput name={inputKey} id={inputKey} ref={fowardedRef} {...inputProps}></BaseTextInput>
    </>
  )
);

StyledTextInput.displayName = "StyledTextInput";

export { StyledTextInput as TextInput };
