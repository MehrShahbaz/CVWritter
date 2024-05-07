import { BackButtonLogo } from 'assets';

const BackButton = (): JSX.Element => {
  const buttonSize = 30;

  return (
    <div>
      <button>
        <img src={BackButtonLogo} alt="Back Button" height={buttonSize} width={buttonSize} />
      </button>
    </div>
  );
};

export default BackButton;
