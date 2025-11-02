# Section 5 – Refactoring Code Smells in Practice

## Changed all variable names for more clarity on what the variable does.

"c" to "counter"
"a" to " "buttonIncrement"
"b" to "buttonCounter"
"h" to "headingText"

## Edited unnecessary comments in and provided clearer blocks of comments that seperate different parts of the code

## Moved HTML outside of the setup function

## Deleted all the button variables and replaced with one allButtons variable to prevent unnecessary and extra variables

## Created one event listener for when any of the buttons are pushed, it takes in what button id it is and changes the counter accordingly, gets rid of duplicated code from each individual button
