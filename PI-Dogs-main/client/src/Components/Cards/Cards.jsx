import React, { useEffect, useState } from "react";
import styled from "../Cards/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { loading } from "../../redux/actions";
import { Loading } from "../Loading/Loading";

export const Cards = () => {
  let dog = useSelector((state) => state.dogs);
  let isLoading = useSelector((state) => state.isLoading);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    setTimeout(() => {
      dispatch(loading(false));
    }, 1500);
    return () => {
      dispatch(loading(true));
    };
  }, [dog]);

  

  const filterDog = () => {
    return dog.slice(currentPage, currentPage + 8);
  };

  const handleIncrement = () => {
    setCurrentPage(currentPage + 8);
  };
  const handleDecrement = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className={styled.container}>
          {filterDog().map(({ id, name, image, temperament, weight }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                image={image}
                temperament={temperament}
                weight={weight}
              />
            );
          })}
        </div>
        <div className={styled.boton}>
          <button onClick={handleDecrement}>Anterior</button>
          <button onClick={handleIncrement}>Siguiente</button>
        </div>
      </>
    );
  }
};
