const { tavilySearch } = require('./index');

// 设置API密钥
process.env.TAVILY_API_KEY = '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';

// 测试插件功能
async function test() {
  try {
    console.log('开始测试Tavily搜索...');
    const results = await tavilySearch('latest AI technology trends', {
      maxResults: 3
    });
    console.log('搜索结果:', JSON.stringify(results, null, 2));
  } catch (error) {
    console.error('错误:', error.message);
  }
}

if (require.main === module) {
  test();
}