// This page is for: (and needs to be included in html script tags)
// Fetch requests (when users search teams, players, etc.)
// Functions to handle what is happening on the html page
// Event handler for search button
// Start function displays events at start page (cards populated with team/player data)
// Event listener for search button (when user clicks search button)
// Function to create user profile
// Function to display user profile


function getPlayerStats(date) {
    var requestUrl = `https://sportsdata.io/developers/api-documentation/nfl#/endpoint/daily-fantasy-players${date}?key=${process.env.SPORTS_DATA_API_KEY}`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
        const playerName = data[0].name;
        const playerId = data[0].PlayerID;
        const playerTeam = data[0].Team;
        const playerPosition = data[0].Position;
        const LastGameFantasyPoints = data[0].LastGameFantasyPoints;
        const ProjectedFantasyPoints = data[0].ProjectedFantasyPoints;

    