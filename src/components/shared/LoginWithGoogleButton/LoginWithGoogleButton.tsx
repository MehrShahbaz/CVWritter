import { GoogleGLogo } from 'assets';
import { loginWithGoogle } from 'services/authenticationSerive';

const LoginWithGoogleButton = (): JSX.Element => (
  <button
    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
    onClick={loginWithGoogle}
  >
    <img src={GoogleGLogo} alt="Google logo" height={20} width={20} />
    <div className="ml-2">Google</div>
  </button>
);

export default LoginWithGoogleButton;
