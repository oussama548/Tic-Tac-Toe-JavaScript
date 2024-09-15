# Tic-Tac-Toe Game

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [How to Play](#how-to-play)
7. [Code Overview](#code-overview)
8. [Customization](#customization)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction

This project is a simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. It provides a clean, visually appealing interface for players to enjoy the classic game in a web browser.

## Features

- Interactive 3x3 game board
- Alternating turns between 'X' and 'O' players
- Win detection for rows, columns, and diagonals
- Draw (tie) detection
- Game over screen with winner announcement
- Restart game functionality
- Responsive design with a gradient background

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

The project consists of three main files:

- `tic_tac.html`: The main HTML structure of the game
- `tic_tac.css`: Styles for the game layout and appearance
- `tic_tac.js`: JavaScript file containing game logic and interactivity

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```
   cd tic-tac-toe
   ```
3. Open `tic_tac.html` in your web browser to start the game.

No additional setup or installation is required as this is a client-side application.

## How to Play

1. The game starts with Player 'X'.
2. Players take turns clicking on an empty cell to place their mark ('X' or 'O').
3. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
4. If all cells are filled and no player has won, the game is a draw.
5. Click the "Restart" button at any time to reset the game board.
6. After a game ends, click "New Game" on the winner screen to start a new game.

## Code Overview

### HTML (`tic_tac.html`)
The HTML file uses a minimalistic structure with nested `div` elements to create the game board and cells.

### CSS (`tic_tac.css`)
- Uses flexbox for centering the game board
- Implements a gradient background
- Styles the game board, cells, and buttons
- Includes styles for the win announcement screen

### JavaScript (`tic_tac.js`)
- `reset()`: Resets the game board
- `win_check()`: Checks for a winning condition
- `check_draw()`: Checks if the game is a draw
- `restartGame()`: Handles the restart functionality
- `display_winner()`: Shows the winner announcement screen
- `gameNew()`: Starts a new game after a game over
- Event listeners for cell clicks and game controls

## Customization

You can easily customize the game by modifying the CSS file:
- Change the background gradient colors in the `body` selector
- Adjust the size of the game board by modifying the `.game` and `.container` dimensions
- Customize fonts, colors, and sizes of the game elements

## Contributing
feel free to add you features to the project

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
