// ==UserScript==
// @name          Great Outdoors Theme
// @version       0.0.2
// @updateURL     https://raw.githubusercontent.com/CharlieBrumbaugh/GreatOutdoorsTheme/master/greatoutdoors.js
// @namespace     https://github.com/CharlieBrumbaugh/GreatOutdoorsTheme
// @description   Simple theme enhancements for the Outdoors.SE
// @include       https://outdoors.stackexchange.com*
// @include       https://outdoors.meta.stackexchange.com*
// @grant          GM_addStyle
// ==/UserScript==

GM_addStyle(`
           .post-tag,.post-tag:hover{
               border: 1px solid brown;
}
.question-hyperlink:visited, .answer-hyperlink:visited, #hot-network-questions ul a:visited{
    color: brown;
}
.star-off{
    background-position: 3px 0px;
    background-image: url(https://i.stack.imgur.com/7adsj.png);
    background-size: 30px;
}
.star-on {
    background-position: 3px 0px;
    background-image: url(https://i.stack.imgur.com/tegjo.png);
    background-size: 30px;
}

.vote-up-on {
    background-position: 0px;
    background-image: url(https://i.stack.imgur.com/oTdiU.png);
    background-size: 40px;
}
           `);
