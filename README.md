# Desafio Full Stack Developer
Aplicação web para gerenciar uma Lista de Tarefas.

## Sobre o projeto
A Lista de Tarefas é uma aplicação web que visa concluir os requisitos do desafio. Ele é um aplicativo simples, mas que pode ser escalado.
A aplicação tem por objetivo cadastrar alguma tarefa, como por exemplo: "Estudar Angular", e também o seu status (Inicializado ou Concluido). Além disso, terá uma listagem de todas as tarefas cadastradas podendo editar, excluir e pesquisar por status.

![Lista de Tarefas - Google Chrome 2024-03-18 09-46-27 (2)](https://github.com/jefersonjunio/lista-de-tarefas-keevo/assets/103046781/781d70b3-36f6-486b-a5a9-86dd7875bc8d)


## Principais linguagens, tecnologias e ferramentas utilizadas

### Frontend
- HTML
- CSS
- Javascript
- Angular 16
- Biblioteca Angular Material

### Backend
- C#
- .NET 6.0
- Postgres
- EntityFramework
- Swagger

### Executando o projeto

#### Pré-requisitos
- Ter o [Visual Studio Community](https://visualstudio.microsoft.com/pt-br/vs/community/), o [SDK 6.0](https://dotnet.microsoft.com/pt-br/download/dotnet/6.0) e o [Postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) instalados na sua máquina.
- Ter o [NodeJS](https://nodejs.org/en/download) e o Angular 16 instalados na sua máquina.
- Clonar este repositório

#### Passo a passo - backend
Com os pré-requisitos atendidos, siga os seguintes passos para executar o projeto:

1. Na pasta backend, execute o arquivo **lista-de-tarefas-api.sln** para ter acesso ao projeto no Visual Studio Community
```
backend/lista-de-tarefas-api
```

2. No arquivo appsettings.json modifique o parâmetro Password e Port para sua respectiva configuração do banco de dados. 
```
"DefaultConnection": "User ID=postgres;Password=suaSenhaDoBanco;Host=localhost;Port=SuaPortaDoBanco;Database=to-do-list;"
```

3. No Console do Gerenciados de Pacotes é necessário executar o comando **update-database** para fazer a conexão com o banco de dados 
```
update-database
```

4. Após essas configurações, execute o projeto para que a API fique online.

#### Passo a passo - frontend

1. No terminal navegue até a pasta frontend/lista-tarefa
```
frontend/lista-tarefa
```

2. No terminal, execute o seguinte comando: 
```
npm i
```

3. É necessário modificar a porta que está configurada no backend para ter acesso a API no arquivo **enviroment.development.ts**
```
frontend/lista-tarefa/src/app/environments/environment.development.ts
```
```
export const environment = {
  ApiUrl: "https://localhost:SUA PORTA/api"
}
```

4. Após essas configurações, para que o aplicativo web esteja funcionando, execute o seguinte comando:
```
ng server
```
