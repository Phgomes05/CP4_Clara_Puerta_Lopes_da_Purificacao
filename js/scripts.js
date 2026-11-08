(() => {
  'use strict';
  const THEME_KEY = 'clara-cp4-theme';
  const MESSAGES_KEY = 'clara-cp4-messages';
  const body = document.body;

  // Tema claro/escuro: preferência persiste após atualizar a página.
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark') body.classList.add('dark-theme');
  const header = document.querySelector('header');
  if (header && !document.querySelector('.theme-toggle')) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'theme-toggle btn btn-outline-light';
    toggle.setAttribute('aria-pressed', String(body.classList.contains('dark-theme')));
    const updateToggle = () => {
      const dark = body.classList.contains('dark-theme');
      toggle.textContent = dark ? 'Ativar tema claro' : 'Ativar tema escuro';
      toggle.setAttribute('aria-pressed', String(dark));
    };
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      localStorage.setItem(THEME_KEY, body.classList.contains('dark-theme') ? 'dark' : 'light');
      updateToggle();
    });
    header.appendChild(toggle);
    updateToggle();
  }

  // Formulário demonstrativo com validação e armazenamento apenas local.
  const form = document.getElementById('form-contato');
  const feedback = document.getElementById('form-feedback');
  const list = document.getElementById('lista-mensagens');
  const readMessages = () => {
    try { return JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]'); }
    catch (_) { return []; }
  };
  const renderMessages = () => {
    if (!list) return;
    list.replaceChildren();
    readMessages().forEach((message, index) => {
      const item = document.createElement('li');
      const details = document.createElement('span');
      details.textContent = `${message.nome} — ${message.assunto} — ${message.data}`;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'btn btn-sm btn-outline-danger';
      remove.textContent = 'Excluir';
      remove.setAttribute('aria-label', `Excluir mensagem de ${message.nome}`);
      remove.addEventListener('click', () => {
        const messages = readMessages();
        messages.splice(index, 1);
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
        renderMessages();
        if (feedback) feedback.textContent = 'Mensagem removida deste navegador.';
      });
      item.append(details, remove);
      list.appendChild(item);
    });
    if (!list.children.length) {
      const empty = document.createElement('li');
      empty.textContent = 'Nenhuma mensagem salva neste navegador.';
      list.appendChild(empty);
    }
  };
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        if (feedback) feedback.textContent = 'Confira os campos obrigatórios antes de enviar.';
        return;
      }
      const data = new FormData(form);
      const message = {
        nome: String(data.get('nome') || '').trim(),
        email: String(data.get('email') || '').trim(),
        telefone: String(data.get('telefone') || '').trim(),
        data: String(data.get('data') || ''),
        assunto: String(data.get('assunto') || ''),
        mensagem: String(data.get('mensagem') || '').trim(),
        criadoEm: new Date().toISOString()
      };
      const messages = readMessages();
      messages.unshift(message);
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages.slice(0, 20)));
      form.reset();
      if (feedback) feedback.textContent = 'Mensagem salva neste navegador. Ela não foi enviada a um servidor ou e-mail.';
      renderMessages();
    });
    form.addEventListener('reset', () => {
      if (feedback) feedback.textContent = 'Campos limpos.';
    });
    renderMessages();
  }

  // Desenho Canvas da página Gráficos.
  const canvas = document.getElementById('desenho');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#eaf5ef';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#17352a';
      ctx.font = 'bold 20px Arial';
      ctx.fillText('Habilidades em desenvolvimento', 22, 34);
      const bars = [ ['HTML', 90], ['CSS', 82], ['JavaScript', 68], ['Bootstrap', 62] ];
      bars.forEach((bar, i) => {
        const y = 62 + i * 44;
        ctx.fillStyle = '#17352a';
        ctx.font = '15px Arial';
        ctx.fillText(bar[0], 22, y + 18);
        ctx.fillStyle = '#cfe4d8';
        ctx.fillRect(125, y, 380, 24);
        ctx.fillStyle = '#00864a';
        ctx.fillRect(125, y, 3.8 * bar[1], 24);
        ctx.fillStyle = '#17352a';
        ctx.fillText(`${bar[1]}%`, Math.min(132 + 3.8 * bar[1], 490), y + 18);
      });
    }
  }
})();
