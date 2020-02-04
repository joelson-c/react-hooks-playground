import { object, string } from 'yup';
import { TFormData } from '../../store/commonTypes';

const validFontStyles = ['Roboto', 'Anton', 'Dancing Script', 'Lobster', 'Zhi Mang Xing'];
const validColors = ['black', 'white', 'darkblue', 'purple', 'green'];

const validationSchema = object().shape<TFormData>({
  dogBreed: string().required('You have to select a dog breed.'), /* select input */
  dogName: string()
    .required('Dog name is required.')
    .max(50, 'The dog name should not have more than 50 characters.'), /* text input */
  textStyle: string().oneOf(validFontStyles, 'Select a valid text style.'), /* select input */
  textColor: string().oneOf(validColors, 'Select a valid text color.') /* select input */
});

export default validationSchema;
