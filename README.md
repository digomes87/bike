
# Bikcraft - Next.js

Projeto de um site de bicicletas customizadas migrado para Next.js com TypeScript.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **React 18** - Biblioteca para interfaces
- **CSS3** - Estilização
- **Next/Image** - Otimização de imagens
- **Next/Head** - SEO e meta tags

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho
│   ├── Footer.tsx      # Rodapé
│   ├── Layout.tsx      # Layout base
│   ├── SEO.tsx         # Componente de SEO
│   └── OptimizedImage.tsx # Componente de imagem otimizada
├── hooks/              # Hooks customizados
│   ├── useSimpleSlide.ts # Hook para slides
│   └── useSimpleAnime.ts # Hook para animações
├── pages/              # Páginas da aplicação
│   ├── _app.tsx        # App principal
│   ├── _document.tsx   # Document customizado
│   ├── index.tsx       # Página inicial
│   ├── sobre.tsx       # Página sobre
│   ├── produtos.tsx    # Página de produtos
│   ├── contato.tsx     # Página de contato
│   └── portfolio.tsx   # Página de portfólio
└── styles/             # Arquivos de estilo
    ├── globals.css     # Estilos globais
    └── *.css          # Estilos específicos
```

## 🛠️ Como Executar

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Produção

```bash
# Build para produção
npm run build

# Executar versão de produção
npm start
```

## 🌟 Funcionalidades

- ✅ **Design Responsivo** - Adaptável a todos os dispositivos
- ✅ **SEO Otimizado** - Meta tags e estrutura semântica
- ✅ **Performance** - Otimização de imagens e código
- ✅ **Animações** - Transições suaves e efeitos visuais
- ✅ **TypeScript** - Tipagem estática para maior segurança
- ✅ **Componentes Reutilizáveis** - Arquitetura modular
- ✅ **Hooks Customizados** - Lógica reutilizável
- ✅ **Formulário de Contato** - Com validação e feedback
- ✅ **Slider de Citações** - Rotação automática de conteúdo

## 🌐 Visualizar Projeto

🔗 **[Ver projeto online](https://bike-ten-sooty.vercel.app)**

## 🚀 Deploy

O projeto está configurado para deploy na Vercel:

```bash
# Deploy automático via Git
git push origin main
```

**URL de produção:** https://bike-ten-sooty.vercel.app

## 📈 Melhorias Implementadas

- **Migração para Next.js** - Framework moderno e otimizado
- **TypeScript** - Maior segurança e produtividade
- **Componentes React** - Reutilização e manutenibilidade
- **Otimização de Imagens** - Carregamento lazy e formatos modernos
- **SEO Avançado** - Meta tags dinâmicas e estrutura semântica
- **Performance** - Code splitting e otimizações automáticas
- **Hooks Customizados** - Lógica de negócio organizada

## 👨‍💻 Autor

Diego Gomes - [GitHub](https://github.com/digomes87)

## 📄 Licença

Este projeto está sob a licença MIT.
