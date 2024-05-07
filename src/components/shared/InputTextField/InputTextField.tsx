/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

type InputTextFieldProps = {
  field: any;
  form: any;
  heading: string;
  errors?: string;
  [key: string]: any;
  minHeight?: number;
};

const InputTextField = ({ field, heading, errors, minHeight, ...props }: InputTextFieldProps): JSX.Element => {
  const [isBlur, setIsBlur] = useState(false);
  const handleFocus = useCallback((isBlured: boolean) => {
    setIsBlur(isBlured);
  }, []);

  return (
    <div className="mb-3">
      <label htmlFor={field.name} className="block ml-2 text-sm text-gray-500 font-light">
        {heading}
      </label>
      <textarea
        style={{ height: minHeight ?? 100 }}
        {...field}
        {...props}
        onBlur={() => handleFocus(true)}
        onFocus={() => handleFocus(false)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-base outline-none focus:border-blue-500"
      />
      {errors && isBlur && <span className="text-red-500">{errors}</span>}
    </div>
  );
};

export default InputTextField;
