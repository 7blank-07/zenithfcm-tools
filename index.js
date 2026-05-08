function calculateChemistry(players) {
  if (!Array.isArray(players)) return 0;

  return players.reduce((sum, player) => {
    return sum + (player.chemistry || 0);
  }, 0);
}

function calculateSquadOVR(players) {
  if (!Array.isArray(players) || players.length === 0) return 0;

  const totalOVR = players.reduce((sum, player) => {
    return sum + (player.ovr || 0);
  }, 0);

  return Math.round(totalOVR / players.length);
}

function comparePlayers(playerA, playerB) {
  return {
    paceDifference: (playerA.pace || 0) - (playerB.pace || 0),
    shootingDifference: (playerA.shooting || 0) - (playerB.shooting || 0),
    passingDifference: (playerA.passing || 0) - (playerB.passing || 0),
    dribblingDifference: (playerA.dribbling || 0) - (playerB.dribbling || 0),
    defendingDifference: (playerA.defending || 0) - (playerB.defending || 0),
    physicalDifference: (playerA.physical || 0) - (playerB.physical || 0)
  };
}

module.exports = {
  calculateChemistry,
  calculateSquadOVR,
  comparePlayers
};
