"use strict";

var folderMap = {
  "animali-2022": 10,
  "aerei-2026": 25,
  "aerei-2023": 30,
  "cumuli-2024": 30,
};

const imageElement = document.getElementById("gallery-image");

var currentIndex = 1;
var currentFolder = "aerei-2026";

const interval = 2000;
var intervalId = setInterval(
  () => nextImage(folderMap[currentFolder]),
  interval,
);

imageElement.addEventListener("click", () =>
  nextImage(folderMap[currentFolder]),
);

imageElement.addEventListener("mouseover", () => clearInterval(intervalId));
imageElement.addEventListener("mouseout", () => {
  intervalId = setInterval(() => nextImage(folderMap[currentFolder]), interval);
});

function handleArchiveClick(event) {
  event.preventDefault();
  var folder = event.target.getAttribute("data-link");
  if (folder == currentFolder) {
    return;
  }

  currentFolder = folder;
  currentIndex = 1;

  imageElement.src =
    "https://bucket.tobiafaverio.com/{folder}/tf-00001.jpg".replace(
      "{folder}",
      folder,
    );

  clearInterval(intervalId);
  intervalId = setInterval(() => nextImage(folderMap[folder]), interval);
}

function nextImage(sources) {
  currentIndex = (currentIndex % sources) + 1;
  imageElement.src = `https://bucket.tobiafaverio.com/${currentFolder}/tf-${currentIndex
    .toString()
    .padStart(5, "0")}.jpg`;
}
