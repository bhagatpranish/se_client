import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet"
import {useMap} from "react-leaflet";
import path3 from "./path";
import  building from "./paths/building"
import  allPaths from "./paths/paths"

export default function CreateIndoor(props) {
    const map = useMap()

    var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    osm.addTo(map);
    var options = {
        maxZoom: 50,
        tolerance: 3,
        debug: 0,
        style: {
            fillColor: "#1EB300",
            color: "#F2FF00",
        },
    };

    var street = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11837397,
                            31.54668719
                        ],
                        [
                            -97.11777708,
                            31.54619273
                        ]
                    ]
                },
                "id": "3d77fa04-7389-449a-8b55-539cbaa7e1c8",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11803734,
                            31.54640832
                        ],
                        [
                            -97.117982,
                            31.54646355
                        ]
                    ]
                },
                "id": "3d3a067c-d463-4ee2-bc62-a1638e9b5196",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11811544,
                            31.54647302
                        ],
                        [
                            -97.11805407,
                            31.54652536
                        ]
                    ]
                },
                "id": "9805fc78-e044-4702-9b7d-438dab2ba2d7",
                "properties": {
                    "name": ""
                }
            },
            // {
            //     "type": "Feature",
            //     "geometry": {
            //         "type": "LineString",
            //         "coordinates": [
            //             [
            //                 -97.11817068,
            //                 31.54595713
            //             ],
            //             [
            //                 -97.11821085,
            //                 31.54591785
            //             ],
            //             [
            //                 -97.11833134,
            //                 31.54601421
            //             ],
            //             [
            //                 -97.11799953,
            //                 31.54630489
            //             ],
            //             [
            //                 -97.11825719,
            //                 31.54653237
            //             ],
            //             [
            //                 -97.11829662,
            //                 31.54650183
            //             ]
            //         ]
            //     },
            //     "id": "6d04f259-ea9c-4ac4-a6a4-e77cd374f4aa",
            //     "properties": {
            //         "name": "pathL1",
            //         "pathL1": ""
            //     }
            // },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11819046,
                            31.54597314
                        ],
                        [
                            -97.11815338,
                            31.54594312
                        ],
                        [
                            -97.11809406,
                            31.54599526
                        ],
                        [
                            -97.11813114,
                            31.54603001
                        ],
                        [
                            -97.1181886,
                            31.54597472
                        ]
                    ]
                },
                "id": "1bacbc21-c6c4-411c-905c-4bf509f8591a",
                "properties": {
                    "L1-1": "",
                    "name": "L1-1"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.1183109,
                            31.54651346
                        ],
                        [
                            -97.11831187,
                            31.54651425
                        ]
                    ]
                },
                "id": "a8f3d542-b2d8-4e48-978f-ab4ac6bf604c",
                "properties": {
                    "C316": "",
                    "name": "C316"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11853137,
                            31.54659396
                        ],
                        [
                            -97.11786918,
                            31.54605639
                        ]
                    ]
                },
                "id": "0ccf6694-d7a4-4643-972d-2f6f9ace5e33",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11885778,
                            31.54612164
                        ],
                        [
                            -97.11870207,
                            31.54625118
                        ],
                        [
                            -97.11881886,
                            31.54635544
                        ],
                        [
                            -97.11839807,
                            31.54670456
                        ],
                        [
                            -97.11837397,
                            31.54668719
                        ],
                        [
                            -97.11830539,
                            31.5467409
                        ],
                        [
                            -97.11772147,
                            31.54624012
                        ],
                        [
                            -97.11777708,
                            31.54619273
                        ],
                        [
                            -97.11774001,
                            31.54616745
                        ],
                        [
                            -97.11815709,
                            31.54580885
                        ],
                        [
                            -97.1182887,
                            31.54590995
                        ],
                        [
                            -97.11842958,
                            31.54577725
                        ],
                        [
                            -97.11885964,
                            31.54612006
                        ]
                    ]
                },
                "id": "093c1b43-2f77-4aea-abde-be51fcf25260",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.1182864,
                            31.5463951
                        ],
                        [
                            -97.11823309,
                            31.54644391
                        ],
                        [
                            -97.11813485,
                            31.54636176
                        ],
                        [
                            -97.11818948,
                            31.54631642
                        ]
                    ]
                },
                "id": "733bb632-a787-432d-afa3-dc22f88cdd5c",
                "properties": {
                    "name": "elev2",
                    "elev2": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11833942,
                            31.54653666
                        ],
                        [
                            -97.11839359,
                            31.54648212
                        ]
                    ]
                },
                "id": "4a770770-b293-421c-a410-1b0279b7b972",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11839642,
                            31.54658304
                        ],
                        [
                            -97.1184582,
                            31.54653457
                        ]
                    ]
                },
                "id": "442792e5-a81b-4cfc-b59f-7d90104463c5",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11787773,
                            31.5462761
                        ],
                        [
                            -97.1178231,
                            31.54632727
                        ]
                    ]
                },
                "id": "d2dc4f75-e4ac-4790-a3b3-6173ed117f50",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11829042,
                            31.54661797
                        ],
                        [
                            -97.11822406,
                            31.54667115
                        ]
                    ]
                },
                "id": "eaa3a44f-6906-433c-a260-c09af384d73d",
                "properties": {
                    "name": ""
                }
            },
            // {
            //     "type": "Feature",
            //     "geometry": {
            //         "type": "LineString",
            //         "coordinates": [
            //             [
            //                 -97.11818437,
            //                 31.54640317
            //             ],
            //             [
            //                 -97.11812558,
            //                 31.54644864
            //             ],
            //             [
            //                 -97.11826275,
            //                 31.54656397
            //             ],
            //             [
            //                 -97.11831187,
            //                 31.54651425
            //             ]
            //
            //         ]
            //     },
            //     "id": "e24f8bf4-2467-4ed8-ab0f-e03eda86660e",
            //     "properties": {
            //         "name": "pathL2",
            //         "pathL2": ""
            //     }
            // },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.1186675,
                            31.54648102
                        ],
                        [
                            -97.11800206,
                            31.54594214
                        ]
                    ]
                },
                "id": "1dfd2813-0247-440a-8657-ac8e3a6cd078",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11827202,
                            31.54648182
                        ],
                        [
                            -97.11836397,
                            31.54655664
                        ],
                        [
                            -97.11847119,
                            31.54664389
                        ]
                    ]
                },
                "id": "4de3871a-9630-4470-85bb-e358b9862af9",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11819057,
                            31.54653525
                        ],
                        [
                            -97.11812523,
                            31.54658639
                        ]
                    ]
                },
                "id": "d40e32f0-ebbe-4782-902b-329238555be7",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.1182887,
                            31.54590995
                        ],
                        [
                            -97.11870207,
                            31.54625118
                        ]
                    ]
                },
                "id": "f60befd8-78e3-492b-aa2d-102f0a79e563",
                "properties": {
                    "ICPC": "",
                    "name": "ICPC"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11827202,
                            31.54648182
                        ],
                        [
                            -97.11832912,
                            31.54642978
                        ]
                    ]
                },
                "id": "f027ab73-ac45-48e4-88a8-08db1f1bb10a",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11796033,
                            31.54634453
                        ],
                        [
                            -97.11790719,
                            31.54639939
                        ]
                    ]
                },
                "id": "ff2972bd-6fc1-4597-9d3e-864b6fe846d4",
                "properties": {
                    "name": ""
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -97.11837821,
                            31.54656823
                        ],
                        [
                            -97.11838103,
                            31.54657053
                        ]
                    ]
                },
                "id": "fbdca312-4ab5-4dcb-b1f4-61cd4819a9ca",
                "properties": {
                    "C315": "",
                    "name": "C315"
                }
            }
        ]
    }

    var pointA = new L.LatLng(31.54553361,-97.1152046,);
    var pointB = new L.LatLng(
        31.54505308,-97.11589327);

    // var pointList=  [
    //       new L.LatLng(
    //
    //           31.54640317,
    //           -97.11818437,
    //       ),
    //       new L.LatLng(
    //
    //           31.54644864,
    //           -97.11812558,
    //       ),
    //       new L.LatLng(
    //
    //           31.54656397,
    //           -97.11826275,
    //       ),
    //       new L.LatLng(
    //
    //           31.54651425,
    //           -97.11831187
    //       )
    //     ];
    var pointList = null;
    if(props.id =='1'){
        pointList = path3;
    }
    console.log(props.path)

