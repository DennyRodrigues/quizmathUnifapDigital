export type Dificuldade = 'Fácil' | 'Médio' | 'Difícil';

export interface Questao {
  id: number; 
  enunciado: string;
  opcoes: Array<string>; 
  respostaCorreta: number; 
  dificuldade: Dificuldade;
}

export const questoes: Questao[] = [
  {
    "id": 1,
    "enunciado": "João tinha 125 figurinhas. Ele ganhou mais 87 de um amigo. Com quantas figurinhas ele ficou?",
    "opcoes": [ "202", "210", "212", "215" ],
    "respostaCorreta": 2,
    "dificuldade": "Fácil"
  },
  {
    "id": 2,
    "enunciado": "Ana leu 45 páginas de um livro pela manhã e 37 à tarde. Quantas páginas ela leu ao todo?",
    "opcoes": [ "80", "82", "78", "84" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 3,
    "enunciado": "Um ônibus transportava 68 passageiros. Em uma parada, 23 desceram. Quantos permaneceram?",
    "opcoes": [ "45", "47", "43", "40" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 4,
    "enunciado": "Carla comprou um caderno por R$ 18,00 e uma caneta por R$ 7,50. Quanto ela gastou?",
    "opcoes": [ "R$ 24,00", "R$ 25,50", "R$ 26,00", "R$ 27,00" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 5,
    "enunciado": "Lucas tinha R$ 50,00. Gastou R$ 28,00 na papelaria. Quanto sobrou?",
    "opcoes": [ "R$ 18,00", "R$ 22,00", "R$ 20,00", "R$ 23,00" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 6,
    "enunciado": "Um aluno resolveu 62 exercícios em uma semana e 49 na outra. Quantos ao todo?",
    "opcoes": [ "111", "109", "110", "108" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 7,
    "enunciado": "Um caminhão levava 250 caixas. Após a entrega, restaram 115. Quantas foram entregues?",
    "opcoes": [ "130", "135", "125", "120" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 8,
    "enunciado": "Em uma sala havia 38 alunos. Entraram mais 12. Quantos há agora?",
    "opcoes": [ "48", "50", "49", "51" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 9,
    "enunciado": "Mariana tinha R$ 150,00. Comprou uma mochila por R$ 89,00. Quanto resta?",
    "opcoes": [ "R$ 61,00", "R$ 59,00", "R$ 62,00", "R$ 60,00" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 10,
    "enunciado": "Um mercado vendeu 124 garrafas na segunda e 98 na terça. Quantas no total?",
    "opcoes": [ "222", "223", "224", "225" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
   {
    "id": 11,
    "enunciado": "Pedro tinha 80 balas. Deu 45. Com quantas ficou?",
    "opcoes": [ "35", "36", "40", "34" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 12,
    "enunciado": "No refeitório havia 300 pratos. Após o almoço restaram 95. Quantos foram usados?",
    "opcoes": [ "200", "205", "210", "215" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 13,
    "enunciado": "Um livro tem 240 páginas. João leu 138. Quantas faltam?",
    "opcoes": [ "102", "100", "103", "105" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 14,
    "enunciado": "Na gincana, o grupo A fez 172 pontos e o grupo B, 139. Qual a diferença?",
    "opcoes": [ "31", "33", "32", "34" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 15,
    "enunciado": "Carlos marcou 56 pontos e depois mais 44. Total de pontos?",
    "opcoes": [ "100", "101", "99", "98" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 16,
    "enunciado": "Um estádio tinha 10.000 lugares. Foram 7.845 pessoas. Quantos lugares vazios?",
    "opcoes": [ "2.155", "2.145", "2.160", "2.165" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 17,
    "enunciado": "Há 340 livros. 127 foram emprestados. Quantos restaram?",
    "opcoes": [ "213", "211", "212", "214" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 18,
    "enunciado": "Paula comprou uma blusa por R$ 64,00 e uma calça por R$ 89,00. Total da compra?",
    "opcoes": [ "R$ 153,00", "R$ 152,00", "R$ 151,00", "R$ 154,00" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 19,
    "enunciado": "Em uma competição, o time azul fez 245 pontos e o time vermelho fez 233 pontos. Quantos pontos a mais o time azul fez em relação ao time vermelho?",
    "opcoes": [ "12", "11", "10", "13" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 20,
    "enunciado": "Letícia economizou R$ 15,00 por dia durante 5 dias. Quanto economizou?",
    "opcoes": [ "R$ 70,00", "R$ 75,00", "R$ 65,00", "R$ 60,00" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 21,
    "enunciado": "Joana tinha 58 figurinhas. Ganhou mais 26 de uma amiga. Com quantas figurinhas ela ficou?",
    "opcoes": [ "82", "84", "86", "88" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 22,
    "enunciado": "Lucas tinha R$150. Ele comprou um tênis por R$95. Quanto ele ainda tem?",
    "opcoes": [ "R$45", "R$55", "R$60", "R$65" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 23,
    "enunciado": "Em uma sala havia 28 meninas e 25 meninos. Quantos alunos havia no total?",
    "opcoes": [ "52", "53", "54", "55" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 24,
    "enunciado": "Marcos leu 135 páginas de um livro em um dia e 87 no outro. Quantas páginas ele leu no total?",
    "opcoes": [ "212", "220", "222", "225" ],
    "respostaCorreta": 2,
    "dificuldade": "Fácil"
  },
  {
    "id": 25,
    "enunciado": "Um mercado tinha 360 litros de leite. Vendeu 145 litros. Quantos litros ainda restam?",
    "opcoes": [ "215", "225", "235", "245" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 26,
    "enunciado": "Pedro tinha 85 reais. Comprou um brinquedo de 47 reais. Quanto sobrou?",
    "opcoes": [ "38", "37", "36", "35" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 27,
    "enunciado": "Ana tinha 120 canetas. Deu 45 para os colegas. Com quantas ficou?",
    "opcoes": [ "65", "70", "75", "80" ],
    "respostaCorreta": 2,
    "dificuldade": "Fácil"
  },
  {
    "id": 28,
    "enunciado": "Carlos juntou 320 reais em três meses. No primeiro mês, juntou 100; no segundo, 90. Quanto juntou no terceiro?",
    "opcoes": [ "120", "130", "140", "150" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 29,
    "enunciado": "Faltam 62 dias para o fim do ano. Já se passaram quantos dias se o ano tem 365?",
    "opcoes": [ "301", "302", "303", "304" ],
    "respostaCorreta": 2,
    "dificuldade": "Fácil"
  },
  {
    "id": 30,
    "enunciado": "Uma fábrica produziu 540 peças num dia e 465 no outro. Quantas peças no total?",
    "opcoes": [ "995", "1005", "1000", "985" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 31,
    "enunciado": "Rafaela tinha 72 bombons. Comeu 27. Quantos sobraram?",
    "opcoes": [ "44", "45", "46", "47" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 32,
    "enunciado": "Miguel gastou R$289 de um total de R$500. Quanto ainda tem?",
    "opcoes": [ "R$211", "R$212", "R$213", "R$214" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 33,
    "enunciado": "Numa competição, João marcou 15 pontos, Ana 22, e Carlos 18. Qual o total de pontos?",
    "opcoes": [ "55", "56", "57", "58" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 34,
    "enunciado": "Num ônibus havia 48 passageiros. Desceram 19. Quantos ainda ficaram no ônibus?",
    "opcoes": [ "28", "29", "30", "31" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 35,
    "enunciado": "Luiza tinha R$230. Comprou roupas por R$157. Quanto sobrou?",
    "opcoes": [ "R$73", "R$74", "R$75", "R$76" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 36,
    "enunciado": "Uma lanchonete vendeu 89 sanduíches pela manhã e 76 à tarde. Quantos no total?",
    "opcoes": [ "165", "166", "167", "168" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 37,
    "enunciado": "Uma escola comprou 480 livros. Já recebeu 295. Quantos ainda faltam chegar?",
    "opcoes": [ "185", "184", "183", "182" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 38,
    "enunciado": "Lucas fez 78 pontos no primeiro jogo e 89 no segundo. Quantos pontos no total?",
    "opcoes": [ "166", "167", "168", "169" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 39,
    "enunciado": "Maria gastou R$415 dos R$500 que tinha. Quanto sobrou?",
    "opcoes": [ "R$75", "R$85", "R$95", "R$105" ],
    "respostaCorreta": 1,
    "dificuldade": "Fácil"
  },
  {
    "id": 40,
    "enunciado": "Em uma biblioteca havia 720 livros. Foram retirados 156. Quantos livros ficaram?",
    "opcoes": [ "564", "565", "566", "567" ],
    "respostaCorreta": 0,
    "dificuldade": "Fácil"
  },
  {
    "id": 41,
    "enunciado": "Dona Maria vendeu 42 sacos de açaí em um dia na Feira do Buritizal e no dia seguinte vendeu mais 35. Quantos sacos ela vendeu nos dois dias?",
    "opcoes": [ "75", "77", "78", "79" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 42,
    "enunciado": "Seu Pedro pescou 56 tambaquis pela manhã e 28 à tarde. Quantos peixes ele pescou no total?",
    "opcoes": [ "84", "85", "86", "88" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
   {
    "id": 43,
    "enunciado": "Um barco saiu de Santana com 125 passageiros e embarcaram mais 37 em Mazagão. Quantas pessoas estavam no barco depois?",
    "opcoes": [ "162", "158", "172", "168" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 44,
    "enunciado": "Na escola da comunidade ribeirinha, havia 98 alunos inscritos no 1º semestre. No 2º semestre, mais 47 se matricularam. Quantos alunos há agora?",
    "opcoes": [ "145", "146", "147", "148" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 45,
    "enunciado": "Na Festa do Círio de Nazaré, foram distribuídas 500 velas. 238 já foram entregues. Quantas ainda faltam entregar?",
    "opcoes": [ "252", "262", "272", "248" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 46,
    "enunciado": "Uma comunidade quilombola recebeu 124 livros da prefeitura e depois recebeu mais 96. Quantos livros foram recebidos no total?",
    "opcoes": [ "220", "210", "219", "218" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 47,
    "enunciado": "Seu Antônio tinha 300 litros de açaí para vender. Ele vendeu 185. Quantos litros ainda restam?",
    "opcoes": [ "115", "125", "105", "95" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 48,
    "enunciado": "Na escola do Bailique, havia 75 carteiras. Chegaram mais 48 novas. Quantas carteiras há agora?",
    "opcoes": [ "123", "122", "121", "124" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 49,
    "enunciado": "Em um mutirão de limpeza do rio Amazonas, foram recolhidos 560 kg de lixo em um dia e 415 kg no outro. Quantos quilos foram recolhidos ao todo?",
    "opcoes": [ "975", "965", "985", "990" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 50,
    "enunciado": "Uma criança da comunidade da Pedreira tinha 135 reais. Ela comprou brinquedos por 87 reais. Com quanto ficou?",
    "opcoes": [ "58", "48", "42", "38" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
   {
    "id": 51,
    "enunciado": "Na colônia de pescadores, foram pescados 152 pirapitingas. Na semana seguinte, mais 143 foram pescadas. Quantas ao todo?",
    "opcoes": [ "295", "285", "294", "293" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 52,
    "enunciado": "Durante uma oficina de artesanato, 67 pulseiras foram feitas pela manhã e 53 à tarde. Quantas foram feitas no total?",
    "opcoes": [ "120", "121", "119", "122" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 53,
    "enunciado": "No aniversário da cidade de Macapá, foram servidos 450 pedaços de bolo. 329 já foram servidos. Quantos ainda faltam?",
    "opcoes": [ "121", "131", "119", "129" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 54,
    "enunciado": "Durante o Festival do Camarão, 345 pratos foram vendidos no primeiro dia e 276 no segundo. Quantos no total?",
    "opcoes": [ "621", "611", "631", "620" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 55,
    "enunciado": "Em uma escola rural, foram entregados 320 kits escolares. Já foram distribuídos 178. Quantos kits ainda restam?",
    "opcoes": [ "142", "138", "148", "150" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 56,
    "enunciado": "Joana colheu 120 cestos de pupunha. Vendeu 85 na feira. Quantos cestos ainda tem?",
    "opcoes": [ "35", "45", "40", "50" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 57,
    "enunciado": "Na travessia de balsa para o arquipélago do Bailique, 87 pessoas embarcaram. No meio do caminho, mais 42 embarcaram. Quantas ao todo?",
    "opcoes": [ "129", "119", "127", "130" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 58,
    "enunciado": "Em uma ação de saúde na comunidade ribeirinha, foram atendidas 163 pessoas pela manhã e 185 à tarde. Quantas pessoas foram atendidas no total?",
    "opcoes": [ "348", "343", "353", "333" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 59,
    "enunciado": "Durante a colheita de bacaba, Dona Lúcia encheu 67 garrafas e seu filho encheu mais 58. Quantas garrafas ao todo?",
    "opcoes": [ "125", "124", "126", "127" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 60,
    "enunciado": "No transporte escolar fluvial, um barco transportou 215 alunos no mês de março e 198 em abril. Quantos alunos ao todo?",
    "opcoes": [ "413", "412", "414", "410" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
   {
    "id": 61,
    "enunciado": "Na feira do bairro Zerão, João vendeu 48 litros de açaí pela manhã e 36 litros à tarde. Quantos litros ele vendeu no total?",
    "opcoes": [ "82", "84", "86", "88" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 62,
    "enunciado": "Em uma visita ao Museu Sacaca, 95 alunos participaram pela manhã e 64 à tarde. Quantos alunos visitaram o museu naquele dia?",
    "opcoes": [ "158", "159", "160", "161" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 63,
    "enunciado": "Um barco escolar saiu do Bailique com 73 alunos. Durante o trajeto, mais 28 embarcaram. Quantos alunos havia no barco ao final?",
    "opcoes": [ "101", "100", "99", "98" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 64,
    "enunciado": "Na colheita do cupuaçu, a família de Marina colheu 154 frutos. Ela vendeu 89 na feira. Quantos frutos sobraram?",
    "opcoes": [ "65", "66", "67", "68" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 65,
    "enunciado": "Na escola da comunidade Maruanum, 123 alunos receberam kits escolares. Em outra remessa, chegaram mais 84 kits. Quantos kits foram recebidos no total?",
    "opcoes": [ "207", "208", "209", "210" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 66,
    "enunciado": "Durante uma ação de vacinação em Santana, foram atendidas 237 pessoas. No dia seguinte, 189 pessoas foram vacinadas. Quantas foram vacinadas nos dois dias?",
    "opcoes": [ "426", "425", "427", "428" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 67,
    "enunciado": "Um pescador de Fazendinha vendeu 265 kg de peixe. Seu irmão vendeu mais 118 kg. Quantos quilos os dois venderam juntos?",
    "opcoes": [ "382", "383", "384", "385" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 68,
    "enunciado": "Dona Socorro vendeu 320 litros de tacacá durante o Círio de Nazaré. No ano anterior, ela vendeu 285 litros. Quantos litros a mais ela vendeu este ano?",
    "opcoes": [ "34", "35", "36", "37" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 69,
    "enunciado": "Na escola da comunidade de Corre Água, havia 85 alunos matriculados no início do ano. Durante o semestre, mais 37 se matricularam. Quantos alunos havia no final do semestre?",
    "opcoes": [ "121", "122", "123", "124" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 70,
    "enunciado": "Em uma gincana escolar, a equipe Arraia ganhou 174 pontos e a equipe Tartaruga ganhou 189. Qual foi a diferença entre as pontuações?",
    "opcoes": [ "13", "14", "15", "16" ],
    "respostaCorreta": 2,
    "dificuldade": "Médio"
  },
    {
    "id": 71,
    "enunciado": "Seu Raimundo pescou 137 peixes num dia. No dia seguinte, pescou 119. Quantos peixes ele pescou nos dois dias?",
    "opcoes": [ "255", "256", "257", "258" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 72,
    "enunciado": "Um barco saiu de Mazagão com 148 sacos de farinha para Macapá. No caminho, mais 74 sacos foram embarcados. Quantos sacos chegaram ao destino?",
    "opcoes": [ "222", "223", "224", "225" ],
    "respostaCorreta": 0,
    "dificuldade": "Médio"
  },
  {
    "id": 73,
    "enunciado": "Durante a Feira do Produtor, Ana vendeu 93 pacotes de farinha. Ainda restaram 48 pacotes. Quantos pacotes ela levou no total?",
    "opcoes": [ "140", "141", "142", "143" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 74,
    "enunciado": "Em um mutirão de limpeza no Rio Amazonas, foram recolhidos 316 kg de lixo no sábado e 287 kg no domingo. Quantos quilos foram recolhidos no total?",
    "opcoes": [ "602", "603", "604", "605" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 75,
    "enunciado": "Num evento na Fortaleza de São José, 422 pessoas participaram. Dessas, 145 eram crianças. Quantas eram adultos?",
    "opcoes": [ "276", "277", "278", "279" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 76,
    "enunciado": "Durante uma contagem de tartarugas no rio Araguari, um grupo registrou 308 animais num trecho e 247 em outro. Quantas tartarugas foram contadas?",
    "opcoes": [ "554", "555", "556", "557" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 77,
    "enunciado": "Na escola do Curiaú, foram distribuídas 280 merendas pela manhã e 265 à tarde. Quantas merendas foram servidas no total?",
    "opcoes": [ "544", "545", "546", "547" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 78,
    "enunciado": "Durante a Festa da Castanha, foram produzidos 189 doces no sábado e 211 no domingo. Quantos doces foram produzidos ao todo?",
    "opcoes": [ "399", "400", "401", "402" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 79,
    "enunciado": "Uma embarcação saiu com 143 passageiros de Porto Grande. Em Ferreira Gomes, desceram 58. Quantas pessoas ficaram no barco?",
    "opcoes": [ "84", "85", "86", "87" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 80,
    "enunciado": "Em uma escola de Mazagão Velho, havia 365 livros. A prefeitura enviou mais 179. Quantos livros a escola passou a ter?",
    "opcoes": [ "543", "544", "545", "546" ],
    "respostaCorreta": 1,
    "dificuldade": "Médio"
  },
  {
    "id": 81,
    "enunciado": "Durante a semana, Dona Lúcia vendeu 120 litros de açaí. Na segunda-feira foram 38 litros, na terça 45. Quantos litros ela vendeu nos outros dias?",
    "opcoes": [ "35", "36", "37", "38" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
   {
    "id": 82,
    "enunciado": "Um barco leva 56 alunos de Mazagão ao Bailique. No meio do trajeto, 23 alunos descem e 17 sobem. Quantos alunos estão no barco ao final?",
    "opcoes": [ "50", "51", "52", "53" ],
    "respostaCorreta": 0,
    "dificuldade": "Difícil"
  },
  {
    "id": 83,
    "enunciado": "Em uma feira agroecológica, foram vendidos 345 pacotes de farinha. Se 189 foram vendidos antes do meio-dia, quantos foram vendidos à tarde?",
    "opcoes": [ "155", "156", "157", "158" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 84,
    "enunciado": "Na escola da comunidade Curiaú, havia 218 alunos. Com novas matrículas, o número subiu para 274. Quantos alunos entraram na nova remessa?",
    "opcoes": [ "54", "55", "56", "57" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 85,
    "enunciado": "Durante a Festa de São Tiago, foram entregues 432 quilos de alimentos. No sábado, entregaram 197 kg e no domingo, 164 kg. Quantos kg faltam para completar a entrega?",
    "opcoes": [ "70", "71", "72", "73" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 86,
    "enunciado": "Um professor levou 3 caixas com livros para a escola. Em cada caixa havia 42 livros. Ao chegar, percebeu que 29 estavam danificados. Quantos livros estavam em bom estado?",
    "opcoes": [ "94", "95", "96", "97" ],
    "respostaCorreta": 3,
    "dificuldade": "Difícil"
  },
  {
    "id": 87,
    "enunciado": "No mês passado, uma família colheu 184 frutos de pupunha. Este mês colheu 267. Quantos frutos foram colhidos nos dois meses?",
    "opcoes": [ "450", "451", "452", "453" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 88,
    "enunciado": "Durante uma semana, uma embarcação transportou 712 pessoas. Se nos três primeiros dias foram 385 pessoas, quantas passaram nos outros dias?",
    "opcoes": [ "325", "326", "327", "328" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 89,
    "enunciado": "Na escola do Maruanum, a professora tinha 60 lápis. Ela emprestou 18 para um grupo, 22 para outro, e ficou com o restante. Quantos lápis ela ainda tem?",
    "opcoes": [ "19", "20", "21", "22" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 90,
    "enunciado": "Num projeto de leitura, foram lidos 257 livros por três turmas. A turma A leu 98, a B leu 85. Quantos livros leu a turma C?",
    "opcoes": [ "73", "74", "75", "76" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 91,
    "enunciado": "Na comunidade ribeirinha do Ariri, 86 famílias receberam cestas básicas. Se 39 receberam pela manhã e 28 à tarde, quantas ainda faltam receber?",
    "opcoes": [ "18", "19", "20", "21" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 92,
    "enunciado": "No primeiro semestre, a escola do Bailique recebeu 372 livros. No segundo semestre, vieram mais 246. Quantos livros foram recebidos no ano todo?",
    "opcoes": [ "617", "618", "619", "620" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 93,
    "enunciado": "Durante uma campanha de doação, 345 brinquedos foram arrecadados. Se 198 já foram distribuídos, quantos ainda restam?",
    "opcoes": [ "146", "147", "148", "149" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 94,
    "enunciado": "No mutirão de saúde do arquipélago do Bailique, foram atendidas 512 pessoas. Se 265 eram mulheres e 178 homens, quantas eram crianças?",
    "opcoes": [ "68", "69", "70", "71" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 95,
    "enunciado": "Em uma escola indígena, 60 alunos participaram da olimpíada de matemática. Se 24 ganharam medalhas e 17 receberam certificados, quantos não receberam nada?",
    "opcoes": [ "18", "19", "20", "21" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 96,
    "enunciado": "Numa horta escolar, foram colhidos 192 pés de alface e 206 de couve. Quantas hortaliças foram colhidas no total?",
    "opcoes": [ "397", "398", "399", "400" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 97,
    "enunciado": "No festival do açaí, foram servidas 845 tigelas. No turno da manhã, foram 392, e à tarde 336. Quantas tigelas foram servidas à noite?",
    "opcoes": [ "116", "117", "118", "119" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 98,
    "enunciado": "Um grupo de estudantes coletou 215 garrafas pet. No dia seguinte, trouxeram mais 167. Se já usaram 248 em uma oficina, quantas ainda restam?",
    "opcoes": [ "132", "133", "134", "135" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 99,
    "enunciado": "No mês de março, foram distribuídos 1.285 kits de merenda. Em abril, 1.367. Quantos kits foram distribuídos nesses dois meses?",
    "opcoes": [ "2.651", "2.652", "2.653", "2.654" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 100,
    "enunciado": "Numa ação educativa em Macapá, foram plantadas 348 mudas de árvores. Destas, 97 eram de andiroba, 103 de açaí e o restante de outras espécies. Quantas eram de outras espécies?",
    "opcoes": [ "147", "148", "149", "150" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
   {
    "id": 101,
    "enunciado": "Durante a Semana do Meio Ambiente, os alunos da Escola de Fazendinha recolheram 284 garrafas pet na terça-feira e 197 na quinta-feira. Quantas garrafas foram recolhidas nos dois dias?",
    "opcoes": [ "471", "481", "491", "501" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 102,
    "enunciado": "Num mutirão de limpeza no rio Matapi, foram recolhidos 367 kg de lixo na parte da manhã e 244 kg à tarde. Quantos quilos foram recolhidos no total?",
    "opcoes": [ "601", "610", "611", "621" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 103,
    "enunciado": "Durante o Festival do Açaí, foram servidas 732 tigelas no sábado e 689 no domingo. Quantas tigelas foram servidas ao todo?",
    "opcoes": [ "1410", "1411", "1421", "1422" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 104,
    "enunciado": "No início do mês, uma escola de Mazagão tinha 425 livros. Receberam mais 187 de um projeto de leitura. Quantos livros ficaram disponíveis?",
    "opcoes": [ "611", "612", "613", "614" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 105,
    "enunciado": "No porto de Santana, um barco descarregou 428 sacos de farinha pela manhã e 327 à tarde. Quantos sacos foram descarregados no total?",
    "opcoes": [ "755", "756", "757", "758" ],
    "respostaCorreta": 0,
    "dificuldade": "Difícil"
  },
  {
    "id": 106,
    "enunciado": "Durante uma feira no Curiaú, foram vendidos 389 litros de gengibirra. Se no dia anterior foram vendidos 237 litros, quantos litros foram vendidos nos dois dias?",
    "opcoes": [ "625", "626", "627", "628" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 107,
    "enunciado": "Uma escola do Bailique recebeu 362 cadernos. Depois, chegaram mais 145. Se 289 foram distribuídos, quantos ainda restam?",
    "opcoes": [ "217", "218", "219", "220" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 108,
    "enunciado": "Em um evento cultural no Museu Sacaca, participaram 786 pessoas no sábado e 694 no domingo. Quantas pessoas participaram no total?",
    "opcoes": [ "1478", "1479", "1480", "1481" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 109,
    "enunciado": "Durante a distribuição de kits escolares, 415 foram entregues na Comunidade de Corre Água e 297 na Comunidade do Coração. Quantos kits foram distribuídos no total?",
    "opcoes": [ "711", "712", "713", "714" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 110,
    "enunciado": "Na pesca artesanal do rio Amazonas, foram pescados 395 kg de peixe pela manhã e 268 kg à tarde. Quantos quilos foram pescados no dia?",
    "opcoes": [ "662", "663", "664", "665" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
   {
    "id": 111,
    "enunciado": "Em uma escola do interior de Macapá, 523 alunos receberam lanche. No dia seguinte, 467 receberam. Quantos alunos foram atendidos nos dois dias?",
    "opcoes": [ "989", "990", "991", "992" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 112,
    "enunciado": "Na feira de Santana, 185 pacotes de tapioca foram vendidos pela manhã. À tarde, venderam 249 pacotes. Quantos pacotes foram vendidos no total?",
    "opcoes": [ "433", "434", "435", "436" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 113,
    "enunciado": "Durante a Feira da Castanha, foram distribuídos 875 doces. Se no primeiro turno foram 448, quantos foram no segundo turno?",
    "opcoes": [ "426", "427", "428", "429" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 114,
    "enunciado": "Na escola de Ferreira Gomes, havia 625 alunos. Após novas matrículas, o total passou para 738. Quantos novos alunos se matricularam?",
    "opcoes": [ "111", "112", "113", "114" ],
    "respostaCorreta": 2,
    "dificuldade": "Difícil"
  },
  {
    "id": 115,
    "enunciado": "Durante um passeio ao Parque Zoobotânico, foram 389 alunos pela manhã e 278 à tarde. Quantos alunos participaram no total?",
    "opcoes": [ "666", "667", "668", "669" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 116,
    "enunciado": "Na produção de farinha da comunidade do Igarapé da Fortaleza, 528 kg foram embalados em um dia e 417 no outro. Qual o total produzido?",
    "opcoes": [ "944", "945", "946", "947" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 117,
    "enunciado": "Na Festa do Abacaxi, foram consumidas 468 frutas. Se 243 foram cortadas em pedaços e o resto distribuídas inteiras, quantas foram inteiras?",
    "opcoes": [ "224", "225", "226", "227" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 118,
    "enunciado": "Na escola do Lontra da Pedreira, 382 alunos participaram da corrida. Se 159 eram meninas, quantos eram meninos?",
    "opcoes": [ "222", "223", "224", "225" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 119,
    "enunciado": "Em uma coleta de lixo reciclável, 274 garrafas foram recolhidas em Fazendinha e 349 em Maruanum. Quantas garrafas foram recolhidas ao todo?",
    "opcoes": [ "622", "623", "624", "625" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  },
  {
    "id": 120,
    "enunciado": "Na escola de Mazagão Velho, foram pintadas 328 carteiras. Depois, mais 179 carteiras foram trazidas novas. Quantas carteiras ficaram disponíveis?",
    "opcoes": [ "506", "507", "508", "509" ],
    "respostaCorreta": 1,
    "dificuldade": "Difícil"
  }
]
