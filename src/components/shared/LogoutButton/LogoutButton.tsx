import { useCallback, useState } from 'react';

import { logout } from '../../../services/authenticationSerive';
import Modal from '../Modal/Modal';

const LogoutButton = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const loggedOut = useCallback(() => {
    logout();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
      >
        Logout
      </button>
      {isOpen && (
        <Modal show={isOpen} setShow={setOpen} heading="Logout ?">
          <div className="max-w-md w-full bg-white py-6 rounded-lg">
            <div className="px-4 flex p-4 pb-10 gap-4 flex-col">
              <button onClick={() => setOpen(false)} className="px-6 py-3 bg-violet-200 rounded-lg hover:bg-violet-300">
                Cancel
              </button>
              <button onClick={loggedOut} className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
                Logout
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LogoutButton;
