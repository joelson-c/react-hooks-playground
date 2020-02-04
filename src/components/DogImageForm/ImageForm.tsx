import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form/dist/react-hook-form.ie11';

import { StyledButton } from '../Shared/StyledButton';
import { TextInput } from '../Shared/Input/StyledTextInput';
import { SelectInput } from '../Shared/Input/StyledSelectInput';
import { TFormData } from '../../store/commonTypes';
import validationSchema from './validationSchema';
import { InputWrapper } from '../Shared/Input/InputWrapper';

type TImageFormProps = {
    initialFormData?: TFormData,
    breedList: Array<string>,
    onFormSubmit: (formData: TFormData) => void
}

function ImageForm(props: TImageFormProps) {
    const { register, errors, handleSubmit } = useForm<TFormData>({ validationSchema });
    const { onFormSubmit, initialFormData } = props;

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <InputWrapper>
                <SelectInput
                    inputKey="dogBreed"
                    labelText="Dog breed"
                    ref={register}
                    defaultValue={initialFormData?.dogBreed}>
                    {props.breedList.map((breedName, idx) => (
                        <option key={idx}>
                            {breedName}
                        </option>
                    ))}
                </SelectInput>
                <ErrorMessage errors={errors} name="dogBreed" />
            </InputWrapper>


            <InputWrapper>
                <TextInput
                    inputKey="dogName"
                    labelText="Dog name"
                    ref={register}
                    defaultValue={initialFormData?.dogName} />
                <ErrorMessage errors={errors} name="dogName" />
            </InputWrapper>

            <InputWrapper>
                <SelectInput
                    inputKey="textStyle"
                    labelText="Text style"
                    ref={register}
                    defaultValue={initialFormData?.textStyle}>
                    <option>Roboto</option>
                    <option>Anton</option>
                    <option>Dancing Script</option>
                    <option>Lobster</option>
                    <option>Zhi Mang Xing</option>
                </SelectInput>

                <ErrorMessage errors={errors} name="textStyle" />
            </InputWrapper>

            <InputWrapper>
                <SelectInput
                    inputKey="textColor"
                    labelText="Text color"
                    ref={register}
                    defaultValue={initialFormData?.textColor}>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="darkblue">Dark Blue</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                </SelectInput>
            </InputWrapper>

            <StyledButton type="submit">Save</StyledButton>
        </form>
    );
}

export default ImageForm;
