// Initialize the map
const map = L.map("map").setView([-1.286, 36.817], 6);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Category data
const categories = {
    museums: [
        { name: "Nairobi National Museum", lat: -1.276, lng: 36.817 },
        { name: "Fort Jesus Museum", lat: -4.061, lng: 39.682 },
        { name: "Kisumu Museum", lat: -0.102, lng: 34.759 },
        { name: "Karen Blixen Museum", lat: -1.355, lng: 36.695 }
    ],
    parks: [
        { name: "Maasai Mara Game Reserve", lat: -1.493, lng: 35.143 },
        { name: "Amboseli National Park", lat: -2.645, lng: 37.253 },
        { name: "Tsavo East National Park", lat: -3.208, lng: 38.775 }
    ],
    nationalParks: [
        { name: "Nairobi National Park", lat: -1.373, lng: 36.858 },
        { name: "Hell’s Gate National Park", lat: -0.887, lng: 36.372 }
    ],
    aquaParks: [
        { name: "Wild Waters Mombasa", lat: -4.036, lng: 39.686 }
    ],
    adventure: [
        { name: "Mount Kenya Climbing", lat: -0.152, lng: 37.308 }
    ],
    adrenaline: [
        { name: "Bungee Jumping Sagana", lat: -0.669, lng: 37.703 }
    ]
};

// Store markers
let activeMarkers = {};

// Function to clear all markers
function clearMarkers() {
    for (let category in activeMarkers) {
        activeMarkers[category].forEach(marker => map.removeLayer(marker));
    }
    activeMarkers = {};
}

// Function to toggle markers for a category
function toggleMarkers(category) {
    clearMarkers();
    activeMarkers[category] = categories[category].map(item => {
        const marker = L.marker([item.lat, item.lng]).addTo(map);
        marker.bindPopup(`<b>${item.name}</b>`).openPopup();
        return marker;
    });
}

// Add event listeners
document.getElementById("museumsCategory").addEventListener("click", (e) => { e.preventDefault(); toggleMarkers("museums"); });
document.getElementById("parksCategory").addEventListener("click", (e) => { e.preventDefault(); toggleMarkers("parks"); });
document.getElementById("nationalParksCategory").addEventListener("click", (e) => { e.preventDefault(); toggleMarkers("nationalParks"); });
document.getElementById("aquaParksCategory").addEventListener("click", (e) => { e.preventDefault(); toggleMarkers("aquaParks"); });
document.getElementById("adventureCategory").addEventListener("click", (e) => { e.preventDefault(); toggleMarkers("adventure"); });
document.getElementById("adrenalineCategory").addEventListener("click", (e) => { e.preventDefault(); toggleMarkers("adrenaline"); });
