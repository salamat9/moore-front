import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Loader from '../components/UI/loader/Loader';
import './styles.scss';

const PageWrapper = ({isLoading, children}) => {
  return (
    <div>
      {isLoading ? <Loader fullHeight /> : null}

      <div className='layout-content'>
          <Sidebar />
          {children}
      </div>
    </div>
  );
};

export default PageWrapper;