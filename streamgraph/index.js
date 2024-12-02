const data = [
    { "year": 2000, "country": "USA", "source": "Coal", "value": 120 },
    { "year": 2000, "country": "USA", "source": "Oil", "value": 150 },
    { "year": 2000, "country": "USA", "source": "Renewables", "value": 60 },
    { "year": 2001, "country": "China", "source": "Coal", "value": 180 },
    { "year": 2001, "country": "China", "source": "Oil", "value": 80 },
    { "year": 2001, "country": "China", "source": "Renewables", "value": 90 },
    { "year": 2002, "country": "India", "source": "Coal", "value": 130 },
    { "year": 2002, "country": "India", "source": "Oil", "value": 100 },
    { "year": 2002, "country": "India", "source": "Renewables", "value": 50 },
    { "year": 2003, "country": "Germany", "source": "Coal", "value": 100 },
    { "year": 2003, "country": "Germany", "source": "Oil", "value": 130 },
    { "year": 2003, "country": "Germany", "source": "Renewables", "value": 120 },
    { "year": 2004, "country": "Russia", "source": "Coal", "value": 170 },
    { "year": 2004, "country": "Russia", "source": "Oil", "value": 200 },
    { "year": 2004, "country": "Russia", "source": "Renewables", "value": 40 },
    { "year": 2005, "country": "Brazil", "source": "Coal", "value": 90 },
    { "year": 2005, "country": "Brazil", "source": "Oil", "value": 80 },
    { "year": 2005, "country": "Brazil", "source": "Renewables", "value": 110 },
    { "year": 2006, "country": "Canada", "source": "Coal", "value": 150 },
    { "year": 2006, "country": "Canada", "source": "Oil", "value": 180 },
    { "year": 2006, "country": "Canada", "source": "Renewables", "value": 70 },
    { "year": 2007, "country": "Australia", "source": "Coal", "value": 210 },
    { "year": 2007, "country": "Australia", "source": "Oil", "value": 160 },
    { "year": 2007, "country": "Australia", "source": "Renewables", "value": 50 },
    { "year": 2008, "country": "Japan", "source": "Coal", "value": 180 },
    { "year": 2008, "country": "Japan", "source": "Oil", "value": 130 },
    { "year": 2008, "country": "Japan", "source": "Renewables", "value": 60 },
    { "year": 2009, "country": "South Korea", "source": "Coal", "value": 140 },
    { "year": 2009, "country": "South Korea", "source": "Oil", "value": 170 },
    { "year": 2009, "country": "South Korea", "source": "Renewables", "value": 80 },
    { "year": 2010, "country": "Mexico", "source": "Coal", "value": 90 },
    { "year": 2010, "country": "Mexico", "source": "Oil", "value": 100 },
    { "year": 2010, "country": "Mexico", "source": "Renewables", "value": 120 },
    { "year": 2011, "country": "France", "source": "Coal", "value": 110 },
    { "year": 2011, "country": "France", "source": "Oil", "value": 140 },
    { "year": 2011, "country": "France", "source": "Renewables", "value": 130 },
    { "year": 2012, "country": "Italy", "source": "Coal", "value": 80 },
    { "year": 2012, "country": "Italy", "source": "Oil", "value": 110 },
    { "year": 2012, "country": "Italy", "source": "Renewables", "value": 150 },
    { "year": 2013, "country": "United Kingdom", "source": "Coal", "value": 120 },
    { "year": 2013, "country": "United Kingdom", "source": "Oil", "value": 130 },
    { "year": 2013, "country": "United Kingdom", "source": "Renewables", "value": 140 },
    { "year": 2014, "country": "Spain", "source": "Coal", "value": 100 },
    { "year": 2014, "country": "Spain", "source": "Oil", "value": 110 },
    { "year": 2014, "country": "Spain", "source": "Renewables", "value": 160 },
    { "year": 2015, "country": "South Africa", "source": "Coal", "value": 220 },
    { "year": 2015, "country": "South Africa", "source": "Oil", "value": 180 },
    { "year": 2015, "country": "South Africa", "source": "Renewables", "value": 60 },
    { "year": 2016, "country": "Saudi Arabia", "source": "Coal", "value": 160 },
    { "year": 2016, "country": "Saudi Arabia", "source": "Oil", "value": 230 },
    { "year": 2016, "country": "Saudi Arabia", "source": "Renewables", "value": 40 },
    { "year": 2017, "country": "United Arab Emirates", "source": "Coal", "value": 140 },
    { "year": 2017, "country": "United Arab Emirates", "source": "Oil", "value": 220 },
    { "year": 2017, "country": "United Arab Emirates", "source": "Renewables", "value": 50 },
    { "year": 2018, "country": "Turkey", "source": "Coal", "value": 160 },
    { "year": 2018, "country": "Turkey", "source": "Oil", "value": 190 },
    { "year": 2018, "country": "Turkey", "source": "Renewables", "value": 80 },
    { "year": 2019, "country": "Egypt", "source": "Coal", "value": 170 },
    { "year": 2019, "country": "Egypt", "source": "Oil", "value": 200 },
    { "year": 2019, "country": "Egypt", "source": "Renewables", "value": 100 },
    { "year": 2020, "country": "Nigeria", "source": "Coal", "value": 150 },
    { "year": 2020, "country": "Nigeria", "source": "Oil", "value": 190 },
    { "year": 2020, "country": "Nigeria", "source": "Renewables", "value": 60 },
    { "year": 2021, "country": "Argentina", "source": "Coal", "value": 110 },
    { "year": 2021, "country": "Argentina", "source": "Oil", "value": 140 },
    { "year": 2021, "country": "Argentina", "source": "Renewables", "value": 130 },
    { "year": 2022, "country": "Indonesia", "source": "Coal", "value": 180 },
    { "year": 2022, "country": "Indonesia", "source": "Oil", "value": 200 },
    { "year": 2022, "country": "Indonesia", "source": "Renewables", "value": 90 }
]

