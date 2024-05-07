import { Spinner } from 'react-bootstrap';

const CustomSpinner = (): JSX.Element => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <Spinner />
  </div>
);

export default CustomSpinner;
