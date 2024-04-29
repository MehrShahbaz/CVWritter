import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import AppleLogo from 'assets/apple-logo.svg';

import { firebaseAuth } from '../../../firebaseConfig/firebaseAuth';

const provider = new GoogleAuthProvider();
const LoginWithAppleButton = (): JSX.Element => {
  const loginWithGoogle = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log(user, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
      onClick={loginWithGoogle}
    >
      <img src={AppleLogo} alt="Google logo" height={20} width={20} />
      <div className="ml-2">Apple</div>
    </button>
  );
};

export default LoginWithAppleButton;
