class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse() {
    // Create an array with the accepted values
    const acceptedValues = [`rock`, `paper`, `scissors`];

    // Generate a random index number (0,1,2) using Math.random() and Math.floor()
    const randomIndex = Math.floor(Math.random() * 3);

    // Return the value at the generated index
    return acceptedValues[randomIndex];
}
  
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection) {
    // If the user and CPU selections are the same, return 'tie'
    if (userSelection === cpuSelection) {
        return 'tie';
    }

    // If the user selection is 'rock' and the CPU selection is 'scissors', or
    // the user selection is 'paper' and the CPU selection is 'rock', or
    // the user selection is 'scissors' and the CPU selection is 'paper',
    // return 'win'
    if (
        (userSelection === 'rock' && cpuSelection === 'scissors') ||
        (userSelection === 'paper' && cpuSelection === 'rock') ||
        (userSelection === 'scissors' && cpuSelection === 'paper')
    ) {
        return 'win';
    }

    // In all other cases, return 'lose'
    return 'lose';
}


  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
   play(userSelection) {
    // Generate CPU response
    const cpuSelection = generateCPUResponse();
  
    // Determine winner
    const winner = determineWinner(userSelection, cpuSelection);
  
    // Update score tally
    if (winner === "user") {
      this.score.user ++;
    } else if (winner === "cpu") {
      this.score.cpu ++;
    }
  
    // Add log entry to game history
    this.gameHistory.push(`${userSelection} selected, CPU selected ${cpuSelection}: ${winner} wins`);
   }
  }