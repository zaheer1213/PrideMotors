import React, { useEffect, useState } from "react";
import {
  faFilter,
  faPenToSquare,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AgGridReact } from "ag-grid-react";
import { Pagination, Stack } from "@mui/material";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { BASEURL } from "../../Comman/constants";

const TestDrive = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(52);
  const [page, setPage] = useState(1);
  const [allTestDrives, setAllTestDrives] = useState([]);
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
      headerName: "Full Name",
      field: "full_name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Email Address",
      field: "email_address",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Phone Number",
      field: "phone_number",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Date",
      field: "date",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Time",
      field: "time",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Car Model",
      field: "car_model",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Preferred Location",
      field: "preferred_location",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Message",
      field: "notes",
      sortable: true,
      filter: true,
      editable: true,
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
          /> */}
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

  const getAllEnquiries = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const data = await axios.get(
        `${BASEURL}/booking/test-drive?page=${page}&limit=${limit}`,
        { headers }
      );
      const dataWithSr = data.data.rows.map((item, index) => ({
        ...item,
        sr: (page - 1) * limit + index + 1,
      }));
      setAllTestDrives(dataWithSr);
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
      const response = await axios.delete(
        `${BASEURL}/booking/test-drive/${id}`,
        {
          headers,
        }
      );
      setLoading(false);
      if (response.data) {
        setMessage("Record deleted successfully");
        setShow1(true);
        getAllEnquiries();
      }
    } catch (error) {
      setShow(false);
      setMessage("Something went wrong.");
      setShow1(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllEnquiries();
  }, [page, limit]);
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>Test Drive Requests</h1>
          <p>
            View and manage all Test Drive Requests efficiently. Use the table
            below to access details, update Test Drive Requests.
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
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={allTestDrives}
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

export default TestDrive;
