# **GitUsers Web**

Uma aplicação React desenvolvida para exibir e gerenciar informações de usuários do GitHub, utilizando a API do GitHub e React Query para o gerenciamento de estados assíncronos.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca principal para construção da interface.
- **React Router DOM**: Gerenciamento de rotas na aplicação.
- **React Query**: Gerenciamento de estados assíncronos.
- **React Helmet**: Configurações SEO.
- **Axios**: Requisições HTTP para a API do GitHub.
- **Bootstrap**: Estilização responsiva.
- **Sass**: Suporte para estilos SCSS avançados.
- **Vite**: Ferramenta para desenvolvimento e build da aplicação.
- **TypeScript**: Suporte para tipagem estática.
- **Yup**: Validação de dados.

---

## **Pré-requisitos**

Certifique-se de ter o seguinte instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

---

## **Como Executar**

### **1. Clonar o Repositório**

```bash
git clone https://github.com/BereniceQueiroz/github-users.git
cd github-users
npm install
npm run dev
```
---

O projeto será executado em http://localhost:3000 (ou outro porto disponível).

## **Scripts Disponíveis**

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a versão otimizada da aplicação.
- `npm run lint`: Analisa o código com o ESLint para identificar problemas.
- `npm run prettier`: Formata o código utilizando o Prettier.
- `npm run test`: Executa os testes utilizando o Vitest.
- `npm run preview`: Visualiza o build otimizado localmente.


---

## **Estrutura do Projeto**

gitusers-web/
├── public/             # Arquivos estáticos públicos
├── src/
│   ├── assets/         # Imagens, ícones, e outros recursos
│   ├── components/     # Componentes reutilizáveis
│   ├── hooks/          # Custom Hooks
|   ├── libs/           # Configuração e instâncias do Axios / Configuração do React Query
│   ├── pages/          # Páginas principais da aplicação
│   ├── routes/         # Configuração das rotas da aplicação
│   ├── styles/         # Estilos globais e variáveis SCSS
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Ponto de entrada da aplicação
├── .env                # Variáveis de ambiente (não versionadas)
├── .gitignore          # Arquivos ignorados pelo Git
├── vite.config.ts       # Configuração do Vite
├── tsconfig.json        # Configuração do TypeScript
└── package.json        # Dependências e scripts


---

# **Variáveis de ambiente**
VITE_API_BASE_URL=https://api.github.com

---

## **Funcionalidades**

- **Listagem de Repositórios**: Exibe a lista de repositórios de um usuário do GitHub.
- **Ordenação por Estrelas**: Permite ordenar os repositórios pelo número de estrelas, de forma ascendente ou descendente.
- **Detalhes dos Repositórios**: Exibe informações detalhadas de um repositório selecionado.
- **Paginação**: Navegação entre páginas para visualizar grandes listas de repositórios.

---

## **Contato**

- **Autor**: Berenice Queiroz.
- **Email**: baqueiroz14@gmail.com





