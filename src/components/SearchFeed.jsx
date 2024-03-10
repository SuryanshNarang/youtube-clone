import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { FetchFromApi } from "../utils/FetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  //specific category select krne pr us trh ki videos recommend ho USESTATE will help
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  // as soon as the screen is loaded we want ki api call ho fetch vaali so we will use useeffect
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "hidden", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
