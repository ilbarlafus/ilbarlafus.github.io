"use strict";

const imageSourcesCumuli = [
  "/images/cumuli/TF_CUMULI_00001.webp",
  "/images/cumuli/TF_CUMULI_00002.webp",
  "/images/cumuli/TF_CUMULI_00003.webp",
  "/images/cumuli/TF_CUMULI_00004.webp",
  "/images/cumuli/TF_CUMULI_00005.webp",
  "/images/cumuli/TF_CUMULI_00006.webp",
  "/images/cumuli/TF_CUMULI_00007.webp",
  "/images/cumuli/TF_CUMULI_00008.webp",
  "/images/cumuli/TF_CUMULI_00009.webp",
  "/images/cumuli/TF_CUMULI_00010.webp",
  "/images/cumuli/TF_CUMULI_00011.webp",
  "/images/cumuli/TF_CUMULI_00012.webp",
  "/images/cumuli/TF_CUMULI_00013.webp",
  "/images/cumuli/TF_CUMULI_00014.webp",
  "/images/cumuli/TF_CUMULI_00015.webp",
  "/images/cumuli/TF_CUMULI_00016.webp",
  "/images/cumuli/TF_CUMULI_00017.webp",
  "/images/cumuli/TF_CUMULI_00018.webp",
  "/images/cumuli/TF_CUMULI_00019.webp",
  "/images/cumuli/TF_CUMULI_00020.webp",
  "/images/cumuli/TF_CUMULI_00021.webp",
  "/images/cumuli/TF_CUMULI_00022.webp",
  "/images/cumuli/TF_CUMULI_00023.webp",
  "/images/cumuli/TF_CUMULI_00024.webp",
  "/images/cumuli/TF_CUMULI_00025.webp",
  "/images/cumuli/TF_CUMULI_00026.webp",
  "/images/cumuli/TF_CUMULI_00027.webp",
  "/images/cumuli/TF_CUMULI_00028.webp",
];

const imageSourcesAerei = [
  "/images/aerei/aerei1.webp",
  "/images/aerei/aerei2.webp",
  "/images/aerei/aerei3.webp",
  "/images/aerei/aerei4.webp",
  "/images/aerei/aerei5.webp",
  "/images/aerei/aerei6.webp",
  "/images/aerei/aerei7.webp",
  "/images/aerei/aerei8.webp",
  "/images/aerei/aerei9.webp",
  "/images/aerei/aerei10.webp",
  "/images/aerei/aerei11.webp",
  "/images/aerei/aerei12.webp",
  "/images/aerei/aerei13.webp",
  "/images/aerei/aerei14.webp",
  "/images/aerei/aerei15.webp",
  "/images/aerei/aerei16.webp",
  "/images/aerei/aerei17.webp",
  "/images/aerei/aerei18.webp",
  "/images/aerei/aerei19.webp",
  "/images/aerei/aerei20.webp",
  "/images/aerei/aerei21.webp",
  "/images/aerei/aerei22.webp",
  "/images/aerei/aerei23.webp",
  "/images/aerei/aerei24.webp",
  "/images/aerei/aerei25.webp",
  "/images/aerei/aerei26.webp",
  "/images/aerei/aerei27.webp",
  "/images/aerei/aerei28.webp",
  "/images/aerei/aerei29.webp",
  "/images/aerei/aerei30.webp",
];

const imageSourcesAnimali = [
  "/images/animali/TF_SITO_01.webp",
  "/images/animali/TF_SITO_02.webp",
  "/images/animali/TF_SITO_03.webp",
  "/images/animali/TF_SITO_04.webp",
  "/images/animali/TF_SITO_05.webp",
  "/images/animali/TF_SITO_06.webp",
  "/images/animali/TF_SITO_07.webp",
  "/images/animali/TF_SITO_08.webp",
  "/images/animali/TF_SITO_09.webp",
  "/images/animali/TF_SITO_10.webp",
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
