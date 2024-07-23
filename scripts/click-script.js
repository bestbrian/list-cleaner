const axios = require("axios");
const faker = require("faker");

const targetUrl = "YOUR_TARGET_URL"; // Replace with the URL you want to test

// List of some major cities in the US with their approximate coordinates
const locations = [
  { city: "New York", state: "NY", latitude: 40.7128, longitude: -74.006 },
  { city: "Los Angeles", state: "CA", latitude: 34.0522, longitude: -118.2437 },
  { city: "Chicago", state: "IL", latitude: 41.8781, longitude: -87.6298 },
  { city: "Houston", state: "TX", latitude: 29.7604, longitude: -95.3698 },
  { city: "Phoenix", state: "AZ", latitude: 33.4484, longitude: -112.074 },
  // Add more locations as needed
];

function getRandomLocation() {
  const location = locations[Math.floor(Math.random() * locations.length)];
  return location;
}

async function simulateClick() {
  const location = getRandomLocation();
  const ip = faker.internet.ip();
  const userAgent = faker.internet.userAgent();

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent": userAgent,
        "X-Forwarded-For": ip,
        "X-Geo-Location": `${location.latitude},${location.longitude}`,
        "X-Geo-City": location.city,
        "X-Geo-State": location.state,
      },
    });

    console.log(
      `Clicked from ${location.city}, ${location.state} (IP: ${ip}, User-Agent: ${userAgent}) - Status: ${response.status}`
    );
  } catch (error) {
    console.error(
      `Failed to click from ${location.city}, ${location.state} (IP: ${ip}, User-Agent: ${userAgent}) - Error: ${error.message}`
    );
  }
}

async function runSimulation(clicks) {
  for (let i = 0; i < clicks; i++) {
    await simulateClick();
    // Wait for a short random interval between clicks to simulate more realistic behavior
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));
  }
}

// Simulate 10 clicks
runSimulation(10);
