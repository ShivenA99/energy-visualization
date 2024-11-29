// Recursive function to extract keys
function extractKeys(obj, prefix = '', visited = new Set(), depth = 0, maxDepth = 3) {
    if (depth > maxDepth) {
      return [];
    }
    const keys = [];
    if (visited.has(obj)) {
      return keys;
    }
    visited.add(obj);
  
    for (const key in obj) {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      keys.push(fullPath);
  
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        keys.push(...extractKeys(obj[key], fullPath, visited, depth + 1, maxDepth));
      }
    }
    return keys;
  }
  
  
  // Test with your JSON file
  const fs = require('fs');
  const jsonFile = 'GlobeCountries.json'; // Replace with your file path
  const jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
  
  // Extract and print all keys
  const keys = extractKeys(jsonData.features.slice(0, 2));
  console.log('Extracted Keys:', keys);
  
  // Convert the structure to a JSON string
const structureString = JSON.stringify(keys, null, 2);

// Save the output to a text file
fs.writeFileSync('json_structure.txt', structureString, 'utf-8');

console.log('JSON structure extracted and saved to json_structure.txt');