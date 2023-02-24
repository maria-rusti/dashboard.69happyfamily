import React, { useEffect, useState } from "react";
import "./index.styled.css";

const Header = (props) => {
  const { currentPage, setCurrentPage } = props;

  const changePage = (e) => {
    e.preventDefault();
    setCurrentPage(isAddProduct ? "orders" : "add-products");
  };

  const isAddProduct = currentPage === "add-products";

  return (
    <div className="container">
      <div className="full-width">
        <div className="title">
          <h1>69HappyFamily</h1>
        </div>
        <div>
          <h4>{isAddProduct ? "Add Products" : currentPage}</h4>
        </div>
      </div>

      <div className="btn" onClick={changePage}>
        {isAddProduct ? "Orders" : "Add Products"}
      </div>
    </div>
  );
};

export default Header;