// Get unique countries from the data
const uniqueCountries = [...new Set(data.map(d => d.country))];

// Create dropdown menu for countries
createDropdown(uniqueCountries);

// Listen for changes in dropdown selection
document.getElementById("country-dropdown").addEventListener("change", () => {
    const selectedCountries = Array.from(document.getElementById("country-dropdown").selectedOptions)
                                    .map(option => option.value);
    createStreamGraph(selectedCountries);
});

// Function to create dropdown menu for countries
function createDropdown(countries) {
    const dropdown = document.getElementById("country-dropdown");
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        option.selected = true; // Select all countries initially
        dropdown.appendChild(option);
    });
}

function createStreamGraph(selectedCountries) {
    // Clear previous chart
    d3.select("#chart").html("");

    // Filter data based on selected countries
    const filtereddata = data.filter(d => selectedCountries.includes(d.country));
    // Set up dimensions and margins
    const margin = { top: 20, right: 30, bottom: 50, left: 60 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#chart")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // Group data by year and source
    const nesteddata = d3.group(filtereddata, d => d.year, d => d.source);

    // Prepare stacked data
    const stackdata = Array.from(nesteddata, ([year, sources]) => {
        const yeardata = { year: year };
        ["Coal", "Renewables", "Oil"].forEach(source => {
            const sourcedata = sources.get(source);
            yeardata[source] = sourcedata 
                ? d3.sum(sourcedata, d => d.value) 
                : 0;
        });
        return yeardata;
    });

    // Create stack generator
    const stack = d3.stack()
                    .keys(["Coal", "Renewables", "Oil"])
                    .order(d3.stackOrderNone)
                    .offset(d3.stackOffsetWiggle);

    const stackeddata = stack(stackdata);

    // Scales
    const x = d3.scaleBand()
                .domain(stackdata.map(d => d.year))
                .range([0, width])
                .padding(0.1);

    const y = d3.scaleLinear()
                .domain([
                    d3.min(stackeddata, layer => d3.min(layer, d => d[0])),
                    d3.max(stackeddata, layer => d3.max(layer, d => d[1]))
                ])
                .range([height, 0]);

    // Color scale
    const color = d3.scaleOrdinal()
                    .domain(["Coal", "Renewables", "Oil"])
                    .range(["#FF5733", "#33FF57", "#F39C12"]);

    // Area generator
    const area = d3.area()
                   .x(d => x(d.data.year))
                   .y0(d => y(d[0]))
                   .y1(d => y(d[1]))
                  
                   .curve(d3.curveBasis);

    // Create the stack paths
    svg.selectAll("path")
       .data(stackeddata)
       .enter().append("path")
       .transition()
       
       .duration(1000)
       .attr("d", area)
       .attr("fill", d => color(d.key))
       .attr("stroke", "black")
       .attr("stroke-width", 0.5)
       
       
    
       .attr("opacity", 0.7);

    // Add X-Axis for Year
    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x))
       .append("text")
       .attr("x", width / 2)
       .attr("y", 40)
       .attr("fill", "black")
       .transition()
       .duration(1000)
       
       .style("text-anchor", "middle")
       .text("Year");

    // Add Y-Axis for Values
    svg.append("g")
       .call(d3.axisLeft(y).ticks(10))
       .append("text")
       .attr("transform", "rotate(-90)")
       .attr("x", -height / 2)
       .attr("y", -50)
       .attr("dy", "1em")
       .attr("fill", "black")
       .style("text-anchor", "middle")
       .transition()
       .duration(1000)
       
       .text("Energy Supply (units)");

    // Add title
    svg.append("text")
       .attr("x", width / 2)
       .attr("y", 0 - (margin.top / 2))
       .attr("text-anchor", "middle")
       .style("font-size", "16px")
       .style("font-weight", "bold")
       .transition()
       .duration(1000)
       .text(`Energy Sources Streamgraph for selected countries`);
}

// Create country checkboxes
function createCountryDropdown() {
    // Get unique countries
    const countries = [...new Set(data.map(d => d.country))].sort();

    // Create dropdown container
    const dropdown = d3.select("#country-dropdown");

    // Create a select element
    const select = dropdown.append("select")
        .attr("id", "country-select")
        .on("change", function() {
            // Get the selected country
            const selectedCountry = this.value;

            // Update graph with selected country
            createStreamGraph([selectedCountry]);
        });

    // Add a default "Select a country" option
    select.append("option")
        .attr("value", "")
        .text("Select a country");

    // Add an option for each country in the dropdown
    countries.forEach(country => {
        select.append("option")
            .attr("value", country)
            .text(country);
    });

    // Initial graph render with all countries (or a default country if preferred)
    createStreamGraph(countries);
}

// Initialize the visualization
createCountryDropdown();