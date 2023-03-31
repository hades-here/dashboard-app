import "../styles/categories.css";
import { Link } from "react-router-dom";

import "../styles/videos.css";
const Categories = () => {
  let links = [
    { link: "All", path: "/" },
    { link: "LIVE", path: "/live" },
    { link: "DRAFT", path: "/draft" },
    { link: "ARCHIVED", path: "/archive" },
  ];
  return (
    <div className="categories">
      <div className="categories_links">
        <ul>
          {links.map((data) => {
            return (
              <li>
                <Link to={data.path}>{data.link}</Link>
              </li>
            );
          })}
        </ul>

        <Link id="searchLink" to={"/SearchVideos"}>
          <button className="Searchbtn">Search Videos</button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
