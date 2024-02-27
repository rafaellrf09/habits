# Habit Tracker

Este é um projeto de frontend e backend para salvar hábitos diários do usuário, fornecendo rotas para gerenciar hábitos, dias e resumos.

## Tecnologias Utilizadas

### Backend:

O projeto backend foi desenvolvido utilizando NodeJS.

### Frontend:

O projeto frontend foi feito com ReactJS utilizando VueJS e Tailwind CSS.

## Rotas

### 1. `/habits`
   - **Método:** POST
   - **Descrição:** Adiciona um novo hábito para o usuário.
   - **Exemplo de Uso:** `POST /habits`
   
### 2. `/day`

   - **Método:** GET
   - **Descrição:** Retorna informações sobre o dia atual do usuário, incluindo os hábitos concluídos.
   - **Exemplo de Uso:** `GET /day`

### 3. `/habits/:id/toggle`

   - **Método:** PATCH
   - **Descrição:** Alterna o estado de conclusão de um hábito específico.
   - **Exemplo de Uso:** `PATCH /habits/:id/toggle`

### 4. `/summary`

   - **Método:** GET
   - **Descrição:** Retorna um resumo dos hábitos concluídos nos últimos dias.
   - **Exemplo de Uso:** `GET /summary`

## Como Usar

1. Clone este repositório.
2. Navegue até a pasta do frontend e instale as dependências com `npm install`.
3. Execute o servidor frontend com `npm start`.
4. Navegue até a pasta do backend e instale as dependências com `npm install`.
5. Execute o servidor backend com `npm start`.
6. Utilize as rotas conforme descrito acima para gerenciar hábitos, dias e visualizar resumos.