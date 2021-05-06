class PetriPlate {
    size = 0;
    cells = null;
    generationNumber = 0;
    nbAlive = 0;

    constructor(size) {
        this.size = size;
        this.generationNumber = 0;

        this.cells = [this.size];
        for(let i = 0 ; i < this.size; i++){
            this.cells[i] = [this.size];
            for(let j = 0 ; j < this.size; j++){
                this.cells[i][j] = new Cell(i*Cell.WIDTH, j*Cell.WIDTH);
                if(Math.random() < 0.2){
                    this.cells[i][j].state = Cell.STATE_ALIVE;
                    this.nbAlive++;
                } else {
                    this.cells[i][j].state = Cell.STATE_DEAD;
                }
            }
        }
    }

    draw(){
        let countNbAlive = 0;
        for(let i = 0 ; i < this.size; i++){
            for(let j = 0 ; j < this.size; j++){
                this.cells[i][j].draw();
                if(this.cells[i][j].isAlive())
                    countNbAlive++;
            }
        }
        this.nbAlive = countNbAlive;

        // right border of the petriplate
        fill(color(127, 127, 127));
        rect(this.size*Cell.WIDTH-1, 0, 1, this.size*Cell.WIDTH);

        // bottom border of the petriplate (above the text)
        rect(0, this.size*Cell.WIDTH, this.size*Cell.WIDTH, Cell.WIDTH);

        // white rectangle for displaying text
        fill(255, 255,255);
        rect(0, this.size*Cell.WIDTH+1, this.size*Cell.WIDTH+1, Cell.WIDTH-1);

        // text
        fill(0, 0, 0);
        textSize(Cell.WIDTH*0.9);
        text("Gen. "+this.generationNumber+ "   Alive: "+this.nbAlive, Cell.WIDTH*0.1, this.size*Cell.WIDTH + Cell.WIDTH*0.8);
    }

    nextStep() {
        this.nextGeneration = [this.size];
        for(let i = 0 ; i < this.size; i++){
            this.nextGeneration[i] = [this.size];
            for(let j = 0 ; j < this.size; j++){
                this.nextGeneration[i][j] = new Cell(i*Cell.WIDTH, j*Cell.WIDTH);
                this.nextGeneration[i][j].state = this.getCellNextState(this.cells[i][j].state, this.getAmountNeighbourgWithState(this.cells[i][j], Cell.STATE_ALIVE));
            }
        }

        this.cells = this.nextGeneration;
        this.generationNumber++;
    }


    getAmountNeighbourgWithState(cell, state) {
        let nbNeighboursWithSameState = 0, x = cell.x / Cell.WIDTH, y = cell.y / Cell.WIDTH;

        // if this is not first line
        if(x > 0){
            // if this is not first column
            if(y > 0){
                // above & left
                if(this.cells[x-1][y-1].state === state){
                    nbNeighboursWithSameState++;
                }
            }
            // above & center
            if(this.cells[x-1][y].state === state){
                nbNeighboursWithSameState++;
            }
            // if this is not last column
            if(y < this.size - 1){
                // above & right
                if(this.cells[x-1][y+1].state === state){
                    nbNeighboursWithSameState++;
                }
            }
        }


        // if this is not first column
        if(y > 0){
            // left
            if(this.cells[x][y-1].state === state){
                nbNeighboursWithSameState++;
            }
        }

        // if this is not last column
        if(y < this.size - 1){
            // right
            if(this.cells[x][y+1].state === state){
                nbNeighboursWithSameState++;
            }
        }


        // if this is not last line
        if(x < this.size - 1){
            // if this is not first column
            if(y > 0){
                // under & left
                if(this.cells[x+1][y-1].state === state){
                    nbNeighboursWithSameState++;
                }
            }
            // under & center
            if(this.cells[x+1][y].state === state){
                nbNeighboursWithSameState++;
            }
            // if this is not last column
            if(y < this.size - 1){
                // above & right
                if(this.cells[x+1][y+1].state === state){
                    nbNeighboursWithSameState++;
                }
            }
        }

        return nbNeighboursWithSameState;
    }

    getCellNextState(currentState, nbAliveNeighbours){
        if(currentState === Cell.STATE_ALIVE){
            if(nbAliveNeighbours < 2)
                return Cell.STATE_DEAD; // underpopulation
            if(nbAliveNeighbours === 2 || nbAliveNeighbours === 3 )
                return Cell.STATE_ALIVE; // survive
            if(nbAliveNeighbours > 3)
                return Cell.STATE_DEAD; // overpopulation
        } else if (currentState === Cell.STATE_DEAD && nbAliveNeighbours === 3){
            return Cell.STATE_ALIVE; // reproduction
        } else {
            return Cell.STATE_DEAD
        }
    }
}