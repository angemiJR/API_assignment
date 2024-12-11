import { useState, useEffect } from "react";
import Axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://wizard-world-api.herokuapp.com/Houses")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <>
      <div className="search">

        <div className="input">
        <input
          type="text"
          placeholder="Enter your house"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          >
         
        
         
          </input>
           <button>Search</button>
          </div>

        {data.filter((item) => {
          return search.toLowerCase() === "" 
          ? item 
          : item.name.toLowerCase().includes(search);

        }).map((item, index) => (
          <ul key={index}>
            <li>House name: {item.name}</li>
            <li>House founder: {item.founder}</li>
            <li>House element: {item.element}</li>
            <li>Animal: {item.animal}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Home;
