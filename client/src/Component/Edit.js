import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
export const Edit = ({el,_id}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //update event
  const [update, SetUpdate] = useState({
    title: el.title,
    description: el.description,
    date: el.date,
    image: el.image,
    catégorie: el.catégorie,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUpdate({ ...update, [name]: value });
    console.log("aaaaaaaaaaaa", name)
  };
 {/* const EditEvent = () => {
    dispatch(
      updateEvent(
        _id,
        update.title,
        update.description,
        update.date,
        update.image,
        update.catégorie
      )
    
    );}
  console.log(
    _id,
    update.title,
    update.description,
    update.date,
    update.image,
    update.catégorie
  );
    setShow(false);
  ;*/}
  return (
    <div>
      <a href="#editEmployeeModal" className="edit" data-toggle="modal">
        <i
          className="material-icons"
          data-toggle="tooltip"
          title="Edit"
          onClick={() => handleShow()}
        >
          &#xE254;
        </i>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "rgb(47, 209, 196)" }}
        >
          <form>
            <input
              type="text"
              name="title"
              defaultValue={el.title}
              onChange={handleChange}
              placeholder="title"
              className="mb-2"
              required
            />

            <input
              type="text"
              name="description"
              defaultValue={el.description}
              onChange={handleChange}
              placeholder="description"
              className="mb-2"
              required
            />

            <input
              type="date"
              name="date"
              defaultValue={el.date}
              onChange={handleChange}
              placeholder="date"
              className="mb-2"
              style={{ width: "210px" }}
              required
            />
       
            <input
              type="catégorie"
              name="catégorie"
              defaultValue={el.catégorie}
              onChange={handleChange}
              placeholder="date"
              className="mb-2"
              style={{ width: "210px" }}
              required
            />

            <Button variant="primary">
              Save Changes
            </Button>
          </form>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
