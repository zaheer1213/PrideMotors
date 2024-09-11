import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFilter,
  faPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import axios from "axios";
import { BASEURL } from "../../Comman/constants";
import { Pagination, Stack } from "@mui/material";
import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router-dom";

const AllCars = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState([]);
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
            onClick={() => handleEdit(params.value)}
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
  const getAllCars = async () => {
    try {
      const headers = {
        "x-access-token": localStorage.getItem("token"),
      };
      const response = await axios.get(
        `${BASEURL}/admin-dashboard/car-detail?page=${page}&limit=${limit}`,
        {
          headers,
        }
      );
      if (response) {
        const dataWithSr = response.data.rows.map((item, index) => ({
          ...item,
          sr: (page - 1) * limit + index + 1,
        }));
        setAllCars(dataWithSr);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (id) => {
    navigate("/vehicleinformation", { state: { carID: id } });
  };
  const handlePageChange = (event, value) => {
    setPage(value);
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
        `${BASEURL}/admin-dashboard/car-detail/${id}`,
        {
          headers,
        }
      );
      setLoading(false);
      if (response.data) {
        setMessage("Car deleted successfully");
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
  const handleBack = () => {
    window.history.back();
  };
  useEffect(() => {
    getAllCars();
  }, [page, limit]);
  return (
    <>
      {loading ? <Loader /> : ""}
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="backicon pointer mb-3"
            onClick={handleBack}
          />
          <h1>All Cars</h1>
          <p>
            View and manage all registered Cars efficiently. Use the table below
            to access details, update profiles, and control user roles.
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
              onClick={() => navigate("/vehicleinformation")}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Car
            </Button>
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={allCars}
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
};

export default AllCars;
