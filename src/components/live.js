import { useState, useEffect } from "react";
import Categories from "./categories";
import VideoCard from "./videoCard.js";
import "../styles/categories.css";
const Videos = () => {
  let [db, setVideo] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/videodata");
      let data = await response.json();
      setVideo(data);
    };

    fetchData();
  }, []);

  return (
    <div className="videos">
        <Categories/>
      <VideoCard video={db.filter((x) => x.categories == "LIVE")} />
    </div>
  );
};

export default Videos;
