# ☕ Livre Café

**Uma experiência acolhedora, com sabor e tecnologia.**

[![Angular](https://img.shields.io/badge/Angular-22.2.3-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Styles-pink?logo=sass&logoColor=white)](https://sass-lang.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)

🔗 **Acesse o projeto:** [Livre Café — Site publicado](https://karen0101sousa.github.io/livre-cafe-site/)

---

## 📖 Sobre o projeto

O **Livre Café** é um projeto acadêmico desenvolvido no contexto da minha pós-graduação em **Desenvolvimento Full Stack**.

A ideia tem uma origem especial: ela foi inicialmente concebida durante o MBA em **Gestão de Projetos e Metodologias Ágeis**, como uma proposta de negócio para uma cafeteria acolhedora, com opções sem lactose e uma experiência gastronômica que não deixasse as restrições alimentares limitarem o prazer de consumir bons produtos.

Na pós-graduação em Desenvolvimento Full Stack, surgiu a oportunidade de levar essa ideia para o universo da tecnologia, transformando a proposta de negócio em um produto digital.

Assim nasceu o site institucional do Livre Café: uma aplicação frontend que apresenta a identidade da cafeteria, seu cardápio e informações importantes para quem deseja conhecer o estabelecimento.

Mais do que desenvolver uma página, o objetivo foi conectar conhecimentos de gestão de projetos com conceitos e ferramentas do desenvolvimento de software.

## 🎯 Objetivos

- Transformar uma ideia de negócio em uma solução tecnológica.
- Aplicar os conhecimentos adquiridos na pós-graduação em Desenvolvimento Full Stack.
- Desenvolver uma interface intuitiva, organizada e responsiva.
- Apresentar produtos com informações sobre ingredientes e restrições alimentares.
- Praticar organização de código, componentização conceitual, tipagem e estilização com Angular.
- Experimentar um fluxo de versionamento e publicação de uma aplicação web.

## ✨ Funcionalidades implementadas

O projeto contempla uma primeira versão de um site institucional, com as seguintes funcionalidades:

- **Apresentação da cafeteria:** seção inicial com identidade visual e proposta da marca.
- **Nossa história:** apresentação do conceito e dos valores do Livre Café.
- **Cardápio interativo:** exibição de produtos organizados por categorias.
- **Filtros por categoria:** possibilidade de visualizar todos os produtos ou filtrar cafés, bebidas e doces.
- **Detalhes dos produtos:** apresentação de descrição, preço e ingredientes.
- **Informações alimentares:** identificação de opções sem lactose e informações sobre alérgenos.
- **Seção de visita:** espaço destinado às informações de localização, funcionamento e contato.
- **Layout responsivo:** adaptação da interface para diferentes tamanhos de tela.
- **Navegação por seções:** acesso às principais áreas do site.

## 🎨 Identidade visual

A proposta visual segue uma estética artesanal e contemporânea, buscando transmitir acolhimento, simplicidade e proximidade.

A paleta de cores foi escolhida para representar o universo de uma cafeteria:

| Cor | Código | Aplicação |
|---|---|---|
| Terracota | `#B86F52` | Destaques e elementos de identidade |
| Verde-sálvia | `#87927A` | Elementos complementares |
| Creme | `#F4EFE6` | Fundos e áreas de conteúdo |
| Marrom café | `#3C302B` | Textos e contrastes |
| Branco | `#FFFFFF` | Superfícies e detalhes |

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| Angular 22 | Framework utilizado para estruturar a aplicação frontend |
| TypeScript | Tipagem e organização da lógica da aplicação |
| HTML5 | Estruturação do conteúdo |
| SCSS | Estilização, identidade visual e responsividade |
| Git | Controle de versão do projeto |
| GitHub | Hospedagem do repositório e gerenciamento do código |
| GitHub Actions | Automação do processo de build e publicação |
| GitHub Pages | Hospedagem da aplicação |

### Organização do projeto

Alguns dos principais arquivos e diretórios:

```text
livre-cafe-site/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── app.html
│   │   ├── app.scss
│   │   ├── app.ts
│   │   └── product.ts
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

O arquivo `product.ts` define a estrutura dos produtos do cardápio, enquanto `app.ts` concentra os dados e a lógica utilizada na apresentação e filtragem dos produtos.

Os arquivos HTML e SCSS são responsáveis pela estrutura e pela apresentação visual da interface.

## 🚀 Como executar localmente

Para executar o projeto em ambiente de desenvolvimento, é necessário ter o Node.js, o npm e o Angular CLI instalados.

**1. Clone o repositório:**

```bash
git clone https://github.com/karen0101sousa/livre-cafe-site.git
```

**2. Acesse a pasta do projeto:**

```bash
cd livre-cafe-site
```

**3. Instale as dependências:**

```bash
npm ci
```

**4. Inicie o servidor de desenvolvimento:**

```bash
ng serve
```

**5. Acesse a aplicação:**

```text
http://localhost:4200/
```

## 🌐 Build e publicação

O projeto utiliza o GitHub Pages para disponibilizar a aplicação publicamente.

O processo de publicação foi automatizado com GitHub Actions. Ao enviar alterações para a branch `main`, o workflow executa as etapas de instalação das dependências, geração do build de produção e publicação dos arquivos.

Para gerar o build localmente:

```bash
npm run build -- --base-href=/livre-cafe-site/
```

O workflow responsável por esse processo está em:

```text
.github/workflows/deploy.yml
```

## 🔮 Possibilidades de evolução

A versão atual foi desenvolvida com um escopo intencionalmente limitado ao frontend institucional. Entretanto, a proposta do Livre Café permite diversas evoluções em versões futuras.

### Versão 2 — Experiência e conteúdo

- Aprimorar a navegação e a experiência do usuário.
- Criar páginas individuais para os produtos.
- Implementar uma área administrativa para gerenciamento do cardápio.
- Melhorar recursos de acessibilidade e otimização para mecanismos de busca (SEO).

### Versão 3 — Backend e persistência de dados

- Desenvolver uma API REST para gerenciamento dos produtos.
- Implementar banco de dados para armazenar cardápio, categorias e informações da cafeteria.
- Integrar o frontend Angular à API.
- Criar operações de cadastro, consulta, atualização e exclusão de produtos.
- Implementar autenticação e autorização para uma área administrativa.

### Versão 4 — Funcionalidades de negócio

- Criar catálogo com disponibilidade atualizada dos produtos.
- Implementar sistema de pedidos.
- Desenvolver funcionalidades de acompanhamento de pedidos.
- Integrar meios de pagamento, caso o escopo do negócio justifique.
- Criar relatórios gerenciais para apoiar a tomada de decisões.

Essas possibilidades representam caminhos de evolução, não funcionalidades disponíveis na versão atual.

## 📚 Contexto acadêmico e aprendizados

O desenvolvimento do Livre Café representa a integração de duas áreas de estudo: gestão e tecnologia.

A proposta começou como uma ideia de negócio no MBA em Gestão de Projetos e Metodologias Ágeis e foi posteriormente transformada em um projeto de desenvolvimento de software na pós-graduação em Desenvolvimento Full Stack.

Durante a construção, foram trabalhados conceitos de:

- Estruturação de aplicações com Angular.
- Organização e tipagem de dados com TypeScript.
- Desenvolvimento de interfaces com HTML e SCSS.
- Responsividade e experiência do usuário.
- Versionamento com Git e GitHub.
- Automação de build e deploy com GitHub Actions.
- Publicação de aplicações web com GitHub Pages.

O projeto também proporcionou a experiência de acompanhar o ciclo de desenvolvimento de uma solução, desde a concepção da ideia até a disponibilização de uma versão funcional na web.

## ⚠️ Observações

O Livre Café é uma proposta acadêmica e demonstrativa. As informações de produtos, preços, localização e funcionamento representam o conteúdo do protótipo e devem ser atualizadas antes de qualquer utilização comercial.

As indicações de ausência de lactose e informações sobre alérgenos devem ser verificadas com base nas receitas, ingredientes e procedimentos reais de preparo. A indicação de um produto como sem lactose não significa, por si só, que ele seja livre de proteínas do leite ou de contaminação cruzada.

## 👩‍💻 Autoria

Projeto desenvolvido individualmente como parte da pós-graduação em **Desenvolvimento Full Stack**, aproveitando uma proposta concebida anteriormente durante o MBA em **Gestão de Projetos e Metodologias Ágeis**.

**Desenvolvedora:** [Karen Sousa](https://github.com/karen0101sousa)

---

*Livre Café — uma ideia que começou na gestão de projetos e ganhou forma por meio do desenvolvimento de software.* ☕