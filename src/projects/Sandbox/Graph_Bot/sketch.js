// Custom Classes
class Cell {
    constructor(traversable, row, col) {
        this.traversable = traversable;
        this.is_goal = false;
        this.best_path_dot = false;
        this.backup_dot = false;
        this.junction_dot = false;
        this.value = 9999;

        // Cell should know where they are
        this.row = row;
        this.col = col;

        // Cell should be set to visited if it has been walked on
        this.visited = false;
    }
}

// Creates the grid and stores it into contents.
class Grid {
    constructor(rows, cols, path, goal) {
        // total amount of rows and columns
        this.rows = rows;
        this.cols = cols;
        this.goal = goal;
        this.contents = [rows]; // initialize the rows

        // Populate the Grid with walls and paths
        for(let row = 0; row < this.rows; row++) {
            this.contents[row] = [cols]; // initialize the cols 
            for(let col = 0; col < this.cols; col++) {
                if(path[row][col] == 1) { // its traversable
                    this.contents[row][col] = new Cell(true, row, col);
                } else { // its a wall
                    this.contents[row][col] = new Cell(false, row, col);
                }
            }
        }

        // set goal Cell
        this.contents[this.goal[0]][this.goal[1]].is_goal = true;
    }
}

class Bot {
    constructor(initial_position) {
        this.row = initial_position[0];
        this.col = initial_position[1];
        // I think that's all the variables needed for the bot graphics?
    }
}

class GoalCell 
{
    constructor(initial_position) 
    {
        this.row = initial_position[0];
        this.col = initial_position[1];
    }
}

// Dimmensions
let num_rows = 29;
let num_cols = 37;
let cell_size = 20;

