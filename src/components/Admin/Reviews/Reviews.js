import {
  faFilter,
  faPenToSquare,
  faPlus,
  faSearch,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BASEURL } from "../../Comman/constants";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const columnDefs = [
    {
      headerName: "Sr No",
      field: "sr",
      sortable: true,
      filter: true,
      editable: false,
    },
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Email",
      field: "email",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Date",
      field: "created_on",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        return moment(params).format("YYYY-MM-DD");
      },
    },
    {
      headerName: "Description",
      field: "review_text",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Star",
      field: "rating",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        const rating = Math.round(params.value);
        const stars = [];

        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push("⭐"); // Filled star
          } else {
            stars.push(""); // Empty star
          }
        }

        return stars.join(""); // Return the HTML for stars
      },
    },
    {
      headerName: "Image",
      field: "image",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        return (
          <img
            src={BASEURL + params.data.image}
            alt="images"
            style={{ height: "50px", width: "50px", borderRadius: "50px" }}
          />
        );
      },
    },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: (params) => (
        <>
          <FontAwesomeIcon
            icon={faPenToSquare}
            title="Edit"
            className="action-icon"
            // onClick={() => handleEdit(params.value)}
          />
          &nbsp;&nbsp;
          <FontAwesomeIcon
            icon={faTrash}
            title="Delete"
            className="action-icon"
            onClick={() => handleOpenDelete(params.value)}
          />
        </>
      ),
    },
  ];
  const defaultColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true,
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const getAllReview = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/cars/review?page=${page}&limit=${limit}`,
        { headers }
      );
      if (response.data) {
        const dataWithSr = response.data.rows.map((item, index) => ({
          ...item,
          sr: (page - 1) * limit + index + 1,
        }));
        setAllReviews(dataWithSr);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpenDelete = (id) => {
    setId(id);
    setShow(true);
    setMessage("Are you sure you want to delete?");
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleClose1 = () => {
    setShow1(false);
  };

  const handleDelete = async () => {
    handleClose();
    setLoading(true);
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.delete(`${BASEURL}/cars/review/${id}`, {
        headers,
      });
      setLoading(false);
      if (response.data) {
        setMessage("Review deleted successfully");
        setShow1(true);
        getAllReview();
      }
    } catch (error) {
      setShow(false);
      setMessage("Something went wrong.");
      setShow1(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllReview();
  }, []);
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>All Reviews</h1>
          <p>
            View and manage all Reviews efficiently. Use the table below to
            access details, update Reviews, and delete Reviews.
          </p>
        </div>
        <div className="mt-5 mb-3 search-colum">
          <div>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="search" placeholder="Search" />
          </div>
          <div>
            <Button className="filter-btn">
              <FontAwesomeIcon icon={faFilter} /> Filters
            </Button>{" "}
            &nbsp;
            <Button
              className="filter-btn"
              onClick={() => navigate("/admin-review")}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Review
            </Button>
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={allReviews}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={false}
            paginationPageSize={limit}
            rowSelection="multiple"
          />
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              className="custom-pagination"
            />
          </Stack>
        </div>
      </div>

      {/* Delete Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Ok
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Reviews;
