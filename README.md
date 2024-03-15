<img src='https://github.com/MonicaHillman/3654-rotas-react-native/assets/51282495/c41d034e-e8f9-43f8-b24e-d454d56a5cc5' alt='capa do curso' />

## Adopet
Uma rede social para adotantes encontrarem cachorros ou gatos para adoção.

<img src='https://github.com/MonicaHillman/3654-rotas-react-native/assets/51282495/4c479e79-de2b-4a7b-958e-c57bce1c1282' alt='screenshot da aplicação' width='150px'/>

## 🔨 Funcionalidades do Projeto
Nesta parte do projeto desenvolvemos o fluxo de navegação da aplicação.

## ✔️ Técnicas e Tecnologias Utilizadas
Durante esse curso utilizaremos:
* React Native
* Expo
* React Navigation

## 🎨 Link do Figma
Para visualizar o Figma do projeto, clique [aqui](https://www.figma.com/file/47vyLN5bIR6sO3wVX137oK/Adopet-%7C-Rotas-com-React-Native?node-id=518%3A11&mode=dev)

## 🛠️ Como Abrir e Rodar o Projeto
Para abrir e rodar o projeto, execute ``npm install`` para instalar as dependências e ``npx expo start`` para iniciar o projeto.

Depois, seleciona a opção "a" no terminal para abrir o emulador.

## 📚 Mais Informações sobre o Curso
O Adopet é uma rede social fictícia utilizada nesse curso da Alura. A ideia principal é implementar a navegação de uma aplicação com React Navigation e desbravar os conceitos de navegação do tipo Stack, Tab e Drawer.

## Durante o Curso
Foram instaladas as seguintes bibliotecas:
````
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
````

Passos executados:

1 - Criação da pasta rotas em src;

2 - Criação do arquivo navigation.js em rotas;

3 - Substituição da chamada do componente Home em App.js pelo Navigation do arquivo navigation.js

4 - Execução do comando para importar o stack navigation:
````
npm install @react-navigation/stack
````

5 - Criação da const Stack em navigation.js;

6 - Remoção dos títulos das screens no arquivo navigation.js

7 - Implementação do funcionamento do Botão "Login" na página Home:
- Adicionar o parâmetro { navigation } a função Home();
- Acrescentar ao "TouchableOpacity" de Login -> onPress={() => navigation.navigate('Login')};

8 - Corrigir a importação do TouchableOpacity na página de Login

