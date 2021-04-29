class Cell {
    x = 0;
    y = 0;
    state = null;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.state = Cell.STATE_DEAD;
    }

    draw(){
        strokeWeight(0);
        fill(color(127, 127, 127));
        square(this.y, this.x, Cell.WIDTH);

        if(this.state === Cell.STATE_DEAD) {
            fill(color(255, 255, 255));
        } else if (this.state === Cell.STATE_ALIVE) {
            fill(color(0, 0, 0));
        }
        // switch x and y because of p5's coordinate system ><
        square(this.y+1, this.x+1, Cell.WIDTH-1);
    }

    isAlive(){
        return this.state === Cell.STATE_ALIVE;
    }

    static get WIDTH() { return 10; }
    static get STATE_DEAD() { return 0; }
    static get STATE_ALIVE() { return 1; }
}