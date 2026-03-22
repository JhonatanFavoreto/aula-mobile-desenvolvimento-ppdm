# Games Favoritos

App mobile feito com React Native (Expo) para listar jogos favoritos e cadastro de perfil.

## ✅ Funcionalidades

- Lista dinâmica com `FlatList` (jogos com imagem/título/descrição)
- Navegação com `@react-navigation/bottom-tabs` (Home e Cadastro)
- Tela Home com seções:
    - Header (logo + avatar)
    - Hero de apresentação
    - Novo jogador (perfil e botão)
    - Lista de jogos
    - Footer
- Tela Cadastro com formulário (nome, email, senha)

## 📁 Estrutura de arquivos

- `App.js` - Navegação e tela principal (Home + FlatList)
- `cadastro.js` - Tela de cadastro
- `index.js` - Ponto de entrada Expo
- `assets/` - imagens dos jogos
- `package.json` - dependências e scripts

## 🛠️ Instalação

1. Clone o projeto:
    ```bash
    git clone https://github.com/JhonatanFavoreto/aula-mobile-desenvolvimento-ppdm.git
    cd aula-mobile-desenvolvimento-ppdm
    ```
2. Instale dependências:
    ```bash
    npm install
    ```
3. Instalar bibliotecas de navegação:
    ```bash
    npm install @react-navigation/native @react-navigation/bottom-tabs
    npx expo install react-native-screens react-native-safe-area-context
    ```

## ▶️ Executar

```bash
npx expo start
```

- Abra em Expo Go (Android/iOS) com QR code, ou emulador com `npm run android` / `npm run ios`.

## 🔄 Uso

- Navegue entre abas Home e Cadastro.
- Em Home, clique em “CRIE SUA CONTA” para ir a cadastro.

## 🧾 Resumo do projeto

Este app atende à atividade de desenvolvimento com React Native (PPDM): utiliza FlatList,
componentes separados, estilização, e biblioteca de navegação. O visual foi adaptado ao protótipo
com header, hero, seção de cadastro e lista de jogos.

## 📌 Observações

- Verificar que as imagens existem em `assets/re4.png`, `hf2.png`, `ut.png`, `bsi.png`.
- Caso utilize Expo CLI global, execute `npm install -g expo-cli`.
