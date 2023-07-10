'use client';

import Paint from './paint-clone-components/Paint';

const PaintClonePage = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

          html body {
            background-color: #FFFFFF;
            font-family: Oswald, sans-serif;
            overflow: hidden;
          }
        `}
      </style>
      <Paint />
    </>
  );
};

export default PaintClonePage;
