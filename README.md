# Tavily Search Plugin for OpenClaw

A plugin that provides Tavily web search functionality for OpenClaw agents. Tavily is an AI-native search API designed specifically for LLM applications, providing structured search results and AI-generated summaries.

## Features

- Web search with Tavily API
- Configurable search depth (basic or advanced)
- AI-generated answer summaries
- Domain filtering (include/exclude specific domains)
- Integration with OpenClaw's plugin configuration system

## Installation

This plugin is designed to work with OpenClaw. To install:

1. Clone this repository to your OpenClaw plugins directory
2. Run `npm install` in the plugin directory
3. Configure the API key in your OpenClaw configuration

## Configuration

### OpenClaw Configuration

Add the following to your `openclaw.json` file:

```json
{
  "plugins": {
    "entries": {
      "tavily-search": {
        "config": {
          "apiKey": "your-tavily-api-key-here"
        }
      }
    }
  }
}
```

The plugin will automatically read the API key from the OpenClaw configuration. If no API key is found in the config, it will fall back to the `TAVILY_API_KEY` environment variable.

### Environment Variable (Fallback)

You can also set the API key via environment variable:

```bash
export TAVILY_API_KEY=your-api-key-here
```

## Usage in OpenClaw

Once configured, you can use the Tavily search tool in your OpenClaw agents by calling:

```json
{
  "query": "latest AI developments",
  "count": 5,
  "search_depth": "advanced", 
  "include_answer": true
}
```

## API Parameters

| Parameter | Type | Required | Description | Default |
|-----------|------|----------|-------------|---------|
| `query` | string | Yes | Search query string | - |
| `count` | number | No | Number of results (1-10) | 5 |
| `search_depth` | string | No | Search depth: `basic` or `advanced` | `basic` |
| `include_answer` | boolean | No | Include AI-generated answer summary | `false` |
| `include_domains` | array | No | Restrict search to specific domains | `[]` |
| `exclude_domains` | array | No | Exclude specific domains from search | `[]` |

## Requirements

- Node.js 18+
- OpenClaw 2026.2.0+
- Tavily API key (get one at [tavily.com](https://www.tavily.com/))

## License

MIT License

## Support

For issues or questions, please open an issue on the GitHub repository.