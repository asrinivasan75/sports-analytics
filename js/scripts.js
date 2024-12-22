document.addEventListener("DOMContentLoaded", () => {
    fetchLastGame();
    fetchSeasonAverages();
    fetchCareerStats(); // Static for now
  });
  
  const ballDontLiePlayerId = 237; // LeBron James' Player ID
  const currentSeason = 2023; // Current NBA Season
  
  // Fetch last game stats
  async function fetchLastGame() {
    const container = document.getElementById("last-game-stats");
  
    try {
      const response = await fetch(`https://www.balldontlie.io/api/v1/stats?per_page=5`); // Broader query
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
      const data = await response.json();
      console.log("Last Game Debug Data:", data);
  
      if (!data.data || data.data.length === 0) {
        container.innerHTML = "<p>No stats available for debugging purposes.</p>";
        return;
      }
  
      const stats = data.data[0];
      container.innerHTML = `
        <div><strong>${stats.pts || 0}</strong> Points</div>
        <div><strong>${stats.reb || 0}</strong> Rebounds</div>
        <div><strong>${stats.ast || 0}</strong> Assists</div>
        <div><strong>${stats.min || "N/A"}</strong> Minutes</div>
      `;
    } catch (error) {
      container.innerHTML = "<p>Error loading stats.</p>";
      console.error("Last Game Debug Error:", error);
    }
  }
  
  // Fetch season averages
  async function fetchSeasonAverages() {
    const container = document.getElementById("season-averages-stats");
  
    try {
      const response = await fetch(`https://www.balldontlie.io/api/v1/season_averages`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  
      const data = await response.json();
      console.log("Season Averages Debug Data:", data);
  
      if (!data.data || data.data.length === 0) {
        container.innerHTML = "<p>No season averages available for debugging purposes.</p>";
        return;
      }
  
      const stats = data.data[0];
      container.innerHTML = `
        <div><strong>${stats.pts || 0}</strong> Points Per Game</div>
        <div><strong>${stats.reb || 0}</strong> Rebounds Per Game</div>
        <div><strong>${stats.ast || 0}</strong> Assists Per Game</div>
        <div><strong>${stats.min || "N/A"}</strong> Average Minutes</div>
      `;
    } catch (error) {
      container.innerHTML = "<p>Error loading season averages.</p>";
      console.error("Season Averages Debug Error:", error);
    }
  }
  
  // Placeholder for career stats
  function fetchCareerStats() {
    const container = document.getElementById("career-stats-data");
    container.innerHTML = `
      <div><strong>35,367</strong> Total Points</div>
      <div><strong>10,456</strong> Total Rebounds</div>
      <div><strong>9,669</strong> Total Assists</div>
    `;
  }
  