import React, { useState } from "react";
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
import { Button } from "react-bootstrap";

const Carsforsell = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [sellingcars, setsellingcars] = useState([]);

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
          />
          &nbsp;&nbsp;
          <FontAwesomeIcon
            icon={faTrash}
            title="Delete"
            className="action-icon"
            // onClick={() => handleOpenDelete(params.value)}
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

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="">
          <h1>Cars For Sell</h1>
          <p>
            View and manage all registered Cars efficiently. Use the table below
            to access details, update cars.
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
            <Button className="filter-btn">
              <FontAwesomeIcon icon={faPlus} /> Add Car
            </Button>
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={sellingcars}
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
    </>
  );
};

export default Carsforsell;
