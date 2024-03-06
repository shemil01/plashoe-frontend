import React from 'react';
import AdminNav from './Nav/AdminNav';

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=1060&t=st=1709629253~exp=1709629853~hmac=6e9d47d080323e894a6d33a23a2aaaec85a8ff5f619fd2646e40093211a58523)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          marginLeft: '50px',
          width:'1450px',
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          fontWeight:'bold'
        }}
      >
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default AdminHome;
