import React, { useState } from "react";
import axios from "axios";
import "./index.styled.css";

const AddProduct = (props) => {
  const { setProductsList } = props;

  const initialInput = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };
  const options = [
    "Electronics",
    "Home & Kitchen",
    "Toys & Games",
    "Sports & Outdoors",
    "Beauty & Personal Care",
    "Health & Wellness",
    "Grocery & Gourmet Food",
    "Pet Supplies",
    "Office & School Supplies",
    "Books & Audible",
  ];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const  includesValidCategory = () => {
    options.map((option, index) => {
      if(options.includes(option)){
        return true;
      }
      else return false;
    })
  };

  const [values, setValues] = useState(initialInput);

  const resetValues = (e) => {
    e.preventDefault();
    setValues(initialInput);
  };

  const addProduct = (e) => {
    e.preventDefault();
    setProductsList((prev) => prev.concat(values));
    let temp = {
      ...values,
    };
    temp.price = Number(temp.price);

    console.log(typeof values["price"]);
    axios
      .post("https://happyfamily.herokuapp.com/teaching-be/api/products/add", {
        ...temp,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setValues(initialInput);
  };

  const isDisabled =
    values.category.length === 0 ||
    values.description.length === 0 ||
    values.image.length === 0 ||
    values.price.length === 0 ||
    values.title.length === 0;

  return (
    <div>
      <form>
        {Object.keys(initialInput).map((el) => {
          return (
            <div key={el} className="product-field">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder={`${el}`.toUpperCase()}
                required=""
                name={el}
                value={values[el]}
                onChange={(e) =>
                  values[el] === "price"
                    ? setValues((prev) => ({
                        ...prev,
                        [el]: parseInt(e.target.value),
                      }))
                    : setValues((prev) => ({ ...prev, [el]: e.target.value }))
                }
              />
            </div>
          );
        })}
        <button disabled={isDisabled && includesValidCategory} onClick={addProduct}>
          Add
        </button>
        <button onClick={resetValues}>Cancel</button>
      </form>
    </div>
  );
};

export default AddProduct;
