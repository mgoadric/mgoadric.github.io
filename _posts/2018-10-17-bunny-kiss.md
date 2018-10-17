---
layout: post
title:  "Bunny Kiss Progress"
date:   2018-10-16 14:00:04 -0500
categories: unity bunny-kiss anima2d
comments: true
---

My big goal for October is to complete a full game in [Unity](http://unity3d.com),
with working tutorial, GUI, high scores, animations, particle effects, etc. Most games I
have made have just been functional prototypes, so this will push me to refine all 
the elements I know into a complete package, and pick up a few new skills along the way
You can track my progress on this and other game
development projects this year in my stream on [Twitch.tv](https://www.twitch.tv/goadrich).

In particular, I'm working on a game called Bunny Kiss. Two bunnies are on a 2D grid
filled with numbers. A bunny can hop to another orthogonal space on the grid if the 
number at that space matches the number of unoccupied spaces the bunny would have to hop,
including the target space itself, to get there. The two bunnies continue to hop around 
the grid until they arrive at the same location, upon which they kiss and you win the level. 
Here's my current working demo of the game.

![Bunny Kiss Demo]({{site.url}}/assets/games/bunny-kiss-demo.gif){:class="img-fluid"}

Much of the movement and grid layout for this game used skills I'm familiar with, but 
the 2D sprite animations are brand new. I wasn't interested in pixel graphics but more
fluid sprite movement, and found that Unity included a package called 
[Anima2D](https://assetstore.unity.com/packages/essentials/unity-anima2d-79840)
specifically built for this type of animation. The demos looked pretty awesome,
and I followed the 
[Unity Tutorial](https://unity3d.com/learn/tutorials/topics/animation/overview-and-goals?playlist=17099)
directly to get up and running with rigging the skeleton to the sprite meshes. I followed
my mantra of "Actually Try to do the Tutorial" and within an hour had the skills I needed to 
make my own bunny hop! One thing not mentioned in the tutorial was the DPI needed for making 
quality images, and it took me some time to realize that the preview window for playing 
games in Unity was my problem. Finally, with a 400 DPI sprite sheet, I created some nice
hopping and idle animations for my bunny sprite.

![Bunny Hop]({{site.url}}/assets/games/bunny-hop.gif){:class="img-fluid"}

As I continue development, I'll keep my code updated in the
[Bunny Kiss Github Repo](https://github.com/mgoadric/Bunny-Kiss). I might miss a few
milestones, but I'm seriously trying to check in the code as much as possible. This is 
something I stress to my students, but try as they might, they only seem to manage to commit
once a day or so. I'm thinking I need some stronger rubrics and explicit rewards for 
making small, incremental commits for their projects, and we should find a place in 
our curriculum to focus explicitly on some Github practice.