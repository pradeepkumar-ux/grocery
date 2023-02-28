import React, { useState } from "react";
import classes from "./SearchComponent.module.css";
//import { FaSearch } from "react-icons/fa"; // importing the search icon

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState(""); // state to store the search term

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // updating the search term state with input value
  };

  return (
    <div className={classes.searchcomponent}>
      <div className={classes.searchbar}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23333" d="M9.399 0c-4.384 0-7.967 3.582-7.967 7.967 0 1.925.692 3.692 1.836 5.057l-3.075 3.073c-.391.39-.391 1.024 0 1.414.195.196.45.293.707.293.256 0 .512-.097.707-.293l3.075-3.074c1.365 1.145 3.132 1.837 5.057 1.837 4.384 0 7.967-3.582 7.967-7.967s-3.582-7.967-7.967-7.967zm0 14.48c-3.277 0-5.914-2.637-5.914-5.914s2.637-5.914 5.914-5.914 5.914 2.637 5.914 5.914-2.637 5.914-5.914 5.914z"/></svg>')`,
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center",
            paddingLeft: "40px",
          }}
        />
      </div>
      {/* display search results */}
      {searchTerm && (
        <div className={classes.searchresults}>
          {/* display search results here */}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
