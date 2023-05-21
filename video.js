/*jslint plusplus: true, evil: true */
/*global $, console, alret, prompt, Element*/

// Get All My ELement 

var // Variables (Player)
    player = document.querySelector(".player"),
    video = document.querySelector(".viewer"),
    overlayLoad = document.querySelector('.player .overlay-load'),
    // Variables (Controls)
    playerControl = document.querySelector('.player .player-controls'),
    hideControl = document.querySelector('.player .hide-controls'),
    btnTogglePlay = document.querySelector(".player .player-controls > .btnPlay"),
    showTilteVideo = document.querySelector('.player .show-title-video'),
    // Variables (Controls) Advanced Option
    overlayPlay = document.querySelector('.overlay-play'),
    showElementByEvent = document.querySelector('.player .viewEventNow'),
    // Variables (Controls) Progress
    progress = document.querySelector(".progress"),
    progressLoad = document.querySelector('.player .player-controls .progress-load'),
    progressBar = document.querySelector(".progress-filled"),
    progressBall = document.querySelector(".progress-ball"),
    // Variables (Controls) Show Time in Progress
    showTime = document.querySelector(".player .player-controls > .time"),
    // Variables (Controls) Show Time and Your Position On Move Progress
    screenMove = document.querySelector('.player .screen-move'),
    videoMove = document.querySelector('.player .screen-move .video-move'),
    screenTime = document.querySelector('.player .screen-move .time-screen'),
    // Variables (Controls) Ranges Volume And playBackRate
    ranges = document.querySelectorAll(".player-slider"),
