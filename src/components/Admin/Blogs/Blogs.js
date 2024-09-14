import {
  faFilter,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { BASEURL } from "../../Comman/constants";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [conatctUs, setConatctUs] = useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const columnDefs = [
    {
      headerName: "Sr No",
      field: "sr",
      sortable: true,
      filter: true,
      editable: false,
    },
    {
      headerName: "Title",
      field: "title",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Sub Title",
      field: "slug",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Short Description",
      field: "content",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Long Description",
      field: "blog_summary",
      sortable: true,
      filter: true,
      editable: true,
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
            src={BASEURL + params.value}
            alt=""
            style={{ height: "50px", width: "50px" }}
          />
        );
      },
    },
    {
      headerName: "is_published",
      field: "is_published",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        return params.data.is_published === true ? "true" : "false";
      },
    },

    {
      headerName: "Action",
      field: "id",
      cellRenderer: (params) => (
        <>
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

  const handleClose = () => {
    setShow(false);
  };

  const handleOpenDelete = (id) => {
    setId(id);
    setShow(true);
    setMessage("Are you sure you want to delete?");
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
      const response = await axios.delete(`${BASEURL}/cars/blog/${id}`, {
        headers,
      });
      setLoading(false);
      if (response.data) {
        setMessage("Blog deleted successfully");
        setShow1(true);
        getAllCars();
      }
    } catch (error) {
      setShow(false);
      setMessage("Something went wrong.");
      setShow1(true);
      setLoading(false);
    }
  };

  const getAllCars = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/cars/blog?page=${page}&limit=${limit}`,
        {
          headers,
        }
      );
      if (response) {
        const dataWithSr = response.data.rows.map((item, index) => ({
          ...item,
          sr: (page - 1) * limit + index + 1,
        }));
        setConatctUs(dataWithSr);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCars();
  }, []);
  return (
    <>
      {loading ? <Loader /> : ""}
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>All Blogs</h1>
          <p>
            View and manage all Blogs efficiently. Use the table below to access
            details, update Blogs.
          </p>
        </div>
        <div className="mt-5 mb-3 search-colum">
          <div>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="search" placeholder="Search" />
          </div>
          <div>
            <Button
              className="filter-btn"
              onClick={() => Navigate("/admin-addblogs")}
            >
              <FontAwesomeIcon icon={faPlus} /> Add blogs
            </Button>{" "}
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={conatctUs}
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

export default Blogs;
