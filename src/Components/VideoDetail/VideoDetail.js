import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos, Loader } from '../Index'
import { FetchFromAPI } from "../utils/FetchFromAPI";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [playerHeight, setPlayerHeight] = useState(0);
  const playerContainerRef = useRef(null);

  // Calculate and update the player height dynamically
  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = 16 / 9; // Set your desired aspect ratio
      const containerWidth = ((playerContainerRef.current?.offsetWidth >= 1500)? 1500:playerContainerRef.current?.offsetWidth) || 1100;
      const newHeight = containerWidth / aspectRatio;
      setPlayerHeight(newHeight);
    };

    // Call the handleResize function initially and whenever the window is resized
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  return (
    <Box minHeight="100vh" sx={{ background: 'black', marginTop: 'calc(50px + 10px);', marginLeft: { xs: 0, md: '80px' } }}>
      <Stack direction={{ xs: "column", md: "column" }} height='auto' >
        <Box flex={1} >
          <Box sx={{ width: "100%", position: "sticky", top: "86px", }}>
            <Box
              ref={playerContainerRef}
              sx={{
                height: playerHeight,
                // maxHeight: '900',
              }}
            >

              <ReactPlayer height='100%' url={`https://www.youtube.com/watch?v=${id}`} pip={true} width='100%' className="react-player" style={{ width: '100%', height: '100%' }} controls />
            </Box>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail