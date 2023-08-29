import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "react-bootstrap/Card";

const API =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-07-01&sortBy=publishedAt&apiKey=194f06bb95a2496cb3a288254cb651ad";


function App() {
  const [myData, setMyData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getApiData = async (url) => {
    try {
      const newData = await axios.get(url);
      setMyData(newData.data.articles);
    } catch (err) {
      console.log(err.message);
    }
  };


  const lastCardIndex  = currentPage * 6;
  const firstCardIndex = lastCardIndex - 6;
  const currentCards = myData.slice(firstCardIndex, lastCardIndex);



  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    getApiData(`${API}`);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {currentCards.map((value) => {
          return (
            <div key={value.url} className="col-sm">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={value.urlToImage} />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.content}</Card.Text>
                    <Card.Text>{value.description}</Card.Text>
                    <Card.Text>source: {value.source.name}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button style={{margin:"15px"}} onClick={()=>{handlePreviousPage()}}>
          Previous
        </button>
        <button style={{margin:"15px"}}
          onClick={()=>{handleNextPage()}}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
