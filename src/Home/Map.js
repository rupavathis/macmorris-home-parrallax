import React from 'react';
import {render} from 'react-dom';
import {Map} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';
import 'mapbox-gl/dist/mapbox-gl.css';

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({ambientLight, pointLight1, pointLight2});

const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51]
};

const INITIAL_VIEW_STATE = {
  longitude: -1.415727,
  latitude: 52.232395,
  zoom: 6.6,
  minZoom: 5,
  maxZoom: 15,
  pitch: 40.5,
  bearing: -27
};

const MAP_STYLE = 'mapbox://styles/rupavathi/clc169rt7001c14p34hqd6dsw';

export const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

function getTooltip({object}) {
  if (!object) {
    return null;
  }
  const lat = object.position[1];
  const lng = object.position[0];
  const count = object.points.length;

  return `\
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
    ${count} Accidents`;
}

/* eslint-disable react/no-deprecated */
export default function App({
  data,
  mapStyle = MAP_STYLE,
  radius = 2000,
  upperPercentile = 100,
  coverage = 1
}) {

const data_r = [
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},
    {lng: -0.198465, lat: 51.505538},
    {lng: -0.178838, lat: 51.491836},

]
data = data_r.map(d => [Number(d.lng), Number(d.lat)]);

  const layers = [
    new HexagonLayer({
      id: 'heatmap',
      colorRange,
      coverage,
      data,
      elevationRange: [0, 100],
      elevationScale: data && data.length ? 5 : 0,
      extruded: true,
      getPosition: d => d,
      pickable: true,
      radius,
      upperPercentile,
      material,

      transitions: {
        elevationScale: 100
      }
    })
  ];

  return (
    <DeckGL
      layers={layers}
      effects={[lightingEffect]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
    >
      <Map reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} 
      mapboxAccessToken='pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg'
      />
    </DeckGL>
  );
}


