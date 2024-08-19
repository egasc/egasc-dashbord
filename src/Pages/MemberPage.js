// import React, { Fragment } from 'react';
import Sidebar from '../Components/sidebar/Sidebar';
import Members from '../Components/members/Members';

const MemberPage = () => {
  return (
    <div className="row">
      <Sidebar/>
      <Members/>
    </div>
  );
};

export default MemberPage;
