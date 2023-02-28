import React, { useEffect, useState } from "react";
import "./index.styled.css";
import Button from "@mui/material/Button";
import PersistentDrawerLeft from "../header2/index";

const Header = (props) => {
  const { currentPage, setCurrentPage } = props;

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(isAddProduct ? "orders" : "add-products");
  };

  const isAddProduct = currentPage === "add-products";

  return (
    <PersistentDrawerLeft
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
    // <div className="container">
    //   <h4>{isAddProduct ? "Add Products" : currentPage}</h4>

    //   <h1 className="font">69HappyFamily</h1>

    //   <div className="btn">
    //     <Button variant="contained" onClick={changePage}>
    //       {isAddProduct ? " Go to orders" : "Add Products"}
    //     </Button>
    //   </div>
    // </div>
  );
};

export default Header;
