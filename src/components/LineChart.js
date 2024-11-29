import React, { useEffect } from 'react';

function LineChart({ allData, selectedCountry }) {
  useEffect(() => {
    if (allData) {
      console.log('LineChart received all data:', allData);

      if (selectedCountry) {
        console.log(`Selected country: ${selectedCountry.name}`);

        // Filter data for the selected country
        const countryData = allData.map((yearData) => {
          const country = yearData.countries.find(
            (c) => c.name === selectedCountry.name
          );
          return {
            year: yearData.year,
            attr1: country ? country.attr1 : null,
            attr2: country ? country.attr2 : null,
          };
        });
        console.log(`Data for ${selectedCountry.name}:`, countryData);

        // Use countryData to render the line chart
      } else {
        console.log('No country selected. Displaying global data.');

        // Aggregate data for all countries
        const globalData = allData.map((yearData) => {
          // Calculate averages or totals as needed
          const avgAttr1 =
            yearData.countries.reduce((sum, c) => sum + c.attr1, 0) /
            yearData.countries.length;
          const avgAttr2 =
            yearData.countries.reduce((sum, c) => sum + c.attr2, 0) /
            yearData.countries.length;
          return {
            year: yearData.year,
            attr1: avgAttr1,
            attr2: avgAttr2,
          };
        });
        console.log('Global data:', globalData);

        // Use globalData to render the line chart
      }
    }
  }, [allData, selectedCountry]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '30%',
        height: '30%',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
      }}
    >
      {selectedCountry ? (
        <p>Line chart for {selectedCountry.name}</p>
      ) : (
        <p>Global line chart</p>
      )}
    </div>
  );
}

export default LineChart;
