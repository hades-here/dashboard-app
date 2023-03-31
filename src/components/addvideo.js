import "../styles/addvideo.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const AddVideo = () => {
  let navigate = useNavigate();
  let imgref = useRef();
  let titleref = useRef();
  let updatedlref = useRef();
  let lessonref = useRef();
  let minutesref = useRef();
  let categoriesref = useRef();
  let typeref = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      thumbnail: imgref.current.value,
      title: titleref.current.value,
      Last_updated: updatedlref.current.value,
      Lessons: lessonref.current.value,
      Minutes: minutesref.current.value,
      categories: categoriesref.current.value,
      Type: typeref.current.value,
    };
    fetch(" http://localhost:4000/videodata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    imgref.current.value = "";
    titleref.current.value = "";
    updatedlref.current.value = "";
    lessonref.current.value = "";
    minutesref.current.value = "";
    categoriesref.current.value = "";
    typeref.current.value = "";

    

   alert("video added succesfully");
    navigate("/");
  };

  return (
    <div className="addVideo">
      <div className="addVideoForm">
        <h1>Add a video</h1>

        <div class="form-check">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={imgref}
              placeholder=" Enter the thumbnail URL"
            />
          </form>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={titleref}
              placeholder="Enter the title name"
            />
          </form>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={updatedlref}
              placeholder="Enter the last updated date"
            />
          </form>

          <form onSubmit={handleSubmit}>
            <input
              type="number"
              ref={lessonref}
              placeholder="Enter the lesson count"
            />
          </form>

          <form onSubmit={handleSubmit}>
            <input
              type="number"
              ref={minutesref}
              placeholder="Enter the Minutes count"
            />
          </form>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={typeref}
              placeholder="Enter the video type"
            />
          </form>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={categoriesref}
              placeholder="Enter the video status"
            />
          </form>

          <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="addVideoImage">
        <img src="https://adacado.com/wp-content/uploads/displayvsvid.png"></img>
      </div>
    </div>
  );
};

export default AddVideo;
