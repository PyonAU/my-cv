'use client';

import VideoPlayer from './video-player-components/VideoPlayer';

const VideoPlayerPage = () => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --primary-color: dodgerblue;
            --font-color: white;
          }

          body {
            margin: 0;
            min-height: 100vh;
            background-color: #e3e3e3;
            background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234f4f51' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Helvetica, sans-serif;
          }
        `}
      </style>
      <VideoPlayer />
    </>
  );
};

export default VideoPlayerPage;
