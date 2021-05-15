/* ========= Creates elements of the HTML page ========= */
const styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', './index.css');
document.head.appendChild(styles);

/**
 * Create search bar
 */
const searchBar = document.createElement('input');
searchBar.setAttribute('id', 'search-bar');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('placeholder', 'Search: "Corte Madera", "Week 1"');

const searchContainer = document.getElementById('search-container');
searchContainer.appendChild(searchBar);

const resultsContainer = document.getElementById('results-container');

function populateData(data) {
  const row = document.createElement('div');
  row.setAttribute('id', 'row');

  const week = document.createElement('p');
  week.setAttribute('id', 'week');
  week.setAttribute('class', 'level-1');
  week.innerHTML = data.Week;

  const difficulty = document.createElement('p');
  difficulty.setAttribute('id', 'difficulty');
  difficulty.setAttribute('class', 'level-1');
  difficulty.innerHTML = data.Difficulty;

  const location = document.createElement('a');
  location.setAttribute('id', 'location');
  location.setAttribute('href', data.LocationLink);
  location.innerHTML = data.LocationName;

  const distance = document.createElement('p');
  distance.setAttribute('id', 'distance');
  distance.innerHTML = data.Distance;

  const trailhead = document.createElement('a');
  trailhead.setAttribute('id', 'trailhead');
  trailhead.innerHTML = "Trailhead";

  const driveTime = document.createElement('p');
  driveTime.setAttribute('id', 'drive-time');
  driveTime.innerHTML = data.DriveTime;

  const description = document.createElement('p');
  description.setAttribute('id', 'description');

  const spotsContainer = document.createElement('div');
  spotsContainer.setAttribute('id', 'spots-container');

  row.appendChild(week);
  row.appendChild(difficulty);
  row.appendChild(location);
  row.appendChild(distance);
  row.appendChild(trailhead);
  row.appendChild(driveTime);
  resultsContainer.appendChild(row);
}

/**
 * Populate data when page loads
 */
 window.addEventListener('load', () => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      console.log("reading from json file");
      for (let i = 0; i < data.length; i++) {
        populateData(data[i]);
      }
    });
});
