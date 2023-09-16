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
  }, [getId]);

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
  }, [getId]);

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
      <section id="profile" style={{ minHeight:"90vh" }}>
      <div className="container-fluid">
          <div className="row">
            <div className="col-lg d-flex  flex-column align-items-center">
              <div className=" position-relative">
                <img src={users.image} alt="user foto" className="fotoprofile" />
                <ModalProfile/>
              </div>
              <h1 className="nameprofile">{users.username}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <Tabs
            defaultActiveKey="MyRecipe"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="MyRecipe" title="MyRecipe" style={{ height: "auto" }}>
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
                          <h5 className="card-title position-absolute bottom-0" style={{color:"#fff", fontFamily:"Airbnb Cereal App",fontSize:28,textTransform:"capitalize"}}>
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
            <Tab eventKey="Saved Recipe" title="Saved Recipe">
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
            <Tab eventKey="Liked Recipe" title="Liked Recipe">
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
