import style from "./search.css";
import NavbarHome from "../NavbarHome/navbarHome";
import Footer from "../footer/footer";
import { url } from "../login/login";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  const handleSearch = () => {
    axios
      .get(`${url}/recipe/?sort=ASC&search=${search}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Jika tombol Enter ditekan, lakukan pencarian.
      handleSearch();
    }
  };

  return (
    <>
      <NavbarHome />

      <div className="col d-flex justify-content-center align-items-center flex-column ">
        <div className="button-search position-relative ">
          <input
            className="form-control border-2 bg-body-secondary my-3"
            placeholder="Search Restaurant, Food"
            style={{
              width: "33.5vw",
              height: "4.5vh",
              paddingLeft: "3vw",
            }}
            name="search"
            onKeyDown={handleKeyDown}
            value={search}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            className="bi bi-search"
            style={{
              position: "absolute",
              top: "2.5vh",
              paddingLeft: "1vw",
            }}
          ></i>
          {/* <button className="btn btn-dark" onClick={handleSearch}>
            button
          </button> */}
        </div>
      </div>
      <div className="container" id="search" style={{ minHeight: "32vh" }}>
        <div className="row">
          {data.length > 0 ? (
            data.map((item) => (
              <div className="col" id="search">
                <div className="card my-2" style={{ width: 400, height: 400 }}>
                  <img
                    src={item.image}
                    className="card-img "
                    id="cardimg"
                    alt="..."
                    style={{ width: 400, height: 400, objectFit: "cover" }}
                  />
                  <div className="card-img-overlay">
                    <h5
                      className="card-title position-absolute bottom-0"
                      style={{
                        color: "#3F3A3A",
                        fontFamily: "Airbnb Cereal App",
                        fontSize: 32,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.name_recipes}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center">Search Not Found</h1>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Search;
