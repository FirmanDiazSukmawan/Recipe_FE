import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/navbar";
import Footer from "../../Component/footer/footer";
import { url } from "../../Component/login/login";
import axios from "axios";
import ModalProfile from "../../Component/modalProfile";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalUpdate from "../../Component/modalUpdateMyRecipe";

function Profile() {
  let [users, setUsers] = useState([]);
  let [recipes, setRecipes] = useState([]);
  // console.log(users.image);
  const getId = localStorage.getItem("userId");
  // console.log(getId);
  useEffect(() => {
    axios
      .get(`${url}/users/${getId}`)
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/recipe/user/${getId}`)
      .then((res) => {
        setRecipes(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (recipeId) => {
    // console.log(recipeId);
    axios
      .delete(`${url}/recipe/${recipeId}`)
      .then((res) => {
        toast.success("delete recipe successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <ToastContainer/>
      <div>
        <Navbar />
      </div>
      <section id="profile" style={{ paddingBottom: 127 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg d-flex  flex-column align-items-center">
              <div className=" position-relative">
                <img src={users.image} alt="image" className="fotoprofile" />
                <div className="dropdown-center" id="dropdown">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 20H21"
                        stroke="#EFC81A"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
                        stroke="#EFC81A"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
               

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        <ModalProfile/>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Change Password
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className="nameprofile">{users.username}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home" style={{ height: "auto" }}>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  {recipes.map((item) => (
                    <div className="col" key={item.recipes_id}>
                      <div
                        className="card "
                        style={{ width: 370, height: 250 }}
                      >
                        <img
                          src={item.image}
                          className="card-img "
                          alt="..."
                          style={{
                            width: 370,
                            height: 250,
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-img-overlay">
                          <h5 className="card-title position-absolute bottom-0">
                            {item.name_recipes}
                          </h5>
                       <ModalUpdate item={item} recipeId={item.recipes_id}/>
                          <button className="btn btn-danger "onClick={() => handleDelete(item.recipes_id)}>
                            <i
                              className="bi bi-trash"
                              style={{ color: "white" }}
                              
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  {recipes.map((item) => (
                    <div className="col" key={item.recipes_id}>
                      <div
                        className="card "
                        style={{ width: 370, height: 250 }}
                      >
                        <img
                          src={item.image}
                          className="card-img "
                          alt="..."
                          style={{
                            width: 370,
                            height: 250,
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-img-overlay">
                          <h5 className="card-title position-absolute bottom-0">
                            {item.name_recipes}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                  {recipes.map((item) => (
                    <div className="col" key={item.recipes_id}>
                      <div
                        className="card "
                        style={{ width: 370, height: 250 }}
                      >
                        <img
                          src={item.image}
                          className="card-img "
                          alt="..."
                          style={{
                            width: 370,
                            height: 250,
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-img-overlay">
                          <h5 className="card-title position-absolute bottom-0">
                            {item.name_recipes}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
