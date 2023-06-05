import React from "react";
import { FilterByTemperament } from "./FilterByTemperament";
import styled from "../Navbar/Navbar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { FilterByOrigin } from "./FilterByOrigin";
import { AcDc } from "../Navbar/acDc";

export const Navbar = () => {
  return (
    <div>
      <nav className={styled.nav}>
        <ul>
        <div className={styled.link}>
            <AcDc title="Weight"/>
          </div>
          <div className={styled.link}>
            <AcDc title="A-z"/>
          </div>
        <div className={styled.link}>
            <FilterByOrigin />
          </div>
          <div className={styled.link}>
            <FilterByTemperament />
          </div>
          <div className={styled.link}>
            <SearchBar />
          </div>
        </ul>
      </nav>
    </div>
  );
};
