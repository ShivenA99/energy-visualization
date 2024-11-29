import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

function GlobeComponent({ yearData, onCountrySelect, selectedCountry }) {
  const globeRef = useRef();

  useEffect(() => {
    if (yearData) {
      console.log(`Globe received data for year ${yearData.year}:`, yearData);

      // Load country geometries (GeoJSON)
      fetch('././GlobeCountries.json')
        .then((res) => res.json())
        .then((countries) => {
          console.log('Loaded country geometries:', countries);

          // Prepare data by adding the attribute value to each country feature
          const featuresWithValues = countries.features.map((feature) => {
            const countryData = yearData.countries.find(
              (c) => c.name === feature.properties.NAME
            );

            if (!countryData) {
                console.warn(`No data found for country: ${feature.properties.NAME}`);
            }

            return {
              ...feature,
              properties: {
                ...feature.properties,
                value: countryData ? countryData.attr1 : 0,
                lat: countryData ? countryData.lat : 0,
                lng: countryData ? countryData.lng : 0, 
              },
            };
          });

          globeRef.current
            .polygonsData(featuresWithValues)
            .polygonCapColor((feat) => {
              const value = feat.properties.value;
              const colorScale = getColorScale(yearData.countries);
              return colorScale(value);
            })
            .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
            .polygonStrokeColor(() => '#111')
            .polygonLabel(({ properties }) => `
              <b>${properties.NAME}</b><br/>
              Value: ${properties.value.toFixed(2)}
            `)
            .onPolygonClick(handleCountryClick)
            .onPolygonHover(handleCountryHover);
        });
    }
  }, [yearData]);

  const handleCountryClick = (countryFeature) => {
    const countryName = countryFeature.properties.NAME;
    console.log('Clicked on country:', countryName);

    // Find the country data
    const countryData = yearData.countries.find((c) => c.name === countryName);
    if (countryData && onCountrySelect) {
      onCountrySelect(countryData);
    }

    // Rotate the globe to the selected country
    const { lat, lng } = countryData;
    globeRef.current.pointOfView({ lat, lng }, 1000);
  };

  const handleCountryHover = (countryFeature) => {
    const countryName = countryFeature ? countryFeature.properties.NAME : null;
    console.log('Hovered over country:', countryName);
  };

  const getColorScale = (countriesData) => {
    const attrValues = countriesData.map((country) => country.attr1);
    const minValue = Math.min(...attrValues);
    const maxValue = Math.max(...attrValues);

    return (value) => {
      const normalizedValue = (value - minValue) / (maxValue - minValue);
      return `rgba(255, ${Math.floor(255 * (1 - normalizedValue))}, 0, 0.8)`; // Gradient from red to yellow
    };
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
      />
    </div>
  );
}

export default GlobeComponent;
