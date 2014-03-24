(function(){
    'use strict';
    var $class;
    if (document.getElementsByClassName) {
        $class = function(cn){
            return document.getElementsByClassName(cn);
        }
    } else{
        $class = function (cn) {
            var cnre = new RegExp( "(?:^|\\s+)" + cn + "(?:\\s+|$)" );
            var ret = [];
            var tags = document.getElementsByTagName("*");
            for (var i = 0, len = tags.length; i < len; i++) {
                if (cnre.test( tags[i].className )) {
                    ret.push(tags[i]);
                }
            }
            return ret;
        }
    }
    var replies = $class('reply');
    var editor = document.getElementById('comment-editor')
    for (var i = 0, len = replies.length; i < len; i++) {
        replies[i].addEventListener('click', function (e) {
            var elem = e.target || e.srcElement;
            var appendtext = '@' + elem.parentNode.parentNode.getAttribute('data-username') + '&nbsp';
            editor.innerHTML += appendtext;
            editor.focus();
            var select = window.getSelection();
            select.collapse(editor, true );
        }, false);
    }
}());

