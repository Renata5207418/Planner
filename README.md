# 🎨 Meu Planner de Tarefas

Meu Planner de Tarefas é uma aplicação web interativa construída com React, que permite aos usuários gerenciar suas atividades diárias de forma visual e personalizada. As tarefas são exibidas como post-its coloridos em um quadro, proporcionando uma experiência semelhante a um planner físico.

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Insira uma descrição, data, hora, cor personalizada e local para cada tarefa.
- **Marcar como Concluída:** Marque tarefas como concluídas para um melhor acompanhamento.
- **Remover Tarefas:** Exclua tarefas que não são mais necessárias.
- **Arrastar e Soltar:** Reorganize a ordem das tarefas arrastando e soltando.
- **Filtros:** Visualize todas as tarefas, apenas as ativas ou apenas as concluídas.
- **Limpar Tarefas Concluídas:** Remova todas as tarefas marcadas como concluídas de uma vez.
- **Personalização:** Escolha a cor do post-it.
- **Persistência de Dados:** As tarefas são salvas no navegador, garantindo que não sejam perdidas após recarregar a página.


## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **React Beautiful DnD:** Biblioteca para implementar funcionalidades de arrastar e soltar.
- **React Icons:** Conjunto de ícones para React.
- **@fontsource/chewy:** Fonte divertida do Google Fonts.
- **CSS Grid:** Layout responsivo para organizar as tarefas no quadro.

## 📁 Estrutura do Projeto

```
meu-planner-de-tarefas/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── assets/
│       └── images/
│           └── panel-background.png
├── .gitignore
├── package.json
├── README.md
└── ...
```

## 💻 Como Executar o Projeto

### **Pré-requisitos**

- **Node.js** e **npm** instalados na sua máquina. Você pode baixá-los [aqui](https://nodejs.org/).

### **Passo a Passo**

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/meu-planner-de-tarefas.git
   ```

2. **Acesse o Diretório do Projeto:**

   ```bash
   cd meu-planner-de-tarefas
   ```

3. **Instale as Dependências:**

   ```bash
   npm install
   ```

4. **Inicie o Servidor de Desenvolvimento:**

   ```bash
   npm start
   ```

5. **Acesse a Aplicação no Navegador:**

   Abra o navegador e vá para `http://localhost:3000` para ver a aplicação em funcionamento.

## 🖼️ Adicionar Imagem de Fundo

A aplicação utiliza uma imagem de fundo para o quadro de post-its. Se a imagem atual está indisponível, siga os passos abaixo para adicionar uma imagem localmente.

### **Passo a Passo**

1. **Baixe uma Imagem de Fundo:**

   Você pode baixar uma imagem de painel ou qualquer padrão que deseje. Por exemplo, baixe uma imagem de [Unsplash](https://unsplash.com/) ou qualquer outro site de imagens gratuitas.

2. **Adicione a Imagem ao Projeto:**

   Crie uma pasta chamada `images` dentro de `src/assets/` e coloque a imagem lá.

   ```
   meu-planner-de-tarefas/
   ├── src/
   │   ├── assets/
   │   │   └── images/
   │   │       └── panel-background.png
   │   ├── App.js
   │   ├── App.css
   │   └── ...
   ```

3. **Atualize o `App.css` para Usar a Imagem Local:**

   Modifique a classe `.board` para referenciar a imagem local.

   ```css
   /* src/App.css */

   .board {
     background: url('./assets/images/panel-background.png') no-repeat center center;
     background-size: cover;
     padding: 20px;
     border-radius: 15px;
     min-height: 400px;
     box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
   }
   ```

   **Nota:** Certifique-se de que o caminho da imagem está correto. Se a imagem estiver em uma pasta diferente, ajuste o caminho conforme necessário.

4. **Reinicie o Servidor de Desenvolvimento (se necessário):**

   Se a imagem não aparecer imediatamente, tente reiniciar o servidor.

   ```bash
   npm start
   ```

## 📈 Melhorias Futuras

- **Categorias e Colunas:** Organize as tarefas em diferentes categorias ou colunas, como "Para Fazer", "Em Progresso" e "Concluídas".
- **Anexar Arquivos:** Permita que os usuários anexem arquivos ou imagens às tarefas.
- **Notificações:** Implemente lembretes ou notificações para tarefas com datas e horários específicos.
- **Autenticação de Usuário:** Adicione suporte para múltiplos usuários com autenticação, permitindo que cada usuário tenha suas próprias tarefas.
- **Integração com Calendários:** Sincronize tarefas com calendários externos como Google Calendar.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga os passos abaixo:

1. **Fork este Repositório**
2. **Crie uma Branch para sua Feature:**

   ```bash
   git checkout -b minha-nova-feature
   ```

3. **Commit suas Mudanças:**

   ```bash
   git commit -m 'Adiciona minha nova feature'
   ```

4. **Push para a Branch:**

   ```bash
   git push origin minha-nova-feature
   ```

5. **Abra um Pull Request**

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

