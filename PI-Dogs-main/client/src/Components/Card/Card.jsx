import React from "react";

export const Card = () => {
  return (
    <>
      <div className={styled.card}>
        <img src={image} alt="" />

        <div className={styled.espacio}>
          <a className={styled.letra}>{name}</a>

          <p>
            <span className={styled.black}>Especie:</span> {species}
          </p>
          <p>
            <span className={styled.black}>Genero:</span> {gender}
          </p>
        </div>
      </div>
    </>
  );
};
