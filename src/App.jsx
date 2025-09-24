import "./App.css";
import Card from "./assets/Components/card";
import { useState } from "react";

// const API_BASE_URL = " https://api.thecatapi.com/v1/images/search ";

// const API_KEY = import.meta.env.THE_CAT_API;

// const headers = new Headers({
//   "Content-Type": "application/json",
//
// });

// var requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };

const API_KEY = import.meta.env.THE_CAT_API;

function App() {
  const [CatsList, setCatsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // .then((response) => response.text())
  // .then((result) => {
  //   console.log(result);
  //   setCatsList(result);
  // })
  // .catch((error) => console.log("error", error));
  const [setErrorMessage, setsetErrorMessage] = useState("");

  const fetchCats = async () => {
    setIsLoading(true);
    setsetErrorMessage("");
    try {
      //     const endpoint = API_BASE_URL;

      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
      console.log("i am nas");

      // if (data.Response === "False") {
      //   setsetErrorMessage(data.Error || "Failed to fetch movies");
      //   setCatsList([]);
      //   return;
      // }

      setCatsList(data);
    } catch (error) {
      console.log(`Error Fetching cats ${error}`);
      setsetErrorMessage("Error Fetching Cats Please Meow Again😂😼");
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   ();
  // }, []);

  return (
    <div>
      <div className="container">
        <h2 className="header">
          {" "}
          <img style={{ width: "100px" }} src="./Fluffy-cat.png" alt="" />
          Meowzy
        </h2>
      </div>

      <h3 style={{ textAlign: "center" }}>
        {isLoading ? (
          <p className="meow">is Loading.....</p>
        ) : setErrorMessage ? (
          <p className="meow">{setErrorMessage}</p>
        ) : (
          <ul>
            {/* <Card cats="jungle" /> */}

            {CatsList.map((cat) => (
              <Card key={cat.id} cat={cat.url} />
            ))}
          </ul>
        )}

        <button className="button" onClick={fetchCats}>
          Meow me 😽
        </button>
      </h3>
    </div>
  );
}

export default App;
