import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import "./index.styled.css";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () => {
          try {
              const response = await fetch('https://happyfamily.herokuapp.com/teaching-be/api/products/show');
              const json = await response.json();
             setProducts(json.products);
          } catch (error) {
              console.log(error);
          }
      }
      getProducts();
    },[])

  return (
    <div className="cardStyle">
      {products?.map((el, index) => (
        <div className="productCard" key={el?.title + index}>
          <img src={el?.image} alt={el?.title} />
          <div>
            <Box>
              <Typography className="flex" variant="h5">
                Titlu:
              </Typography>
              <Typography sx={{ textAlign: "center" }}>{el?.title}</Typography>
            </Box>
            <Box>
              <Typography className="flex" variant="h5">
                Categorie:
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {el?.category}
              </Typography>
            </Box>
            <Box>
              <Typography className="flex" variant="h5">
                Pret:
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {el?.price} lei
              </Typography>
            </Box>
            <Box>
              <Typography className="flex" variant="h5">
                Descriere:
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {el?.description}
              </Typography>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
