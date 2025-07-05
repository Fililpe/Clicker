let moedas = 0; //armazena quantidade de moedas
let valorPorClique = 1;
let custoUpgrade = 10;
let valorPorSegundo = 0;
let custoUpgradePassivo = 50;

const botaoClique = document.getElementById("clique-btn");
const botaoUpgrade = document.getElementById("upgrade-btn");
const spanMoedas = document.getElementById("moedas");
const botaoUpgradePassivo = document.getElementById("upgrade-passivo-btn");

botaoClique.addEventListener("click", () => {
  moedas += valorPorClique; //"Quando o botão for clicado, adicione moedas de acordo com o valor do clique"

  atualiazUI();
});

botaoUpgrade.addEventListener("click", () => {
  if (moedas >= custoUpgrade) {
    moedas -= custoUpgrade; // "Subtrai o custo do upgrade das moedas"
    valorPorClique++; // "Aumenta o valor por clique em 1"
    custoUpgrade = Math.floor(custoUpgrade * 1.65);
    atualiazUI();
  } else {
    alert("SEM Dinheiros SEM UPGRADE!");
  }
});

botaoUpgradePassivo.addEventListener("click", () => {
  if (moedas >= custoUpgradePassivo) {
    moedas -= custoUpgradePassivo;
    valorPorSegundo++; // "Aumenta o valor por segundo em 1"
    custoUpgradePassivo = Math.floor(custoUpgradePassivo * 1.85);
    atualiazUI();
  }
});

function atualiazUI() {
  spanMoedas.textContent = moedas; // "Atualiza o texto do span com a quantidade de moedas"

  spanMoedas.textContent = moedas;

  botaoUpgrade.textContent = `[ Upgrade do clique (+${valorPorClique}) ] = ${custoUpgrade} Dinheiros`;

  botaoUpgradePassivo.textContent = `[ Upgrade Passivo (+1/s) ] = ${custoUpgradePassivo} Dinheiros`;

  botaoUpgrade.textContent = `[ Upgrade do clique (+${valorPorClique}) ] = ${custoUpgrade} Dinheiros`;

  botaoUpgradePassivo.textContent = `[ Upgrade Passivo (+1/s) ] = ${custoUpgradePassivo} Dinheiros`;

  spanMoedas.style.color = moedas >= custoUpgrade ? "green" : "red"; // "Muda a cor do texto das moedas para verde se o custo do upgrade for alcançado, vermelho caso contrário"
}

setInterval(() => {
  moedas += valorPorSegundo; // "A cada segundo, adiciona moedas de acordo com o valor por segundo"
  atualiazUI();
}, 1000);
/*  Por que isso esta no final do código?
Colocar esse trecho na última linha do script ou abaixo de todas as funções evita que ele rode antes das variáveis estarem todas definidas.
Se você jogar ele no topo, pode dar erro porque ainda não existe moedas, valorPorSegundo, atualizarUI etc.*/
