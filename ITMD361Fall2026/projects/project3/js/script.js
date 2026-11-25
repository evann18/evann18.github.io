document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("questions-container");
  if (container) {
    const btn = document.createElement("button");
      btn.id = "questionBtn";
      btn.textContent = "Questions";
      container.appendChild(btn);
      btn.addEventListener("click", function () {
        alert("If you have questions, contact me at:\nemnickolaou@gmail.com");
      });
  }
});

function initMap() {
  const iit = {
    lat: 41.8349,
    lng: -87.6270
  };

  const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 12,
    center: iit,
    mapTypeId: "roadmap"
    });

  const marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology"
  });

  const infoWindow = new google.maps.InfoWindow({
    content:
      "<h3>Illinois Institute of Technology</h3>" +
      "<p>Chicago, Illinois</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  map.addListener("click", function (event) {
    new google.maps.Marker({
      position: event.latLng,
      map: map
    });
  });
}