import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import UseTitle from '../Custum/CustumHook'
import {
  MDBBtn,
} from "mdb-react-ui-kit";

const Lookbook = () => {
  UseTitle("Look book")
  return (
    <div>
      <NavBar/>
      <div className="col-12 pt-4 main-image pe-5 ps-5 ">
      <h1 style={{color:'black'}}>LOOK BOOK</h1>
      <img  style={{backgroundPosition:'50%' , backgroundSize:'cover',height:'40rem',width:'1400px'}} src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg" alt="" />
     <div>
      <h1>Fall/Winter 2021</h1>
      <p>Elementum donec leo vulputate sit proin suspendisse<br/> malesuada neque proin gravida ut platea vitae duis hac hac <br/>vel id ipsum ultricies ut faucibus ultrices.</p>
      <MDBBtn
              outline
              color="light"
              
              className="m-2"
              id="mhovbtn"
            >
              Shop Now
            </MDBBtn>
     </div>
     <div className="col-12 pt-4 main-image pe-5 ps-5">
      <img style={{backgroundPosition:'50%' , backgroundSize:'cover',height:'40rem',width:'1400px'}} src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg" alt="" />
     </div>
     <div>
      <h1>Spring/Summer 2021</h1>
      <p>Elementum donec leo vulputate sit proin suspendisse<br/> malesuada neque proin gravida ut platea vitae duis hac hac vel id <br/>ipsum ultricies ut faucibus ultrices.

</p>
     </div>
<div  className="col-12 pt-4 main-image pe-5 ps-5">
  <img  style={{backgroundPosition:'50%' , backgroundSize:'cover',height:'40rem',width:'1400px'}}src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg" alt="" />
</div>
<div>
  <h1>Adventurer Gear</h1>
  <p>
Elementum donec leo vulputate sit proin suspendisse <br/>malesuada neque proin gravida ut platea vitae duis hac hac vel<br/> id ipsum ultricies ut faucibus ultrices.</p>
</div>
      </div>
      <Footer />
      </div>
  )
}
  
export default Lookbook