const chatWidget = document.createElement('div');

chatWidget.id = 'ia-chat-widget';

chatWidget.innerHTML = `
  <button
  id="ia-chat-toggle"
  type="button"
  aria-label="Abrir chat com IA"
  aria-expanded="false"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
    />
  </svg>
</button>

  <div
    id="ia-chat-window"
    role="dialog"
    aria-label="Chat com IA"
  >
    <div id="ia-chat-header">
      <div>
        <h2>Assistente BIA</h2>
        <p>Online</p>
      </div>

      <button
        id="ia-chat-close"
        type="button"
        aria-label="Fechar chat"
      >
        ×
      </button>
    </div>

    <div id="ia-chat-messages" aria-live="polite">
      <div class="ia-chat-msg ia-bot">
    Olá! 👋 Eu sou a BIA, assistente virtual do Squad B. Posso ajudar você a conhecer nossos serviços e projetos.
      </div>
    </div>

    <form id="ia-chat-form">
      <input
        id="ia-chat-input"
        type="text"
        placeholder="Digite sua mensagem..."
        autocomplete="off"
      />

      <button
        id="ia-chat-send"
        type="submit"
        aria-label="Enviar mensagem"
      >
        ➤
      </button>
    </form>
  </div>
`;

document.body.appendChild(chatWidget);

const chatToggle = document.querySelector('#ia-chat-toggle');
const chatWindow = document.querySelector('#ia-chat-window');
const chatClose = document.querySelector('#ia-chat-close');

chatToggle.addEventListener('click', () => {
  chatWindow.classList.toggle('ia-chat-open');

  const isOpen = chatWindow.classList.contains('ia-chat-open');

  chatToggle.setAttribute('aria-expanded', isOpen);
});

chatClose.addEventListener('click', () => {
  chatWindow.classList.remove('ia-chat-open');
  chatToggle.setAttribute('aria-expanded', 'false');
});

const chatForm = document.querySelector('#ia-chat-form');
const chatInput = document.querySelector('#ia-chat-input');
const chatSend = document.querySelector('#ia-chat-send');
const chatMessages = document.querySelector('#ia-chat-messages');

function addMessage(text, type) {
  const messageElement = document.createElement('div');

  messageElement.classList.add('ia-chat-msg', type);
  messageElement.textContent = text;

  chatMessages.appendChild(messageElement);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const typingElement = document.createElement('div');

  typingElement.classList.add('ia-chat-typing');

  typingElement.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  chatMessages.appendChild(typingElement);

  chatMessages.scrollTop = chatMessages.scrollHeight;

  return typingElement;
}

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();

  if (!message) {
    return;
  }

  addMessage(message, 'ia-user');

  chatInput.value = '';

  const typingElement = showTyping();

  chatInput.disabled = true;
  chatSend.disabled = true;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erro ao enviar mensagem.');
    }

    typingElement.remove();

    chatInput.disabled = false;
    chatSend.disabled = false;
    chatInput.focus();

    addMessage(data.response, 'ia-bot');

  } catch (error) {
    console.error('Erro no chat:', error);

    typingElement.remove();

    chatInput.disabled = false;
    chatSend.disabled = false;
    chatInput.focus();

    addMessage(
      'Desculpe, ocorreu um erro ao tentar responder.',
      'ia-error'
    );
  }
});