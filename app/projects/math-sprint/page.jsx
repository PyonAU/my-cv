'use client';

import MainComponent from './math-sprint-components/MainComponent';

const MathSprintGame = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Oxanium&display=swap');
          :root {
            --baseColor: dodgerblue;
            --selectColor: rgb(121, 179, 237);
            --success: rgb(15, 158, 2);
            --danger: rgb(214, 23, 23);
          }

          body {
            font-family: Oxanium, sans-serif;
            overflow: hidden;
            display: flex;
            justify-content: center;
            height: 100vh;
            background-color: #cde8f2;
            background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%234bc9ef' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
        `}
      </style>

      <MainComponent />
    </>
  );
};

export default MathSprintGame;
