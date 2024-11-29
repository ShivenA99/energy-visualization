import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function LineChart({ allData, selectedCountry }) {
  const ref = useRef();

  useEffect(() => {
    // Clear previous chart
    d3.select(ref.current).selectAll('*').remove();

    if (allData && selectedCountry) {
      console.log(`Rendering line chart for ${selectedCountry.name}`);
      
      // Extract data for the selected country across all years
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

      console.log('Country data for line chart:', countryData);

      // Set up chart dimensions
      const width = 400;
      const height = 200;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      // Create SVG element
      const svg = d3
        .select(ref.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      // Set up scales
      const x = d3
        .scaleLinear()
        .domain(d3.extent(countryData, (d) => d.year))
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(countryData, (d) => Math.max(d.attr1, d.attr2))])
        .nice()
        .range([height - margin.bottom, margin.top]);

      // Add X axis
      svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(5).tickFormat(d3.format('d')));

      // Add Y axis
      svg
        .append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

      // Add lines
      const line1 = d3
        .line()
        .x((d) => x(d.year))
        .y((d) => y(d.attr1));

      const line2 = d3
        .line()
        .x((d) => x(d.year))
        .y((d) => y(d.attr2));

      // Add path for attr1
      svg
        .append('path')
        .datum(countryData)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr('d', line1);

      // Add path for attr2
      svg
        .append('path')
        .datum(countryData)
        .attr('fill', 'none')
        .attr('stroke', 'orange')
        .attr('stroke-width', 2)
        .attr('d', line2);

      // Add legend
      svg
        .append('text')
        .attr('x', width - margin.right - 100)
        .attr('y', margin.top + 10)
        .attr('fill', 'steelblue')
        .text('Attr1');

      svg
        .append('text')
        .attr('x', width - margin.right - 100)
        .attr('y', margin.top + 30)
        .attr('fill', 'orange')
        .text('Attr2');
    } else if (allData) {
      console.log('Rendering global line chart');

      // Aggregate data for global chart
      const globalData = allData.map((yearData) => {
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

      console.log('Global data for line chart:', globalData);

      // Similar chart setup as above using globalData
      // ... (you can reuse the code above with globalData)
    }
  }, [allData, selectedCountry]);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '200px',
        backgroundColor: 'white',
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
