// ==UserScript==
// @name          Great Outdoors Theme
// @namespace     https://github.com/CharlieBrumbaugh/GreatOutdoorsTheme
// @description   Simple theme enhancements for the Outdoors.SE
// @include       https://outdoors.stackexchange.com*
// @grant          GM_addStyle
// ==/UserScript==

GM_addStyle(`
           .post-tag,.post-tag:hover{
               border: 1px solid brown;
}
.question-hyperlink:visited, .answer-hyperlink:visited, #hot-network-questions ul a:visited{
    color: brown;
}
.vote-up-on {
    background-position: 0px;
    background-image: url(https://i.stack.imgur.com/oTdiU.png);
    background-size: 40px;
}
           `);

