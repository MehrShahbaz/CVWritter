import { useCallback, useEffect } from 'react';

import { getAllOrganizations } from 'services/organizationService';

const Organization = (): JSX.Element => {
  useEffect(() => {
    console.log('Called');
    getAllOrganizations();
  }, []);
  const onClickAddOrganization = useCallback(() => {
    console.log('Clicked');
  }, []);

  return (
    <div>
      <div>Organization</div>
      <button onClick={onClickAddOrganization}>Add Organization</button>
    </div>
  );
};

export default Organization;