const currentPath = allPaths.filter(p=>p.properties.name==='ElevatorA_305');
console.log("hello world",currentPath)
    const aa = [];
    if(currentPath.length <1){
        return (
            window.alert("Sorry no path available in system right now.")
        )
    }
    currentPath[0].geometry.coordinates.forEach(j=>{
        aa.push(new L.LatLng(j[1],j[0]))
    })

    pointList = aa

    // var pointList = [pointA, pointB];
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    var firstpolyline = new L.Polyline(pointList, {
        color: 'red',
        weight: 4,
        dashArray: '10, 10', dashOffset: '0'
    }).bindTooltip("Head left and then right").addTo(map);

    firstpolyline.on('click', function () {
        var start = pointList[0].toString().split('(').pop().split(')')[0];
        var end = pointList[pointList.length-1].toString().split('(').pop().split(')')[0];    ;
        openInNewTab('https://www.google.com/maps/dir/?api=1&origin='+start +'&destination='+end+'&travelmode=walking')
    });

    var newMarker = new L.marker(pointList[0],).addTo(map);
    var icon = newMarker.options.icon;
    icon.options.iconSize = [15, 25];
    newMarker.setIcon(icon);
    var mark1Name = props.path.split('_')[0]
    var mark2Name = props.path.split('_')[1]
    var popup = newMarker.bindTooltip(mark1Name);
    var newMarker1 = new L.marker(pointList[pointList.length-1]).addTo(map);
    var popup1 = newMarker1.bindTooltip(mark2Name);

    map.fitBounds(firstpolyline.getBounds());

    L.geoJson(building,
        {

            onEachFeature: function (feature, layer) {

                // if (feature.geometry.type === "Polygon") {

                var bounds = layer.getBounds();
                // Get center of bounds
                var center = bounds.getCenter();
                var center = layer.getBounds().getCenter();
                // if(feature.properties.name!=="")
                // {
                //
                //     layer.bindTooltip(feature.properties.name, {permanent: true, direction: "center", className: "my-labels"});
                //     layer.on("click", function (e) {
                //         layer.bindPopup(feature.properties.name);
                //     });
                // }


                /* var marker =L.circleMarker(center, {color: '', radius:10,Title:20}).bindTooltip(feature.properties.name, {permanent: true, direction: "center", className: "my-labels"});
                        map.addLayer(marker);*/
                // var polygonAndItsCenter = L.layerGroup([layer, marker]);
                // }
            },
        }
    ).addTo(map);
    return null;

};
