var language = 'xml';

var codeMirror = CodeMirror(document.getElementById('text-editor'), {
    lineWrapping: true,
    lint: true,
    mode: language,
    theme: 'dracula',
    lineNumbers: true,
    keyMap: "sublime"
});