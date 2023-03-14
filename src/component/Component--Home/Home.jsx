import React, { useState, useEffect } from "react";
import "./Home.scss";
import Top from "./Top";
import Slider from "./Slider";
import axios from "axios";
export default function Home() {
  const [apiPopularResponse, setApiPopularResponse] = useState([]);
  const [apiTopRatedResponse, setapiTopRatedResponse] = useState([]);
  const [apiRecomendationResponse, setApiRecmendationResponse] = useState([]);

  const apiKey = "50676574ee0c6458af3e27caf5828f05";

  useEffect(() => {
    async function fetchPopular() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      setApiPopularResponse(data.data.results);
    }

    async function fetchTopRated() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      setapiTopRatedResponse(data.data.results);
    }

    async function fetchRecomendation() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1
        `
      );
      setApiRecmendationResponse(data.data.results);
    }

    fetchPopular();
    fetchTopRated();
    fetchRecomendation();
  }, []);

  return (
    <>
      <div className="home-container">
        <Top />
        <Slider data={apiPopularResponse} heading="Popular On Netflix" />
        <Slider
          data={apiTopRatedResponse}
          heading="Top Rated Movies On Netflix"
        />
        <Slider data={apiRecomendationResponse} heading="Top Recomendations" />
      </div>
    </>
  );
}
