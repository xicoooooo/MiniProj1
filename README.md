# MiniProj1 - Currículo SPA

Currículo pessoal de **Francisco Aragão Dias** desenvolvido como Single Page Application (SPA) em **Vue 3**, para a unidade curricular de Programação Web Avançada (Mestrado em Engenharia Informática e Tecnologia Web - UTAD / Universidade Aberta), Tarefa 2.2.

## Ver o resultado

O ficheiro final está em [`docs/index.html`](docs/index.html): um **único ficheiro** com todo o HTML, CSS, JavaScript, fontes e imagens agregados. Basta abri-lo no browser (duplo clique), sem servidor nem ligação à internet.

## Funcionalidades

- **Três vistas** numa única página: _Quem sou eu?_, _O que faço?_ e _Hobbies_.
- **Navegação sem recarregar o documento**: o menu altera apenas a área central; o cabeçalho e o rodapé mantêm-se.
- **URL sincronizado** com a vista ativa (`#/quem-sou-eu`, `#/o-que-faco`, `#/hobbies`), com suporte aos botões **Voltar** e **Avançar** do browser.
- **Rodapé** com ligações para Instagram, GitHub, LinkedIn e X.
- **Modal reutilizável** para o detalhe de projetos e hobbies, que fecha pelo botão ×, pelo botão _Fechar_, pela tecla Esc ou com um clique fora da janela.
- **Responsivo**: em ecrãs estreitos o conteúdo passa a uma coluna e o menu recolhe num botão.
- **Acessibilidade**: navegação por teclado, `aria-current` na opção ativa, foco no título da nova vista, foco preso no modal e devolvido ao fechar, link "Saltar para o conteúdo" e respeito pela preferência "reduzir movimento".

## Decisões técnicas

| Decisão | Motivo |
|---|---|
| **Vite + `vite-plugin-singlefile`** | O enunciado pede os recursos agregados num único ficheiro. O código é desenvolvido em componentes `.vue` organizados, e o build junta tudo num só `index.html`. |
| **Build guardado em `docs/`** | A avaliação é feita a partir dos ficheiros no Git, por isso o resultado final fica no repositório, pronto a abrir. |
| **Navegação por fragmentos `#/`** (sem Vue Router) | Um composable de ~30 linhas (`useHashRoute`) chega: os links são `<a href="#/…">` normais e o evento `hashchange` sincroniza a vista, incluindo Voltar/Avançar. Funciona também ao abrir o ficheiro localmente (`file://`). |
| **Elemento nativo `<dialog>`** para o modal | `showModal()` já prende o foco, torna a página de fundo inerte e cria o fundo escurecido. |
| **Conteúdo separado da apresentação** | Os textos do CV estão em `src/data/`, e os componentes só os apresentam. |
| **Tailwind CSS v4** com tokens próprios | Cores, fontes e curvas de animação definidas uma vez em `src/main.css` (`@theme`). |
| **Motion** (`motion/mini`) | Animações subtis de entrada e saída das vistas, do menu móvel e do modal, na versão leve da biblioteca. |
| **Fontes e ícones embutidos** | Fontes via Fontsource (só o alfabeto latino) e ícones SVG inline, sem pedidos externos. |

## Estrutura

```
index.html              ponto de entrada (Vite)
docs/index.html         resultado final: ficheiro único gerado pelo build
src/
├── main.js             cria a aplicação Vue
├── main.css            Tailwind, tokens de design e estilos base
├── App.vue             layout comum: cabeçalho, área central, rodapé e modal
├── views/              as três vistas (WhoAmIView, WhatIDoView, HobbiesView)
├── components/         AppHeader, AppFooter, DetailModal, ProjectCard, HobbyCard, TagList, BaseIcon
├── composables/        useHashRoute: vista ativa ↔ fragmento do URL
├── data/               conteúdo do CV, navegação, perfil e imagens
├── utils/              animações (Motion)
└── assets/images/      fotografia
```

## Desenvolvimento

Requisitos: Node.js 20+.

```bash
npm install     # instalar dependências
npm run dev     # servidor de desenvolvimento
npm run build   # gerar docs/index.html (ficheiro único)
```

## Tecnologias

Vue 3 (Composition API, `<script setup>`) · Vite · Tailwind CSS · Motion · vite-plugin-singlefile

## Créditos

- Ícones: [Tabler Icons](https://tabler.io/icons) (licença MIT).
- Fontes: IBM Plex Sans e JetBrains Mono (SIL Open Font License), via Fontsource.
