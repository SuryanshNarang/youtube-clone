import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px', md:'320px' }, boxShadow:'none', borderRadius:'none'}}>
      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{ width: {xs:'100%', sm:'358px'}, height: 180, position: "relative" }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "8px",
              width: "100%",
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:'12', color:'gray', ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
