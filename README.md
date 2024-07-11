# E-commerce Next.js Project

Este é um projeto de e-commerce simples construído com Next.js. Ele permite que os usuários naveguem por uma lista de produtos e adicionem produtos ao carrinho.

## Funcionalidades

- Listagem de produtos
- Adição de produtos ao carrinho
- Visualização do carrinho de compras

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - O framework React para produção
- [React](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuário
- [Redux](https://redux.js.org/) - Para gerenciamento de estado
- [React-Redux](https://react-redux.js.org/) - Ligações oficiais do Redux para React
- [Styled Components](https://styled-components.com/) - Para estilos baseados em componentes

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/EdsonnOliveira/ecommerce.git
   ```

2. Navegue até o diretório do projeto:

 ```bash
    cd ecommerce
 ```

3. Instale as dependências
npm install
# ou
yarn install

4. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

5. Abra http://localhost:3000 para ver o projeto no seu navegador.

## Estrutura do projeto

    •	src/atoms/: Componentes reutilizáveis da aplicação.
	•	src/pages/: Páginas da aplicação Next.js.
	•	services/store/: Configuração e slices do Redux.
	•	src/styles/: Estilos globais.
	•	public/: Arquivos públicos como imagens.

## Gerenciamento de Estado com Redux

O Redux é utilizado para gerenciar o estado do carrinho de compras.

## Estilização com Styled Components

Styled Components é utilizado para criar componentes com estilos encapsulados.

## Hospedagem

Este projeto pode ser facilmente implantado na Vercel, a plataforma de hospedagem recomendada para aplicações Next.js.