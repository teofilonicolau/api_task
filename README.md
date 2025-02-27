# ToDoApp Backend

## Visão Geral
Este é o backend do projeto ToDoApp, desenvolvido usando Spring Boot. Ele fornece uma API RESTful para gerenciar uma lista de tarefas.

## Tecnologias Utilizadas
- Java 17
- Spring Boot 3.4.3
- H2 Database
- Maven
- Lombok

## Configuração do Projeto

### Pré-requisitos
Certifique-se de ter instalado as seguintes ferramentas:
- JDK 17 ou superior
- Maven
- IntelliJ IDEA ou VSCode com suporte para Java e Lombok

### Clonando o Repositório
```bash
git clone https://github.com/teofilonicolau/api_task.git
cd ToDoApp
```
### Configurando o Banco de Dados
 - O projeto utiliza o banco de dados H2 em memória para simplificar a configuração. As configurações estão no arquivo src/main/resources/application.properties

### Compilando e Executando o Projeto
 - Para compilar e executar o projeto, use o Maven:
```bash
mvn clean install
mvn spring-boot:run

```
### A aplicação estará disponível em http://localhost:8080.

 - API Endpoints:
 
### Listar Tarefas:
 - GET /api/tasks
#### Retorna uma lista de todas as tarefas.
- URL: http://localhost:8080/api/tasks
![image](https://github.com/user-attachments/assets/c154220d-1e41-4b55-b4b0-5ba6ea2ea653)


### Criar Tarefa
- POST /api/tasks
- URL: http://localhost:8080/api/tasks
- ![image](https://github.com/user-attachments/assets/00e742db-3cd3-43ec-b55c-c9af8c1fe601)


### Cria uma nova tarefa.

- Body (JSON):
  
```bash
{
  "title": "Nome da Tarefa",
  "completed": false
}

```
### Excluir Tarefa
 - DELETE /api/tasks/{id}
 - DELETE: http://localhost:8080/api/tasks/3 (ou o ID da tarefa que deseja excluir).)

#### Exclui uma tarefa pelo ID
- URL: http://localhost:8080/api/tasks/1: 
![image](https://github.com/user-attachments/assets/c64ca1f8-8ae5-4714-b1c5-4b6f40d324c1)

### Estrutura do Projeto:
  
```bash
src/main/java/com/example/ToDoApp
├── controller
│   └── TaskController.java
├── dto
│   └── TaskDTO.java
├── exception
│   └── ResourceNotFoundException.java
├── model
│   └── Task.java
├── repository
│   └── TaskRepository.java
├── service
│   └── TaskService.java
└── ToDoAppApplication.java


```
### Contribuindo
- Sinta-se à vontade para abrir issues e pull requests. Todos os tipos de contribuição são bem-vindos.












