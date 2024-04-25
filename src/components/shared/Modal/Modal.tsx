interface Props {
  children: React.ReactNode;
  show: boolean;
  setShow: (arg: boolean) => void;
}

const Modal = ({ children, show: isShow, setShow }: Props): JSX.Element => (
  <div
    className={`fixed top-0 left-0 w-full h-screen z-20 flex items-center justify-center ${
      isShow ? 'block' : 'hidden'
    }`}
  >
    {children}
    {/* overlay */}
    <button
      className={`fixed bg-black/50 -z-10 top-0 left-0 w-full h-screen ${isShow ? 'block' : 'hidden'}`}
      onClick={() => setShow(false)}
    >
      .
    </button>
  </div>
);

export default Modal;
