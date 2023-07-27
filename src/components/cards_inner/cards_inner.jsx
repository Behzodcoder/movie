import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import time from "../../assets/time.svg";
import date from "../../assets/date.svg";
import arrow from "../../assets/arrow.svg"

import "./cards_inner.scss";

function CardsInner() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="card_inner">
      
      {/* <img className="arrow" src={arrow} alt="" /> */}
      
      <img className="film_poster" src={data.img} alt="" />

      <div className="card_info">
        <div className="name">
          <h3>{data.name}</h3>
        </div>
        <div className="dates">
          <div className="time"><img src={time} alt="time_logo" />{`${data.time} minut`}</div>
          <div className="year"><img src={date} alt="date_logo" />{data.year}</div>
        </div>
        <div className="desc">{data.desc}</div>
        <NavLink to={`${'/'}`}>
        <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}

export default CardsInner;
