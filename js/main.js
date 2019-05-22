var ws = new WebSlides();

var map = L.map("mymap", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView([38.71, -98.96], 5);

var map2 = L.map("mymap2", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView([38.71, -98.96], 5);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 19
}).addTo(map);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 19
}).addTo(map2);

var cities = null;
cities = L.geoJson.ajax("assets/map.geojson", {
  attribution: 'Data collected by Owen Markley',
  onEachFeature: function(feature, layer){
    layer.bindPopup(feature.properties.Name);
  }
});
cities.addTo(map);

var rappers = null;
rappers = L.geoJson.ajax("assets/map.geojson", {
  attribution: 'Data collected by Owen Markley',
  onEachFeature: function(feature, layer){
    layer.bindPopup(feature.properties.Top);
  }
});
rappers.addTo(map2);

ws.el.addEventListener('ws:slide-change', function(){
  crtDiv = $(".current div");
  if(crtDiv.attr("id") === "mymap"){
    map.invalidateSize();
    map.fitBounds([
      [49.3, -138.5],
      [22.8, -67.4]
    ]);
  }else if(crtDiv.attr("id") === "mymap2"){
    map2.invalidateSize();
    map2.fitBounds([
      [49.3, -138.5],
      [22.8, -67.4]
    ]);
  }else if(crtDiv.attr("id") === "mychart1"){
    var chart1 = c3.generate({
      bindto: "#chart1",
      title: {
        text: "Year vs Percentage of Songs"
      },
      data: {
        x: 'x',
        columns: [
          ['x', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
          ['Percetage of Hip-Hop on Yearly Chart', 33, 32, 31, 27, 30, 38, 38, 50, 56 ]
        ],
        colors: {
          //data1: #9212e2;
        }
      }
    });
  }else if(crtDiv.attr("id") === "mychart2"){
    var chart2 = c3.generate({
      bindto:"#chart2",
      title: {
        text: "City vs # of songs currently Billboard Hot 25"
      },
      data:{
      //  color: #9212e2,
      //  x:'x',
        columns: [
          //['x', 'Atlanta', 'New York', 'Fayetteville', 'Cleveland', 'Philadelphia', 'Detroit', 'Miami', 'Chicago', 'Los Angeles', 'Memphis', 'Houston'],
          ['Number of Songs on Chart', 6, 3, 1, 1, 2, 2, 3, 3, 2, 1, 1]
        ],
        colors: {
          //'Number of Songs on Chart': #9212e2;
        },
        type: 'bar'
      },
      axis: {
        x:{
          type: 'category',
          categories: ['Atlanta', 'New York', 'Fayetteville', 'Cleveland', 'Philadelphia', 'Detroit', 'Miami', 'Chicago', 'Los Angeles', 'Memphis', 'Houston']
        }
      }
    });
  }
});
