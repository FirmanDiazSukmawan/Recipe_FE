import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/navbar";
import Footer from "../../Component/footer/footer";
import axios from "axios";
import { url } from "../../Component/login/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarHome from "../../Component/NavbarHome/navbarHome";

function AddRecipe() {
  const users_id = localStorage.getItem('userId')
  console.log(users_id)
  const [saveImage,setSaveImage] = useState("")
  const [data, setData] = useState({
    name_recipes:"",
    image:"",
    video:"",
    ingredients:"",
    users_id:users_id,
});

const handleChange = (e) => {
 setData({
    ...data,
    [e.target.name]: e.target.value,
  });
  console.log(data)
};

const handleUpload =(e) => {
  const uploader = e.target.files[0];
  setSaveImage(uploader);
  console.log(uploader)
}

const handleSubmit = async (event) => {
  event.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append("name_recipes", data.name_recipes);
  formDataToSend.append("image", saveImage);
  formDataToSend.append("video", data.video);
  formDataToSend.append("ingredients", data.ingredients);
  formDataToSend.append("users_id", data.users_id);


  try {
    const response = await axios.post(
      `${url}/recipe`,
      formDataToSend
    );
    console.log(response,"sucessfully")
    toast.success(
      "input recipe successfully"
    );
  } catch (error) {
    console.log("Error creating product:", error);
  }
};



  return (
    <>
    <ToastContainer/>
      <div>
        <Navbar />
      </div>
      <section id="addRecipe">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className=" d-flex justify-content-center align-items-center">
                <div className="image position-relative">
                  <input
                    className="form-control opacity-0"
                    type="file"
                    id="image"
                    name="image" 
                    onChange={handleUpload}
                  />
                  <div id="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M50.6667 8H13.3333C10.3878 8 8 10.3878 8 13.3333V50.6667C8 53.6122 10.3878 56 13.3333 56H50.6667C53.6122 56 56 53.6122 56 50.6667V13.3333C56 10.3878 53.6122 8 50.6667 8Z"
                        stroke="#666666"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.6667 26.6666C24.8759 26.6666 26.6667 24.8758 26.6667 22.6666C26.6667 20.4575 24.8759 18.6666 22.6667 18.6666C20.4576 18.6666 18.6667 20.4575 18.6667 22.6666C18.6667 24.8758 20.4576 26.6666 22.6667 26.6666Z"
                        stroke="#666666"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M55.9999 40L42.6666 26.6666L13.3333 56"
                        stroke="#666666"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="addimg" >Add photo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <input
                id="tittle"
                className="form-control"
                type="text"
                placeholder="tittle"
                aria-label="form-control-lg example"
                onChange={handleChange}
                name="name_recipes"
                value={data.name_recipes}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center align-items-center text-start">
              <textarea
                id="ingredients"
                className="form-control name="
                placeholder="Ingredients"
                onChange={handleChange}
                name="ingredients"
                value={data.ingredients}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className=" d-flex justify-content-center align-items-center">
                <div className="video position-relative my-5">
                  <input
                    id="tittle"
                    className="form-control"
                    type="text"
                    placeholder="video"
                    aria-label="form-control-lg example"
                    onChange={handleChange}
                    name="video"
                    value={data.video}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="d-grid col-12 mx-auto justify-content-center">
                <button className="btn btn-warning " type="button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddRecipe;
