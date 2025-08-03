"use strict";

const imageSourcesCumuli = [
  "/images/cumuli/TF_CUMULI_00001.jpg",
  "/images/cumuli/TF_CUMULI_00002.jpg",
  "/images/cumuli/TF_CUMULI_00003.jpg",
  "/images/cumuli/TF_CUMULI_00004.jpg",
  "/images/cumuli/TF_CUMULI_00005.jpg",
  "/images/cumuli/TF_CUMULI_00006.jpg",
  "/images/cumuli/TF_CUMULI_00007.jpg",
  "/images/cumuli/TF_CUMULI_00008.jpg",
  "/images/cumuli/TF_CUMULI_00009.jpg",
  "/images/cumuli/TF_CUMULI_00010.jpg",
  "/images/cumuli/TF_CUMULI_00011.jpg",
  "/images/cumuli/TF_CUMULI_00012.jpg",
  "/images/cumuli/TF_CUMULI_00013.jpg",
  "/images/cumuli/TF_CUMULI_00014.jpg",
  "/images/cumuli/TF_CUMULI_00015.jpg",
  "/images/cumuli/TF_CUMULI_00016.jpg",
  "/images/cumuli/TF_CUMULI_00017.jpg",
  "/images/cumuli/TF_CUMULI_00018.jpg",
  "/images/cumuli/TF_CUMULI_00019.jpg",
  "/images/cumuli/TF_CUMULI_00020.jpg",
  "/images/cumuli/TF_CUMULI_00021.jpg",
  "/images/cumuli/TF_CUMULI_00022.jpg",
  "/images/cumuli/TF_CUMULI_00023.jpg",
  "/images/cumuli/TF_CUMULI_00024.jpg",
  "/images/cumuli/TF_CUMULI_00025.jpg",
  "/images/cumuli/TF_CUMULI_00026.jpg",
  "/images/cumuli/TF_CUMULI_00027.jpg",
  "/images/cumuli/TF_CUMULI_00028.jpg",
];

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
  "images/cumuli": imageSourcesCumuli,
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
