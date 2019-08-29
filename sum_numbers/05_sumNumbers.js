// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

function sumScores(scores) {
    let sum = 0
    for (score of scores) {
        sum += score
    }
    return sum
}

function findWinner(players) {
    // Your code here
    let winner = ''
    let highestTotal = 0

    for (player of players) {
        let totalScore = sumScores(player.scores)
        if (totalScore > highestTotal) {
            highestTotal = totalScore
            winner = player.name
        }
    }
    return winner
}

module.exports = {
    findWinner
}