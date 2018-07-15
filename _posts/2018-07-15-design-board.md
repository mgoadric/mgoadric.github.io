---
layout: post
title:  "Prototyping and Playtesting"
date:   2018-07-15 8:10:04 -0500
categories: gamedev board 
comments: true
---

I spent my June journeying back to board game design, both physically and mentally. 
In graduate school, designing board games became my major hobby, and I made many 
excellent friends through attending [Protospiel](http://www.protospiel.org/) each
year in Michigan. After graduation, perfecting my teaching craft consumed me, 
meaning much less time for game design. I'm happy to be able to set aside some time 
during my sabbatical to polish up some old designs and work on new ones.

First, I cleaned up the [Goadrich Games](http://games.goadrich.com/) website where I
host links to my [board](http://www.sjgames.com/nanuk/) and 
[card](http://games.goadrich.com/genepool/) games and 
[video games](https://ldjam.com/events/ludum-dare/38/enceladus/) made for game jams. 
It is still
a rather vanilla [Bootstrap](https://getbootstrap.com/) layout, but I'm happy to have 
all the links in one place. I'll be adding more images and links here as I spin out
more games throughout my sabbatical.

Second, I was able to travel back to Michigan in June to playtest with 
many of my friends, who have gone on to publish and produce games such as
[Wits and Wagers](https://www.northstargames.com/products/wits-wagers-deluxe-edition),
[1812: The Invasion of Canada](https://www.academygames.com/pages/1812),
[Rome: City of Marble](http://rnrgames.com/rome-city-of-marble),
[Hawaii](http://riograndegames.com/games.html?id=409), and
[Pants on Fire](https://boardgamegeek.com/boardgame/42062/pants-fire). 
We spent the weekend playing and deconstructing each other's designs, cooking
excellent meals, and eating [ice cream](http://dairyhill.com/). What impresses me
the most about this group is the combination of elegant design skills and the
ability to critically analyze what is making a game tick or fall apart. 
All in all, it was wonderful to join them again,
here's a report on a few playtests we got in for my in-progress designs, and a
board-game related coding bonus. 

# Mardi Gras

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BjvQ4WOB_Kx/" data-instgrm-version="9" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:37.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BjvQ4WOB_Kx/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Play testing MARDI GRAS, @mgoadric&#39;s worker placement game of Mardi Gras Kreues! #beads #cups #moonpies #revelers #roundhouse</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/brettspiels/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Brett Myers</a> (@brettspiels) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-06-07T21:26:51+00:00">Jun 7, 2018 at 2:26pm PDT</time></p></div></blockquote>
<script async defer src="https://www.instagram.com/embed.js"></script>

First on my list was Mardi Gras, a game I had initially created in 2012 while I lived
in Shreveport, LA, but never had the 
opportunity to playtest. Here is the current elevator pitch blurb:

>It's Mardi Gras carnival season in New Orleans! Players take the role of a krewe, 
trying to spread the most revelry among the residents and visitors to New Orleans. 
Send your krewe workers to supply your float, advertise events, recruit new members, 
and roll through the city in the parades!  *Laissez les bons temps rouler*!

The first playtest was rough as expected, but everyone saw a core
engine that was worth pursuing. Over the course of the weekend, I cut down the rules from 12 
pages to 8, and the next playtest was much smoother. Subsequent refinement of the rules
after the second test has further reduced their length to 6 pages. Mechanisms that
sounded really cool in my head and could be interesting in a computer simulation 
turned out to be tedious in person. Just like in coding, with game rules you always want
to simplify, and it felt great to cut away at the extraneous pieces. Nothing compares
to getting in an actual playtest with players to see what works.

![Mardi Gras Map](/assets/games/mardigrasmap.png){:class="img-fluid"}

I'm looking forward
to playing again to see if I cut too much, and have already made progress on redesigning
the route map to be much more thematic. Here is a link to a Google doc of the	 current 
[rules](https://docs.google.com/document/d/1bbmvM0nk5OOJZWg2AlNIkbu3MxYpjCo8phAHiDtk2Nw/edit?usp=sharing).

# Leaping Lemurs

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Bjyim2eBC10/" data-instgrm-version="9" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/Bjyim2eBC10/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">When it’s late at night and you need to improvise game pieces, you use whatever is at hand. #pretzelgames #roundhouse</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/brettspiels/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Brett Myers</a> (@brettspiels) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-06-09T03:59:28+00:00">Jun 8, 2018 at 8:59pm PDT</time></p></div></blockquote>
<script async defer src="https://www.instagram.com/embed.js"></script>

My other new game design for the weekend was a press-your-luck game with dominos,
themed with silly lemurs trying to leap between trees to collect fruit with amazing 
leaping combo moves.

Before I travelled, my son and I were toying around with various game pieces 
I have lying around the house, and when we got to
the domino set, I suggested we play a variant of Go Fish. The double-sided dominos
introduced a nice chaining mechanic, so when I asked if he had any "3"s and getting the
3:5 tile, I could then ask if he had any "5"s.

I took this idea and ran with it, changing it to where you always went to a pool 
of dominoes, and you could stop any time and collect your chain. But when you were wrong, 
the next player could pick up your chain and try their luck too. This game had a spark,
and we played a few times, adding in a few new twists (and ate lots of 
peanut-butter filled pretzels). I need to write up the rules soon, and I will be tweaking the 
probabilities and making an actual set of tiles to keep playtesting this one.

# Boulevards

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Pac-Man is eating the city! <a href="https://twitter.com/hashtag/roundhouse?src=hash&amp;ref_src=twsrc%5Etfw">#roundhouse</a> <a href="https://t.co/iMVZv2FwnU">pic.twitter.com/iMVZv2FwnU</a></p>&mdash; Brett Myers is cautiously optimistic. (@brettspiel) <a href="https://twitter.com/brettspiel/status/1005633041497288704?ref_src=twsrc%5Etfw">June 10, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I also brought along the tiles and cards for Boulevards, a game 
[Brett](https://playwithoutfear.net/) and I initially designed for a game
design competition on street addressing. 
Players lay tiles to create the road network of Paris, earning money for 
completing roads, and occasionally setting off auctions for naming longer roads,
which will earn the players bonuses at the end of the game.
We had worked on it for a few years off and on, settling on a minimal set of rules
and a two-player setup, but always felt it was missing something before it was 
good enough to get published.

We played a few rounds, switched up some mechanics, and mediated on how to add in 
more players without needing a tie-breaking mechanic. I think this game has a lot of 
promise, and hope we can work up a new set of tiles and rules soon.

# Fujisan

Finally, in between playtesting, I was able to write up a quick solver for 
[James](https://boardgamegeek.com/boardgamedesigner/111/james-kyle)'s solitaire game, 
[Fujisan](https://boardgamegeek.com/boardgame/35893/fujisan). I also got to see the
the [Infinite Board Game](https://www.workman.com/products/the-infinite-board-game)
version of his amazing [piecepack](https://boardgamegeek.com/boardgame/2860/piecepack)
game system. This included very nice tiles and a bright color scheme, an excellent upgrade 
from my homemade version many years ago that I used to 
design [Cell Management](http://www.piecepack.org/rules/CellManagement.pdf).

[![Fujisan](/assets/games/fujisanbgg.jpg){:class="img-fluid"}](https://boardgamegeek.com/image/2850129/piecepack)

James was interested in the probability that a random setup would be unsolvable,
so I flexed my [data-structure](http://mark.goadrich.com/courses/csci151s17/) 
skills to implement an A* solver, generated 1000
random initial setups, and within an hour of crunching found that over 
95% of the boards could be solved! 
My implementation used a slightly different setup he was using 
where the tiles were inscribed with domino number combinations vs. the traditional piecepack coin setup, and
I'm still interested if there is a significant difference between the two.
You can find my quick-and-dirty C# code up on [Github](https://github.com/mgoadric/fujisan).

All this coding inspired some conversations about implementing another game of his with similar
mechanics called **Bunny Kiss**, more updates on this later when I start rolling out
[Unity](https://unity3d.com/) projects.
