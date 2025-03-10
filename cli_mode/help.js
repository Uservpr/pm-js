const showHelp = () => {
  console.log(`
=================================================
|            pm-js CLI - HTTP Utility          |
=================================================
Usage:
  pm -<method> <url> [options]

Methods:
  -get       Perform a GET request
  -post      Perform a POST request
  -put       Perform a PUT request
  -del       Perform a DELETE request

Options:
  -d, -data <json>      Send JSON data with request
  -s, -save [filename]  Save response to a JSON file (default: output.json)
  -h, --help, -help     Show this help message

Examples:
  pm -get https://api.example.com/data
  pm -post https://api.example.com/add -d '{"name": "John"}'
  pm -get https://api.example.com/data -s response.json
=================================================
  `);
};

module.exports = showHelp;