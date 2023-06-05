import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";
import styled from "../Navbar/Navbar.module.css";

export const FilterByOrigin = () => {
  const dispatch = useDispatch();
  let dog = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <>
      <select defaultValue={"DEFAULT"} className={styled.dropdown}>
        <option value="DEFAULT" disabled className={styled.texto}>
          Search by Origin
        </option>
        {dog.map(({ origin, id }) => (
            origin && <option key={id} value={origin}>
            {origin}
          </option>
        ))}
      </select>
    </>
  );
};
