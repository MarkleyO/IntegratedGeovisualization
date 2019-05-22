# Lab 3 Integrated Geovisualization
>Spring 2019 | Owen Markley | Geography 472: Geovisual Analytics
>Bo Zhao | Wilkinson 210 | T 500-700 pm
>Due May 21, 2019

**Overview**
The first slide consists of a fan made music video for the song Kid Cudi by Playboi Carti. Since the song is not officially released, and the video is an made, it doesn't need to be credited. The font used here and on the rest of the website is from google fonts.
The next slide consists of a base map from cartodb, which is populated with a geoJson file that I created. Each point is the location of one of the most significant hip-hop producing cities. These were collected based on my own prior information. Clicking on any of them will show the name of the city.
Following this is the same map, however instead of revealing the name of the city, the most popular artist from that city is revealed. These were again chosen based on a combination of my own knowledge and opinion.
The next slide is a chart made using C3. To get the data, I went to billboard.com and sorted through each of the year end top 100 charts for the past decade. I manually parsed through to see how many songs were hip-hop, and entered this information into the chart.
The next chart is a bar graph representing the current 25 most popular hip-hop songs in the United States. Again I just went through the list, and determined where each artist was from, and compiled the data in the chart.

**Functional Description**

>I will only cover the javascript in this description since the CSS and HTML are relatively straight-forwards.

>First a new webslides instance is created

>next the two maps are initialized with their location, and the user is prevented from zooming in on the basemaps

> From here the tile layers are added on. I used the carto db dark basemaps

>Next the geojson file is loaded onto each of the two maps. The difference between these is in what value from the geojson file is loaded onto the popup which is bound to each point in the dataset.

>From here the webslides instance is called, and an event listener is added. This will recognize when the user changes slides. Based on what slide they move to, the ws code will display the proper component and either zoom to the correct level, or load in the data for the tables.

>The tables are pretty straightforwards, only requiring me to input the data in the form of columns, and then label each of the parts of the x axis.

**Libraries**

-Leaflet
-Google Font API
-Leaflet ajax
-font awesome
-C3
-jquery

**Data Sources**
all data comes from billboard.com
