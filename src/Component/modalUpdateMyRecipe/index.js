import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { url } from "../login/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalUpdate(item) {
  //   console.log(item, "ini data modal");
  const [show, setShow] = useState(false);
  //   console.log(item.item.recipes_id);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState("");
  const [data, setData] = useState({
    name_recipes: item.item.name_recipes,
    image: item.item.image,
    video: item.item.video,
    ingredients: item.item.ingredients,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
    console.log(uploader);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name_recipes", data.name_recipes);
    formDataToSend.append("image", saveImage);
    formDataToSend.append("video", data.video);
    formDataToSend.append("ingredients", data.ingredients);

    try {
      const response = await axios.put(
        `${url}/recipe/${item.item.recipes_id}`,
        formDataToSend
      );
      console.log(response, "sucessfully");
      toast.success("input recipe successfully");
    } catch (error) {
      console.log("Error update recipe:", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <button
        className="btn btn-warning"
        type="button"
        style={{ marginRight: 8 }}
        onClick={handleShow}
      >
        <i className="bi bi-pen" style={{ color: "white" }}></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe yakin?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="file" onChange={handleUpload} name="image" />
          <Form.Control
            type="text"
            placeholder="name recipes"
            className="my-3"
            name="name_recipes"
            value={data.name_recipes}
            onChange={handleChange}
          />
          <Form.Control
            as="textarea"
            placeholder="ingredients"
            style={{ height: "100px" }}
            name="ingredients"
            value={data.ingredients}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="video"
            className="my-3"
            name="video"
            value={data.video}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdate;
