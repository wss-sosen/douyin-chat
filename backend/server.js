// 导入依赖
const express = require('express');
const cors = require('cors');

// 导入 ChatGPT API 模块（请确保您已在 backend/api/chat_gpt.js 中创建此模块）
const chatGptApi = require('./api/chat_gpt');

// 初始化 Express 应用
const app = express();

// 使用 CORS 中间件允许跨域请求
app.use(cors());

// 使用 JSON 解析中间件
app.use(express.json());

// 路由：发送消息到 ChatGPT 并获取回复
app.post('/api/sendMessage', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await chatGptApi.sendMessage(message);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// 设置服务器监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
