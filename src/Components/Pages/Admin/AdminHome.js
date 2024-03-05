import React from 'react';
import AdminNav from './Nav/AdminNav';

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div
        style={{
          backgroundImage: `url('https://images.footlocker.com/content/dam/final/footfockerasiapacific/site/homepage/2021/australia/dct-launch/category-page-hero-s/20201221-fl-nike-brand-page-m-asp%201.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          marginLeft: '50px',
          width:'100%',
          display: 'flex',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default AdminHome;
