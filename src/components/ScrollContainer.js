import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Globe from './Globe';
import LineChart from './LineChart';

function ScrollContainer({ allData }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  const onStepEnter = ({ data }) => {
    console.log(`Entered step ${data}`);
    setCurrentStepIndex(data);

    const currentYear = 2000 + data;
    console.log(`CurrentYear: ${currentYear}, selectedCountry:`, selectedCountry);
    if (currentYear === 2020 && !selectedCountry) {
      console.log('Entered prompt condition');
      setShowPrompt(true);
    } else {
      setShowPrompt(false);
    }
  };

  const onStepProgress = ({ data, progress }) => {
    console.log(`Step ${data} progress: ${progress}`);
  };

  const handleCountrySelect = (country) => {
    console.log(`Country selected: ${country.name}`);
    setSelectedCountry(country);
    setShowPrompt(false);
  };

  const currentYear = 2000 + currentStepIndex;
  console.log(`Current year: ${currentYear}`);

  // Filter data for the current year
  const yearData = allData.find((d) => d.year === currentYear);
  console.log(`Data for year ${currentYear}:`, yearData);

  return (
    <div style={{ height: '500vh' }}> {/* Increase height for scrolling */}
      {/* Scroll steps */}
      <Scrollama onStepEnter={onStepEnter} onStepProgress={onStepProgress} offset={0.5}>
        {[...Array(21)].map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: '10vh 0', // Increase margin
                opacity: currentStepIndex === stepIndex ? 1 : 0.5,
                minHeight: '10vh', // Ensure each step has sufficient height
              }}
            >
              <h2>Year: {2000 + stepIndex}</h2>
            </div>
          </Step>
        ))}
      </Scrollama>

      {/* Prompt */}
        {showPrompt && (
        <div
            style={{
            position: 'fixed',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            zIndex: 1000, // Add a high z-index
            }}
        >
            <p>Please select a country to see more details.</p>
        </div>
        )}


      {/* Globe and Line Chart */}
      <Globe
        yearData={yearData}
        onCountrySelect={handleCountrySelect}
        selectedCountry={selectedCountry}
      />
      <LineChart allData={allData} selectedCountry={selectedCountry} />

      {/* Navigation Button */}
    {selectedCountry && (
      <button
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          padding: '10px 20px',
          fontSize: '16px',
        }}
        onClick={() => {
          console.log('Proceeding to country-specific visualizations...');
          // Implement navigation logic here (e.g., set a state to show new components)
        }}
      >
        See More for {selectedCountry.name} →
      </button>
    )}
    </div>
  );
}

export default ScrollContainer;
