mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA"; //accesstoken for map style

const map = new mapboxgl.Map({
    container: "my-map", //ID for my-map container
    style: "mapbox://styles/spblisarenko12/clslj9jrv03xh01p2hed9fldp", //URL for map style
    center: [-79.41390704282365, 43.64777081498133], //starting position coordinates in longitude and latitude
    zoom: 12 //starting zoom for the map

});

map.on('load',() => {

    //Data source for three different point types in GeoJSON format
    map.addSource('parks', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Greenwood Park"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.32874832151931,
                            43.66896979251712
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Tommy Thompson Park"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.3387014871047,
                            43.62067578765755
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Riverdale Park"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.35455328042543,
                            43.67006235741786
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });


    map.addLayer({
        'id': 'public-park',
        'type': 'circle',
        'source': 'parks',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#600094'
        }

    });


    //Add an additional source to a GeoJSON file
    map.addSource("parks-lines", {
        type: "geojson",
        data: "https://bpslisarenko11.github.io/GGR472-LAB2/park_directions1.geojson", // Link to GeoJSON link in GitHub
    
    });
    //Add the GeoJSON link source as a layer
    map.addLayer({
        "id": "park_directions",
        "type": "line",
        "source": "parks-lines",
        "paint": {
            "line-width": 4,
            "line-color": "#850000",
            "line-opacity": 0.45 //make the lines semi-transparent

        }
    });
    //Add a tileset source from mapbox
    map.addSource("torontoct", {
        "type": "vector",
        "url": "mapbox://spblisarenko12.0hrkwa3z", //link to mapbox tileset
    });
    //Add the mapbox tileset source as a layer
    map.addLayer({
        "id": "census-tract",
        "type": "fill",
        "source": "torontoct",
        "paint": {
            "fill-color": "#256547",
            "fill-opacity": 0.45, //make the tileset semi-transparent
            "fill-outline-color": "green",

        },
        "source-layer": "toronto_parks1-5w099v"

    },
        "public-park" //make the "public-park" layer load last
    );
    
});