import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvents,
  addEvent,
  deleteEvent,
} from "../redux/actions/eventActions";
import { fetchAddEvent } from "../request/REQUEST";
import "./Table.css";
import { Edit } from "./Edit";




export default function Table() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [date, setDate] = useState("");
  const [catégorie, setCatégorie] = useState("");
  const [image, setImage] = useState([]);
  const [ImgData, setImgData] = useState([]);
  //get all events
  const eventData = useSelector((state) => state.eventStore.event);
  useEffect(() => {
    getAllEvents()
      .then(dispatch)
      .catch((e) => console.log("Error :", e));
    //eslint-disable-next-line
  }, []);

  //picture
  //ADD
  const onChangePicture = (e) => {
    e.preventDefault();
    
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImage( e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  // add to list
  const Addtolist = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image, image.name);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("catégorie", catégorie);
    const { data } = await fetchAddEvent(formData).catch((e) =>
      console.log("Error at ImageUpload", e)
    );

    if (data && data._id) dispatch(addEvent(data));

    formReset();
  };

  //NEW FORM
  const formReset = () => {
    setTitle("");
    setDiscription("");
    setDate("");
    setImage("");
    setCatégorie("");
  };

  // DELETE request using axios with async/await

  const deleteEv = (id) => {
    dispatch(deleteEvent(id));
    console.log("ddddddd", deleteEvent);
  };

  return (
    <div>
      <div className="container-xl mt-5">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Events</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Event</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i>{" "}
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label for="selectAll"></label>
                    </span>
                  </th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Catégorie</th>

                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="options[]"
                        value="1"
                      />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td> {title ? <p>{title}</p> : ""}</td>
                  <td>
                    {" "}
                    <img
                      className="playerProfilePic_home_tile"
                      src={ImgData}
                      style={{ width: "80px" }}
                      alt=".."
                    />
                  </td>
                  <td> {description ? <p>{description}</p> : ""}</td>
                  <td>{catégorie ? <p>{catégorie}</p> : ""}</td>
                  <td>{date ? <p>{date}</p> : ""}</td>
                  <td>
                    <a
                      href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
                {eventData.map((el, _id) => (
                  <tr key={el._id}>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox1"></label>
                      </span>
                    </td>
                    <td> {el.title}</td>
                    <td>
                      {" "}
                      <img
                        className="playerProfilePic_home_tile"
                        src={el.image}
                        style={{ width: "130px" }}
                        alt=".."
                      />
                    </td>
                    <td> {el.description}</td>
                    <td>{el.catégorie}</td>
                    <td>{el.date}</td>
                    <td>
                      <Edit el={el} _id={el._id} />
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                          onClick={() => deleteEv(el._id)}
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={Addtolist}>
              <div className="modal-header">
                <h4 className="modal-title">Add Event</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>description</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Image</label>
                  <input
                    type="file"
                    style={{ width: "210px" }}
                    placeholder="image-file"
                    name='file'
                    value={image.name}
                    accept=".jpg"
                    onChange={onChangePicture}
                  />
                </div>
                <div className="form-group">
                  <label>Catégorie</label>
                  <input
                    type="text"
                    className="form-control"
                    value={catégorie}
                    onChange={(e) => setCatégorie(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />

                <button onSubmit={(e) => Addtolist(e)}>ADD-Event</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Edit Event</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-info" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Event</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Delete"
                  onClick={(el) => deleteEv(el._id)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
