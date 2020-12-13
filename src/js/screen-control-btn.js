const remote = require("electron").remote;

var quit = document.getElementById("exit");
var minimize = document.getElementById("min");
var maximize = document.getElementById("max");
var quit_about = document.getElementById("exit-about");

var fileContainer = document.getElementById("opened-file-container");
var folderContainer = document.getElementById("opened-folder-container");
var explorerContainer = document.getElementById("explorer_container");
var websiteContainer = document.getElementById("websiteRenderer");

var explorerBtn = document.getElementById("explorerBtn");
var fileOpenedBtn = document.getElementById("expend_collapse_file");
var folderOpenedBtn = document.getElementById("expend_collapse_folder");
var websiteBtn = document.getElementById("website_btn");

quit.addEventListener("click", () => {
  remote.getCurrentWindow().close();
});

quit_about.addEventListener("click", () => {
  remote.getFocusedWindow().close();
});

minimize.addEventListener("click", () => {
  remote.BrowserWindow.getFocusedWindow().minimize();
});

maximize.addEventListener("click", () => {
  if (!remote.BrowserWindow.getFocusedWindow().isMaximized()) {
    remote.BrowserWindow.getFocusedWindow().maximize();
    maximize.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>' +
      "</svg>";
  } else if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
    remote.BrowserWindow.getFocusedWindow().restore();
    maximize.innerHTML =
      '<svg class="icon max-icon" viewBox="0 0 16 16" class="bi bi-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>' +
      "</svg>";
  }
});

explorerBtn.addEventListener("click", () => {
  if (explorerContainer.style.width == "300px") {
    explorerContainer.style.width = "10px";
    explorerContainer.style.transition = "300ms";
    explorerBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>' +
      "</svg>";
  } else {
    explorerContainer.style.width = "300px";
    explorerContainer.style.transition = "300ms";
    explorerBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>' +
      "</svg>";
  }
});

websiteBtn.addEventListener("click", () => {
  if (websiteContainer.style.width == "0px") {
    websiteContainer.style.width = "300px";
    websiteContainer.style.padding = "2em";
    websiteContainer.style.transition = "300ms";
    websiteBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>' +
      "</svg>";
  } else {
    websiteContainer.style.width = "0px";
    websiteContainer.style.padding = "0";
    websiteContainer.style.transition = "300ms";
    websiteBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>' +
      "</svg>";
  }
});

fileOpenedBtn.addEventListener("click", () => {
  if (fileContainer.style.height == "30%") {
    fileContainer.style.height = "35px";
    fileContainer.style.transition = "300ms";
    fileOpenedBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>' +
      "</svg>";
  } else {
    fileContainer.style.height = "30%";
    fileContainer.style.transition = "300ms";
    fileOpenedBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>' +
      "</svg>";
  }
});

folderOpenedBtn.addEventListener("click", () => {
  if (folderContainer.style.height == "68.5%") {
    folderContainer.style.height = "35px";
    folderContainer.style.transition = "300ms";
    folderOpenedBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>' +
      "</svg>";
  } else {
    folderContainer.style.height = "68.5%";
    folderContainer.style.transition = "300ms";
    folderOpenedBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>' +
      "</svg>";
  }
});
