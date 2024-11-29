import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Globe from './Globe';
import LineChart from './LineChart';

function ScrollContainer({ allData }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onStepEnter = ({ data }) => {
    console.log(`Entered step ${data}`);
    setCurrentStepIndex(data);
  };

  const handleCountrySelect = (country) => {
    console.log(`Country selected: ${country.name}`);
    setSelectedCountry(country);
  };

  const currentYear = 2000 + currentStepIndex;
  console.log(`Current year: ${currentYear}`);

  // Filter data for the current year
  const yearData = allData.find((d) => d.year === currentYear);
  console.log(`Data for year ${currentYear}:`, yearData);

  return (
    <div>
      {/* Scroll steps */}
      <Scrollama onStepEnter={onStepEnter}>
        {[...Array(21)].map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                opacity: currentStepIndex === stepIndex ? 1 : 0.5,
              }}
            >
              <h2>Year: {2000 + stepIndex}</h2>
            </div>
          </Step>
        ))}
      </Scrollama>

      {/* Globe and Line Chart */}
      <Globe
        yearData={yearData}
        onCountrySelect={handleCountrySelect}
        selectedCountry={selectedCountry}
      />
      <LineChart
        allData={allData}
        selectedCountry={selectedCountry}
      />
    </div>
  );
}

export default ScrollContainer;
