import React from 'react'
import styled from "../Navbar/Navbar.module.css";
export const AcDc = ({title}) => {
  return (
    <div>
        <select defaultValue={"DEFAULT"} className={styled.dropdown}>
        <option value="DEFAULT" disabled className={styled.texto}>
          {title}
        </option>
        <option className={styled.texto}>
        Ascending
        </option>
        <option className={styled.texto}>
          Descending
        </option>
      </select>
    </div>
  )
}
