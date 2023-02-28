import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo } from "react";
import "./index.styled.css";

const ProductsList = (props) => {
  const { products } = props;

  const liveProducts = useMemo(() => products, [products]);

  return (
    <div className="cardStyle">
      {liveProducts?.map((el, index) => (
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
          <button>Delete this item</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
