# Projeto Next.js — E-commerce

Desenvolvi este projeto como uma aplicação de e-commerce, com componentes React e estrutura de rotas do Next.js. A ideia é apresentar um catálogo de produtos eletrônicos e permitir que a pessoa usuária monte um carrinho que fica salvo no navegador.

## Funcionalidades

- Implementei um catálogo local com 12 produtos eletrônicos.
- Adicionei a opção de incluir produtos no carrinho e exibir a quantidade total no cabeçalho.
- Criei a página do carrinho, com controles para aumentar ou diminuir a quantidade de cada item.
- Incluí o cálculo e a exibição do valor total dos itens.
- Adicionei uma tela para o carrinho vazio, com um link de volta ao catálogo.
- Implementei a persistência do conteúdo do carrinho no `localStorage` do navegador.
- Usei imagens hospedadas no Unsplash e as fontes Geist por meio de `next/font/google`.

O botão **Finalizar** aparece na interface, mas ainda não implementei checkout ou integração de pagamento. Também incluí o estoque nos dados dos produtos, porém ainda não o utilizo para limitar as quantidades adicionadas.

## Tecnologias e ferramentas utilizadas

| Tecnologia | Uso observado |
| --- | --- |
| Next.js | Estrutura de aplicação e rotas pelo diretório `app/`; componentes `next/image`, `next/link` e `next/font/google`. |
| React | Componentes, estado, contexto, hooks e renderização da interface. |
| TypeScript | Código-fonte `.ts` e `.tsx`, interfaces e tipos. |
| Tailwind CSS | Classes utilitárias na interface e importação `@import "tailwindcss"` em `app/globals.css`. |

## Bibliotecas utilizadas

| Biblioteca ou módulo | Finalidade observada |
| --- | --- |
| `next` | Componentes de imagem, navegação, fontes e tipos de metadados; a estrutura de rotas também segue o padrão do Next.js. |
| `react` | Componentes, contexto, estado, efeitos e hooks. |
| `@tabler/icons-react` | Ícones de carrinho, controles de quantidade e marca na interface. |
| `tailwindcss` | Estilização por classes utilitárias e importação na folha global. |

### Clonar o repositório

```bash
git clone https://github.com/Devpdias/Projeto-Next.js.git
cd Projeto-Next.js
```

## Estrutura do projeto

```text
Projeto-Next.js/
├── app/
│   ├── (loja)/
│   │   ├── carrinho/
│   │   │   └── page.tsx       # Página do carrinho
│   │   ├── layout.tsx         # Provedor de contexto do carrinho para as rotas da loja
│   │   └── page.tsx           # Página inicial e catálogo
│   ├── globals.css            # Estilos globais e importação do Tailwind CSS
│   ├── layout.tsx             # Layout raiz, fontes e metadados
│   └── favicon.ico            # Ícone da aplicação
├── components/
│   ├── carrinho/              # Itens, estado vazio e total do carrinho
│   ├── produto/               # Cartão de produto
│   └── template/              # Cabeçalho, logo, acesso ao carrinho e layout de página
└── data/
    ├── constantes/            # Catálogo estático
    ├── contexts/              # Contexto e provedor do carrinho
    ├── hooks/                 # Hooks para carrinho e localStorage
    └── model/                 # Tipos Produto e ItemCarrinho
```

## Arquitetura e organização

- **Rotas e layouts:** `app/` usa a convenção do App Router do Next.js. O grupo `(loja)` organiza as páginas da loja sem adicionar um segmento à URL. A página inicial corresponde a `/` e a página do carrinho a `/carrinho`.
- **Apresentação:** componentes em `components/` são separados por responsabilidade: catálogo/produto, carrinho e elementos compartilhados do template.
- **Dados de produtos:** `data/constantes/produtos.ts` mantém os produtos em uma lista estática, tipada pelo modelo `Produto`.
- **Estado do carrinho:** `data/contexts/contextoCarrinho.tsx` expõe itens e operações por contexto React. `data/hooks/useCarrinho.ts` facilita o acesso ao contexto pelos componentes.
- **Persistência local:** `data/hooks/localStorage.tsx` encapsula leitura, gravação e remoção de dados no armazenamento do navegador. O provedor carrega e atualiza a chave `carrinho`.
- **Modelos:** `Produto` descreve os dados do catálogo e `ItemCarrinho` associa um produto à sua quantidade.

Não implementei uma camada de servidor, API própria ou persistência remota. O estado do carrinho e os dados descritos ficam no cliente.

## Melhorias futuras

Estas são melhorias que pretendo considerar; ainda não fazem parte das funcionalidades implementadas:

- Implementar checkout e integração de pagamento.
- Validar o estoque e as quantidades antes de adicionar itens ao carrinho.
- Criar testes para o catálogo, a persistência e as operações do carrinho.
- Avaliar o uso de uma API ou banco de dados para o catálogo e o estoque, caso o projeto evolua além dos dados estáticos.
- Documentar comandos, versões suportadas e configurações de deploy quando os manifestos forem incluídos.

## Sobre mim e o repositório

- Desenvolvedor: [Devpdias](https://github.com/Devpdias)
- Repositório deste projeto: [Devpdias/Projeto-Next.js](https://github.com/Devpdias/Projeto-Next.js)