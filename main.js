const numerooSenha = Document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numerooSenha-textcontent = tamanhoSenha;

const botoes = document.querySelector('.parametro-senha__botao');

botoes[0].onclick = dimuiTamanho;
botoes[1].onclick = aumentaTamanho;

function dimuiTamanho(){
if(tamanhoSenha > 1){
  //tamanhosenha = tamanhosenha-1;
  tamanhoSenha--;

}

numeroSenha-textContent = tamanhoSenha;
geralSenha();

}

function auamentaTamanho(){
if(tamanhoSenha <20);{
//tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++;

}
numerooSenha.textContent = tamanhoSenha;
geralSenha()
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
geralSenha();

function geralSenha(){
let senha = ";
for(let i =0; i < tamanhoSenha;i++)
let numeroAleatorio = math.random()*letrasMaisculas.longht;
numeroAleatorio= math.floor(numeroAleatorio);
senha = + letrasMaiusculas(numeroAleatorio);
}
campoSenha.value = senha;


}


