// ==UserScript==
// @name         AWS Console Email Autofill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autofill email for AWS login.
// @author       Sam Kim
// @match        https://signin.aws.amazon.com/signin*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('resolving_input').value = 'samkim90274+aws@gmail.com';
    document.getElementById('next_button').click();
})();
