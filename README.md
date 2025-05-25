# Média Fácil - Calculadora de Notas Escolares

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

<p align="center">
  <img src="livro.png" alt="Média Fácil App Icon" width="200"/>
</p>

**Média Fácil** é uma aplicação web intuitiva e amigável projetada para ajudar estudantes, especialmente os do Prof. Victor, a calcular suas médias escolares de forma rápida e precisa. Com calculadoras específicas para diferentes séries e disciplinas, o app simplifica o acompanhamento do desempenho acadêmico.

## 🌟 Visão Geral

O aplicativo oferece uma interface limpa e moderna, permitindo que os alunos insiram suas notas e visualizem suas médias instantaneamente. Ele é estruturado para cobrir diferentes necessidades de cálculo de notas, desde médias bimestrais até notas necessárias para aprovação ou recuperação.

## ✨ Funcionalidades Principais

* **Calculadora por Série:**
    * **Primeira Série:** Calcula a média com base nas notas de Discursiva, Objetiva, Tarefa Obrigatória e Simulado, usando a fórmula: `((Discursiva * 2) + (Objetiva * 2) + Tarefa) / 5 + Simulado`.
    * **Segunda Série:** Segue a mesma estrutura e fórmula de cálculo da Primeira Série.
    * **Terceira Série:** Calcula a média com base nas notas de Discursiva, Simulado Einstein e Simulado Anglo/ENEM, usando a fórmula: `((Discursiva * 2 + Simulado Einstein) / 3) + Simulado Anglo/ENEM`.
* **Calculadora de Português Específica:**
    * Permite o cálculo da nota de Português somando as notas das provas dos professores Alexandre, Rodrigo, Ana Cláudia e a nota de Redação.
* **Calculadora "Falta Quanto?":**
    * Ajuda os alunos a determinarem a nota necessária no 4º bimestre para atingir a média mínima de aprovação (6.0).
    * Indica se o aluno já está aprovado ou se a aprovação é impossível com base nas notas dos três primeiros bimestres.
* **Calculadora de Recuperação:**
    * Calcula a nota que o aluno precisa obter na prova de recuperação para ser aprovado, com base na média atual. A fórmula utilizada é: `Nota Necessária = 12 - Média Atual`.
* **Interface Moderna e Responsiva:**
    * Design visualmente agradável com cards, gradientes e ícones.
    * Adaptável a diferentes tamanhos de tela para uma ótima experiência em desktops e dispositivos móveis.
* **Progressive Web App (PWA):**
    * Inclui manifest e service worker para funcionalidades de PWA, como a possibilidade de ser "instalado" no dispositivo.

## 📄 Páginas da Aplicação

1.  **`index.html` (Página Inicial):**
    * Tela de boas-vindas com o nome do aplicativo "Média Fácil" e "Prof. Victor".
    * Botão "Iniciar" que direciona para a seleção de séries.

2.  **`home.html` (Seleção de Série):**
    * Permite ao usuário selecionar a sua série (Primeira, Segunda ou Terceira).
    * Navegação inferior para as calculadoras "Falta Quanto?" e "Recuperação".

3.  **`PrimeiraSerie.html`, `SegundaSerie.html`, `TerceiraSerie.html` (Calculadoras de Série):**
    * Páginas dedicadas para cada série, com campos para inserção das notas específicas e cálculo da média.
    * As páginas da Primeira e Segunda Série possuem um atalho para a calculadora de Português.

4.  **`Portugues.html` (Calculadora de Português):**
    * Formulário para calcular a nota final da disciplina de Português.

5.  **`FaltaQuanto.html` (Calculadora "Falta Quanto?"):**
    * Interface para calcular a nota necessária no último bimestre.

6.  **`Recuperacao.html` (Calculadora de Recuperação):**
    * Página para calcular a nota necessária na recuperação.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização e design responsivo, utilizando Flexbox, Grid, gradientes e animações.
* **JavaScript (Vanilla):** Lógica de cálculo das notas, manipulação do DOM e interações do usuário.

## 🚀 Como Usar

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.

Alternativamente, como é um projeto frontend puro, você pode simplesmente baixar os arquivos e abrir o `index.html`.

## 🎨 Design e Estilo

O aplicativo utiliza um design moderno e colorido, com foco na experiência do usuário:
* **Gradientes:** Usados extensivamente nos cards e backgrounds para um visual vibrante.
* **Ícones SVG:** Para uma interface gráfica clara e escalável.
* **Responsividade:** Garantida através de Media Queries para boa visualização em diversos dispositivos.
* **Animações Sutis:** Para melhorar o feedback visual e a interatividade.

## 🔮 Futuras Melhorias (Sugestões)

* **Armazenamento Local:** Salvar as notas inseridas pelo usuário no navegador para que ele não precise digitá-las novamente.
* **Gráficos de Desempenho:** Visualizar o progresso do aluno ao longo dos bimestres.
* **Internacionalização (i18n):** Suporte a outros idiomas.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem sugestões para melhorar o aplicativo, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

Desenvolvido para facilitar a vida acadêmica dos estudantes! 🎓📊
