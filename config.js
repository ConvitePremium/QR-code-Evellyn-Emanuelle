// ========================================================
// CONFIGURAÇÃO DA ENGINE
// Evellyn Emanuelle • 15 anos
// ========================================================

window.EVENTO_CONFIG = {
  nome: "Evellyn Emanuelle",
  idade: "15 anos",

  botoes: {
   quiz: { x: 17.2, y: 39.5, largura: 65.6, altura: 8.3 },
   foto: { x: 16, y: 51.8, largura: 66.7, altura: 7.9 }
  },

  quiz: {
    titulo: "Quiz da Evellyn Emanuelle",
    subtitulo: "Será que você conhece bem a Evellyn Emanuelle?",

    perguntas: [
      {
        pergunta: "Qual é a minha comida preferida?",
        opcoes: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"],
        correta: "Hambúrguer"
      },
      {
        pergunta: "Qual é a minha cor favorita?",
        opcoes: ["Lilás", "Branco", "Preto", "Rosa"],
        correta: "Branco"
      },
      {
        pergunta: "Qual é o meu lugar favorito?",
        opcoes: ["Praia", "Shopping", "Cinema", "Parque"],
        correta: "Shopping"
      },
      {
        pergunta: "Quais são os nomes dos meus três pets?",
        opcoes: ["Luna, Zeus e Laylla", "Luna, Thor e Laylla", "Mel, Zeus e Bella", "Luna, Zeus e Mel"],
        correta: "Luna, Zeus e Laylla"
      },
      {
        pergunta: "Qual tom de joias eu mais gosto?",
        opcoes: ["Dourado", "Prata", "Rosé", "Preto"],
        correta: "Prata"
      }
    ],

    mensagensResultado: {
      0: "😅 Opa! Parece que você ainda tem muito para descobrir sobre a Evellyn!",
      1: "🤭 Você ainda tem bastante coisa para descobrir sobre a nossa aniversariante!",
      2: "💜 Tá começando! Você já sabe algumas coisinhas sobre a Evellyn!",
      3: "✨ Mandou bem! Você conhece bastante a Evellyn!",
      4: "👑 Quase perfeito! Faltou só uma para gabaritar!",
      5: "👑✨ GABARITOU! Você conhece a Evellyn Emanuelle muito bem!"
    }
  }
};
