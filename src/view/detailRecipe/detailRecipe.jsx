import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/navbar";
import Footer from "../../Component/footer/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../Component/login/login";

function DetailRecipe() {
  const [data, SetData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${url}/recipe/${id}`)

      .then((res) => {
        SetData(res.data.data[0]);
        // console.log(res.data.data[0]);
      })
      .catch((err) => {
        return(err);
      });
  }, []);
  
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
              <div className="col-xl-12">
                <iframe
                  width="411.269px"
                  height="93.012px"
                  src={data.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "2.9069rem" }}>
              <div className="col-xl-12">
                <iframe
                  width="411.269px"
                  height="93.012px"
                  src="https://www.youtube.com/embed/aevmFRd8Bzw?si=HbvuN5R8eHHfO7dP"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "2.9069rem" }}>
              <div className="col-xl-12">
                <iframe
                  width="411.269px"
                  height="93.012px"
                  src="https://www.youtube.com/embed/J9ruUKaBBsY?si=NzqMOG8K3a3MqDAC"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
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
