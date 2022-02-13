# Project Name

Weekend homework, to-do list

## Description

-This weekends assignment was to create a front end experience that allows a user to create a Task.
-After which that information should be saved on the database. 
-There should also be a delete button with an additional button to check off tasks from the to-do list. 

-The hardest part for me was really setting up everything initially. Getting the server, router, client, and database all communicating with one another, 
-After that was completed, A few other challenges arose:
   
    1* Getting the styling to change after checking off an item.
    2* Creating a prompt with the delete button to prevent an accidental delete unless verified
    3* Actually making the webpage look better than 'the vanilla javascript'

- For item one, I figured out how to target if an item was complete by accessing it in the for-loop of my renderTasks function. 
    once I was able to target that data for each item, I just created an if statement around it and depending on the value of the data, it would
    append one row or another in the table which signified if it was infact 'checked off'.

- For the second one, I was just unfamiliar with the syntax that I needed. Once I figured that out, I wrote an if statement where if the user 
    confirms with the button-press in the prompt, Ajax is able to continue with it's delete method. 

- The last one is something that up until now, I havent really put a lot of effort into. Css styling has been a bit of an after thought for me. 
    With all the new concepts we are learning, it's been difficult for me to even have time to practice and play around with how the webpage looks. 
    Fortunatly I was able to get the functionality of this assignment finished early enough so that I could play around and learn a bit with css. 
    Every day, I'm better than the last!

## Acknowledgements:

    -I would just like to take a moment and thank a few classmates that have helped nudge me in the right direction on this project. With out them, it would have taken much longer to complete. 

    Adam Garberg for the delete prompt hint, Cameron Soudbash for the initial set up of the server, and everyone who came in on Saturday who helped fill the room with good vibes and good tunes. 


