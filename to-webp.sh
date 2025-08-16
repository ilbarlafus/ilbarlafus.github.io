#!/bin/bash

DIR=$1

if [[ $DIR == "" ]]; then
   echo "Usage ./to-webp.sh <directory>"
elif [ ! -d "$DIR" ]; then
  echo "$DIR does not exist."
fi

for file in "$DIR"/*
do
  echo "Converting "${file%.*}" to .webp"
  ffmpeg -i $file ${file%.*}.webp
done

echo "Removing all non .webp file from $DIR"
rm "$DIR"/*.jpeg
rm "$DIR"/*.heic
rm "$DIR"/*.jpg
rm "$DIR"/*.png
