import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../../redux/slices/authSlice';
import { AppDispatch } from '../../../redux/store';
import Modal from '../Modal/Modal';

const LogoutButton = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setOpen] = useState(false);
  const loggedOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
      >
        Logout
      </button>
      <Modal show={isOpen} setShow={setOpen}>
        <div className="max-w-md w-full bg-white py-6 rounded-lg">
          <h2 className="text-lg font-semibold text-center mb-10">Logout ?</h2>
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
    </>
  );
};

export default LogoutButton;
