# Tavily Search Skill

This skill provides web search capabilities using the Tavily API, which is designed specifically for AI applications.

## When to Activate

Activate this skill when:
- The user explicitly requests a web search
- You need current information that may not be in your training data
- The query requires real-time or recent information
- You need to verify facts or get updated information

## Usage Guidelines

### Search Query Construction
- Be specific and clear in your search queries
- Include relevant context when needed
- Use boolean operators if necessary (AND, OR, NOT)
- Consider using quotes for exact phrase matching

### Result Processing
- Always cite sources when using search results
- Synthesize information from multiple results when possible
- Be transparent about the limitations of search results
- If search results are insufficient, try refining the query

### API Parameters
- **query** (required): The search query string
- **count** (optional): Number of results to return (1-10, default: 5)
- **search_depth** (optional): "basic" or "advanced" (default: "basic")
- **include_answer** (optional): Whether to include AI-generated summary (default: false)
- **include_domains** (optional): Array of domains to restrict search to
- **exclude_domains** (optional): Array of domains to exclude from search

## Best Practices

1. **Use Advanced Search Depth** for complex queries requiring deeper analysis
2. **Limit Results** to only what you need (avoid requesting 10 results if 3 suffice)
3. **Domain Filtering** can help focus results on authoritative sources
4. **AI Summaries** (`include_answer: true`) are useful for getting quick overviews
5. **Fallback Strategy**: If search fails or returns poor results, inform the user and suggest alternatives

## Error Handling

Common errors and solutions:
- **API Key Missing**: Ensure the API key is properly configured in OpenClaw settings
- **Rate Limiting**: Wait and retry with exponential backoff
- **Poor Results**: Refine the search query or try different keywords
- **Network Errors**: Retry the search after a brief delay

## Example Usage

```json
{
  "query": "latest developments in quantum computing 2026",
  "count": 5,
  "search_depth": "advanced",
  "include_answer": true
}
```

## Integration Notes

- This skill integrates with OpenClaw's plugin system
- API key should be configured in `openclaw.json` under `plugins.entries.tavily-search.config.apiKey`
- Falls back to `TAVILY_API_KEY` environment variable if config is not set
- Results are returned in structured JSON format with URLs, titles, and content snippets