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
import Loader from "../../Loader/Loader";

const Enquiries = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [allEnquiries, setAllEnquries] = useState([]);
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
      headerName: "First name",
      field: "first_name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Last name",
      field: "last_name",
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
      headerName: "Phone number",
      field: "phone_no",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Vehicle of Interest",
      field: "vehicle_name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Inquiry Type",
      field: "inquiry_type",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Message",
      field: "message",
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
        `${BASEURL}/booking/enquiry?page=${page}&limit=${limit}`,
        { headers }
      );
      const dataWithSr = data.data.rows.map((item, index) => ({
        ...item,
        sr: (page - 1) * limit + index + 1,
      }));
      setAllEnquries(dataWithSr);
    } catch (error) {
      console.log(error);
    }
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
      const response = await axios.delete(`${BASEURL}/booking/enquiry/${id}`, {
        headers,
      });
      setLoading(false);
      if (response.data) {
        setMessage("Enquire deleted successfully");
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
      {loading ? <Loader /> : ""}
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>All Enquiries</h1>
          <p>
            View and manage all Enquiries efficiently. Use the table below to
            access details, update Enquiries.
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
            rowData={allEnquiries}
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

export default Enquiries;
