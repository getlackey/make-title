/*jslint node:true, browser:true */
'use strict';
/*
    Copyright 2015 Enigma Marketing Services Limited

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

module.exports = function (name) {
    var title = '',
        i = 0,
        wasUppercase = false;

    if (!name) {
        return '';
    }

    for (i = 0; i < name.length; i += 1) {
        if (/([A-Z0-9])/.test(name[i])) {
            // allow consecutive uppercase letters to stay together
            // eg. myCMS -> My CMS
            if (!wasUppercase) {
                title += ' ';
                wasUppercase = true;
            }
        } else {
            wasUppercase = false;
        }
        title += name[i];
    }

    title = title.charAt(0).toUpperCase() + title.substring(1);
    return title;
};