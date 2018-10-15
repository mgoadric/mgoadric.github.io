---
layout: post
title:  "Procedural Puzzle Challenge Generation in Fujisan Submitted"
date:   2018-10-15 14:10:04 -0500
categories: fujisan procedural-content
---

I spent most of September thinking about [Fujisan](https://boardgamegeek.com/boardgame/35893/fujisan).
As I mentioned in an earlier post on [board game designs]({% post_url 2018-07-15-design-board %}),
my friend [James](https://boardgamegeek.com/boardgamedesigner/111/james-kyle) was
interested in the percentage of random board setups that were solvable in his game,
and I built a program to simulate random setups and solve them. The results looked 
promising, so I wrote up a few other setup methods for comparison, finally giving us the
following graph, which shows the solvability of each method. 

![solvability.gif]({{site.url}}/assets/games/standalonesolve.png){:class="img-fluid"}

The percentages were high! The next question was why? As we dove into these simulations, it became clear to us that we'd found a nice case
study for examining [Procedural Content Generation](http://pcgbook.com/) within
a physical board game. So, we scoured the literature for related works, generated more
data across different metrics, and wrote and wrote and wrote to understand what 
we had learned through this process.

Finally, we went in search of a publication venue, and finding that [Game & Puzzle Design](http://gapdjournal.com/)
Journal was no longer on a regular publication schedule, we tuned our article to
the newly-rechristened [IEEE Transactions on Games](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7782673).
We're hoping to hear back in a few months, in the meantime, we've posted a [preprint](https://arxiv.org/abs/1810.01926)
on [arXiv](http://arxiv.org) with all the details, and would love to hear your feedback.

I also worked up a set of 
[Fujisan Powerpoint Slides](http://goadrich.com/mark.goadrich.com/articles/FujisanHendrixFall2018.pptx)
and plan to give a talk at Hendrix sometime in the next month. I'd hoped to use Google 
Slides, but couldn't find a way to make objects move around the screen. In the end, I'm quite
happy with the animation of Fujisan gameplay I could make in Powerpoint:

![fujisan-gameplay.gif]({{site.url}}/assets/games/fujisan-gameplay.gif){:class="img-fluid"}

