/* Validando formulário */
  const form = document.getElementById('myform');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();


    /* Pegando Valores */
    const user = String(document.querySelector('#user').value);
    const password = String(document.querySelector('#password').value);


    /* Verificao de informações */
    try {
      const response = await fetch('https://rel.mecgestao.com.br/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
      });

      const data = await response.json();

      console.log('Sucesso:', data);

    } catch (error) {
      console.error('Erro:', error);
    }
  });

