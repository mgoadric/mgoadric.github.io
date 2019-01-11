---
layout: post
title:  "Civic Hacking Lab - Experience Report"
date:   2019-01-11 12:10:04 -0500
categories: civic engagement jupyter mybinder
comments: true
---

And last, in this push of blog posts, an update on the [Civic Hacking]({% post_url 2018-08-29-civic-hacking %}) lab I 
revised earlier in the year. My colleagues tried it out in December as the final lab of our
CS1 [intro course](http://mgoadric.github.io/csci150), and while [Jupyter Notebooks](http://jupyter.org/) were again a hit with the students,
[MyBinder](https://mybinder.org/) was an unmitigated disaster. It was able to get the 
students up and running with no software installation as advertised, and they 
could just start typing in a skeleton notebook, but, well, I'll just let you read
the comments from one my colleagues:

>The [MyBinder] kernel would often crash, requiring them to restart and then rerun all the cells from the beginning of the file.  
Worse, occasionally the connection to the server would simply be lost, and at that point there 
is very little that they could do --- if you try to reload at that point it just gives an error 
that says it can't find the binder, and it won't let you download the code at that point either, 
so pretty much the only thing you can do is to select all the text on the entire page, paste it 
into a text file, reload the lab from scratch, and then tediously copy-paste the relevant bits of 
code back in (and hope it doesn't happen again --- but it did happen multiple times for some students).
There were a number of other minor annoyances, e.g. for one student the menus stopped working so 
they could not actually select "Export" from the menu --- as soon as they clicked on it it simply 
went away without causing anything to be downloaded.  That student ended up taking screenshots 
and turning those in. 

Yep, disaster. When it was working, it worked well, but lab technology, 
even when experimenting with something new, should never get this much in the 
way of student learning.
But I'm not ready to abandon the idea yet. Since Hendrix uses Microsoft products for 
email and other team coordination software, it 
appears that we might be able to use [Azure Notebooks](https://notebooks.azure.com/) for 
our next iteration of this idea, which should be a much more reliable server for the students,
and also let them save their code in an account and return to it at a later time, 
rather than relying on them saving all of their code piece by piece.

The more I think about it, the more excited I am to try the right way
to integrate Jupyter notebooks 
into the rest of our CS1 [intro course](http://mgoadric.github.io/csci150). One major
thread that runs through the current course is making small text-based programs that 
require user input, but that's not how they'll be coding in future CSCI courses, or even 
elsewhere they need to use coding experience outside academic courses, and especially 
in my [Scientific Computing](http://mark.goadrich.com/courses/csci385f16/) and 
[Computational Humanities](http://mark.goadrich.com/courses/csci270s18/) courses. If we can
get them using notebooks earlier, in a pain-free lab setting, then we can cover more ground
for higher-level topics later.

Thus, I've written this lab up, as well as a few others from our
course that have a data analytics bent, in the Azure notebooks, and 
we'll be testing them out with our TAs this Spring to hopefully get it up and running
in the Fall course. More as that progresses.



