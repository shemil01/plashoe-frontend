import React from 'react'
import UseTitle from '../Custum/CustumHook';
import NavBar from '../Nav'
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

const Contact = () => {
  UseTitle('Contact')
  return (
    <div>
        <NavBar/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />



      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
        </div>
  )
}

export default Contact