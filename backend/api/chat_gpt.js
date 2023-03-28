const axios = require('axios');

// 用您自己的 OpenAI API 密钥替换以下值
const API_KEY = 'your_openai_api_key';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
};

async function sendMessage(message) {
  try {
    const requestBody = {
      'model': 'text-davinci-002',
      'prompt': `User: ${message}\nChatGPT:`,
      'max_tokens': 50,
      'n': 1,
      'stop': ['\n'],
      'temperature': 0.8,
    };

    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      requestBody,
      { headers: headers },
    );

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return {
        success: true,
        message: response.data.choices[0].text.trim(),
      };
    } else {
      return {
        success: false,
        error: 'No response from ChatGPT',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: 'Error occurred while communicating with ChatGPT API',
    };
  }
}

module.exports = {
  sendMessage,
};
