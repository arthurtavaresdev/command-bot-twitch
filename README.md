# Command Bot Twitch

Bot que fica mandando uma mensagem específica num chat da twitch de X em X minutos.

## Executando o bot

Para executar este projeto, você precisa do [NodeJS](https://nodejs.org/en/download/) instalado e um token de acesso para uma conta existente na Twitch. Pode-se utilizar usa própria conta para testes, mas o ideal é ter uma exclusiva para o bot.

Para obter o token, entre [neste serviço](https://twitchapps.com/tmi/) e autorize-o a ter acesso a sua conta da Twitch. Guarde o token obtido em um local seguro. Com o token em mãos: instale as dependências, defina as variáveis de ambiente (você pode criar um arquivo `.env` na raiz do projeto com as variáveis presentes no arquivo [.env.example](.env.example)) e execute a aplicação:


```
npm install

TWITCH_USERNAME = ArthurdeAbreu   # nome de usuário da sua conta.
TWITCH_TOKEN =                    # token de acesso obtido anteriormente.

node bot.js

    Bot is running at irc-ws.chat.twitch.tv:80
```

Para a maior personalização, na raiz há um arquivo chamado `args.json`, onde pode ser passado o canal e comando que deverá ser executado.

```json
[
    {
        "channel": "danielhe4rt",
        "command": "->pontos",
        "interval": 1
    }
]
```
