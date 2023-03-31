import { useState, useEffect, useRef } from "react";
import "../styles/searchvideos.css";
import VideoCard from "./videoCard.js";
import Search from "../images/search.svg";


const SearchVideo = () => {
  let [searchInfo, setSearchInfo] = useState("");
  let userSearch = useRef();

  let handlesubmit = (e) => {
    e.preventDefault();
    let searchdata = userSearch.current.value;
    setSearchInfo(searchdata);
    

    
  };
  let [db, setVideo] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:4000/videodata?title_like=${searchInfo}`);
      let data = await response.json();
      setVideo(data);
    }; fetchData();
  },);
 
  return (
    <div className="searchedFiles">
      
      <div className="searchBar">
        <form onSubmit={handlesubmit} >
          
          <input ref={userSearch} name="myInput" placeholder="Enter the title name" />
          <button type="submit" id="scr">
            <img src={Search} width="25px" />
          </button>
        </form>
        </div>

      <div className="videos">
        <VideoCard video={db} />
      </div>
    </div>
  );
};

export default SearchVideo;
