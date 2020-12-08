const remote = require('electron').remote;

var quit = document.getElementById("exit");
var minimize = document.getElementById("min");
var maximize = document.getElementById("max");
var explorerBtn = document.getElementById("explorerBtn");
var fileOpenedBtn = document.getElementById("expend_collapse_file");
var folderOpenedBtn = document.getElementById("expend_collapse_folder");

quit.addEventListener("click",closeWindow);
minimize.addEventListener("click",minimizeWindow);
maximize.addEventListener("click",maximizeWindow);
explorerBtn.addEventListener("click",explorerContianer);
fileOpenedBtn.addEventListener("click",fileOpenedContainer);
folderOpenedBtn.addEventListener("click",folderOpenedContainer);

function closeWindow(){
	 remote.getCurrentWindow().close()
}

function minimizeWindow(){
	remote.BrowserWindow.getFocusedWindow().minimize();
}

function maximizeWindow(){
	remote.BrowserWindow.getFocusedWindow().maximize();
}

function explorerContianer(){
	if(document.getElementById('explorer_container').style.width=='300px'){
		document.getElementById('explorer_container').style.width='10px';
		document.getElementById('explorer_container').style.transition='300ms';
		explorerBtn.innerHTML='<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+'<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>'+'</svg>';
	}
	else{
		document.getElementById('explorer_container').style.width='300px';
		document.getElementById('explorer_container').style.transition='300ms';
		explorerBtn.innerHTML='<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+'<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>'+'</svg>';
	}
}

function fileOpenedContainer(){
	if(document.getElementById('opened-file-container').style.height=='30%'){
		document.getElementById('opened-file-container').style.height='35px';
		document.getElementById('opened-file-container').style.transition='300ms';
		fileOpenedBtn.innerHTML='<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+'<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>'+'</svg>';
	}
	else{
		document.getElementById('opened-file-container').style.height='30%';
		document.getElementById('opened-file-container').style.transition='300ms';
		fileOpenedBtn.innerHTML='<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+'<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>'+'</svg>';
	}
}

function folderOpenedContainer(){
	if(document.getElementById('opened-folder-container').style.height=='68%'){
		document.getElementById('opened-folder-container').style.height='35px';
		document.getElementById('opened-folder-container').style.transition='300ms';
		folderOpenedBtn.innerHTML='<svg class="icon" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+'<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>'+'</svg>';
	}
	else{
		document.getElementById('opened-folder-container').style.height='68%';
		document.getElementById('opened-folder-container').style.transition='300ms';
		folderOpenedBtn.innerHTML='<svg class="icon" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+'<path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>'+'</svg>';
	}
}