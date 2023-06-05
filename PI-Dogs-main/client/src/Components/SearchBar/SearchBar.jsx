import React from "react";
import styled from "../SearchBar/SearchBar.module.css"

export const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search by breed" className={styled.input}/>
      <button className={styled.boton}>Search</button>
    </div>
  );
};
