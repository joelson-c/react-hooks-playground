import React, { Ref, HTMLAttributes } from 'react';

import { InputLabel } from '../InputLabel';
import { SelectInputWrapper, BaseSelectInput } from './Styles';

interface ISelectInputProps extends HTMLAttributes<HTMLSelectElement> {
  inputKey: string,
  labelText: string,
  children: React.ReactNode | React.ReactNode[],
  inputProps?: HTMLAttributes<HTMLSelectElement>
};

type TRef = Ref<HTMLSelectElement>;

const StyledSelectInput = React.forwardRef(
  ({ inputKey, labelText, children, ...inputProps }: ISelectInputProps, fowardedRef: TRef) => (
    <>
      <InputLabel htmlFor={inputKey}>{labelText}</InputLabel>

      <SelectInputWrapper>
        <BaseSelectInput name={inputKey} id={inputKey} ref={fowardedRef} {...inputProps}>
          {children}
        </BaseSelectInput>
      </SelectInputWrapper>
    </>
  )
);

StyledSelectInput.displayName = "StyledSelectInput";

export { StyledSelectInput as SelectInput };

