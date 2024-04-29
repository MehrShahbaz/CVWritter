import { useParams } from 'react-router-dom';

const JobDetails = (): JSX.Element => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <div>{productId}</div>
    </div>
  );
};

export default JobDetails;
