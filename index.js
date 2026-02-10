const axios = require('axios');

/**
 * Performs a search using the Tavily API
 * @param {string} query - The search query
 * @param {Object} options - Search options
 * @param {string} options.apiKey - Tavily API key (defaults to process.env.TAVILY_API_KEY)
 * @param {number} options.maxResults - Maximum number of results to return
 * @param {string} options.searchDepth - Search depth ('basic' or 'advanced')
 * @param {boolean} options.includeAnswer - Whether to include AI-generated answer
 * @param {boolean} options.includeSources - Whether to include sources
 * @param {Array} options.includeDomains - Domains to include in search
 * @param {Array} options.excludeDomains - Domains to exclude from search
 * @returns {Promise<Object>} Search results
 */
async function tavilySearch(query, options = {}) {
  const {
    apiKey = process.env.TAVILY_API_KEY,
    searchDepth = 'basic',
    includeAnswer = false,
    includeSources = true,
    maxResults = 5,
    includeDomains = [],
    excludeDomains = [],
    useCache = true
  } = options;

  if (!apiKey) {
    throw new Error('Tavily API key is required. Set TAVILY_API_KEY environment variable.');
  }

  try {
    const response = await axios.post('https://api.tavily.com/search', {
      api_key: apiKey,
      query,
      search_depth: searchDepth,
      include_answer: includeAnswer,
      include_sources: includeSources,
      max_results: maxResults,
      include_domains: includeDomains,
      exclude_domains: excludeDomains,
      use_cache: useCache
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Tavily search failed: ${error.response.status} - ${error.response.data?.error || error.message}`);
    } else if (error.request) {
      throw new Error('Tavily search failed: No response received from API');
    } else {
      throw new Error(`Tavily search failed: ${error.message}`);
    }
  }
}

module.exports = { tavilySearch };