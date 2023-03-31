import { useState, useEffect } from "react";
import "../styles/videos.css";
import VideoCard from "./videoCard.js";
import Categories from "./categories";
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
      <VideoCard video={db.filter((x) => x.categories == "ARCHIVED")} />
    </div>
  );
};

export default Videos;
