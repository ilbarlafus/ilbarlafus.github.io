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
  "/images/aerei-v3/aerei-0.webp",
  "/images/aerei-v3/aerei-1.webp",
  "/images/aerei-v3/aerei-2.webp",
  "/images/aerei-v3/aerei-3.webp",
  "/images/aerei-v3/aerei-4.webp",
  "/images/aerei-v3/aerei-5.webp",
  "/images/aerei-v3/aerei-6.webp",
  "/images/aerei-v3/aerei-7.webp",
  "/images/aerei-v3/aerei-8.webp",
  "/images/aerei-v3/aerei-9.webp",
  "/images/aerei-v3/aerei-10.webp",
  "/images/aerei-v3/aerei-11.webp",
  "/images/aerei-v3/aerei-12.webp",
  "/images/aerei-v3/aerei-13.webp",
  "/images/aerei-v3/aerei-14.webp",
  "/images/aerei-v3/aerei-15.webp",
  "/images/aerei-v3/aerei-16.webp",
  "/images/aerei-v3/aerei-17.webp",
  "/images/aerei-v3/aerei-18.webp",
  "/images/aerei-v3/aerei-19.webp",
  "/images/aerei-v3/aerei-20.webp",
  "/images/aerei-v3/aerei-21.webp",
  "/images/aerei-v3/aerei-22.webp",
  "/images/aerei-v3/aerei-23.webp",
  "/images/aerei-v3/aerei-24.webp",
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
  "images/aerei-v3": imageSourcesAerei,
  "images/cumuli": imageSourcesCumuli,
};

const imageElement = document.getElementById("gallery-image");

const interval = 2000;
var intervalId = setInterval(() => nextImage(imageSourcesAerei), interval);

var imageIndex = 0;
var currentFolder = "images/aerei-v3";

imageElement.addEventListener("click", () =>
  nextImage(folderMap[currentFolder]),
);

imageElement.addEventListener("mouseover", () => clearInterval(intervalId));
imageElement.addEventListener("mouseout", () => {
  intervalId = setInterval(() => nextImage(folderMap[currentFolder]), interval);
});

// var archiveLinks = document.querySelectorAll(".archive-link");
function handleArchiveClick(event) {
  event.preventDefault();
  var folder = event.target.getAttribute("data-link");
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