// Traversable path
let path = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0],
    [1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0],
    [0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0],
    [0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0],
    [0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
    [1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0],
    [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0],
    [1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0],
    [1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0],
    [0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0],
    [0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0],
    [0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0],
    [0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0],
    [0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0],
    [0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

// Initial Positions
let bot_start_position = [1, 1];
let goal_position = [27, 35];
let start_bot = false;      // When true, start back-chaining to assign cell values for BestFS

// Colors
let outline_color;
let wall_color;
let tile_color;
let bot_color;
let best_path_dot_color;
let backup_dot_color;
let junction_dot_color;
let visited_dot_color;

// Custom Objects
let grid = new Grid(num_rows, num_cols, path, goal_position);
let bot = new Bot(bot_start_position);
let goal_ob = new GoalCell(goal_position);

// BestFS Variables
var open_list = [];
var closed_list = [];
var previous_cell = null;

// goal_ob Variables
var open_cell_list = [];
var closed_cell_list = [];
var prev_cell = null;
var val_counter = -1;   // Holds current value of node
var child_counter = 1;  // Used to hold immediate children in current level

// bot Variables
var cell_counter = -1;

// Sets up the P5 graphics
function setup() {    
    outline_color = color(255, 255, 255); // white
    wall_color = color(0, 0, 0); // black
    tile_color = color(255, 0, 0); // red
    bot_color = color(0, 255, 0); // green
    best_path_dot_color = bot_color; // same as bot
    backup_dot_color = color(0, 0, 255) // blue
    junction_dot_color = color(255, 255, 0) // yellow
    visited_color = color(173, 216, 230) // light blue;
    goal_ob_color = color(128, 0, 128) // purple

    // Add bot starting position into open list
    open_list.push(grid.contents[bot.row][bot.col]);

    // Add goal-ob starting position into open list
    open_cell_list.push(grid.contents[goal_ob.row][goal_ob.col]);

    createCanvas(num_cols*cell_size, num_rows*cell_size);
    frameRate(300); // Effectively sets the moves per second for the bot
    noLoop();
}

// This function is called on repeat, and serves to draw the graphics
function draw() { 
    // Draw the grid
    stroke(outline_color); // set outlines to white
    for(row = 0; row < num_rows; row++) {
        for(col = 0; col < num_cols; col++) {
            current_cell = grid.contents[row][col];

            // Path tile
            if(current_cell.traversable == true) {
                fill(tile_color);
                square(col*cell_size, row*cell_size, cell_size);
                //Visited square - not required in prompt, but useful for testing
                if(grid.contents[row][col].visited == true) {
                    fill(visited_color);
                    square(col*cell_size, row*cell_size, cell_size);
                }
                // Junction dot
                if(current_cell.junction_dot == true) {
                    fill(junction_dot_color);
                    circle(col*cell_size + cell_size/2, row*cell_size + cell_size/2, cell_size * .5);
                }
                // Backup dot
                if(current_cell.backup_dot == true) {
                    fill(backup_dot_color);
                    circle(col*cell_size + cell_size/2, row*cell_size + cell_size/2, cell_size * .5);
                }
                // Best path dot
                if(current_cell.best_path_dot == true) 
                {
                    fill(best_path_dot_color);
                    circle(col*cell_size + cell_size/2, row*cell_size + cell_size/2, cell_size * .5);
                }
                // Coloring previously visited dots
                if(grid.contents[row][col].visited == true)
                {
                    fill(wall_color);
                    circle(col*cell_size + cell_size/2, row*cell_size + cell_size/2, cell_size * .5);
                }
            // Wall Tile
            } 
            else {
                fill(wall_color);
                square(col*cell_size, row*cell_size, cell_size);
            }
        }
    }

    // Place the bot on the grid
    fill(bot_color);
    circle(bot.col*cell_size + cell_size/2, bot.row*cell_size + cell_size/2, cell_size * .75);

    

    /*
    Down here is where we will call the lisp pathfinding function so that at the next draw,
    the state will be updated.

    The lisp function would probably take in the grid object and the bot object, and would
    return/change the grid (adding new path dots in the cell objects) as well as chaning the
    coordinates of the bot object.

    Cells can be marked with a best path dot like this (this is in JS, but it'll be different in lisp?):
        grid.contents[row][col].best_path_dot=true;
    Similar code can be used to set backup dots and junction dots.
    Once that boolean is set, draw() will read it and display the dot during the next animation cycle
    */
    if(start_bot == false)
    {
        GetCellValue();
    }
    else if(start_bot == true && grid.contents[bot.row][bot.col].is_goal != true)
    {
        bestFS();
    } 
    else 
    {
        //noLoop();
        console.log('PATH GOAL REACHED!');
        // Inside here should be a function that will traceback what path it took and highlight the bestpaht
    }

    // Place goal_ob on the grid
    if(!start_bot)
    {
        fill(goal_ob_color);
        circle(goal_ob.col*cell_size + cell_size/2, goal_ob.row*cell_size + cell_size/2, cell_size * .75);
    }
    
}

/* Pseudocode
Create a open list
Create a close list
Create current cell variable
Create previous cell variable
Add bots starting position onto open list
Then start algorithm:
    // if bot current position is in goal cell; stop algorithm 
    if open list is empty, exit out loop
    pop cell in open list
    set bot to current cell
    set current cell to visited
    push current cell onto close list
    check if there is any previous cell:
        set cell.backup_dot = previous cell
    if left cell is traversable and is not visited:
        add cell to back of open list
    if right cell is traversable and is not visited:
        add cell to back of open list
    if up cell is traversable and is not visited:
        add cell to back of open list
    if down cell is traversable add is not visited:
        add cell to back of open list
    set previous cell = current cell
*/


function GetCellValue()
{
    //console.log('Length of list: ' + open_cell_list.length);
    if(open_cell_list.length == 0)
    {
        // If open_cell_list is empty, all cells have been checked
        ResetVisited();  // Reset cell.visited so bot can run
        start_bot = true;   // Since no more nodes, start bot
        val_counter = -1;
        frameRate(5);   // Slows the movement speed of bot for viewing purposes
        return;
    }
    // Pops cell in open list
    this.t_cell = open_cell_list.shift();
    child_counter--;
    // Places goal_ob to current cell
    goal_ob.row = t_cell.row;
    goal_ob.col = t_cell.col;
    // Setting cell to visited
    grid.contents[goal_ob.row][goal_ob.col].visited = true;
    // Pushing popped cell into closed list
    closed_cell_list.push(t_cell);

    // Neighbors
    // Using try-catch for any out of boundaries values
    try
    {
        left_neighbor_cell = goal_ob.col !=0 ? grid.contents[goal_ob.row][goal_ob.col-1] : null;
    }
    catch(error)
    {
        console.log('ERROR at cell' + (goal_ob.row) + ' ' + (goal_ob.col));
    }
    try
    {
        right_neighbor_cell = goal_ob.col !=grid.cols ? grid.contents[goal_ob.row][goal_ob.col+1] : null;
    }
    catch(error)
    {
        console.log('ERROR at cell' + (goal_ob.row) + ' ' + (goal_ob.col));
    }
    try
    {
        up_neighbor_cell = goal_ob.row !=0 ? grid.contents[goal_ob.row-1][goal_ob.col] : null;
    }
    catch(error)
    {
        console.log('ERROR at cell' + (goal_ob.row) + ' ' + (goal_ob.col));
    }
    try
    {
        down_neighbor_cell = goal_ob.row !=grid.rows ? grid.contents[goal_ob.row+1][goal_ob.col] : null;
    }
    catch(error)
    {
        console.log('ERROR at cell: ' + (goal_ob.row) + ' ' + (goal_ob.col));
    }

    // if left cell is traversable and is not visited; push onto open list
    if(left_neighbor_cell != null && left_neighbor_cell.traversable && !left_neighbor_cell.visited) 
    {
        left_neighbor_cell.best_path_dot = true; 
        open_cell_list.push(left_neighbor_cell);
    }
    // if right cell is traversable and is not visited; push onto open list
    if(right_neighbor_cell != null && right_neighbor_cell.traversable && !right_neighbor_cell.visited) 
    {
        right_neighbor_cell.best_path_dot = true;
        open_cell_list.push(right_neighbor_cell);
    }    
    // if up cell is traversable and is not visited; push onto open list
    if(up_neighbor_cell != null && up_neighbor_cell.traversable && !up_neighbor_cell.visited) 
    {
        up_neighbor_cell.best_path_dot = true;
        open_cell_list.push(up_neighbor_cell);
    }
    // if down cell is traversable and is not visited; push onto open list
    if(down_neighbor_cell != null && down_neighbor_cell.traversable && !down_neighbor_cell.visited) 
    {
        down_neighbor_cell.best_path_dot = true;
        open_cell_list.push(down_neighbor_cell);
    }
    grid.contents[goal_ob.row][goal_ob.col].value = GetLowestValue(t_cell, val_counter) + 1;
    if(GetLowestValue(t_cell, val_counter) + 1)
    {
        prev_cell.value = GetLowestValue(prev_cell, val_counter) + 1;
    }
    //console.log('Cell value: ' + grid.contents[goal_ob.row][goal_ob.col].value);
    if(child_counter == 0)
    {
        val_counter++;
        child_counter = open_cell_list.length;
    }
    // set previous cell to current cell
    prev_cell = t_cell;
    loop();
}
// Resets all cells .visited = false
function ResetVisited()
{
    for(row = 0; row < num_rows; row++) 
    {
        for(col = 0; col < num_cols; col++) 
        {
            current_cell = grid.contents[row][col];
            if(current_cell.visited = true)
            {
                current_cell.visited = false;
            }
            if(current_cell.best_path_dot == true)
            {
                current_cell.best_path_dot = false;
            }
        }
    }
    console.log('Cell.visited reset');
}
function GetLowestValue(t_cell, val_counter)
{
    this.t_cell = t_cell;
    let lowestNum = val_counter;
    try
    {
        lowestNum = Math.min(grid.contents[goal_ob.row - 1][goal_ob.col].value, lowestNum);
    }
    catch(error)
    {
        console.log('ERROR at cell: ' + (goal_ob.row) + ' ' + (goal_ob.col));
    }
    try
    {
        lowestNum = Math.min(grid.contents[this.t_cell.row + 1][this.t_cell.col].value, lowestNum);
    }
    catch(error)
    {
        console.log('ERROR at cell: ' + (this.t_cell.row) + ' ' + (this.t_cell.col));
    }
    try
    {
        lowestNum = Math.min(grid.contents[this.t_cell.row][this.t_cell.col - 1].value, lowestNum);
    }
    catch(error)
    {
        console.log('ERROR at cell: ' + (this.t_cell.row) + ' ' + (this.t_cell.col));
    }
    try
    {
        lowestNum = Math.min(grid.contents[this.t_cell.row][this.t_cell.col + 1].value, lowestNum);
    }
    catch(error)
    {
        console.log('ERROR at cell: ' + (this.t_cell.row) + ' ' + (this.t_cell.col));
    }

    return lowestNum;
}

function bestFS(){
    // Start of best first search
    // If bot current position is in goal state; stop algorithm
    // Return if the open list is empty
    if(open_list.length == 0) return;
    // pop cell in open list
    this.temp_cell = open_list.shift();
    // set bot to current cell
    bot.row = temp_cell.row;
    bot.col = temp_cell.col;
    cell_counter++;
    console.log("Cells visited: " + cell_counter);
    // set cell to be visited
    grid.contents[bot.row][bot.col].visited = true;
    // push popped cell into close list
    closed_list.push(temp_cell);

    // Neighbors
    // Using try-catch for any out of boundaries values
    try{
        left_neighbor_cell = bot.col !=0 ? grid.contents[bot.row][bot.col-1] : null;
    }
    catch(error){
        console.log('ERROR at cell' + (bot.row) + ' ' + (bot.col));
    }
    try{
        right_neighbor_cell = bot.col !=grid.cols ? grid.contents[bot.row][bot.col+1] : null;
    }
    catch(error){
        console.log('ERROR at cell' + (bot.row) + ' ' + (bot.col));
    }
    try{
        up_neighbor_cell = bot.row !=0 ? grid.contents[bot.row-1][bot.col] : null;
    }
    catch(error){
        console.log('ERROR at cell' + (bot.row) + ' ' + (bot.col));
    }
    try{
        down_neighbor_cell = bot.row !=grid.rows ? grid.contents[bot.row+1][bot.col] : null;
    }
    catch(error){
        console.log('ERROR at cell: ' + (bot.row) + ' ' + (bot.col));
    }

    // if left cell is traversable and is not visited; push onto open list
    if(left_neighbor_cell != null && left_neighbor_cell.traversable && !left_neighbor_cell.visited) {
        //console.log('pushing left cell into open_list: ' + bot.row + ' ' + bot.col-1);
        left_neighbor_cell.best_path_dot = true; // TODO - place holder, probs not actually best path
        open_list.unshift(left_neighbor_cell);
    }
    // if right cell is traversable and is not visited; push onto open list
    if(right_neighbor_cell != null && right_neighbor_cell.traversable && !right_neighbor_cell.visited) {
        //console.log('pushing left cell into open_list: ' + bot.row + ' ' + bot.col-1);
        right_neighbor_cell.best_path_dot = true;
        open_list.unshift(right_neighbor_cell);
    }    
    // if up cell is traversable and is not visited; push onto open list
    if(up_neighbor_cell != null && up_neighbor_cell.traversable && !up_neighbor_cell.visited) {
        //console.log('pushing left cell into open_list: ' + bot.row + ' ' + bot.col-1);
        up_neighbor_cell.best_path_dot = true;
        open_list.unshift(up_neighbor_cell);
    }
    // if down cell is traversable and is not visited; push onto open list
    if(down_neighbor_cell != null && down_neighbor_cell.traversable && !down_neighbor_cell.visited) {
        //console.log('pushing left cell into open_list: ' + bot.row + ' ' + bot.col-1);
        down_neighbor_cell.best_path_dot = true;
        open_list.unshift(down_neighbor_cell);
    }

    // Implimenting BestFS open_list adjustment (giving best nodes priority)
    if(open_list.length > 1)
    {
        open_list = GetLowestElement(open_list);
    }
    // set previous cell to current cell
    previous_cell = temp_cell;
    loop();
}
// Finds and returns cell with lowest value
function GetLowestElement(arr)
{
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i].value < arr[0].value)
        {
            tmp = arr[0];
            arr[0] = arr[i];
            arr[i] = tmp;
        }
    }
    return arr;
}