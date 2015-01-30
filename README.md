# CitiBike

### Spring 2015 Prototype Goals
#### le data
* [Link to the dataset](http://www.citibikenyc.com/system-data)
* Data should be put into a local /data folder (covered by the .gitignore).
* Naming convention for data files: **CitiBike[startmonth][endmonth][year].csv**
* For example, the data filename for the "Download data from Oct - Dec 2013..." option on citibikenyc.com would be CitiBikeOctDec2013.csv

#### Individual explorations (on separate branches of the repo)
* Where do bikes live? Gather some insights for the punchline discussion on January 31.
* Explore tools such as ipython notebooks, interactive widgets, seaborn, d3, etc.
* Scope and reflect appropriately! Be open minded and take notes on what worked well, what didn't work well, first impressions, etc. :)

##### Individual exploration notes for the emily/explore/d3 branch
* Dependencies: 
	* ipython notebooks and their dependencies
* Open CitiBike.html for the visualizations and interesting things (also, be connected to the interwebs)
* Visualization ideas (brainstormed while looking at the CitiBikeFebruary2014 trip data as a dataframe)
	* The latitudes are given... how about putting each station on a map, hovering over the station, and then seeing the stats for each
	* Each station is a node - encoding the traffic between pairs of stations in the connection (line thickness, color, etc) somehow
	* Bike activity vs. time of day
	* Bike trip durations vs. time of day
	* Interactive buttons for options such as starttime, stoptime, usertype, birthyear, gender