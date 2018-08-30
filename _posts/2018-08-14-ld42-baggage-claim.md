---
layout: post
title:  "Ludum Dare 42: Baggage Claim Post-Mortem"
date:   2018-08-14 8:10:04 -0500
categories: gamedev ludumdare 
comments: true
---

My Ludum Dare 42 entry **Baggage Claim** is complete! 

![baggage-cover-image.png]({{site.url}}/assets/baggage-cover-image.png){:class="img-fluid"}

It's a stressful microgame where you must clear luggage as fast as you can. Each new bag must be shifted on the carousel within 5 seconds of it arriving or you run out of space and the game is over. You score for every piece you get off the carousel.

Jam Submission Page: https://ldjam.com/events/ludum-dare/42/baggage-claim

# Post-Mortem

[Ludum Dare](http://ldjam.com) is a weekend online game development contest. Participants 
have 72 hours to make a game based on a theme revealed at the start of the game jam.
One of my goals for my sabbatical (_yay sabbatical!_) this year is to participate in more Ludum Dare jams. 
I want to further test my design and programming skills, and learn better ways to incorporate it into my [Game Development class](http://mark.goadrich.com/courses/csci370s17/), which I teach every two years. LD42 was my third Ludum Dare, and the first time participating without my students, where I have previously assigned Ludum Dare as part of a [final project](http://mark.goadrich.com/courses/csci370s17/ludumdare.html). I miss the community aspect of developing and playtesting along with my students as they sprint to finish their first real game, but I'm looking forward to having time to play and rate more games online. Here's my post-mortem analysis of what went well this time and what needs improving for the next jam.
I also posted this to the Ludum Dare website, but only participants can make comments there, so
I've duplicated the content here on my personal blog.

# Jam Goals

* Integrate theme
* Simple to play
* Audience of at least 3 yr old
* Refresh Unity skills

I really like how a simple theme can help constrain the game design process. Instead of just trying out anything as you make the game, it gives inspiration to new mechanics and helps eliminate choices that won’t match the theme. I was also looking to make something simple, enough that my 3 year old son could be able to play, but still interesting for me to play. And since the last time I touched [Unity](https://unity3d.com/) was May 2017, I wasn't looking to push and learn anything new, but hoping this would be a good way to get my skills back up to speed as I enter my year of Unity game development. 

# Recipe for Success

It's really hard to make a game in a weekend! For Baggage Claim, I spent roughly 15 hours over the weekend in evenings and my son’s nap-times. Overall, I’m happy with where my game ended up from the initial design. I’m starting to get a feel for the workflow needed to be successful, similar to the work cycle I advise for my students who participate in the [Mathematical Contest in Modeling](http://www.comap.com/undergraduate/contests/) each year.
I think one more time through the jam and I'll be able to write up a general primer for my students to guide their weekend schedules; here is what worked this time.

## Brainstorm

I took the first two hours of the jam to write down various ideas inspired by the theme and also fitting my other jam goals. It helped to constantly write every minute, keeping the ideas flowing and spinning until something clicked. Bouncing from cars in a traffic jam to trains delivering cargo to a boat, anything that would fill up physical space and need to be cleared out, I finally settled on my son's excitement with the airport baggage carousels on our recent cross-country trip. My game would be about getting luggage off the carousel before it clogged up, and to make it more interesting, there would be concentric carousels traveling in opposite directions, where you had to match up shapes to move from one to the other.

## Find good libraries

One I settled on the luggage idea, I set out to find some reference on coding up 
smooth object movement on a curve, so I could use it for the rounded edged of the carousel belts. I quickly stumbled upon the [Hermite Spline Controller](http://wiki.unity3d.com/index.php/Hermite_Spline_Controller) page that was an amazing reference and starting point for my code! 

![750px-SplinePicture.png]({{site.url}}/assets/750px-SplinePicture.png){:class="img-fluid"}

From the above image, it looked exactly like what I would need with some tweaks, you set down reference points, and your object could loop through them smoothly, and all the math is hidden. I had just spent the last two months coding on a [separate research project](https://github.com/mgoadric/cardstock) in C#, and my skills with Visual Studio were fresh, time to get the latest updates to Unity and start coding!

## Step-by-step development
    
One of the hardest things to do in software development is to find the pathway from the empty project to a working product. You know what you want to happen at the end, and might be tempted to code and code and code lots of scripts and create lots of gameObjects, leaving testing until everything is created. I see my intro programming students make this mistake time and time again. But the more you code, the more likely it is that you will make a mistake early and need to rework all of your later coding. 

I have found the most successful way forward is to split up your project into very small pieces, each of which can be measured and tested for success. The way to eat the big apple is with lots of small savory bites.
You might not end up exactly where you thought the goal was, but you will continually be making progress and having something in a working state. Install a version control system like [Github](http://github.com) and be sure to make a commit every hour or so. You can see my code and progress for this project over at my [RunningOutOfSpace](https://github.com/mgoadric/RunningOutOfSpace) repository.

_As a side note, this type of iterative testing and development model would drive my father crazy whenever we worked on a woodworking project together. He would always measure twice and cut once, but I wanted to see the project and assembly tested and fit together at each step, always verifying that it would actually work and we were on the right direction, and it saved us from making large mistakes more than once._

### One thing moving
    
First up was learning how the library worked. The big lesson is that when you see a tutorial you like, **actually try to do the tutorial!** I could have made a few pieces of luggage on the screen and copied bits of code into a script, but that would have most likely resulted in a few hours frustration since I didn't know how it worked yet. Instead, I spent time getting the tutorial to work, and then I could then extend and modify it to meet my needs, always making changes from a working system.

### Multiple things moving
    
Next, time to get more things moving on the screen. All of them on one belt would follow the same route, and I was lucky the library script was abstracted in the right way so I could make multiple moving objects from the same path waypoints. I found a nice free image, and whala, moving luggage!

![2018-08-11 10.05.03.gif]({{site.url}}/assets/2018-08-11 10.05.03.gif){:class="img-fluid"}

### Reverse belt

A little bit more coding, and I could reverse the direction of the objects by loading the waypoints backward as I added in my objects and created their path. With a simple bool added to the script, a conveyor belt became reversible by checking a box in the inspector.
    
### Separate luggage from belt pieces
    
I had luggage flying around now, but to make it move from one belt to another, I needed to separate out the luggage from the conveyor belt. Time to make some more gameObjects, and give the Luggage and BeltPieces different scripts. I ended up with the BeltPiece having a Luggage component, and it would detect collisions with other BeltPieces to transfer luggage. The Luggage script would be in charge of doing a lerp to move from one BeltPiece to the next. I also set up a LuggageMaker in the center, and gave everything RigidBody2Ds and Collider2Ds to detect when pieces were close.

![ezgif.com-gif-maker.gif]({{site.url}}/assets/ezgif.com-gif-maker.gif){:class="img-fluid"}

### Automated movement

The pieces were coming together, now time to focus on game flow. To know if my idea of movement between the carousels was going to work, I created some methods to fire every time a valid collision occured. By putting off the user interaction, I could see the best-case scenario of playing the game to watch for buildup scenarios. In this stage I adjusted some of the collision sizes, moved a few waypoints to give better opportunity for collisions, added some connection LineRenderers and highlighted matches with opacity settings. 

![ezgif.com-gif-maker(1).gif]({{site.url}}/assets/ezgif.com-gif-maker(1).gif){:class="img-fluid"}
    
### User directed movement
    
Finally, time to move from just a simulation to a game! A few OnMouseDown() methods later, and the user can click active connections to make the luggage move! Getting the state right was a little puzzle, and it's still not fully working, but I activated each BeltPiece when it entered the collision with another BeltPiece, and deactivated it when it left. If it activated with two, it would remember the most recent one. 

### UI and Sound

At last, time to polish and deploy! A quick trip to [bfxr](https://www.bfxr.net/) and I was ready with some sound clips to give the user some feedback on their actions, and tick the time away. I overlaid some UI elements for a start button and a TextMeshPro spot for tracking the score, and it was a working game! Hooray!

Also, to have the game be replayable, a little trick was necessary. In Unity, you can make a Singleton instance to track the game state and status of the other object. This makes it easy to have the UI tools get game data without needing component links to prefabs and generated content.

Here is the final gameplay!

![2018-08-13 11.17.40.gif]({{site.url}}/assets/2018-08-13 11.17.40.gif){:class="img-fluid"}

## Abstraction can come later

When I look at my code, there are many places where I think there should be abstraction, but due to the time crunch, I left these until later. For instance, I made a separate prefab for each of the five luggage types instead of a general prefab that I configured later. I also hand-placed all the movement points for each carousel. If I wanted to extend this game with new levels or change the number of carousels, I would definitely need to refactor what I did, but the time investment would not have paid off for the jam.

## Prototype is good enough: Stay away from shiny time sinks
    
At the end of the jam, I feel what you need most is to have something working, not the best game ever. The jam is to put you through the pressure cooker and give you a deadline to make something work. When I've used Ludum Dare in my classes, the jam is only the first step of my student's final project. We take at least a week to playtest the games in class and on campus, and a large portion of their grade is determined by how much they are able to improve on their weekend sprint.
    
You can see that come through in my Baggage Claim entry. I made quick use of online public domain clip art and stayed away from the temptation to spend tons of time making new icons for the passengers at the end. And you can still see the Unity blue screen in the background. Again, what works for me is to keep the focus on making incremental and testable progress toward what will get you a working game.

# Future Plans 

I made a game! It worked! But there's always room to think about what could go better next time.

## Build early to find build bugs

This was my biggest mistake of the jam. On Monday morning, I started getting the design complete and tried my first WebGL build from Unity. The progress bar made it to 90%, then froze and my processor and fan started spinning away. Oh no! I spent an hour worrying and reading about IL2CPP, thinking that was where the build was getting stuck, and trying to reconfigure my build preferences. Finally, I tried one more time, went for a snack break, and came back to the build finishing, hooray! Had I been building earlier I would have been prepared for the delay time and not freaked out with only hours left in the jam.

## Allow time for tuning

The mechanics worked as I expected, but I never really had time to tune the game play experience. Most of the numbers hardcoded into the game are just what I thought looked good at the beginning of development, with some small tweaks at the end. While I think an earlier focus on the player interaction would have slowed down development time, getting the mechanics working is only half of the task, and I'll put aside more time for playtesting a working game at the end next time.

## Explaining the rules

Like my previous entries, I have a hard time explaining the rules in the game itself, I rely too much on the entry page and editing the html build site for detailing what is going on. Again, if I could get to a working prototype earlier, then I would be able to spend more time on the UI and a tutorial level with popups for the rules. This will probably affect my scores, but as I said, to get the game completed, compromised abound.

## Build new skills

I relied on what was familiar to me with making this game, a 2D simple interactive setup with collisions and mouse input. While that's necessary to getting a complete game at the end, I will be spending time between now and the next jam building up new skills. I want to practice making an [RPG](https://www.gamedev.net/articles/game-design/game-design-and-theory/crafting-a-2d-rpg-r3181/), an [isometric design](https://gamedevelopment.tutsplus.com/tutorials/creating-isometric-worlds-a-primer-for-game-developers--gamedev-6511), use my [Oculus setup](https://www.oculus.com/rift/) for VR design, etc, so that I can hit the next jam with new possibilities for development.

## Twitch

My work environment for making this game was just my laptop in various rooms around the house. Because the jam is on the weekend, that's just what is going to happen for me, but I hope in the months to come, I will be streaming to [Twitch](https://www.twitch.tv/) with my office setup as I make more games this year.

# Conclusion

Thanks for reading! I am continually impressed by the Ludum Dare community, and find the emphasis on post-mortem posts to be an amazing source of personal reflection and community building. I hope you found something of value in my analysis. Off to start playtesting and rating the other LD42 games! Congratulations to everyone!