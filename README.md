# Friend Finder - Node and Express Servers

### Overview

This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from  users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

* [Click here to see this application on Heroku ](https://aqueous-castle-83786.herokuapp.com/).


### How this app works

1. This app displays a survey which has 10 questions. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Determine the user's most compatible friend by following the below guide:

   * Convert each user's answer into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The closest match will be the user with the least amount of difference.


3. Once the current user's most compatible friend were found , then the result is displayed in a modal pop-up.
   * The modal should display both the name and picture of the closest match.

