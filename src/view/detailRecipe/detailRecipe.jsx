import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/navbar";
import Footer from "../../Component/footer/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../Component/login/login";
import NavbarHome from "../../Component/NavbarHome/navbarHome";

function DetailRecipe() {
  const [data, SetData] = useState([]);
  const { recipes_id } = useParams();
  const navigate = useNavigate()
  console.log(recipes_id);

  useEffect(() => {
    axios
      .get(`${url}/recipe/${recipes_id}`)

      .then((res) => {
        SetData(res.data.data[0]);
        console.log(res.data.data[0]);
      })
      .catch((err) => {
        return (err);
      });
  }, [recipes_id]);

  const handleRecipeClick = (recipes_id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailVideo/${recipes_id}`);
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section id="detailRecipe">
        <div className="container-fluid">
          <div className="row">
            <h1 className="col-xl-12 text-center">{data.name_recipes}</h1>
          </div>
          <div className="image row">
            <div className="col-xl-12 d-grid justify-content-center ">
              <img src={data.image} alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2>Ingredients</h2>
                <p className="desk">
                  {data.ingredients}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="container d-flex flex-column">
            <div className="row " style={{ marginBottom: "2.9069rem" }}>
              <div className="col-xl-12">
                <h2>Video Step</h2>
              </div>
              <div className="col-xl-12" onClick={(()=>{handleRecipeClick(recipes_id)})} >
                <div style={{backgroundColor:"#EFC81A", width:"411.27px",height:"93.01px",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <i class="bi bi-play" style={{color:"white",fontSize:34.96}}></i>
                </div>
              </div>
              
            </div>
            <div className="row" style={{ marginBottom: "2.9069rem" }} onClick={(()=>{handleRecipeClick(recipes_id)})}>
              <div className="col-xl-12">
              <div style={{backgroundColor:"#EFC81A", width:"411.27px",height:"93.01px",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <i class="bi bi-play" style={{color:"white",fontSize:34.96}}></i>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "2.9069rem" }} onClick={(()=>{handleRecipeClick(recipes_id)})}>
              <div className="col-xl-12">
              <div style={{backgroundColor:"#EFC81A", width:"411.27px",height:"93.01px",borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <i class="bi bi-play" style={{color:"white",fontSize:34.96}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="container d-flex flex-column">
              <div className="row">
                <div className="col-xl-12">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="d-grid col-6 mx-auto justify-content-center">
                  <div className="btn btn-primary" type="button">
                    Send
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 my-4">
                  <h2>Comment</h2>
                </div>
                <div className="col-12">
                  <div className="ucomment d-flex">
                    <img
                      src={require("../../asset/image/Ellipse 128.png")}
                      alt=""
                    />
                    <div className="commentuser mx-4">
                      <p className="user">Ayudia</p>
                      <p className="cmnt">
                        Nice recipe. simple and delicious, thankyou
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DetailRecipe;
