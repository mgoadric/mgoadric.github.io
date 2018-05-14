---
layout: post
title:  "Computing Patterns in The Wheel of Time - Part 2: Character Ranking"
date:   2018-05-11 8:10:04 -0500
categories: wot computational-humanities
comments: true
---

Wherein I continue my investigate of the Wheel of Time through natural language
processing. Finally seeing the [word clouds in the last post]({% post_url 2018-05-02-wot-word-clouds %}) 
all together 
inspired me to explore the character arcs present in The Wheel of Time.
With such a large cast of characters and plotlines woven together across
multiple books, I was hoping to find a way to easily visualize the rise and 
fall of each character.

Building on the previous statistics of word frequency, I found the top 16 non-English
words from each book and recorded their rank. For example in the Eye of the World, Rand 
is ranked 1st, Mat 2nd, Moiraine 3rd, etc. I then filtered this list and saved only those
words that appeared in the top 16 for more than one book. From this list, I removed
the highly-ranked contractions *he'd*, *i've*, and *you're* (again, more on this 
coming later), plus the words Aes, Sedai, Amyrlin, and Althor, as these are either
titles or last names.

This leaves us with a full set of main characters and entitites in the series.

```
['Perrin', 'Aviendha', 'Elaida', 'Shaido', 'Gawyn', 'Cadsuane',
 'Elayne', 'Lan', 'Trollocs', 'Seanchan', 'Rand', 'Min', 'Aiel',
 'Egwene', 'Loial', 'Moiraine', 'Verin', 'Tuon', 'Siuan', 'Thom',
 'Nynaeve', 'Birgitte', 'Ashaman', 'Faile', 'Mat']
```

Finally, I manually clustered these characters into five sets, and 
plotted each cluster's rankings over time throughout the series. 
The full code and results are in
another [Jupyter Notebook](http://nbviewer.jupyter.org/url/mark.goadrich.com/courses/csci270s18/code/CharacterFrequencyRank.ipynb). 

**Spoiler Alert!** 

Discussions of plot points and threads across the whole series follow. Please take appropriate 
cautions if this is important to you.

# Rand, Mat, and Perrin

Our first graph is of the three young ta'veren from Emond's Field. The main character Rand is a constant 
presence across the whole series. We can see the slight dip in The Dragon Reborn,
where Rand disappears trying to save the others from his madness. However, he drops
out of the top 16 all together in The Crossroads of Twilight. It is interesting to 
note that this book is also seen as a low-point in the series by many fans (earning the
lowest rating on [Goodreads.com](https://www.goodreads.com/series/41526-the-wheel-of-time)).
Mat is more of a constant presence across the series, while Perrin drops out of the 
top 16 twice. We can also see that the series ends where it began with a focus on
these three characters.

![Male Trio Character Ranks](/assets/wot/mtrio-rank.png){:class="img-fluid"}

# Egewene, Elayne, and Nynaeve

Second, we examine the three young Aes Sedai. Their character arcs pick up steam
as the series progresses, with their mission to track down the Black Ajah
keeping them in focus for the first half of the series. Their paths diverge
individually later on, yet they retain the narrative focus, with at least two of them
found in the top 16 of each novel. Nynaeve is the top character while 
hunting down the Black Ajah, while Elayne becomes the series main focus 
when she fights for the crown in Andor, and Egwene's circuitous rise to the Amrylin
seat places her on top near the end of the series. Nynaeve is the most inconsistent
character, dropping out of the top 16 for many books at the end.

![Female Trio Character Ranks](/assets/wot/ftrio-rank.png){:class="img-fluid"}

# Moiraine, Siuan, Cadsuane, and Elaida

Among the remaining characters, one interesting cluster is the elder Aes Sedai. 
Except for Moiraine's prominence as the third-highest ranked character in the first
book, where she introduces the Emond's Field crew to their larger mission in the 
world, the elder Aes Sedai are in the middle-ground, guiding (or foiling) the 
characters as they complete their tasks. When one drops out, another takes their
place, moving from Moiraine to Siuan to Cadsuane to Elaida. Their influence
wanes near the end, and after their last hurrah in The Gathering Storm, all
four elder Aes Sedai drop out of the top 16 rankings for the last two books, 
leaving the field open for the young characters to complete their rise.

![Elder Aes Sedai Character Ranks](/assets/wot/elder-rank.png){:class="img-fluid"}

# Aviendha, Birgitte, Faile, Gawyn, Lan, Loial, Min, Thom, and Verin

Beyond these characters, we see an array of supporting roles. Comprising love interests,
mentors, bards, and champions, these characters make occasional splashes
in the novels, but mostly hover in the low teens rankings. Aside from Min, 
this cluster pops in and out of focus across the novels, aiding in the main
narrative as needed.

![Supporting Character Ranks](/assets/wot/supporting-rank.png){:class="img-fluid"}

# Trollocs, Aiel, Seanchan, and Ashaman

Finally, we can group the outsiders and sometime-enemies of the series. While the main
fight is against the Forsaken and the Dark One, they never make it to the top 16 rankings
beyond a one-novel blip. However, there is a definite signal for the rise of the Aiel 
in the second quarter, the invading Seanchan in the third, with the series bookended
by battles with Trolloc hordes. Also, the Ashaman never move into the 
top 16 beyond a small emphasis in Crown of Swords or Path of Daggers.

![Outsiders Rank](/assets/wot/outsider-rank.png){:class="img-fluid"}

# Conclusion

At least in this series, using non-English words appears to be a good way
to find the set of main characters. By mapping the characters to their 
ranks instead of absolute frequency, we can ignore the size of each novel, and
concentrate on their relative relationships. What other insights do
these charts let you see? Are there other characters you 
expected to see in these charts that are missing? Let me know in the comments, or
remix the code yourself, I would love to know if you find these useful
in thinking about the series. 