"use strict";

const imageSourcesAerei = [
  "/images/aerei/aerei1.jpg",
  "/images/aerei/aerei2.jpg",
  "/images/aerei/aerei3.jpg",
  "/images/aerei/aerei4.jpg",
  "/images/aerei/aerei5.jpg",
  "/images/aerei/aerei6.jpg",
  "/images/aerei/aerei7.jpg",
  "/images/aerei/aerei8.jpg",
  "/images/aerei/aerei9.jpg",
  "/images/aerei/aerei10.jpg",
  "/images/aerei/aerei11.jpg",
  "/images/aerei/aerei12.jpg",
  "/images/aerei/aerei13.jpg",
  "/images/aerei/aerei14.jpg",
  "/images/aerei/aerei15.jpg",
  "/images/aerei/aerei16.jpg",
  "/images/aerei/aerei17.jpg",
  "/images/aerei/aerei18.jpg",
  "/images/aerei/aerei19.jpg",
  "/images/aerei/aerei20.jpg",
  "/images/aerei/aerei21.jpg",
  "/images/aerei/aerei22.jpg",
  "/images/aerei/aerei23.jpg",
  "/images/aerei/aerei24.jpg",
  "/images/aerei/aerei25.jpg",
  "/images/aerei/aerei26.jpg",
  "/images/aerei/aerei27.jpg",
  "/images/aerei/aerei28.jpg",
  "/images/aerei/aerei29.jpg",
  "/images/aerei/aerei30.jpg",
];

const imageSourcesAnimali = [
  "/images/animali/TF_SITO_01.jpg",
  "/images/animali/TF_SITO_02.jpg",
  "/images/animali/TF_SITO_03.jpg",
  "/images/animali/TF_SITO_04.jpg",
  "/images/animali/TF_SITO_05.jpg",
  "/images/animali/TF_SITO_06.jpg",
  "/images/animali/TF_SITO_07.jpg",
  "/images/animali/TF_SITO_08.jpg",
  "/images/animali/TF_SITO_09.jpg",
  "/images/animali/TF_SITO_10.jpg",
];

var folderMap = {
  "images/animali": imageSourcesAnimali,
  "images/aerei": imageSourcesAerei,
};

const imageElement = document.getElementById("gallery-image");

const interval = 2000;
var intervalId = setInterval(() => nextImage(imageSourcesAerei), interval);

var imageIndex = 0;
var currentFolder = "images/aerei";

imageElement.addEventListener("click", () =>
  nextImage(folderMap[currentFolder])
);

imageElement.addEventListener("mouseover", () => clearInterval(intervalId));
imageElement.addEventListener("mouseout", () => {
  intervalId = setInterval(() => nextImage(folderMap[currentFolder]), interval);
});

// var archiveLinks = document.querySelectorAll(".archive-link");
function handleArchiveClick(event) {
  console.log("Archive link clicked");
  event.preventDefault();
  var folder = event.target.getAttribute("data-link");
  console.log("Selected folder:", folder);
  if (folder == currentFolder) {
    return;
  }

  currentFolder = folder;
  imageIndex = 0;
  imageElement.src = folderMap[folder][0];
  clearInterval(intervalId);
  intervalId = setInterval(() => nextImage(folderMap[folder]), interval);
}

function nextImage(sources) {
  imageIndex = (imageIndex + 1) % sources.length;
  imageElement.src = sources[imageIndex];
}
