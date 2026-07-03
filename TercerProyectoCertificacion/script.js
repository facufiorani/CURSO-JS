const poll = new Map();

function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  if (poll.has(option)) {
    const voters = poll.get(option);
    if (voters.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    }
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

function displayResults() {
  let results = "Poll Results:";
  poll.forEach((voters, option) => {
    results += `\n${option}: ${voters.size} votes`;
  });
  return results;
}
// ===== Datos de prueba =====
addOption("Egypt");
addOption("Python");
addOption("Rust");
addOption("Minecraft");

vote("Egypt", "user1");
vote("Egypt", "user2");
vote("Python", "user3");
vote("Rust", "user4");
console.log(displayResults());
