export function fetchAllData() {
    return new Promise((resolve) => {
      console.log('Simulating API call to fetch all data...');
      setTimeout(() => {
        // Dummy data for years 2000-2020
        const data = [];
        for (let year = 2000; year <= 2020; year++) {
          const yearData = {
            year: year,
            countries: [
              {
                name: 'Country A',
                attr1: Math.random() * 100,
                attr2: Math.random() * 100,
                lat: 10 * Math.random(),
                lng: 10 * Math.random(),
              },
              {
                name: 'Country B',
                attr1: Math.random() * 100,
                attr2: Math.random() * 100,
                lat: 20 * Math.random(),
                lng: 20 * Math.random(),
              },
              // ... more countries
            ],
          };
          data.push(yearData);
        }
        console.log('Simulated all data fetched');
        resolve(data);
      }, 1000); // Simulate network delay
    });
  }
  