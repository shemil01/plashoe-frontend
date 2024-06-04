import React, { useContext, useEffect, useState } from "react";
import myContext from "../../../UseContext/Context";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
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
import { Axios } from "../../Mainrouter";

const Product = () => {
  const { productData, setProductData } = useContext(myContext);
  const [product, setProduct] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [addProduct, setAddProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
    imageURL: "",
  });

  const [editProduct, setEditProduct] = useState({
    id: "",
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
    imageURL: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    Axios.get("/admin/allproduct", { withCredentials: true })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Product fetching error", error);
      });
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("name", editProduct.name);
    formData.append("category", editProduct.category);
    formData.append("description", editProduct.description);
    formData.append("price", editProduct.price);
    if (editProduct.image) {
      formData.append("image", editProduct.image);
    }

    await Axios.put(`/admin/update/${editProduct.id}`, formData, {
      withCredentials: true,
    })
      .then((response) => {
        fetchProducts();
        setShowEdit(false);
        setEditProduct({
          id: "",
          name: "",
          category: "",
          description: "",
          price: "",
          image: null,
        });
      })
      .catch((error) => {
        console.error("Product editing error", error);
      });
  };

  const handleAddSubmit = async () => {
    const formData = new FormData();
    formData.append("name", addProduct.name);
    formData.append("category", addProduct.category);
    formData.append("description", addProduct.description);
    formData.append("price", addProduct.price);

    if (addProduct.image) {
      formData.append("image", addProduct.image);
    } else if (addProduct.imageURL) {
      formData.append("imageURl", addProduct.imageURL);
    }

    await Axios.post("/admin/add", formData, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setShowAdd(false);
        fetchProducts();
        setAddProduct({
          name: "",
          category: "",
          description: "",
          price: "",
          image: null,
          imageURL: "",
        });
      })
      .catch((error) => {
        console.error("Product Adding error", error);
      });
  };

  const deleteProduct = async (_id) => {
    await Axios.delete(`/admin/delete/${_id}`, { withCredentials: true })
      .then((response) => {
        fetchProducts();
      })
      .catch((error) => {
        console.error("Product deleting error", error);
      });
  };

  return (
    <>
      <AdminNav />
      <div className="productNav">
        <Link onClick={() => setShowAdd(true)}>Add Product</Link>
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
        {product?.map((value) => (
          <MDBCard style={{ width: "20em" }} key={value._id}>
            <MDBCardImage src={value.image} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{value.name}</MDBCardTitle>
              <MDBCardText>₹{value.price}</MDBCardText>
              <MDBBtn
                className="m-2"
                onClick={() => {
                  setShowEdit(true);
                  setEditProduct({
                    id: value._id,
                    name: value.name,
                    category: value.category,
                    description: value.description,
                    price: value.price,
                    image: null,
                  });
                }}
              >
                Edit
              </MDBBtn>
              <MDBBtn
                className="m-2 bg-danger"
                onClick={() => deleteProduct(value._id)}
              >
                Delete
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
      <div>
        <Modal show={showAdd} onHide={() => setShowAdd(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Name"
              id="formControlLg"
              type="text"
              size="lg"
              // value={addProduct.name}
              onChange={(e) =>
                setAddProduct({ ...addProduct, name: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Category"
              id="formControlLg"
              type="text"
              size="lg"
              // value={addProduct.category}
              onChange={(e) =>
                setAddProduct({ ...addProduct, category: e.target.value })
              }
            />
            {/* <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Description"
              id="formControlLg"
              type="text"
              size="lg"
              value={addProduct.description}
              onChange={(e) => setAddProduct({ ...addProduct, description: e.target.value })}
            /> */}
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Price"
              id="formControlLg"
              type="text"
              size="lg"
              // value={addProduct.price}
              onChange={(e) =>
                setAddProduct({ ...addProduct, price: e.target.value })
              }
            />
            <input
              type="file"
              onChange={(e) =>
                setAddProduct({
                  ...addProduct,
                  image: e.target.files[0],
                  imageURL: "",
                })
              }
            />
            <input
              type="text"
              value={addProduct.imageURL}
              onChange={(e) =>
                setAddProduct({
                  ...addProduct,
                  imageURL: e.target.value,
                  image: null,
                })
              }
              placeholder="Image URL"
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
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Name"
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
              label="Category"
              id="formControlLg"
              type="text"
              size="lg"
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Description"
              id="formControlLg"
              type="text"
              size="lg"
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct({ ...editProduct, description: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Price"
              id="formControlLg"
              type="text"
              size="lg"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: e.target.value })
              }
            />
            <MDBInput
              style={{ color: "black" }}
              wrapperClass="mb-4"
              labelClass="text-black"
              label="Image"
              id="formControlLg"
              type="file"
              size="lg"
              onChange={(e) =>
                setEditProduct({ ...editProduct, image: e.target.files[0] })
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
