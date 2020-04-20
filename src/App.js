import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";

import { fetchShow } from './api/fetchShow'

import Episodes from "./components/Episodes";
import "./styles.css";

export default function App()
{
  const [show, setShow] = useState(null);   // object of the entire show all seasons etc
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(""); // obvious what for
  const episodes = seasons[selectedSeason] || []; // not sure how this works. 

  useEffect(() =>
  { // runs after component (app) mounts and only once because no other change can make it rerun.

    // Async call being in component makes hard to test async nature of component ...

      fetchShow()
        .then(res =>
        {
          console.log("Res", res)
          setShow(res.data);
          setSeasons(formatSeasons(res.data._embedded.episodes));
        });
    fetchShow(); // so if defined it does not call.
  }, []);

  const handleSelect = e =>
  { // called in dropdown onChange event. Dropdown is coming from React Dropdown, it's own library, imported. 
    setSelectedSeason(e.value);
  };

  if (!show)
  {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
