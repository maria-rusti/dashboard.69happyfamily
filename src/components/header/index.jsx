import React, { useEffect, useState } from "react";
import "./index.styled.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Header = (props) => {
  const { currentPage, setCurrentPage } = props;

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(isAddProduct ? "Orders" : "add-products");
  };

  const isAddProduct = currentPage === "add-products";

  return (
    <div className="container">
      <h4>{isAddProduct ? "Add Products" : currentPage}</h4>

      <h1 className="font">69HappyFamily</h1>

      <div className="btn">
        <Button variant="contained" onClick={changePage}>
          {isAddProduct ? " Go to orders" : "Add Products"}
        </Button>
      </div>
    </div>
    // </div>
  );
};

export default Header;
