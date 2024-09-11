import {
  faFilter,
  faPenToSquare,
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

function Sellingrequest() {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const [sellingrequest, setSellingRequset] = useState();

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
      headerName: "Make",
      field: "make",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Make Year",
      field: "make_year",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Ownership",
      field: "ownership",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Car Name",
      field: "car_title",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Color",
      field: "color",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Fuel_type",
      field: "fuel_type",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Insurance Validity",
      field: "insurance",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Location",
      field: "location",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "KM Driven",
      field: "km_driven",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Price",
      field: "price",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Registration Location",
      field: "registration_location",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Transmission",
      field: "transmission",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Seller Name",
      field: "seller_name",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Contact No",
      field: "contact_no",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Variant",
      field: "variant",
      sortable: true,
      filter: true,
      editable: true,
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
      const response = await axios.delete(
        `${BASEURL}/admin-dashboard/selling-request/${id}`,
        {
          headers,
        }
      );
      setLoading(false);
      if (response.data) {
        setMessage("Enquire deleted successfully");
        setShow1(true);
        getAllConatus();
      }
    } catch (error) {
      setShow(false);
      setMessage("Something went wrong.");
      setShow1(true);
      setLoading(false);
    }
  };

  const getAllConatus = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/admin-dashboard/selling-request?page=${page}&limit=${limit}`,
        { headers }
      );
      if (response.data) {
        const dataWithSr = response.data.rows.map((item, index) => ({
          ...item,
          sr: (page - 1) * limit + index + 1,
        }));
        setSellingRequset(dataWithSr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllConatus();
  }, []);
  return (
    <>
      {loading ? <Loader /> : ""}
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>All Selling Requests</h1>
          <p>
            View and manage all Selling Requests efficiently. Use the table
            below to access details, update Selling Requests.
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
            rowData={sellingrequest}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={false}
            paginationPageSize={limit}
            rowSelection="multiple"
            rowClassRules={{
              "row-red": (params) => params.data.is_approved === false,
            }}
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
}

export default Sellingrequest;
