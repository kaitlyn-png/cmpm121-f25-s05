# Section 5 – Refactoring Code Smells in Practice

- Mysterious Name: Changed all variable names for more clarity on what the variable does.

"c" to "counter"
"a" to " "buttonIncrement"
"b" to "buttonCounter"
"h" to "headingText"

- Comments: Edited unnecessary comments in and provided clearer blocks of comments that seperate different parts of the code

- Long Function: Moved HTML outside of the setup function

- Lazy Element: Deleted all the button variables and replaced with one allButtons variable to prevent unnecessary and extra variables

- Duplicated Code: Created one event listener for when any of the buttons are pushed, it takes in what button id it is and changes the counter accordingly, gets rid of duplicated code from each individual button
