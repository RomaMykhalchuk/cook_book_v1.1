import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setIngredients } from '../store/newRecipe/ingredients';

const measurements = [
  "cup",
  "teaspoon",
  "tablespoon",
  "liter",
  "mililiter",
  "gram",
  "handful",
  "packet",
  "pinch",
  "piece",
  "pound",
];

export const Ingredient = ({ updateData }) => {
  const [quantity, setQuantity] = useState("");
  const [measurement, setMeasurement] = useState("(none)");
  const [item, setItem] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "qauntity":
        setQuantity(value);
        break;
      case "measure":
        setMeasurement(value);
        break;
      case "item":
        setItem(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <label>
        Qauntity
        <input
          name="qauntity"
          type="number"
          onChange={handleChange}
          value={quantity}
        />
      </label>
      <label>
        <select value={measurement} name="measure" onChange={handleChange}>
          <option value={measurement}>{measurement}</option>
          {measurements.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Item
        <input value={item} name="item" onChange={handleChange} />
      </label>

      <button
        onClick={(e) => {
          e.preventDefault();
          // updateData({ quantity, measurement, item });
          dispatch(setIngredients({quantity,measurement,item}));
          
        }}
      >
        WWWWWWWWWWWW
      </button>
    </>
  );
};
