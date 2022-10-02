
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

        // Output the data to html page

