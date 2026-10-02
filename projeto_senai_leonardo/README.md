## Requisitos do Sistema

- Git instalado
- Editor de código (VS Code)
- Sistema operacional Windows

# E-Commerce Online (Foka Mais)

## Descrição do Projeto

Este projeto consiste no desenvolvimento de um sistema de e-commerce (loja virtual), permitindo que os usuários naveguem pelos produtos, consultem informações, realizem cadastros e efetuem compras de forma simples e intuitiva. O objetivo é aplicar os conceitos de desenvolvimento web, organização de projetos, versionamento com Git e documentação utilizando Markdown.

## Estrutura Analítica do Projeto (Resumo das entregas)

### Documentação
- Definição do escopo do projeto;
- Levantamento de requisitos funcionais e não funcionais;
- Elaboração do README.md;
- Organização da EAP e do quadro Kanban.

### Front-End
- Desenvolvimento da página inicial;
- Página de produtos;
- Página de contato;
- Interface responsiva utilizando HTML, CSS e JavaScript.

### Back-End
- Modelagem do banco de dados;
- Cadastro e gerenciamento de usuários;
- Cadastro e gerenciamento de produtos;
- Sistema de login e autenticação.

## Tecnologias e Softwares Utilizados

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Visual Studio Code (VS Code)
- Markdown
- Trello (Kanban)

## Regra 60-30-10

- Proporcao / cor
60% - Branco - #FFFFFF - Fundo, espacos
30% - Preto - #000000 - Texto
10% - Verde-agua - #6fceae - Botoes, limks promocoes

## Estrutura de Arquivos

Novaweb
├── meu-projeto (Foka Mais)
│   ├── Assets
│   │   ├── Css
│   │   │   └── style.css
│   │   └── Images
│   │       ├── Wireframes
│   │       │   └── Wireframe.png
│   │       ├── img 1.jpg
│   │       ├── img 2.jpg
│   │       ├── img3.jpg
│   │       └── Logo.png
│   ├── Pages
│   │   ├── contato.html
│   │   └── Produtos.html
│   └── Index.html
├── projeto_senai_leonardo
│   └── README.md
└── NOTAS_ESTUDOS.md

## Status do projeto

O projeto está na fase de planejamento e preparação da estrutura, definindo a organização inicial e os próximos passos para o desenvolvimento.



# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

Este documento registra as diretrizes de usabilidade, validação e acessibilidade adotadas para o formulário de login do projeto.

## 1. Conceitos de usabilidade em formulários

### Labels vs. placeholders

Cada campo deve ter uma label visível, associada programaticamente ao respectivo input. O placeholder pode mostrar um exemplo ou uma dica breve, mas não substitui a label: ele desaparece durante a digitação, pode ter contraste insuficiente e obriga a pessoa a lembrar o propósito do campo. Para instruções que precisam continuar disponíveis, use texto de apoio próximo ao campo.

### Hierarquia visual

- **Ação principal — “Entrar”:** botão com maior destaque visual, usando cor de preenchimento e contraste adequados. Deve haver uma única ação principal evidente no formulário.
- **Ações secundárias — “Criar conta” e “Esqueci a senha”:** apresentadas como links ou botões de menor ênfase visual, mas ainda legíveis, reconhecíveis e fáceis de acessar. A hierarquia não deve depender somente da cor.

## 2. Estados de validação dos campos de entrada

Os estados devem ser perceptíveis sem depender apenas da cor e manter texto e controles legíveis.

- **Default (padrão):** borda neutra, label visível e texto de apoio quando necessário.
- **Focus (foco):** borda e/ou anel de foco claramente visível, com contraste suficiente em relação ao entorno. Não remova o outline do navegador sem fornecer um indicador equivalente.
- **Error (erro):** borda ou indicador em tom vermelho acompanhado de mensagem específica, em texto, logo abaixo do campo. Explique como corrigir; não use apenas “inválido”. Associe a mensagem ao campo para tecnologias assistivas.
- **Success (sucesso):** indicador visual discreto de que o valor foi aceito, acompanhado de texto quando essa confirmação for necessária. Não dependa apenas de um ícone ou de uma cor.
- **Disabled (desabilitado):** aparência atenuada para comunicar indisponibilidade, preservando contraste e legibilidade. O controle deve realmente estar desabilitado; quando for importante explicar o motivo, forneça essa informação em texto.

## 3. Padrões de acessibilidade

- **Contraste:** siga WCAG 2.2 nível AA: contraste mínimo de **4,5:1** para texto comum e **3:1** para texto grande. Componentes e indicadores visuais relevantes também precisam de contraste perceptível; não comunique estado somente por cor.
- **Labels e instruções:** use labels visíveis e associadas aos campos. Informe formato ou requisitos antes ou durante o preenchimento, sem depender apenas de placeholder.
- **Leitores de tela:** use elementos HTML semânticos, nomes acessíveis para controles e mensagens de erro associadas ao campo (por exemplo, `aria-describedby` e `aria-invalid` quando apropriado). Anuncie mensagens dinâmicas de validação sem interromper indevidamente a navegação.
- **Teclado e tecla Tab:** todos os campos, botões e links devem ser alcançáveis e operáveis pelo teclado em uma ordem lógica. Mantenha um indicador de foco visível e não crie armadilhas de teclado.
- **Erros:** identifique o campo com problema, descreva o erro em texto e ofereça uma instrução para corrigi-lo. Preserve os valores já preenchidos quando possível.