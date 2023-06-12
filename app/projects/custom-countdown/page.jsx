'use client';

import BackgroundVideo from './ccd-components/BackgroundVideo';

const CustomCountdownPage = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
          html 
          
          body {
            min-height: 100vh;
            overflow-y: hidden;
            display: flex;
            align-items: center;
            font-family: 'Nunito', sans-serif;
          }
        `}
      </style>
      <BackgroundVideo />
    </>
  );
};

export default CustomCountdownPage;
