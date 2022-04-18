import "./seasons.css";
import Seasonsfriends from "../../components/img/Seasonsfriends.jpg";
import React, { useState } from 'react';
import backgroundf from "../../components/img/backgroundf.png";
function Seasons() {
  const [seasons, setSeasons] = useState();
  const [video, setVideo] = useState();
  const [listepisodes, setListepisodes] = useState([]);

  const list = [
    { id: 1, name: "temporada 1" },
    { id: 2, name: "temporada 2" },
    { id: 3, name: "temporada 3" },
    { id: 4, name: "temporada 4" },
    { id: 5, name: "temporada 5" },
    { id: 6, name: "temporada 6" },
    { id: 7, name: "temporada 7" },
  ];

  function handleClick(e) {
    console.log(e.target.value);
    let x = e.target.value;
    setVideo(`https://www.2embed.ru/embed/tmdb/tv?id=1668&s=${x}&e=1`);
    for (let i = 1; i < 25; i++) {
      let y = `https://www.2embed.ru/embed/tmdb/tv?id=1668&s=${e.target.value}&e=${i}`;
      listepisodes.push(y);
    }
    let total = listepisodes.length;

    console.log(listepisodes);
    
  }

  return (
    <div className="seasons-page">
      <div className="seasons-background">
        <img src={backgroundf} width="100%" height="100%" />
      </div>
      <div className="select-seasons">
        <select onChange={handleClick} value={seasons}>
          {list.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="seasons-video">
      {video ? (
        <div className="conteudo-video">
          <embed src={video} width="640" height="480" />
        </div>
      ) : (
       <></>
      )}
      </div>

      <div className="conteudo-night"></div>

      <div className="right-epi">
        <div className="list-seasons" >
          Episodes List
        </div>
        <div className="xx" value={seasons}>
        {listepisodes.map((item, index) => (
            <embed src={listepisodes[index]} height="200px" width="330px" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Seasons;


