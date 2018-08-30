---
layout: post
title:  "Computing Patterns in The Wheel of Time - Part 1: Word Clouds"
date:   2018-05-02 8:10:04 -0500
categories: wot computational-humanities
comments: true
---

[![BookCovers]({{site.url}}/assets/wot/wheel-of-time-covers.png){:class="img-fluid"}](http://www.mymbuzz.com/2017/04/21/sony-is-developing-robert-jordans-wheel-of-time-for-tv/)

We covered a fair amount of [Natural Language Processing](https://en.wikipedia.org/wiki/Natural-language_processing)
in my recent [Computational Humanities](http://mark.goadrich.com/courses/csci270s18/) course
this spring. As our running example text, I used selections from the epic fantasy series
[The Wheel Of Time](https://en.wikipedia.org/wiki/The_Wheel_of_Time). This proved to be 
a rich source of material for our explorations of how to quantify textual meaning and 
writing style using computational tools.

After [visualizing letter frequency](http://nbviewer.jupyter.org/url/mark.goadrich.com/courses/csci270s18/code/Data%20Vizualization%20Day%201.ipynb), 
for [The Eye of the World](https://en.wikipedia.org/wiki/The_Eye_of_the_World), 
the first book in the series, we set out to determine if the word distribution 
in the text matched the predicted distribution of [Zipf's Law](http://nbviewer.jupyter.org/url/mark.goadrich.com/courses/csci270s18/code/Zipfs%20Law.ipynb).

|Word|Frequency|
|:----:|--------:|
|the|19672|
|and|8132|
|to|7382|
|a|6807|
|he|6614|
|of|6383|
|his|4617|
|in|4132|
|was|3838|
|it|3519|

Frequency of words in The Eye of the World.

For a given text, we calculated the usage frequency of each word. But 
as is typical, looking at the 
top words did not reveal much about the content of the document. 
Removing highly-used English words, or [stop words](http://mark.goadrich.com/courses/csci270s18/data/stop-word-list.txt),
let us uncover more of the content, and we moved on to understanding the algorithms behind drawing 
[word clouds](https://en.wikipedia.org/wiki/Tag_cloud), where words are plotted in
an image with their 
size proportional to their frequency in the document. 

In the end, we developed a first approximation to the [Wordle](http://www.wordle.net/)
[algorithm](http://static.mrfeinberg.com/bv_ch03.pdf), using a monospaced font and
ignoring the possibility of nesting words inside the nooks and crannies of other letters.
And by utilizing a wordlist of [English words](http://mark.goadrich.com/courses/csci270s18/data/english2.txt),
we could highlight those unique words that typically denote characters or locations with 
red. You can follow along with the
development and code with this [Jupyter Notebook](http://nbviewer.jupyter.org/url/mark.goadrich.com/courses/csci270s18/code/Word%20Cloud.ipynb).

I'm including a word cloud that I generated for each book in the series. A few things to note:
the main character of the series, Rand al'Thor, is prominent in each of the clouds,
although you can see when the attention shifts from him to the side-stories of other characters.
Also, the system of magic in the world is very gendered, thus the high frequency of 
man and woman in the books. I'll focus on the shifting cast of characters in a later post,
then later pick up on the rise of abbreviations like *he'd*, *i've*, and *you're* next.

**Spoiler Alert** 

While these clouds don't convey any info about plot, they might
give away some relevant info.

# The Eye of the World

![EyeOfTheWorld]({{site.url}}/assets/wot/EyeOfTheWorld-wc.png){:class="img-fluid"}

# The Great Hunt

![GreatHunt]({{site.url}}/assets/wot/GreatHunt-wc.png){:class="img-fluid"}

# The Dragon Reborn

![EyeOfTheWorld]({{site.url}}/assets/wot/DragonReborn-wc.png){:class="img-fluid"}

# The Shadow Rising

![ShadowRising]({{site.url}}/assets/wot/ShadowRising-wc.png){:class="img-fluid"}

# The Fires of Heaven

![FiresOfHeaven]({{site.url}}/assets/wot/FiresOfHeaven-wc.png){:class="img-fluid"}

# Lord of Chaos

![LordOfChaos]({{site.url}}/assets/wot/LordOfChaos-wc.png){:class="img-fluid"}

# A Crown of Swords

![CrownOfSwords]({{site.url}}/assets/wot/CrownOfSwords-wc.png){:class="img-fluid"}

# The Path of Daggers

![PathOfDaggers]({{site.url}}/assets/wot/PathOfDaggers-wc.png){:class="img-fluid"}

# Winter's Heart

![WintersHeart]({{site.url}}/assets/wot/WintersHeart-wc.png){:class="img-fluid"}

# Crossroads of Twilight

![CrossroadsOfTwilight]({{site.url}}/assets/wot/CrossroadsOfTwilight-wc.png){:class="img-fluid"}

# Knife of Dreams

![KnifeOfDreams]({{site.url}}/assets/wot/KnifeOfDreams-wc.png){:class="img-fluid"}

# The Gathering Storm

![GatheringStorm]({{site.url}}/assets/wot/GatheringStorm-wc.png){:class="img-fluid"}

# Towers of Midnight

![TowersOfMidnight]({{site.url}}/assets/wot/TowersOfMidnight-wc.png){:class="img-fluid"}

# A Memory of Light

![MemoryOfLight]({{site.url}}/assets/wot/MemoryOfLight-wc.png){:class="img-fluid"}

