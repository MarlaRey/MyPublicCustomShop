# MyPublicCustomShop
Opsætning af shop API i node.js

# SQL-dump
for at få den fulde brugeroplevelse af dette vidunderlige projekt, bør man hente dette sql-dump:
https://we.tl/t-5BcSoZXlBK

## Guide til opsætning:
# 1: Clone githubfilen ned på din computer.

# 2: Opret en .env-fil
Opret en fil ved navn .env i roden af dit projekt, og indtast de nødvendige miljøvariabler:

PORT = 4000
DBHOST = localhost
DBNAME = myownshop
DBUSER = (dit brugernavn)
DBPASSWORD = (dit password)
DBPORT = 3306

# 3: Installer nødvendige afhængigheder:
åben din terminal. tryk Ctrl+c og skriv: npm install - tryk enter

# 4: Installer express:
I din terminal, skriv: npm i express

# 5: Konfigurer package.json:
Åbn package.json-filen og tilføj "type": "module" i linje 5

# 6: Installer Sequelize:
I din terminal, skriv: npm i sequelize

## De næste punkter er muligvis nødvendige:

# 7: Opret database:
I din terminal, skriv: npx sequelize db:create 

# 8: Kør migrations:
I din terminal, skriv: npx sequelize db:migrate

# 9: Start server:
I din terminal, skriv: npm start

# 10: Måske
Der kan være eventuelle yderligere trin, såsom at udfylde databasen med testdata eller tilpasse yderligere konfigurationsindstillinger.
