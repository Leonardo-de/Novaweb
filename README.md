##SA02 - Projetos e LMC


## SA02 – Sistema Administrativo Foka Mais

## 1 - Identificação do Projeto

Projeto: Sistema Administrativo Corporativo
Unidade Curricular: Projetos de Software
Curso: Técnico em Desenvolvimento de Sistemas
Turma: TDE1BAA-26

## 2 - Objetivo do Projeto

Planejar e prototipar um sistema administratitica e eletrônicos, permitindo que seus colaboradores realizem login, visualizem seus perfis e consultem informações operacionais.

## 3 - Descrição do Sistema

O sistema administrativo será composto por três telas principais:

1. Login: autenticação dos colaboradores da Foka Mais.

2. Perfil do Usuário: apresentação dos dados cadastrais dos colaboradores.

3. Área de Consulta: tabela com informações administrativas, incluindo campo de pesquisa e filtros visuais.

## 4. Recursos Humanos


| Profissional            | Responsabilidad
|:---                     |:---|
| UI Designer             | Criação e organização das interfaces      |
| Desenvolvedor Front-End | Implementação das telas do sistema        |
| Cliente/Stakeholder     | Avaliação e aprovação dos protótipos      |
| Analista de Requisitos  | Levantamento e organização dos requisitos |

## 5. Recursos Materiais

| Recurso                  | Utilização                                  |
|:---                      |:---                                         |
| Computador               | Desenvolvimento do projeto                  |
| Figma                    | Criação dos protótipos                      |
| VS Code                  | Organização e documentação dos arquivos     |
| Git                      | Controle de versão                          |
| GitHub                   | Armazenamento e compartilhamento do projeto |
| Logo da Foka Mias        | Identificação visual do sistema             |
| Ícones                   | Elementos visuais das interfaces            |

Link dos Ícones: https://www.figma.com/design/pLm36taxTyrz7cYKFKtoQV/Free-Icon-Pack-1800--icons--Community-?node-id=2165-3888&t=wWLVtRN6ZPXFpJTI-0

## 6. Cronograma de Desenvolvimento

| Etapa  | Atividade                        | Responsável |
|:---:   |:---                              |:---         |
|   01   | Definição da identidade visual   | UI Designer |
|   02   | Prototipagem da tela de Login    | UI Designer |
|   03   | Prototipagem da tela de Perfil   | UI Designer |
|   04   | Prototipagem da Área de Consulta | UI Designer |
|   05   | Adaptação das telas para Mobile  | UI Designer |
|   06   | Otimização das imagens           | UI Designer |
|   07   | Validação dos protótipos         | Cliente/Stakeholder |
|   08   | Entrega para desenvolvimento     | UI Designer e Desenvolvedor Front-End |

## 7 - Protótipos do Figma

Link: https://www.figma.com/design/YqitSyBtYk3oDE4ohiHPH9/Prot%C3%B3tipo?node-id=0-1&t=EXn4qdR9olHWlhmT-1

As três telas deverão possuir versões Desktop e Mobile.

## 8 - Responsividade e Otimização

As interfaces serão adaptadas para computadores e dispositivos móveis. As imagens serão otimizadas utilizando formatos WebP e SVG para melhorar o desempenho e o carregamento.

## 9 - Estrutura de Arquivos

SA02-FokaMais/
├── README.md
└── images/
       └── logo.png


# SA02_LMC — Painel Foka Mais

Projeto de interface para uma loja virtual, feito com HTML, CSS e JavaScript. A interface foi baseada de acordo com a SA02 de Projetos (Figma)

## Páginas

- `Login.html`: tela de acesso com formulário, botão para mostrar/ocultar senha e imagem de apresentação.
- `vendas.html`: painel geral de vendas com indicadores, gráfico, categorias, produtos em destaque e pedidos recentes.
- `Pedidos.html`: consulta de pedidos com cartões de resumo, filtros, abas de status, tabela e paginação demonstrativa.

## Arquivos

- `style.css`: estilos compartilhados pelas páginas de login, vendas e pedidos.
- `script.js`: interações do formulário de login, filtros do gráfico e navegação.
- `logo.png`: logo Foka Mais usada no cabeçalho e nas barras laterais.
- `login-hero.jpg`: imagem de notebook usada na apresentação da tela de login.

## Como abrir

Abra `Login.html`, `vendas.html` ou `Pedidos.html` em um navegador. Os links de navegação conectam o painel de vendas à página de pedidos.

> Os valores, clientes e pedidos exibidos são demonstrativos; não há integração com banco de dados ou serviço de autenticação.
