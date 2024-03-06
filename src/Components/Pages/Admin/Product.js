import React, { useContext, useState } from "react";
import myContext from "../../../UseContext/Context";
import Modal from "react-bootstrap/Modal";
import {Link} from 'react-router-dom'
import "./Product.css";
import AdminNav from "./Nav/AdminNav";
import toast from "react-hot-toast";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const Product = () => {
  const { productData, setProductData } = useContext(myContext);
  const [filterType, setFilterType] = useState("All collection");
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [editProduct, setEditProduct] = useState({
    name: "",
    image: "",
    price: "",
    id: "",
  });

  const [addProduct, setAddProduct] = useState({});

  const handleEditSubmit = () => {
    if (!editProduct.name || !editProduct.price) {
      toast.error("Please fill in both name and price fields");
      return;
    }

    const updatedProductData = productData.map((item) =>
      item.id === editProduct.id ? editProduct : item
    );

    setProductData(updatedProductData);
    setShowEdit(false);
    setEditProduct({
      name: "",
      image: "",
      price: "",
      id: "",
    });
  };

  const handleAddSubmit = () => {
    if (!addProduct.name || !addProduct.image || !addProduct.price) {
      toast.error("Please fill all inputs");
    } else {
      const newId = productData.length + 1;
      const newProduct = { ...addProduct, id: newId };
      setProductData([...productData, newProduct]);
      setShowAdd(false);
      setAddProduct({
        name: "",
        image: "",
        price: "",
      });
    }
  };
  const filteredData =
    filterType === "All collection"
      ? productData
      : productData.filter((item) => item.gender === filterType);

  const deleteItem = (itemId) => {
    const updatedData = productData.filter((item) => item.id !== itemId);
    setProductData(updatedData);
  };

  return (
    <>
      <AdminNav />
      <div className="productNav">
        <Link onClick={() => setFilterType("All collection")}>
          All collection
        </Link>

        <Link onClick={() => setFilterType("Men")}>Men</Link>
 

        <Link onClick={() => setFilterType("Women")}>Woman</Link>

        <Link onClick={() => setShowAdd(true)}>AddProduct</Link>
      </div>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginLeft: "200px",
        }}
      >
        {filteredData.map((value) => {
          return (
            <MDBCard style={{ width: "20em" }}>
              <MDBCardImage src={value.image} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{value.name}</MDBCardTitle>
                <MDBCardText>${value.price}</MDBCardText>
                <MDBBtn
                  className="m-2"
                  onClick={() => {
                    setShowEdit(true);
                    setEditProduct({ ...editProduct, id: value.id });    
                  }}
                >
                  Edit
                </MDBBtn>
                <MDBBtn
                  className="m-2 bg-danger"
                  onClick={() => deleteItem(value.id)}
                >
                  Delete
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
      <div>
        <Modal show={showAdd} onHide={() => setShowAdd(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4 "
              labelClass="text-black"
              label="image"
              id="formControlLg"
              type="text"
              size="lg"
              value={addProduct.image}
              onChange={(e) =>
                setAddProduct({ ...addProduct, image: e.target.value },
                  )
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="name"
              id="formControlLg"
              type="text"
              size="lg"
              value={addProduct.name}
              onChange={(e) =>
                setAddProduct({ ...addProduct, name: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="price"
              id="formControlLg"
              type="text"
              size="lg"
              value={addProduct.price}
              onChange={(e) =>
                setAddProduct({ ...addProduct, price: e.target.value })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <MDBBtn className="m-2" onClick={() => setShowAdd(false)}>
              Close
            </MDBBtn>
            <MDBBtn className="m-2" onClick={handleAddSubmit}>
              Save changes
            </MDBBtn>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal show={showEdit} onHide={() => setShowEdit(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4 "
              labelClass="text-black"
              label="image"
              id="formControlLg"
              type="text"
              size="lg"
              value={editProduct.image}
              onChange={(e) =>
                setEditProduct({ ...editProduct, image: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="name"
              id="formControlLg"
              type="text"
              size="lg"
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="price"
              id="formControlLg"
              type="text"
              size="lg"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <MDBBtn className="m-2" onClick={() => setShowEdit(false)}>
              Close
            </MDBBtn>
            <MDBBtn className="m-2" onClick={handleEditSubmit}>
              Save changes
            </MDBBtn>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Product;
