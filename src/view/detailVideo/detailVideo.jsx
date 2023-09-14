import React from 'react'
import Navbar from '../../Component/Navbar/navbar'

function detailVideo() {
  return (
    <>
    <div>
    <Navbar/>
  </div>
  <section id='detailVideo'>
    <div className="container-fluid">
      <div className="row">
        <div className="vidleft col-xxl-8 offset-lg-1 col-md-12  ">
          <img src={require("../../asset/image/Rectangle 329.png")} alt="" />
          <h1 className="h1">
            Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then
            mix it
          </h1>
          <p>3 month ago</p>
        </div>
        <div className="vidright col-xxl-3 col-md-12 d-flex flex-column align-items-center  ">
          <h1 className="h2">Next</h1>
          <div className="right my-4">
            <img src={require("../../asset/image/Rectangle 330.png")} alt="" />
            <h5>
              Beef Steak with Curry Sauce - [Step 5] Saute condiments together
              until turn brown
            </h5>
            <p>HanaLohana - 3 month ago</p>
          </div>
          <div className="fotok mb-4">
            <img src={require("../../asset/image/Rectangle 331.png")} alt="" />
            <h5>
              Beef Steak with Curry Sauce - [Step 5] Saute condiments together
              until turn brown
            </h5>
            <p>HanaLohana - 3 month ago</p>
          </div>
          <div className="fotok">
            <img src={require("../../asset/image/Rectangle 331.png")} alt="" />
            <h5>
              Beef Steak with Curry Sauce - [Step 5] Saute condiments together
              until turn brown
            </h5>
            <p>HanaLohana - 3 month ago</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default detailVideo