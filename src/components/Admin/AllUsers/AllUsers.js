import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import axios from "axios";
import { BASEURL } from "../../Comman/constants";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AllUsers = () => {
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  const columnDefs = [
    {
      headerName: "Sr No",
      field: "sr",
      sortable: true,
      filter: true,
      editable: false,
    },
    {
      headerName: "Customer Name",
      field: "username",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Email Address",
      field: "email",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Phone Number",
      field: "mobile_number",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Profile_pic",
      field: "profile_pic",
      sortable: true,
      filter: true,
      editable: true,
      cellRenderer: (params) => {
        return (
          <img src={BASEURL + params.data.profile_pic} height={50} width={50} />
        );
      },
    },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: (params) => (
        <>
          {/* <FontAwesomeIcon
            icon={faPenToSquare}
            title="Edit"
            className="action-icon"
          />{" "} */}
          &nbsp;
          <FontAwesomeIcon
            icon={faTrash}
            title="Edit"
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

  const getAllUsers = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/accounts/user?page=${page}&limit=${limit}`,
        { headers }
      );
      if (response) {
        const dataWithSr = response.data.rows.map((item, index) => ({
          ...item,
          sr: (page - 1) * limit + index + 1,
        }));
        setAllUsers(dataWithSr);
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
      const response = await axios.delete(`${BASEURL}/accounts/user/${id}`, {
        headers,
      });
      setLoading(false);
      if (response.data) {
        setMessage("User deleted successfully");
        setShow1(true);
        getAllUsers();
      }
    } catch (error) {
      setShow(false);
      setMessage("Something went wrong.");
      setShow1(true);
      setLoading(false);
    }
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    getAllUsers();
  }, [page, limit]);
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>All Users</h1>
          <p>
            View and manage all registered users efficiently. Use the table
            below to access details, update profiles, and control user roles.
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
            </Button>
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={allUsers}
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

export default AllUsers;
