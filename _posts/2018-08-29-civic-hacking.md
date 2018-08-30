---
layout: post
title:  "Civic Hacking - Conway Tornado Sirens"
date:   2018-08-29 8:10:04 -0500
categories: civic hacking tornado 
comments: true
---

I'm working on a panel proposal for [SIGCSE 2019](https://sigcse2019.sigcse.org/)
with the topic of "Civic Engagement Across the Computing Curriculum."  I sent out 
an email to the SIGCSE mailing list asking for interested volunteers to join me, and I was
overwhelmed by 15 excited replies. Because of limited time in the panel (75 minutes) 
and limited space in the proceedings (2 pages) I could only accept 4 other panelists,
but we are attempting to make our proposal very engaging and inclusive of the audience
to allow for everyone's voice to be heard. The deadline for panel submissions is Friday,
so we are hard at work revising and trimming our statements to fit the submission constraints.

One of the topics I mention in my position statement is a [Civic Hacking
lab](http://mgoadric.github.io/csci150/labs/lab13.html) that I developed 
last fall for our [CS1](http://mgoadric.github.io/csci150) course. The city of Conway
has multiple [datasets about the city](http://data-conwayargis.opendata.arcgis.com/) 
available for download. Our assignment had the students combine the location data 
for schools and tornado sirens to visualize the coverage of tornado warnings, with the
following image as the eventual goal of the lab.

![Tornado Sirens]({{site.url}}/assets/cocalcscatterfinal.png){:class="img-fluid"}

I've spent some time this week revising this lab, inspired by another SIGCSE mailing 
list post on methods to incorporate [Jupyter Notebooks](http://jupyter.org/) 
into a course without requiring students to install any software. One of the solutions that 
piqued my interest was [MyBinder](https://mybinder.org/), where you provide the url of 
a notebook available on GitHub, and it is wrapped up with a virtual environment 
to be available for students to explore and process. I'm hoping this fixes some of
the problems we encountered in the lab, where students were stumbling over 
setting up the [CoCalc](https://cocalc.com/app) environment and subsequently losing 
their data because of our freeware version losing priority. With a template notebook 
provided, I think they would make much more progress in the lab. It would be great if I 
can get this ready for this fall's course and get more student reflection
experiences.

I also managed to 
refresh the plotting section with a [smoother heatmap](https://stackoverflow.com/questions/10958835/matplotlib-color-gradient-in-patches)
of siren coverage, and incorporate the city boundary polygon using [GeoPandas](http://geopandas.org/),
[descartes](https://pypi.org/project/descartes/), 
and [some](http://darribas.org/gds15/content/labs/lab_03.html)
[tutorial](https://stackoverflow.com/questions/47847252/how-do-i-set-matplotlib-plot-to-no-fill)
[help](http://www.acgeospatial.co.uk/geopandas-shapefiles-jupyter/).

![Proposed Tornado Sirens]({{site.url}}/assets/proposed_heatmap_coverage.png){:class="img-fluid"}

The schools are plotted in white, the current siren locations are green, and the proposed 
new sirens are in red. We can still see Carolyn Lewis Elementary School (CLES) is at the
edge of hearing for the sirens. I updated the radius for hearing to be 1.25 miles, after 
email conversations with the Asst. Director Planning and Development for the City of Conway.

I'm hoping to find a way to talk to our city leadership about this graph and see if there
can be additional proposed sirens out near this elementary school.