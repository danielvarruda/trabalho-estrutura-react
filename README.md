<p class="has-line-data" data-line-start="0" data-line-end="1">Estrutura React Utilizada no Trabalho</p>
<p class="has-line-data" data-line-start="2" data-line-end="3">Criei este repositório para treinar uma nova forma de organização front-end.</p>
<p class="has-line-data" data-line-start="4" data-line-end="5">Ademais, utilizei uma api bem simples escrita em laravel.</p>
<p class="has-line-data" data-line-start="6" data-line-end="7">Para rodar a aplicação segue os seguintes passos:</p>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="19">usersManager (Backend):<br>
cd usersManager<br>
composer install<br>
cp .env.example .env<br>
php artisan key:generate<br>
Agora crie o arquivo “database.sqlite” dentro da pasta database<br>
Copie o caminho até o arquivo “database.sqlite” para a variável de ambiente “DB_DATABASE” dentro do dotenv<br>
[ Exemplo: C:/workspace/trabalho-estrutura-react/usersManager/database/database.sqlite ]<br>
php artisan migrate<br>
php artisan serve</li>
</ul>
<p class="has-line-data" data-line-start="19" data-line-end="20">Em um novo terminal:</p>
<ul>
<li class="has-line-data" data-line-start="21" data-line-end="28">modeloTrabalho (Frontend):<br>
cd modeloTrabalho<br>
yarn install<br>
crie um arquivo .env e adicione uma variável chamada “REACT_APP_URL_API”. Nela coloque o link da api recém iniciada.<br>
[ Observação: é necessário apontar para a pasta api ]<br>
[ Exemplo: REACT_APP_URL_API=https://localhost:8000/api ]<br>
yarn start</li>
</ul>