Estrutura React Utilizada no Trabalho

Criei este repositório para treinar uma nova forma de organização front-end.

Ademais, utilizei uma api bem simples escrita em laravel.

Para rodar a aplicação segue os seguintes passos:

- usersManager (Backend):
-- composer install
-- cp .env.example .env
-- php artisan key:generate
-- Agora crie o arquivo "database.sqlite" dentro da pasta database
-- Copie o caminho até o arquivo "database.sqlite" para a variável de ambiente "DB_DATABASE" dentro do dotenv
--- Exemplo: C:/workspace/trabalho-estrutura-react/usersManager/database/database.sqlite
-- php artisan migrate
-- php artisan serve

- modeloTrabalho (Frontend):
-- yarn install
-- crie um arquivo dotenv e configure o caminho da api na variável "REACT_APP_URL_API"
-- yarn start