import { useState, useEffect } from "react";

import User from "./User";

import "./lib/interfaces";
import { IResult } from "./lib/interfaces";

const colors = ["#0c9bbd", "red", "orange", "green"];

const RandomUserTwo = () => {
  const [num, setNum] = useState(0);
  const [searchChange, setSearchChange] = useState("");
  const initialUser = localStorage.getItem("user");
  const [searchWord, setSearchWord] = useState(initialUser || "foobar");

  const [data, setData] = useState<IResult[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://randomuser.me/api/?seed=${searchWord}`);
      const userData = await res.json();
      setData(userData.results);
    };

    fetchUser();
  }, [searchWord]);

  useEffect(() => {
    localStorage.getItem("user");
  }, [searchWord]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log("i am running");
      setNum((prevNum) => (prevNum === 3 ? 0 : prevNum + 1));
    }, 7000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[num],
        transition: "background-color 4s",
      }}
      className="container"
    >
      <div className="person">
        {data.map((userData) => (
          <User key={userData.id.value} data={userData} />
        ))}
      </div>
      <div className="form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchWord(searchChange);
            setSearchChange("");
          }}
        >
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            onChange={(e) => setSearchChange(e.target.value)}
            value={searchChange}
            name="searchWord"
            placeholder="Username"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RandomUserTwo;
