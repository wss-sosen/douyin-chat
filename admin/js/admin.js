// 获取页面元素
const settingsForm = document.querySelector('#settings-form');
const usersTable = document.querySelector('#users-table');

// 表单提交事件
settingsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // 获取表单数据
  const formData = new FormData(settingsForm);
  const roomUrl = formData.get('room-url');
  const chatgptApiKey = formData.get('chatgpt-api-key');

  // 示例：将表单数据发送到服务器保存
  // 这里只是一个示例，实际上您需要根据后端提供的 API 进行调用和处理
  saveSettingsToServer(roomUrl, chatgptApiKey).then((response) => {
    if (response.success) {
      alert('Settings saved successfully!');
    } else {
      alert('Error occurred while saving settings: ' + response.error);
    }
  });
});

// 示例：向服务器发送表单数据并保存
function saveSettingsToServer(roomUrl, chatgptApiKey) {
  return new Promise((resolve) => {
    // 模拟服务器响应
    setTimeout(() => resolve({ success: true }), 1000);
  });
}

// 示例：获取用户列表并显示到页面上
function getUsersFromServer() {
  return new Promise((resolve) => {
    // 模拟服务器响应
    const users = [
      { name: 'John Doe', points: 10, status: 'Active' },
      { name: 'Jane Smith', points: 5, status: 'Active' },
    ];
    setTimeout(() => resolve(users), 1000);
  });
}

// 示例：更新用户列表
function updateUsersList(users) {
  // 清空原有列表内容
  while (usersTable.tBodies[0].firstChild) {
    usersTable.tBodies[0].removeChild(usersTable.tBodies[0].firstChild);
  }

  // 添加新内容
  users.forEach((user) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPoints = document.createElement('td');
    const tdStatus = document.createElement('td');

    tdName.textContent = user.name;
    tdPoints.textContent = user.points;
    tdStatus.textContent = user.status;

    tr.appendChild(tdName);
    tr.appendChild(tdPoints);
    tr.appendChild(tdStatus);
    usersTable.tBodies[0].appendChild(tr);
  });
}

// 页面加载时更新用户列表
getUsersFromServer().then((users) => {
  updateUsersList(users);
});
