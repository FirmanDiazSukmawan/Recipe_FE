import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { url } from "../login/login";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";

function ModalProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage] = useState("");
  const getId = localStorage.getItem("userId");
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/users/${getId}`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
    // console.log(uploader);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("username", users.username);
    formDataToSend.append("phone_number", users.phone_number);
    formDataToSend.append("image", saveImage);
    try {
      const response = await axios.put(`${url}/users/${getId}`, formDataToSend);
      console.log(response, "sucessfully");
      toast.success("input recipe successfully");
    } catch (error) {
      console.log("Error update:", error);
    }
  };
  return (
    <>
      <span onClick={handleShow}> Edit Profile</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="file" onChange={handleUpload} name="image" />

          <Form.Control
            type="text"
            placeholder="username"
            className="my-3"
            name="username"
            value={users.username}
            onChange={handleChange}
          />
          <Form.Control
            type="text"
            placeholder="phone number"
            className="my-3"
            name="phone_number"
            value={users.phone_number}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProfile;
