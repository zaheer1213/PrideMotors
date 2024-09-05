import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";

const AllCars = () => {
  const [limit, setLimit] = useState(15);
  const serviceData = [
    {
      sr: "1",
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 98765 43210",
      date: "2024-08-01",
      Location: "Pune",
    },
  ];
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
      field: "name",
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
      field: "phone",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Registration date",
      field: "date",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      headerName: "Location",
      field: "Location",
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
        </>
      ),
    },
  ];
  const defaultColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true,
  };
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="">
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
            </Button>
          </div>
        </div>
        <div
          className="ag-theme-alpine "
          style={{ height: 500, width: "100%" }}
        >
          <AgGridReact
            rowData={serviceData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={false}
            paginationPageSize={limit}
            rowSelection="multiple"
          />
        </div>
      </div>
    </>
  );
};

export default AllCars;
