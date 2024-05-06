import { useEffect, useState } from 'react';

import { CopyIcon } from 'assets';
import { showNotification } from 'helpers/appHelper';

interface CopyButtonProps {
  data: string | object;
}

const CopyButton = ({ data }: CopyButtonProps): JSX.Element => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [copied]);

  const copyToClipboard = (): void => {
    let textToCopy: string;

    if (typeof data === 'string') {
      textToCopy = data;
    } else {
      textToCopy = JSON.stringify(data);
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        showNotification({ title: 'Job Description Copied', message: '', type: 'success' });
      })
      .catch((error) => console.error('Error copying to clipboard: ', error));
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          copied ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
        }`}
        onClick={copyToClipboard}
        disabled={copied}
      >
        <img src={CopyIcon} alt="Copy" height={20} width={20} />
      </button>
    </div>
  );
};

export default CopyButton;
