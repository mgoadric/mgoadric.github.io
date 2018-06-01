---
layout: post
title:  "Computing Patterns in The Wheel of Time - Part 4: Word2Vec Relationships"
date:   2018-05-31 8:10:04 -0500
categories: wot computational-humanities
comments: true
---

![TFIDF Clustering](/assets/wot/word2veccluster.png){:class="img-fluid"}

So far, we've looked at using [word clouds]({% post_url 2018-05-02-wot-word-clouds %}) and
[character rankings]({% post_url 2018-05-12-wot-character-ranking %}),
and [document similarity]({% post_url 2018-05-14-wot-clustering %}), 
but there are a few more [NLP](https://en.wikipedia.org/wiki/Natural-language_processing) tools left to use
in our analysis of [The Wheel Of Time](https://en.wikipedia.org/wiki/The_Wheel_of_Time) series.
Today, we'll look the results of learning word associations.
To do so, we'll need to use a modification of the document vectors
discussed last post to uncover some very interesting relationships between the words
in our corpus.

There are roughly 50,000 unique words used in the series. Whereas before we needed
a 14 x 50,000 matrix for the book similarity, we are going to need a 50,000 x 50,000
matrix to compare our words. For books, it was easy to know which words were part of the book.
It is harder to see how a word can be related to other words. 

The trick commonly used to create the [word vectors](https://www.tensorflow.org/tutorials/word2vec)
is to use machine learning algorithms to predict the local context of a word. There are a few
variants, but they are all known as [Word2Vec](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf).
As a simple example, if we are trying to find words similar to *weave*, we could find each instance
of this word in the series. Then, by aggregating over the 5 words before and 5 words, we can
calculate frequencies of these neighboring words as the values in our vector. 
We can further refine this by giving more weight to closer words. Finally, some 
[machine learning and data compression](http://mccormickml.com/2016/04/19/word2vec-tutorial-the-skip-gram-model/) is added to make all of this
computationally feasible. A really fun online tool to explore the Word2Vec concept is [Word2Viz](https://lamyiowce.github.io/word2viz/),
with graphical visualizations for many genre and topics.

In particular, I will be using the [Gensim](https://radimrehurek.com/gensim/) Python
implementation of [Word2Vec](https://radimrehurek.com/gensim/models/word2vec.html), 
which can learn a new relationship matrix for any
supplied corpus of text, and provides some useful functions to make it easy to 
query the matrix once constructed.

**Spoiler Alert!** 

Discussions of plot points and threads across the whole series follow. Please take appropriate 
cautions if this is important to you.

# Word Similarity

When we use these learned vectors for each word, we can ask about the similarity
between two words. These are words that commonly show up in the same contexts throughout
the corpus.  In the table below, each row includes a key word and the five closest words
according to the Word2Vec algorithm. 

|Word|1|2|3|4|5|
|:-:|:-:|:-:|:-:|:-:|:-:|
|**light**|lights|circumstances|creator|glow|darkness|
|**dark**|wise|prison|leashed|forsaken|yellow|
|**pattern**|reality|evil|world|destruction|complex|
|**taveren**|worth|hero|dangerous|evil|true|
|**power**|source|saidin|forsaken|strength|weave|
|**weave**|saidar|flows|flow|source|balefire|
|**sword**|blade|axe|dagger|hammer|spear|
|**dice**|cards|nalesean|flute|olver|snakes|
|**coin**|purse|ale|money|meal|brandy|
|**horn**|valere|heroes|hunter|shadow|dagger|
|**wolf**|slayer|hopper|dream|wolves|nightmare|
|**braid**|skirt|chin|lip|wrist|tug|
|**andor**|illian|saldaea|cairhien|ghealdan|tear|
|**emonds**|merrilor|caemlyn|baerlon|cairhien|kandor|
|**dream**|dreams|wolf|nightmare|telaranrhiod|memory|

&nbsp;

Since this series is an epic battle between good and evil involving magic,
we can find some interesting connections between these *light* and *dark* words.
Reality is often described as the *pattern*, and *ta'veren* are individuals 
spun out to fix the pattern when things go wrong. Magic flows from the One
*Power*, and is wielded by creating a *weave*.

Next, we can see how common English words can pick up new shades of meaning from 
context within the series. Rand's *sword* brings out common (and uncommon) weapons, 
characters most often use *coin*s for food and drink,
Mat's constant rattling *dice* are related to other card and board games, 
Mat's bond with the *horn*
is related to the fateful dagger,  Perrin's *wolf* aspect evokes both his arch-enemy 
and his wolf mentor, and we have empirical evidence that
Nynaeve's *braid* gets a tug.

Finally, we can also see associations made between location words in the texts, for both
countries such as *Andor*, towns/cities like *Emond's Field*, and even the *dream* world
of Tel'aran'rhiod.
I've included another table of many more words below, but there's more to uncover first.

# Analogies

Since we have turned each word into a vector, which is a mathematical
object, we can actually do simple math operations on these words.
Instead of 1 + 2 = 3, what happens when we say KING - MAN + WOMAN? This 
kind of word math is reminiscent of the [analogies](https://planspace.org/20170705-word_vectors_and_sat_analogies/)
found on old SAT exams, and might make more sense when written "MAN is to KING as WOMAN is to QUEEN".

If we use The Wheel of Time as our corpus, can we computationally understand some of the 
plot connections and relationships?  Let's test it out. Here are a few 
analogies, written using [abbreviated notation](http://www.wordmasterschallenge.com/listtag/analogy), 
that might make sense if you have read the series.

1. EGWENE : SAIDAR :: RAND : ??
2. AIEL : WISE :: FOLK : ??
3. MAT : TUON :: PERRIN : ??

Once you think you know the answers, scroll ahead to see what the algorithm found!

# Results

Here we go!

1. EGWENE : SAIDAR :: RAND : **SAIDIN**

    Good work, Word2Vec! There are two halves of the One Power: one male called Saidin, 
    and one female called Saidar. 
    The algorithm finds enough context to when Egwene and Rand use their powers
    to distinguish these two halves.
    
    It can also pick up on titles and subordinates for these characters, and learned the 
    following correct analogies: 
    
    * EGWENE : **AMYRLIN** :: RAND : **DRAGON**

    * EGWENE : **SISTERS** :: RAND : **ASHAMAN**

2. AIEL : WISE :: FOLK : **WINDFINDER**

	The algorithm is also capable of learning key words for the same
    thing across different cultures. While Aes Sedai is the name given to 
    female channelers, some of the 
	outlying communities and cultures use different variants. In the Aiel, 
	channelers and known as Wise Ones, while in the Sea Folk, the 
	Windfinders use their powers influence the weather. Here are a few more
	using the Aiel as a base reference:

    * AIEL : WISE :: *SEANCHAN* : **DAMANE**
    
    * AIEL : *CARACARN* :: FOLK : **CORAMOOR**
    
    * AIEL : *SHAIDO* :: *TOWER* : **REBELS**
    
    For the Seanchan, channelers are collared and enslaved, earning the name
    *Damane*. The Aiel prophecies tell of the Dragon Reborn as *Caracarn*, while the
    Sea Folk name him *Coramoor*. Finally, one of the Aiel tribes goes rogue and
    fights the others, making them an interesting analogy to the band of Aes
    Sedai rebelling against the White Tower.
    
3. MAT : TUON :: PERRIN : **BERELAIN**

    Finally, we see some of the character relationships can also be understood,
    although maybe not as we might expect! Mat and Tuon have a very tumultuous 
    love/hate relationship, and our algorithm perceives it to be closest to 
    Perrin's one-sided relationship with Berelain. His wife Faile would
    not be happy about that! The second-closest word analogy was Galad, which
    also follows the troubled-then-reconciled relationship arc,
    and finally coming in third was Faile.
    
    Here are a few more with Mat as the base reference

    * MAT : TUON :: *RAND* : **AVIENDHA**

    * MAT : *DICE* :: PERRIN : **HAMMER**
    
    * MAT : *GHOLAM* :: PERRIN : **SLAYER**
    
    When paired with Rand, we again see the love/hate relationship arc appear,
    choosing Aviendha as the closest fit. 
    
    Character traits can also be learned, with Mat's penchant for dice and gambling
    being analogous to Perrin's hammer, used for blacksmith work and other tasks.
    
    For the third, we are trying to find the villan for each character. Mat
    must spend time fighting the Gholam across a few books, while Perrin
    battles with the Slayer in the dream world *Tel'aran'rhiod*.
    Finally, when paired with Rand instead, Word2Vec learned his enemy was Demandred,
    while Egwene's nemesis was Moghedien.

# Conclusion

These pieces only scratch the surface of what is possible to find in the Word2Vec
data. One thing to note, because this is a probabilistic algorithm, different iterations
will produce similar but slightly different results, this is not the only possible
set of vectors that can be learned from this corpus.

What other analogies or associations interest you? I'll leave with some of the 
character associations it learned, which pair well with what 
we saw in our [character rankings]({% post_url 2018-05-12-wot-character-ranking %})
analysis.

|Word|1|2|3|4|5|
|:-:|:-:|:-:|:-:|:-:|:-:|
|**rand**|tam|lan|perrin|he|min|
|**mat**|thom|noal|uno|thorn|loial|
|**perrin**|elyas|loial|tam|hurin|lan|
|**egwene**|nynaeve|elayne|siuan|aviendha|cadsuane|
|**elayne**|egwene|birgitte|nynaeve|min|aviendha|
|**nynaeve**|egwene|aviendha|birgitte|min|elayne|
|**tuon**|egeanin|berelain|selucia|domon|dyelin|
|**moiraine**|verin|cadsuane|liandrin|pevara|sheriam|
|**siuan**|leane|egwene|myrelle|sheriam|lelaine|
|**cadsuane**|verin|moiraine|sheriam|egwene|pevara|
|**elaida**|romanda|alviarin|siuan|lelaine|egwene|
|**verin**|moiraine|cadsuane|sheriam|liandrin|saerin|
|**gawyn**|galad|min|egeanin|birgitte|lan|
|**loial**|hurin|uno|elyas|ingtar|noal|
|**aiel**|shaido|chiefs|maidens|seanchan|sept|
|**seanchan**|shaido|dragonsworn|kin|borderlanders|lands|
|**trollocs**|shadowspawn|myrddraal|darkhounds|sharans|shaido|
|**ashaman**|shaido|soldiers|channelers|darkfriends|maidens|
|**shaido**|borderlanders|aiel|channelers|trollocs|whitecloaks|
|**whitecloaks**|borderlanders|shaido|darkfriends|trollocs|soldiers|
|**lanfear**|rahvin|mesaana|semirhage|demandred|fain|


