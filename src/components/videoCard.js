import "../styles/videos.css";
import file from "../images/file.svg";
import clock from "../images/clock.svg";
const VideoCard = ({ video }) => {
  return (
    <div className="videos">
      {video.map((data) => (
        <div className="video_list">
          <img src={data.thumbnail} height="202" width="360" />
          <p className="title">{data.title}</p>
          <p id="last" > Last updated: {data.Last_updated}</p>
          <div div className="types1">
          <img src={ file} />  <p> Lessons: {data.Lessons} </p>
          <img src={clock} /> <p> Minutes : {data.Minutes}</p>
          </div>
          <div div className="types">
             <p id="typ">{data.Type}</p>
            <p id="cat"> {data.Type2}</p>
          </div>
          <button className="btn">{data.categories}</button>
        </div>
      ))}
    </div>
  );
};


export default VideoCard;
