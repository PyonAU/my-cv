# My CV App

Table of Contents

1. [About The Project](#about-the-project)

   - [Built With](#built-with)

2. [Getting Started](#getting-started)

   - [Prerequisites](#prerequisites)
   - [Installation](#installation)

3. [Overview of My Projects](#overview-of-my-projects)

   - [Bookmark App](#bookmark-app)
   - [Math Sprint Game](#math-sprint-game)
   - [Spock Rock Game](#spock-rock-game)
   - [Paint Clone](#paint-clone)
   - [Calculator](#calculator)
   - [Custom Countdown](#custom-countdown)
   - [Drag and Drop App](#drag-and-drop-app)
   - [Joke Teller App](#joke-teller-app)
   - [Video Player App](#video-player-app)

4. [Roadmap](#roadmap)

---

## About The Application

This application aims to consolidate all the projects I have built using Next.js, specifically leveraging the latest version, Next.js 13, in order to showcase my portfolio and enhance my skills and knowledge.

While initially considering TypeScript for this application, I opted for regular JavaScript instead as an MVP. Since I was still in the process of learning and eager to create something promptly, I chose to utilize JavaScript to develop this project however I am actively working on adding more projects and planning to use TypeScript post MVP.

I am highly motivated to acquire new skills, expand my knowledge, and continue augmenting this application with additional projects in the future.

### Built With

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Next JS](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)

<p align="right"><a href="#my-cv-app">back to top</a></p>

## Getting Started

### Prerequisites

- ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![NPM](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

### Installation

- Install the dependencies with:
  ```
  npm install
  ```
- Run the development server with:
  ```
  npm run dev
  ```
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right"><a href="#my-cv-app">back to top</a></p>

## Overview of My Projects

At first, all the projects I have added in this application were developed using vanilla JavaScript as part of the Udemy course, [JavaScript Web Project: 20 Projects to Build Your Portfolio](https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/). However, upon completing the course, I took the initiative to rewrite all the projects using React.

---

### Bookmark App

> The vanilla JavaScript version: [bookmark-app-v1-javascript-study](https://github.com/PyonAU/bookmark-app-v1-javascript-study).

**Usage**

This website enables users to save bookmarks and provides clickable links to redirect them to the respective websites. Click the "ADD BOOKMARK" button to launch into a modal, and users can enter name and web address.

**Key features**

- Users are not required to enter "http," "https," or "www" when providing the web address.
- Enable the ability to delete individual items from the list of bookmarks.
- The favicons are dynamically populated, providing a dynamic display of website icons.
- Users can return to the website at any time and find their stored bookmarks exactly as they left them, because of the utilization of local storage.
- Ensuring mobile responsiveness for optimal viewing and interaction on mobile devices.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Math Sprint Game

> The vanilla JavaScript version: [math-sprint-game-v1-javascript-study](https://github.com/PyonAU/math-sprint-game-v1-javascript-study).

**Usage**

This is an engaging math-based game. Start by selecting the desired number of questions and clicking the 'Start Round' button. Once the countdown ends, simple math equations will appear on the screen. The current equation will be highlighted in blue, allowing us to quickly evaluate its correctness and click the corresponding 'Wrong' or 'Right' button. The timer begins upon clicking the first button and stops after the last equation. At the end of each game, we will receive our score indicating the time taken. For every incorrect guess, there will be a penalty of 0.5 seconds.

**Key features**

- Implementation of timing events for game mechanics.
- Generation of random correct and incorrect equations.
- Storage of the best score in localStorage for each corresponding amount of questions.
- Automatic scrolling to the next equation on the game page.
- Display of the base score, penalty (if applicable), and final score on the score page.
- Updating the best score on the splash page.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Spock Rock Game

> The vanilla JavaScript version: [spock-rock-game-v1-javascript-study](https://github.com/PyonAU/spock-rock-game-v1-javascript-study).

**Usage**

This game is similar to rock, paper, scissors, but with the addition of two extra options: lizard and spock. It gained popularity through its appearance in The Big Bang Theory. The game involves five icons representing the choices for both the user and the computer. The user can click on one of these icons to select their weapon. Following that, the computer will make a random selection, and the game will determine the winner or declare a tie. The basic rule is accessible by clicking the information button located next to the title.

**Key features**

- Implementation of logic for the computer to randomly select a hand.
- Inclusion of a text message to inform the user if they won or lost.
- Integration of a third-party confetti animation for visual effects.
- Resetting the confetti function when the user plays again.
- Incorporation of a counter functionality to track the number of wins.
- Implementation of a reset functionality to start a new game.
- Ensuring mobile responsiveness for optimal viewing and interaction on mobile devices.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Paint Clone

> The vanilla JavaScript version: [paint-clone-v1-javascript-study](https://github.com/PyonAU/paint-clone-v1-javascript-study).

**Usage**

This application serves as a basic version of MS Paint. At the top, we have a toolbar consisting of various icons that offer functionalities such as drawing, erasing, changing the brush and background colors, adjusting the brush size, clearing the canvas, saving and deleting drawings, as well as the option to save to an image file.

**Key features**

- Utilizing the canvas HTML element to enable the creation of a basic version of MS Paint.
- Implementing color change to red for the Clear and Clear Local Storage buttons when hovered over, indicating their destructive nature.
- Incorporating the localStorage functionality to save drawings.
- Displaying the active tool (brush or eraser) on the left side of the top bar. Additionally, providing additional information when clicking on other icons.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Calculator

> The vanilla JavaScript version: [calculator-v1-javascript-study](https://github.com/PyonAU/calculator-v1-javascript-study).

**Usage**

This is a basic calculator which has the ability to perform operations, and it can continue operations on the final values.

**Key features**

- Ability to enter multiple numbers with a scroll bar feature to ensure all numbers are visible.
- Prevention of multiple decimal inputs for accuracy.
- Inclusion of a history feature to track previous calculations.
- Ensuring mobile responsiveness for optimal usability on mobile devices.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Custom Countdown

> The vanilla JavaScript version: [custom-countdown-v1-javascript-study](https://github.com/PyonAU/custom-countdown-v1-javascript-study).

**Usage**

This is a customizable countdown application that enables users to enter a title for an event they want to count down to. It features an input date element where users can either manually enter the date or utilize the date picker. Once the submit button is clicked, the countdown begins.

**Key features**

- Implementation of a video background for enhanced visual experience.
- Utilization of localStorage functionality to store data.
- Inclusion of an option to reset the countdown.
- Activation of text animation and display of the user-entered title when the countdown reaches zero.
- Ensuring mobile responsiveness for optimal viewing and interaction on mobile devices.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Drag and Drop App

> The vanilla JavaScript version: [drag-and-drop-v1-javascript-study](https://github.com/PyonAU/drag-and-drop-v1-javascript-study).

**Usage**

This is a Kanban Board designed to help users keep track of their tasks. The board is divided into multiple columns, and tasks can be moved between these columns. Users have the ability to edit the tasks within each column. Additionally, it is possible to add new items to the board and delete existing ones.

**Key features**

- Utilization of the drag and drop API, enabling the movement of HTML file elements to be dropped inside other HTML elements.
- Implementation of localStorage functionality for data storage.
- Utilization of the content editable attribute to facilitate the addition and modification of items.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Joke Teller App

> The vanilla JavaScript version: [joke-teller-v1-javascript-study](https://github.com/PyonAU/joke-teller-v1-javascript-study).

**Usage**

The application is a joke teller, where users can click the "Tell Me A Joke" button to receive engineering-related jokes.

**Key features**

- Utilize an animated robot GIF from [giphy.com](https://giphy.com/) as the background.
- Implement a joke API to fetch jokes.
- Pass the fetched jokes to a text-to-speech API for audio output.

<p align="right"><a href="#my-cv-app">back to top</a></p>

### Video Player App

> The vanilla JavaScript version: [video-player-v1-javascript-study](https://github.com/PyonAU/video-player-v1-javascript-study).

**Usage**

This is a custom video player. When hovering near the bottom, the control bar appears. We can play, pause, rewind and fast forward the video. It also has a volume button which includes a mute button and the ability to adjust the volume by dragging the volume control. The player also features a progress bar, and clicking anywhere on it allows us to jump to different parts of the video.

**Key features**

- Includes functionality to track the current time of the video and display the total duration.
- Allows for video playback control with options to rewind and fast forward.
- Provides the ability to adjust the playback speed.
- Includes a fullscreen toggle with the screen icon to switch to fullscreen mode.
- Ensures mobile responsiveness for optimal viewing and interaction on mobile devices.

<p align="right"><a href="#my-cv-app">back to top</a></p>

# Roadmap

- [x] Add project list page
- [ ] Add projects to application in JavaScript
  - [x] Bookmark App
  - [x] Math Sprint Game
  - [x] Spock Rock Game
  - [x] Paint Clone
  - [x] Custom Countdown
  - [x] Drag and Drop App
  - [x] Joke Teller App
  - [ ] Video Player App
  - [ ] Calculator
- [ ] Add testing files to all my projects
  - [ ] Bookmark App
  - [ ] Math Sprint Game
  - [ ] Spock Rock Game
  - [ ] Paint Clone
  - [ ] Custom Countdown
  - [ ] Drag and Drop App
  - [ ] Joke Teller App
  - [ ] Video Player App
  - [ ] Calculator
- [ ] Refactor projects to use TypeScript
  - [ ] Bookmark App
  - [ ] Math Sprint Game
  - [ ] Spock Rock Game
  - [ ] Paint Clone
  - [ ] Custom Countdown
  - [ ] Drag and Drop App
  - [ ] Joke Teller App
  - [ ] Video Player App
  - [ ] Calculator

<p align="right"><a href="#my-cv-app">back to top</a></p>
