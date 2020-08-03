export default [
    {
        name: 'start',
        image: '',
        module: 'main',
        description: {
            en: 'Start you friendship with Ahri',
            ru: 'Начать знакомство с Ари'
        },
        show: false
    },
    {
        name: 'lang',
        image: 'lang',
        module: 'main',
        description: {
            en: 'I can speak several languages (ru, en) <br>' +
                '- `a.lang en` `a.lang ru`',
            ru: '- Я могу говорить на нескольких языках (ru, en)<br>' +
                '- `a.lang en` `a.lang ru`'
        },
        show: true
    },
    {
        name: 'prefix',
        image: 'prefix',
        module: 'main',
        description: {
            en: '- The standard prefix is used on servers `.a` But you can change it using this command<br>' +
                '- `a.prefix yourPrefix`',
            ru: '- На серверах используется стандартный префикс `.a` Но его можно сменить использовав эту команду<br>' +
                '- `a.prefix yourPrefix`'
        },
        show: true
    },
    {
        name: 'h',
        image: 'h',
        module: 'main',
        description: {
            en: 'Help `a.h`',
            ru: 'Помощь `a.h`'
        },
        show: true
    },
    {
        name: 'welcome',
        image: '',
        module: 'main',
        description: {
            en: 'I can welcome new members to your server. To do this, you can use the `a.welcome` command. This command can be used with the parameter or without one. If you use the command without parameters, I will show you the installed greeting on your server. The command also has a parameter the text of your greeting in which you can use the elements `{user}` and `{server}` which will be replaced with the name of your server and the name of the person who Came to the server. For example<br>' +
                '<br>' +
                '`a.welcome Welcome {user} to {server}` ' +
                '<br>' +
                'However, in order for me to know exactly where to welcome your new member, I need to specify the room to do it. The `a.welcome-channel` command will help you do this',

            ru: 'Я могу приветствовать новичков на вашем сервере. Для этого вы можете использовать команду `a.welcome`. Эту команду можно использовать с параметром и без. Если использовать команду  без параметров, я покажу вам установленное приветствие на вашем сервере. Так же команда имеет параметр - текст вашего приветствия в котором можно использовать элементы `{user}` и `{server}` которые заменятся на имя вашего сервера и имя человека, Пришедшего на сервер. Например<br>' +
                '<br>' +
                '`a.welcome Добро пожаловать {user} на сервер {server}`<br>' +
                '<br>' +
                'Однако, чтобы мне знать где именно приветствовать вашего новичка, нужно указать комнату, где это делать. В этом поможет команда `a.welcome-channel`'
        },
        show: true
    },
    {
        name: 'welcome-channel',
        image: '',
        module: 'main',
        description: {
            en: '- This command specifies the channel where I will send a greeting for a new member, which you specified earlier in the `a.welcome` command<br>' +
                '<br>' +
                '- The `welcome-channel` command has one parameter - the room where the greeting will be displayed<br>' +
                '<br>' +
                '- `a.welcome-channel #chat`',

            ru: '- Данная команда указывает канал, где я буду присылать приветствие для нового участника, которое вы указали ранее в команде `a.welcome`<br>' +
                '<br>' +
                '- Команда `welcome-channel`  принимает один параметр - комнату, в которой будет отображаться приветствие<br>' +
                '<br>' +
                '- `a.welcome-channel #chat`'
        },
        show: true
    },
    {
        name: 'hello',
        image: '',
        module: 'fun',
        description: {
            en: '- To say Hello to someone. Use with the parameter (user)<br>' +
                '<br>' +
                '- I mention a user and say Hello.<br/>' +
                '<br>' +
                '- `a.hello @nickname`',

            ru: '- Сказать кому-то привет. Используется с параметром(пользователь)<br>' +
                '<br>' +
                '- Упоминаю пользователя и говорю ему “Привет”.<br>' +
                '<br>' +
                '- `a.hello @nickname`'
        },
        show: true
    },
    {
        name: 'pat',
        image: '',
        module: 'fun',
        description: {
            en: '- Pat someone <br>' +
                '<br>' +
                '- I mention the user and send a gif image with the corresponding action.<br/>' +
                '<br>' +
                '`a.pat @nickname`',

            ru: 'Поглаить<br>' +
                '<br>' +
                'Упоминаю пользователя и присылаю gif изображение с соответствующим действием.<br>' +
                '<br>' +
                '`a.pat @nickname`'
        },
        show: true
    },
    {
        name: 'hug',
        image: '',
        module: 'fun',
        description: {
            en: '- Hug someone <br>' +
                '<br>' +
                '- I mention the user and send a gif image with the corresponding action.<br/>' +
                '<br>' +
                '`a.hug @nickname`',

            ru: 'Обнять<br>' +
                '<br>' +
                'Упоминаю пользователя и присылаю gif изображение с соответствующим действием.<br>' +
                '<br>' +
                '`a.hug @nickname`'
        },
        show: true
    },
    {
        name: 'wink',
        image: '',
        module: 'fun',
        description: {
            en: '-Wink at someone <br>' +
                '<br>' +
                '- I mention the user and send a gif image with the corresponding action.<br/>' +
                '<br>' +
                '`a.wink @nickname`',

            ru: 'Подмигнуть<br>' +
                '<br>' +
                'Упоминаю пользователя и присылаю gif изображение с соответствующим действием.<br>' +
                '<br>' +
                '`a.wink @nickname`'
        },
        show: true
    },
    {
        name: 'kiss',
        image: '',
        module: 'fun',
        description: {
            en: 'Kiss someone <br>' +
                '<br>' +
                '- I mention the user and send a gif image with the corresponding action.<br/>' +
                '<br>' +
                '`a.kiss @nickname`',

            ru: 'Поцеловать<br>' +
                '<br>' +
                'Упоминаю пользователя и присылаю gif изображение с соответствующим действием.<br>' +
                '<br>' +
                '`a.kiss @nickname`'
        },
        show: true
    },
    {
        name: 'bite',
        image: '',
        module: 'fun',
        description: {
            en: '- Bite someone <br>' +
                '<br>' +
                '- I mention the user and send a gif image with the corresponding action.<br/>' +
                '<br>' +
                '`a.bite @nickname`',

            ru: 'Укусить<br>' +
                '<br>' +
                'Упоминаю пользователя и присылаю gif изображение с соответствующим действием.<br>' +
                '<br>' +
                '`a.bite @nickname`'
        },
        show: true
    },
    {
        name: 'mute-role',
        image: '',
        module: 'admin',
        description: {
            en: '- Command to add a mute role for text chat<br>' +
                '<br>' +
                'Using: `a.mute-role @role`',

            ru: '- Команда для добавления роли мута в текстовом чате<br>' +
                '<br>' +
                '- Использование: `a.mute-role @role`'
        },
        show: true
    },
    {
        name: 'mute',
        image: '',
        module: 'admin',
        description: {
            en: '- `a.tm` Command for mute in text chat. All this command does is give a role intended for the text mute, if you specified it earlier with the command `a. mute-role @role`<br>' +
                '<br>' +
                '-Using: `a.mute @nickname`' +
                '<br>' +
                '- If the role is not set before. I will grant special permissions to the user in the chat where the command is used',

            ru: '- `a.tm` Команда для мута в текстовом чате. Все что делает эта команда - выдаёт роль, предназначенную для текстового мута, если вы указали её ранее в команде `a.mute-role @role`<br>' +
                '<br>' +
                '- Использовать: `a.mute @nickname`<br>' +
                '<br>' +
                '- Если же роль не установлена. Я выдам специальные права для пользователя в чате, где используется команда'
        },
        show: true
    },
    {
        name: 'unmute',
        image: '',
        module: 'admin',
        description: {
            en: '- `a.unmute @nickname` - opposite command to `a.mute`<br>' +
                '<br>' +
                '- Removes the mute role previously set in `a.mute-role @role` command<br>' +
                '<br>' +
                '- If the role is not set before. I will grant special permissions to the user in the chat where the command is used',

            ru: '- `a.unmute @nickname` - противоположная команда к `a.mute`<br>' +
                '<br>' +
                '- Убирает роль мута, ранее установленную при помощи команды `a.mute-role @role`<br>' +
                '<br>' +
                '- В случае если роль не установлена, я уберу изменю права пользователя а в текущем чате где использовалась команда.'
        },
        show: true
    },
    {
        name: 'ban',
        image: '',
        module: 'admin',
        description: {
            en: 'Ban user <br>' +
                '<br>' +
                '`a.ban @nickname`',

            ru: 'Одна из стандартных админ команд для каждого сервера. Банит пользователя на вашем сервере. Пользоваться довольно просто. `a.ban @nickname`'
        },
        show: true
    },
    {
        name: 'unban',
        image: '',
        module: 'admin',
        description: {
            en: 'Unban user <br>' +
                '<br>' +
                '`a.unban @nickname`',

            ru: 'Одна из стандартных админ команд для каждого сервера. Снимает бан с пользователя на вашем сервере. Пользоваться довольно просто. `a.unban @nickname`'
        },
        show: true
    },
    {
        name: 'kick',
        image: '',
        module: 'admin',
        description: {
            en: 'Kick user <br>' +
                '<br>' +
                '`a.kick @nickname`',

            ru: 'Одна из стандартных админ команд для каждого сервера. Исключает пользователя из вашего сервера. Пользоваться довольно просто. `a.kick @nickname`'
        },
        show: true
    },
    {
        name: 'create-category',
        image: '',
        module: 'admin',
        description: {
            en: 'Creates a new channel category on your server <br>' +
                '<br>' +
                '`a.create-category category name`',

            ru: 'Создаёт новую категорию на вашем сервере' +
                '<br>' +
                '`a.create-category category name`',
        },
        show: true
    },
    {
        name: 'create-channel',
        image: '',
        module: 'admin',
        description: {
            en: 'Creates a new text or voice channel on your server <br>' +
                '<br>' +
                '`a.create-channel channel name`',

            ru: 'Создает новый текстовый или голосовой чат' +
                '<br>' +
                '`a.create-channel channel name`',
        },
        show: true
    },
    {
        name: 'delete-channel',
        image: '',
        module: 'admin',
        description: {
            en: 'Deletes the specified text or voice channel from your server <br>' +
                '<br>' +
                '`a.delete-channel #channel-mention`',

            ru: 'Удаляет выбраный голосовой или тестовый чат' +
                '<br>' +
                '`a.delete-channel #channel-mention`',
        },
        show: true
    },
    {
        name: 'create-role',
        image: '',
        module: 'admin',
        description: {
            en: 'Creates a new role on your server <br>' +
                '<br>' +
                '`a.create-role role name`'+
                '<br>' +
                '`a.create-role role name #ffffff` (with HEX color)',

            ru: 'Создаёт новую роль на вашем сервере' +
                '<br>' +
                '`a.create-role role name`'+
                '<br>' +
                '`a.create-role role name #ffffff` (with HEX color)',
        },
        show: true
    },
    {
        name: 'delete-role',
        image: '',
        module: 'admin',
        description: {
            en: 'Deletes the specified role from your server <br>' +
                '<br>' +
                '`a.delete-role @role-mention`',

            ru: 'Удаляет выбраную роль на вашем сервере' +
                '<br>' +
                '`a.delete-role @role-mention`',
        },
        show: true
    },
    {
        name: 'report',
        image: '',
        module: 'main',
        description: {
            en: 'Report on member with specific reason (required)' +
                '<br>' +
                '`a.report @nickname reason text` ',

            ru: 'Уведомить администрацию сервера о нарушении (используется с пояснением и требует специальный канал)' +
                '<br>' +
                '`a.report @nickname причина репорта`<br>',
        },
        show: true
    },
    {
        name: 'report-channel',
        image: '',
        module: 'main',
        description: {
            en: '- This command specifies the channel where I will send all reports<br>' +
                '<br>' +
                '- `a.report-channel #chat`',

            ru: '- Данная команда указывает канал, куда будут отправляться все репорты<br>' +
                '<br>' +
                '- `a.report-channel #chat`'
        },
        show: true
    },
    {
        name: 'clr',
        image: '',
        module: 'admin',
        description: {
            en: 'Clear text messages by limit',
            ru: 'Удалить определенное кол-во сообщений (до 100)'
        },
        show: false
    },
    {
        name: 'add-role',
        image: '',
        module: 'admin',
        description: {
            en: 'Add some role to member `a.add-role @role @nickname`',
            ru: 'Выдам пользователю выбраную роль `a.add-role @role @nickname`'
        },
        show: true
    },
    {
        name: 'remove-role',
        image: '',
        module: 'admin',
        description: {
            en: 'Remove some role from member `a.remove-role @role @nickname`',
            ru: 'Убирает у пользователю выбраную роль `a.remove-role @role @nickname`'
        },
        show: true
    },
    {
        name: 'remove-all-roles',
        image: '',
        module: 'admin',
        description: {
            en: 'Remove all roles from member `a.remove-all-roles @nickname`',
            ru: 'Убирает у пользователю все роли `a.remove-all-roles @nickname`'
        },
        show: true
    },
    {
        name: 'enable-levels',
        image: '',
        module: 'admin',
        description: {
            en: 'To enable this feature just use command `a.enable-levels on` and `a.enable-levels off` to disable',
            ru: 'Чтобы включить сиситему уровней. Достаточно ввести команду `a.enable-levels on` или `a.enable-levels off` для отключения.'
        },
        show: true
    },
    {
        name: 'rank',
        image: '',
        module: 'admin',
        description: {
            en: 'To ask Ahri for your exp and level use this command. `a.rank` or `a.rank @member`',
            ru: 'Чтобы Ари показала ваш уровень и опыт заработаные в чате просто введите `a.rank` или `a.rank @member`'
        },
        show: true
    },
    {
        name: 'add-level-role',
        image: '',
        module: 'admin',
        description: {
            en: 'If you wanna get level role just set roles with command `a.add-level-role @role 1`. `level must be in range 1 - 150!`',
            ru: 'Если вы хотите получать роли за определенные уровни. Просто укажите это при помощи команды `a.add-level-role @role 1`. `Указываемый уровень должен быть в диапазоне 1 - 150!`'
        },
        show: true
    },
    {
        name: 'show-level-roles',
        image: '',
        module: 'roles',
        description: {
            en: 'To show all level roles list use command `a.show-level-roles`',
            ru: 'Чтобы посмотреть спиток всех уровневых ролей, спользуйте команду a.show-level-roles'
        },
        show: true
    },
    {
        name: 'create-role-group',
        image: '',
        module: 'roles',
        description: {
            en: 'Create role group',
            ru: 'Создать группу ролей'
        },
        show: false
    },
    {
        name: 'group-head',
        image: '',
        module: 'roles',
        description: {
            en: 'Set admin role for group',
            ru: 'Установить главную роль админа группы'
        },
        show: false
    },
    {
        name: 'group-role',
        image: '',
        module: 'roles',
        description: {
            en: 'Show group role',
            ru: 'Показать групповую роль'
        },
        show: false
    },
    {
        name: 'invite-to',
        image: '',
        module: 'roles',
        description: {
            en: 'Add member to group',
            ru: 'Добавить человека в группу'
        },
        show: false
    },
    {
        name: 'kick-from-group',
        image: '',
        module: 'roles',
        description: {
            en: 'Kick member to group',
            ru: 'Выгнать пользователя из группы'
        },
        show: false
    },
    {
        name: 'play',
        image: '',
        module: 'music',
        description: {
            en: 'Play music from youtube url (command is not available)',
            ru: 'Включить музыку (команда недоступна)'
        },
        show: false
    },
]