// 获取页面元素
const commentInput = document.querySelector('#comment-input');
const commentButton = document.querySelector('#comment-button');
const chatWindows = document.querySelectorAll('.chat-window');

// 评论按钮点击事件
commentButton.addEventListener('click', () => {
  // 获取用户输入的评论内容
  const commentText = commentInput.value.trim();

  // 判断输入是否为空
  if (commentText === '') {
    alert('请输入评论内容');
    return;
  }

  // 清空输入框
  commentInput.value = '';

  // 示例：发送评论内容到服务器并获取回复
  // 这里只是一个示例，实际上您需要根据后端提供的 API 进行调用和处理
  sendMessageToServer(commentText).then((response) => {
    // 将回复内容显示在聊天窗口中
    displayMessage(response, 'chatgpt');
  });
});

// 示例：向服务器发送消息并获取回复
function sendMessageToServer(message) {
  return new Promise((resolve) => {
    // 模拟服务器回复
    const serverResponse = `ChatGPT 回复: ${message}`;
    setTimeout(() => resolve(serverResponse), 1000);
  });
}

// 显示消息到聊天窗口
function displayMessage(message, type) {
  // 创建消息元素
  const messageElem = document.createElement('div');
  messageElem.classList.add('message', type);
  messageElem.textContent = message;

  // 将消息添加到聊天窗口中
  chatWindows[0].appendChild(messageElem);

  // 滚动到聊天窗口底部
  chatWindows[0].scrollTop = chatWindows[0].scrollHeight;
}
