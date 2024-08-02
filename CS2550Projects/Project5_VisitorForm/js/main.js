/*
Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
Name: Quinton Grant

I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student,
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.

Reflection (1-2 paragraphs):
*/

// CHANGES
// Refactored theme and page stuff to other files, and added validation

// Initialize both page navigation and theme toggling once the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    initPage();
    initTheme();

    initValidation();
});
