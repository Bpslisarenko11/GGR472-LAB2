mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA";

const map = new mapboxgl.Map({
    container: "my-map", //map container ID
    style: "mapbox://styles/spblisarenko12/cls2a6ak501qx01qs4kfu5n97", //style URL
    center: [-79.41390704282365, 43.64777081498133], //starting position (lon, lat)
    zoom: 12 //starting zoom

});

map.on('load',() => {

    //Add a data source containing GeoJSON data
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



    map.addSource("buildings-data", {
        type: "geojson",
        data: "https://bpslisarenko11.github.io/GGR472-EX5/buildings.geojson",
    
    });

    map.addLayer({
        "id": "buildings-point",
        "type": "circle",
        "source": "buildings-data",
        "paint": {
            "circle-radius": 5,
            "circle-color": "#007cbf",

        }
    });

    map.addSource("torontoct", {
        "type": "vector",
        "url": "mapbox://spblisarenko12.0hrkwa3z",
    });

    map.addLayer({
        "id": "census-tract",
        "type": "fill",
        "source": "torontoct",
        "paint": {
            "fill-color": "#888888",
            "fill-opacity": 0.4,
            "fill-outline-color": "black",

        },
        "source-layer": "toronto_parks1-5w099v"

    },
        "public-park"
    );
    
});