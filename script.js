const btn = document.getElementById('checkWeatherBtn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  const location = document.getElementById('locationInput').value.trim();

  if (!location) {
    output.textContent = 'Please enter a location.';
    return;
  }

  output.textContent = `Analyzing weather for ${location}... 🌦️`;

  setTimeout(() => {
    output.textContent = 'Scanning clouds and atmosphere... ☁️';
  }, 2000);

  setTimeout(() => {
    output.textContent = 'Almost there... 🛰️';
  }, 4000);

  setTimeout(() => {
    output.innerHTML = `🤷‍♂️ I don't know. Just look outside your window.`;
  }, 6000);
});
