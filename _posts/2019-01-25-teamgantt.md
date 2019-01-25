---
layout: post
title:  "Course Planning with Team Gantt"
date:   2019-01-25 10:10:04 -0500
categories: courses project management gantt
comments: true
---

Planning out my syllabi for courses has always been a tedious exercise. It all 
starts out well; for a new course, I look at the calendar for that semester, and start placing in 
my topics, labs, and exams. 
When I started out teaching, I printed a semester-long [calendar](http://mark.goadrich.com/archive/calendar.html)
for each course. For a while, I wrote my own script
to generate the HTML, but eventually moved to an [online calendar](http://www.pdfcalendar.com/)
generator. I plotted out the courses, sometimes with colored pencils, and taped them up to my 
office walls for my and my students' reference. 

![150 Clean Calendar]({{site.url}}/assets/150initial.png){:class="img-fluid"}


But the next time around, there's edits to be made.
Either one day wasn't enough for certain course topics, or a homework time needs to be adjusted,
or a new topic needs to be added, and everything after needs to be moved around. Or the course
is offered in a different semester with different breaks and holidays, or moves from a MWF timeslot 
to a TR offering, or the lab time shifts from Tuesday to Thursday, AUGH! These rearrangements are pure torture.

![150 Messy Updated Calendar]({{site.url}}/assets/150clip.png){:class="img-fluid"}

Even if I teach
the same course again in the same semester with the same topics and same day-of-the-week schedule, to avoid
the big headaches above, there
will inevitably be changes I need to make. Some years, the spring semester starts on a Monday, 
and others, it starts on a Tuesday. [Thanksgiving](https://www.timeanddate.com/holidays/us/thanksgiving-day) will always be a moving target, and even 
my dreams came true and we did manage to move to the [World Calendar](https://en.wikipedia.org/wiki/World_Calendar), as shown below,
[moon-based holidays](https://www.timeanddate.com/calendar/determining-easter-date.html) like Easter would never be fixed.

![World Calendar](https://upload.wikimedia.org/wikipedia/commons/b/be/WorldCalendar.png){:class="img-fluid"}

Also, at my institution, our faculty can't really decide if we support a mid-winter break around 
Presidents' Day, so it only gets voted in every other year. Hooray!

Eventually, I transitioned away from paper to a spreadsheet, settling on
[Google Sheets](https://docs.google.com/spreadsheets/d/1XFv9NIlLo66OJUyaXfXlm9FbmC_KryzWp8Dl1PqndZw/edit?usp=sharing)
for plotting out the semester, but there was still a lot left to be desired.
I made the labs a different color, in all caps, but the due dates would overlap
with course topics, quickly turing into a formatting mess where I tried to blend 
colors with a gradient to little success. And still, rearranging the schedule
for the next offering was painful every single time.

![340 Google Sheets]({{site.url}}/assets/340sheets.png){:class="img-fluid"}

However, I finally found something I believe might be a sustainable solution: [Gantt charts](https://en.wikipedia.org/wiki/Gantt_chart)!
When working through rearranging my [Databases and Web Systems](http://mark.goadrich.com/courses/csci340s18/)
course (moving from spring to fall this coming year) I realized that teaching a course 
is very similar to [project management](https://en.wikipedia.org/wiki/Project_management), 
one of the topics I encourage my students to investigate
as they work on a community-focused software project.

![Gantt Chart Example](https://global-uploads.webflow.com/5a5399a10a77cc0001b18774/5a8eebb62f2961000181b126_gantt_hero_screen%403x.svg){:class="img-fluid"}

Gantt charts let you plan out a project graphically, set up dependencies between
different tasks, and denote milestones within the project, which are very analogous
to the topics, labs, and homeworks of a typical course.
While there are many complicated project management software packages, 
[TeamGantt](http://teamgantt.com) struck me as simple and elegant, with an 
easy GUI for creating and editing tasks, groups, and milestones. 

Here's a portion of my Gantt chart that I made this week for my course.

![340 Gantt Chart]({{site.url}}/assets/340gantt.png){:class="img-fluid"}

And most amazing to me is that this chart can be translated into a calendar! All along, I'd
been working at editing a *view* of the data each semester I taught a course, but now I can 
really just concentrate on moving and rearranging the topics on a *model* level, and 
leave the view generation to TeamGantt!

![340 Calendar]({{site.url}}/assets/340calendar.png){:class="img-fluid"}

Even more appealing is that TeamGantt offers an [educator account](https://www.teamgantt.com/blog/gantt-chart-software-for-the-modern-classroom), so for this fall,
I'll be moving project management from a recommendation to a requirement for my
course, with TeamGantt front and center, by adding my students to my account and 
demonstrating how it all works with our course syllabus. I've planned out two 
of my fall courses this year already:

* [CSCI 340: Databases and Web Systems](https://prod.teamgantt.com/gantt/schedule/?ids=1447720&public_keys=QL7w9J3pEbGs&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=)
* [CSCI 380: Theory of Computing](https://prod.teamgantt.com/gantt/schedule/?ids=1452049&public_keys=J4NZa8mZYaiu&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=)

I'm really hoping this fixes my frustrations with course planning, and even 
eases any mid-semester corrections I might need to make. 
How do you plan out your courses? Have you found success or frustration using project management software?
Have you been doing this for years and I'm behind the curve in discovering its utility for course planning?
I'd love to hear in the comments other ways you have found to make course planning as painless as possible, thanks for reading!
