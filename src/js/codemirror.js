var language = 'xml';

var myCodeMirror = CodeMirror(document.getElementById('text-editor'), {
    lineWrapping: true,
    lint: true,
    mode: language,
    theme: 'dracula',
    lineNumbers: true
  });