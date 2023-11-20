import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Loader from '../components/UI/loader/Loader';
import './styles.scss';

const PageWrapper = ({isLoading, children}) => {
  return (
    <div className='layout'>
      {isLoading ? <Loader fullHeight /> : null}

      <div className='layout-content'>
          <Sidebar />
          <div className='layout-content__right'>{children}</div>
          
      </div>
    </div>
  );
};

export default PageWrapper;