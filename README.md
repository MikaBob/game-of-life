# Description
Just another [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using [p5](https://p5js.org/).

Based on a 2D table, each table's square represent a cell.
  
A cell is based on two state, Alive (black) or Dead (white/empty)
  
Here are some rule that "run" the game:

- An empty case is adjacent to exactly 3 alive cells become a "new-born" cell (reproduction)

- A cell (alive) that has 2 or 3 neighbours, remains alive (survival)
    
- Any other case, the cell dies (surpopulation) or remains empty (not enough neighbours)

# Install & play

`yarn install`

Open [index.html](https://github.com/MikaBob/game-of-life/blob/master/index.html) with browser

Click on Start =)

# Features

Generate a 50*50 gird. On initialisation, each cell has 20% probability to start alive

Click on a cell to change its state

Button "Next step" generate the next step

Button "Start" will run the game at a pace of 100ms. A second click make a pause.
