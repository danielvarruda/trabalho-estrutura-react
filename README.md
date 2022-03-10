Estrutura React Utilizada no Trabalho

Criei este repositório para treinar uma nova forma de organização front-end.

Ademais, utilizei uma api bem simples escrita em laravel.

Para rodar a aplicação segue os seguintes passos:

- usersManager (Backend):
cd usersManager
composer install
cp .env.example .env
php artisan key:generate
Agora crie o arquivo "database.sqlite" dentro da pasta database
Copie o caminho até o arquivo "database.sqlite" para a variável de ambiente "DB_DATABASE" dentro do dotenv
>>
Exemplo: C:/workspace/trabalho-estrutura-react/usersManager/database/database.sqlite
>>
php artisan migrate
php artisan serve

Em um novo terminal:

- modeloTrabalho (Frontend):
cd modeloTrabalho
yarn install
crie um arquivo .env e adicione uma variável chamada "REACT_APP_URL_API". Nela coloque o link da api recém iniciada.
>>
Observação: é necessário apontar para a pasta api

Exemplo: REACT_APP_URL_API=localhost:8000/api
>>
yarn start