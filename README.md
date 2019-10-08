# React Advent Calendar

With Xmas perpetually looming, this totally essential app will treat your loved ones to some virtual festive cheer.

## Installation

`npm install`

`npm start`

## Notes

The variable 'month' in App.js acts as a lock for anyone trying to peek in the calendar prior to December. Change this to your month while testing.

The data object functions both as providing text to the modal boxes and as days on the front of the doors. This rather unintuitive functionality is planned to be addressed.

## Features

Displaying the peak of web animation sophistication, each door reveals an animated Xmas scene. Clicking again displays a modal, ready for a message of your choosing. Text and gif source stored in separate JSON file for easy editing.

## Caveats

Having started this project early on in my React learning and later returning to it, this is somewhat of a frankenmonster in regards to React best practises. For example, the addition of CSS classes triggers the door animations. So don't look at this as an example of prime React-like-functionality, by any means.

## To-dos

- Save which days have been opened in localStorage, and have the doors remain open over new sessions
- Add some garish celebratory animation on the 24th
- Make it so the doors will only open in December?
- Add a modal message: 'No Peeking!', if clicked on a day not yet reached
- Make mobile friendly
- Divide the data object's two intertwined 'day' roles

Live example!