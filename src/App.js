import React, { useEffect, useState } from 'react';
import ScrollContainer from './components/ScrollContainer';
import './App.css';
import { fetchAllData } from './utils/fetchData';

function App() {
  console.log('App component rendered');

  const [allData, setAllData] = useState(null);

  useEffect(() => {
    console.log('Fetching all data on app load...');
    fetchAllData().then((data) => {
      console.log('All data fetched:', data);
      setAllData(data);
    });
  }, []);

  if (!allData) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
      <ScrollContainer allData={allData} />
    </div>
  );
}

export default App;
