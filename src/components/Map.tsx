import {createRef, FunctionComponent} from 'preact';
import {useEffect, useCallback, useRef} from 'preact/hooks';
import mapboxgl from "mapbox-gl";
import geoJson from "./../assets/geo/in_service_alarm_box_locations.json";
import maskData from "./../assets/geo/borough_boundaries.json";
import { FeatureCollection } from 'geojson';

// Setting the Mapbox access token from environment variables
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

// Type definition for the props that Map component will receive
type MapProps = {
    latitude: number;
    longitude: number;
    firebox: string;
};

// Definition of the Map component
const Map: FunctionComponent<MapProps> = ({longitude, latitude, firebox}) => {
    // Creating a ref for the map container div
    const mapContainerRef = createRef<HTMLDivElement>();
    // Ref to store the map instance
    const mapRef = useRef<mapboxgl.Map>();

    // Callback function to render the map
    const renderMap = useCallback(() => {
        if (mapContainerRef.current) {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/streets-v11", // Map style
                center: [-74.0060, 40.7128], // Initial center of the map (NYC coordinates)
                zoom: 9.95, // Initial zoom level
            });

            mapRef.current = map;

            // Map logic to add layers, sources, and handle events...
            // Logic includes adding borough boundaries, alarm box locations, and handling clustering
            map.on("load", () => {

                map.addSource('mask', {
                    'type': 'geojson',
                    'data': maskData as FeatureCollection
                });

                map.addLayer({
                    'id': 'mask-layer',
                    'type': 'fill',
                    'source': 'mask',
                    'layout': {},
                    'paint': {
                        'fill-color': '#51bbd6',  // Use a dark color for the mask
                        'fill-opacity': 0.2,    // Semi-transparent
                    }
                });

                map.addLayer({
                    'id': 'nyc-mask-stroke',
                    'type': 'line',
                    'source': 'mask',
                    'paint': {
                        'line-color': '#fff',  // Color of the stroke
                        'line-width': 2           // Width of the stroke
                    }
                });

                // Add a new source from our GeoJSON data and
                // set the 'cluster' option to true.
                map.addSource("alarms", {
                    type: "geojson",
                    data: geoJson as FeatureCollection,
                    cluster: true,
                    clusterMaxZoom: 14, // Max zoom to cluster points on
                    clusterRadius: 50,  // Radius of each cluster when clustering points (defaults to 50)
                });

                // Add a new layer for the clustered data
                map.addLayer({
                    id: "clusters",
                    type: "circle",
                    source: "alarms",
                    filter: ["has", "point_count"],
                    paint: {
                        "circle-color": "#51bbd6",  // Set all clusters to blue
                        "circle-stroke-width": 1,
                        "circle-stroke-color": "#fff",
                        "circle-radius": [
                            "step",
                            ["get", "point_count"],
                            20,
                            100,
                            30,
                            750,
                            40
                        ]
                    }
                });

                // Add a layer for the unclustered points
                map.addLayer({
                    id: "unclustered-point",
                    type: "circle",
                    source: "alarms",
                    filter: ["!", ["has", "point_count"]],
                    paint: {
                        "circle-color": "#11b4da",
                        "circle-radius": 4,
                        "circle-stroke-width": 1,
                        "circle-stroke-color": "#fff"
                    }
                });

                // Add a layer to display the cluster count label
                map.addLayer({
                    id: "cluster-count",
                    type: "symbol",
                    source: "alarms",
                    filter: ["has", "point_count"],
                    layout: {
                        "text-field": "{point_count_abbreviated}",
                        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                        "text-size": 12
                    }
                });

            });

            // Cleanup function to remove the map instance
            return () => {
                if (mapRef.current) {
                    mapRef.current.remove();
                }
            };
        }
    }, []);

    // useEffect to render the map on component mount
    useEffect(() => {
        renderMap();
        // Cleanup function to remove the map instance when the component is unmounted
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, [renderMap]);

    // useEffect to handle changes in longitude, latitude, and firebox props
    useEffect(() => {
        if (mapRef.current && longitude && latitude && firebox) {
            let currentPopup: any; // Variable to store the current popup instance
            // If there's an existing popup, remove it
            if (currentPopup) {
                currentPopup.remove();
            }

            // Create and show the popup at the provided coordinates
            currentPopup = new mapboxgl.Popup()
                .setLngLat([longitude, latitude])
                .setHTML(`Firebox: ${firebox}`) // Customize your popup content here
                .addTo(mapRef.current);

            // Zoom and center the map on the provided coordinates
            mapRef.current.flyTo({
                center: [longitude, latitude],
                zoom: 15
            });
        }
    }, [longitude, latitude]);

    // Rendering the map container
    return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
