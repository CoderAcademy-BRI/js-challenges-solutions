// Good morning ladies and gents, do we have a treat for you today.
// For our bonus round morning challenge, I present to you, Conway's Game of Life!
// The rules are simple. You are presented with 2d array, containing 1's and 0's.
// 1's represent live cells, 0's represent dead cells.
// Your task is to find what the next generation of the 2d array looks like based on the following rules:
//     If a living cell has fewer than 2 neighbours, it dies.
//     If a living cell has 2 or 3 neighbours, it continues to live.
//     If a living cell has greater than 3 neighbours, it dies.
//     If a dead cell has exactly 3 neighbours, it comes to life.
// Good luck and have fun!

function getLivingNeighbors(game, cell) {
	// returns the number of living neighbors in the game for the given cell
	// 8 possible neighbors (top-left, top-middle, top-right, bottom-left, bottom-middle, bottom-right, left, right), except:
	// first row has no top
	// last row has no bottom
	// first col has no left
	// last col has no right
	let row = cell[0];
	let col = cell[1];
	let rightBorder = game[0].length - 1;
	let bottomBorder = game.length - 1;
	let livingNeighbors = 0;
	// check for top neighbors
	if (row > 0) {
		if (game[row - 1][col]) livingNeighbors++; // top
		if (col > 0 && game[row - 1][col - 1]) livingNeighbors++; // top-left
		if (col < rightBorder && game[row - 1][col + 1]) livingNeighbors++; // top-right
	}
	// check for bottom neighbors
	if (row < bottomBorder) {
		if (game[row + 1][col]) livingNeighbors++; // bottom
		if (col > 0 && game[row + 1][col - 1]) livingNeighbors++; //bottom-left
		if (col < rightBorder && game[row + 1][col + 1]) livingNeighbors++; // bottom-right
	}
	// check left
	if (col > 0 && game[row][col - 1]) livingNeighbors++;
	// check right
	if (col < rightBorder && game[row][col + 1]) livingNeighbors++;

	return livingNeighbors;
}

exports.conwaysGameOfLife = function (game) {
	// make a copy of game to alter the first generation
	let nextGenGame = [];
	for (let row = 0; row < game.length; row++) {
		nextGenGame[row] = [...game[row]];
		for (let col = 0; col < game[row].length; col++) {

			let neighbors = getLivingNeighbors(game, [row, col]);
			let alive = game[row][col];
			if (alive && (neighbors < 2 || neighbors > 3)) {
				nextGenGame[row][col] = 0;
			} else if (!alive && (neighbors === 3)) {
				nextGenGame[row][col] = 1;
			}
		}
	}
	return nextGenGame;
}