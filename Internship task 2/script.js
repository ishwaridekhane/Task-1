const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg === '') return;

  addMessage(msg, 'user');
  messageInput.value = '';

  // Simulate bot reply after 1 second
  setTimeout(() => {
    const reply = getBotReply(msg);
    addMessage(reply, 'bot');
  }, 1000);
}

function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {
  // Fake AI response logic 😂
  const replies = [
    "Cool 😎",
    "Tell me more!",
    "Haha that's funny!",
    "Totally agree with you.",
    "I'm just a bot but I got your back!",
    "Say whaaaat 🤯",
    "Interesting... 🤔",
    "You sound smart 😄"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
