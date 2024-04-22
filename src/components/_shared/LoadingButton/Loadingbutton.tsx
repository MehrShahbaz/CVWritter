import { ButtonHTMLAttributes } from 'react';

import Spinner from '../Spinner/Spinner';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
}

const LoadingButton = ({
  loading: isLoading,
  loadingText,
  disabled,
  children,
  ...props
}: LoadingButtonProps): JSX.Element => (
  <button
    className="transition-colors bg-violet-600 text-white font-medium px-4 py-2 rounded-md hover:bg-violet-700 disabled:bg-violet-400"
    disabled={isLoading || disabled}
    {...props}
  >
    {isLoading ? (
      loadingText ? (
        loadingText
      ) : (
        <div className="w-full flex items-center justify-center">
          <Spinner theme="dark" />
        </div>
      )
    ) : (
      children
    )}
  </button>
);

export default LoadingButton;
