let cadastroClientes = [];

const cadastroNovosClientes = document.getElementById('formulario');

cadastroNovosClientes.addEventListener('submit', (event) => {
  const clientes = {
    nome: event.target.nome.value,
    cpf: event.target.nome.value,
    celular: event.target.nome.value,
    senha: event.target.nome.value,
    conta: new Date().getTime(),
    saldo: 0,
  };
  cadastroClientes.push(clientes);
});

/*
function cadastraCliente(event) {
   const clientes = {
    nome: event.target.nome.value,
    cpf: event.target.nome.value,
    celular: event.target.nome.value,
    senha: event.target.nome.value,
    conta: new Date().getTime(),
    saldo: 0,
  };
}
*/
