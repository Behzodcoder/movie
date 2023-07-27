import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./cards.scss";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="wrapper">
      {data.map((item) => {
        return (
          <NavLink to={`${'/card_inner'}/${item.id}`}>
            <div className="card">
              <img src={item.img} alt="" />
              <h4>
                {item.name.length > 25
                  ? item.name.slice(0, 20) + "..."
                  : item.name}
              </h4>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Cards;
