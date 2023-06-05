import React, { useEffect } from "react";
import styled from "../Navbar/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";

export const FilterByTemperament = () => {
  const dispatch = useDispatch();
  let temperamentos = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div>
      <select defaultValue={"DEFAULT"} className={styled.dropdown}>
        <option value="DEFAULT" disabled className={styled.texto}>
          Search by Temperament
        </option>
        {temperamentos.map((t) => (
         t.name &&
          <option key={t.id} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};
