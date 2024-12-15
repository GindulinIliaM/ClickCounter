"use strict";

document.addEventListener('DOMContentLoaded', function() {
    let count = 0;

    document.getElementById('clickButton').addEventListener('click', function() {
        count++;
        document.getElementById('clickCount').innerText = count;
    });
});
