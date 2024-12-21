document.addEventListener("DOMContentLoaded", () => {
    fetchNBAData();
    fetchNFLData();
  });
  
  async function fetchNBAData() {
    const nbaContainer = document.getElementById("nba-games");
    const today = new Date().toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    try {
      const response = await fetch(`https://www.balldontlie.io/api/v1/games?dates[]=${today}`, {
        headers: {
          "Authorization": "Bearer 7f71120c-73b5-4c4d-a0d2-bccdbffb545b"
        }
      });
      const data = await response.json();
      if (!data.data || data.data.length === 0) {
        nbaContainer.innerHTML = "<p>No NBA games available for today.</p>";
        return;
      }
      nbaContainer.innerHTML = data.data
        .map(
          (game) => `
          <div>
            <p><strong>${game.home_team.full_name}</strong> vs. <strong>${game.visitor_team.full_name}</strong></p>
            <p>Start Time: ${new Date(game.date).toLocaleTimeString()}</p>
          </div>`
        )
        .join("");
    } catch (error) {
      nbaContainer.innerHTML = "<p>Error loading NBA data.</p>";
      console.error("NBA Fetch Error:", error);
    }
  }
  
  async function fetchNFLData() {
    const nflContainer = document.getElementById("nfl-games");
    const today = new Date().toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    try {
      const response = await fetch(`https://www.balldontlie.io/api/v1/games?dates[]=${today}`, {
        headers: {
          "Authorization": "Bearer 7f71120c-73b5-4c4d-a0d2-bccdbffb545b"
        }
      });
      const data = await response.json();
      if (!data.data || data.data.length === 0) {
        nflContainer.innerHTML = "<p>No NFL games available for today.</p>";
        return;
      }
      nflContainer.innerHTML = data.data
        .map(
          (game) => `
          <div>
            <p><strong>${game.home_team.full_name}</strong> vs. <strong>${game.visitor_team.full_name}</strong></p>
            <p>Start Time: ${new Date(game.date).toLocaleTimeString()}</p>
          </div>`
        )
        .join("");
    } catch (error) {
      nflContainer.innerHTML = "<p>Error loading NFL data.</p>";
      console.error("NFL Fetch Error:", error);
    }
  }
  