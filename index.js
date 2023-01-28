//variaveis
let cadastroClientes = [
  {
    nome: 'Julia Silva',
    cpf: '456.456.159-45',
    celular: '(47) 98857-6234',
    senha: '12345',
    conta: 1674866565329,
    saldo: 1500.0,
  },
  {
    nome: 'Brenda Almeida',
    cpf: '756.326.159-47',
    celular: '(47) 98857-6234',
    senha: '12345',
    conta: 251674866565328,
    saldo: 5200.0,
  },
];

//console.log(cadastroClientes);

const cadastroNovosClientes = document.getElementById('formulario');

const acessoConta = document.getElementById('formAcessoConta');

const operacao = document.getElementById('operacao');

//function
function avisaCadastro(status, conta) {
  const tituloForm = document.getElementById('formTitulo');
  const textForm = document.getElementById('textForm');

  if (status === true) {
    alert(`Bem vindo ao Money Plant | Conta numero: ${conta}`);
    tituloForm.innerText = `Conta numero: ${conta}`;
    textForm.innerText =
      'Você é o mais novo correntista do nosso banco. Seja bem vindo e aproveite seus beneficios. Caso queira abrir outra conta limpe e preencha novamente';
  } else {
    tituloForm.innerText = 'Tente novamente | Formulário de Cadastro';
    textForm.innerText = 'Preencha os campos cuidadosamente.';
  }
}

function deposito(conta, valor) {
  if (valor > 0) {
    const novoSaldo = conta.saldo + valor;
    conta.saldo = novoSaldo;

    alert(`Deposito efetuado com sucesso! Novo saldo: ${novoSaldo}`);
    return;
  } else {
    alert('Não foi possível efetuar o depósito.');
  }
}

function consultarSaldo(conta) {
  alert(`Saldo atual: ${conta.saldo}`);
}

function sacar(conta, valor) {
  if (valor > 0) {
    if (conta.saldo >= valor) {
      const novoSaldo = conta.saldo - valor;
      conta.saldo = novoSaldo;

      alert(`Saque efetuado com sucesso! Novo saldo: ${novoSaldo}`);
      return;
    } else {
      alert('Saldo insuficiente');
      return;
    }
  }
  alert('Não foi possível efetuar o saque.');
}

//EventListener

cadastroNovosClientes.addEventListener('submit', (event) => {
  event.preventDefault();

  const senha = event.target.senha.value;
  const confirmaSenha = event.target.confirmaSenha.value;

  if (senha !== confirmaSenha) {
    alert('Senhas são divergentes');
    return avisaCadastro(false);
  } else {
    const clientes = {
      nome: event.target.nome.value,
      cpf: event.target.cpf.value,
      celular: event.target.celular.value,
      senha: event.target.senha.value,
      conta: new Date().getTime(),
      saldo: 0,
    };
    cadastroClientes.push(clientes);
    console.log(cadastroClientes);
    avisaCadastro(true, clientes.conta);
  }
});

acessoConta.addEventListener('submit', (event) => {
  console.log('oi');
  event.preventDefault(); //Para a pagina não carregar sozinha

  const conta = parseInt(event.target.conta.value);
  const operacao = event.target.operacao.value;
  const valor = parseFloat(event.target.valor.value);
  const senha = event.target.senhaAcesso.value;
  const verificarConta = cadastroClientes.find((element) => element.conta === conta);

  console.log(verificarConta);
  if (!verificarConta) {
    alert('Conta inválida');
    return;
  }

  if (verificarConta.senha !== senha) {
    alert('Senha inválida');
    return;
  }

  switch (operacao) {
    case 'saque':
      sacar(verificarConta, valor);
      break;
    case 'deposito':
      deposito(verificarConta, valor);
      break;
    case 'saldo':
      consultarSaldo(verificarConta);
      break;
    default:
      alert('Operacão inválida');
      break;
  }
});

operacao.addEventListener('change', (event) => {
  const inputValor = document.getElementById('valor');
  if (event.target.value === 'saldo') {
    inputValor.disabled = true;
    inputValor.value = '';
    return;
  }
  inputValor.disabled = false;
});
