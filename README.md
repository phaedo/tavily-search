# Tavily Search Plugin

A Node.js plugin for integrating with the Tavily Search API.

## Installation

```bash
npm install tavily-search
```

## Usage

```javascript
const { tavilySearch } = require('tavily-search');

// Set your API key
process.env.TAVILY_API_KEY = 'your_api_key_here';

// Perform a search
const results = await tavilySearch({
  query: 'What is the weather today?',
  maxResults: 5,
  searchDepth: 'advanced',
  includeAnswer: true,
  includeDomains: [],
  excludeDomains: []
});

console.log(results);
```

## Configuration

The plugin requires a Tavily API key to function. You can provide it in one of the following ways:

1. Set the `TAVILY_API_KEY` environment variable
2. Pass the API key directly to the constructor

## API

### `tavilySearch(options)`

Performs a search using the Tavily API.

#### Options

- `query`: The search query string (required)
- `maxResults`: Number of results to return (1-10, default: 5)
- `searchDepth`: Search depth ('basic' or 'advanced', default: 'basic')
- `includeAnswer`: Whether to include AI-generated answer summary (default: false)
- `includeDomains`: Array of domains to restrict the search to
- `excludeDomains`: Array of domains to exclude from the search
- `apiKey`: Tavily API key (optional if set via env var)

## License

ISC