# Description
Just another [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using [p5](https://p5js.org/).

Based on a 2D table, each table's square represent a cell.

A cell is based on two state, Alive (black) or Dead (white/empty)

Here are some rule that "run" the game:

- An empty case with exactly 3 alive cells become a "new-born" cell (reproduction)

- A living cell that with 2 or 3 neighbours, remains alive (survival)

- Any other case, the cell dies (surpopulation) or remains empty (not enough for reproduction)

# How to "play"

Open [index.html](https://mikabob.github.io/game-of-life/) in a browser

Click on Play =)

# Features

On page refresh it will generate a 60*60 gird, each cell has 20% probability to start alive

Click (or drag) on cells to change its state

Button "Speed" change the refresh rate

Button "Next step" pause the game and generate the next step

Button "Play" will run the game. A second click will pause.

Button "Erase" will empty the petriplate.

Button "Reload" will regenerate a population.

Some specific setup are cool, just click on the title and re-create the pattern yourself ;)
