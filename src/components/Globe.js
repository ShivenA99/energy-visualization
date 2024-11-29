// src/components/Globe.js

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';
import * as chromatic from 'd3-scale-chromatic';

function GlobeComponent({ yearData, onCountrySelect, selectedCountry }) {
  const globeRef = useRef();
  const [countriesGeoJson, setCountriesGeoJson] = useState(null);

  // Fetch the GeoJSON data only once
  useEffect(() => {
    if (!countriesGeoJson) {
      console.log('Fetching country geometries');
      fetch('././GlobeCountries.geojson') // Update the path to your GeoJSON file
        .then((res) => res.json())
        .then((countries) => {
          console.log('Loaded country geometries:', countries);
          setCountriesGeoJson(countries);
        })
        .catch((error) => {
          console.error('Error loading country geometries:', error);
        });
    }
  }, [countriesGeoJson]);

  // Memoize the features with values
  const featuresWithValues = useMemo(() => {
    if (countriesGeoJson && yearData) {
      console.log('Processing features with values');
      const features = countriesGeoJson.features.map((feature) => {
        const countryName =
          feature.properties.NAME || feature.properties.ADMIN;
        const countryData = yearData.countries.find(
          (c) => c.name === countryName
        );

        if (!countryData) {
          //console.warn(`No data found for country: ${countryName}`);
        }

        return {
          ...feature,
          properties: {
            ...feature.properties,
            value: countryData ? countryData.attr1 : 0, // Use attr1 for heatmap
            lat: countryData ? countryData.lat : 0,
            lng: countryData ? countryData.lng : 0,
          },
        };
      });
      return features;
    } else {
      return [];
    }
  }, [countriesGeoJson, yearData]);

  // Memoize the color scale
  const colorScale = useMemo(() => {
    if (yearData) {
      const attrValues = yearData.countries.map((country) => country.attr1);
      const minValue = Math.min(...attrValues);
      const maxValue = Math.max(...attrValues);

      const scale = d3
        .scaleSequential()
        .domain([minValue, maxValue])
        .interpolator(chromatic.interpolateYlOrRd); // Yellow to Red color scale

      return scale;
    } else {
      return null;
    }
  }, [yearData]);

  const handleCountryClick = (countryFeature) => {
    if (!countryFeature) return;

    const countryName =
      countryFeature.properties.NAME || countryFeature.properties.ADMIN;
    console.log('Clicked on country:', countryName);

    // Find the country data
    const countryData = yearData.countries.find(
      (c) => c.name === countryName
    );
    if (countryData && onCountrySelect) {
      onCountrySelect(countryData);
    }

    // Rotate the globe to the selected country
    if (countryData && globeRef.current) {
      const { lat, lng } = countryData;
      globeRef.current.pointOfView({ lat, lng, altitude: 2 }, 1000);
    }
  };

  const handleCountryHover = (countryFeature) => {
    const countryName = countryFeature
      ? countryFeature.properties.NAME || countryFeature.properties.ADMIN
      : null;
    console.log('Hovered over country:', countryName);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60%',
        height: '100vh',
      }}
    >
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="#000000"
        polygonsData={featuresWithValues}
        polygonAltitude={(feat) =>
          feat.properties.NAME === selectedCountry?.name ? 0.06 : 0.01
        }
        polygonCapColor={(feat) => {
          const value = feat.properties.value;
          const baseColor = colorScale ? colorScale(value) : '#cccccc';
          if (feat.properties.NAME === selectedCountry?.name) {
            return 'orange'; // Highlight color
          }
          return baseColor;
        }}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
        polygonStrokeColor={() => '#111'}
        polygonLabel={({ properties }) => {
          const countryName = properties.NAME || properties.ADMIN;
          const countryData = yearData.countries.find(
            (c) => c.name === countryName
          );
          const attr2Value = countryData?.attr2;
          return `
            <b>${countryName}</b><br/>
            Attr1: ${properties.value.toFixed(2)}<br/>
            Attr2: ${attr2Value ? attr2Value.toFixed(2) : 'N/A'}
          `;
        }}
        onPolygonClick={handleCountryClick}
        onPolygonHover={handleCountryHover}
      />
    </div>
  );
}

export default GlobeComponent;
