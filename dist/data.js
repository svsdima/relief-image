const projects = [
    {
        name: 'Правдинское',
        img: [
            'img/projects/pravdinsk/1.jpg',
            'img/projects/pravdinsk/2.jpg',
            'img/projects/pravdinsk/3.jpg',
            'img/projects/pravdinsk/4.jpg',
        ],
        list: [
            'Черновая планировка и уборка мусора',
            'Планировка территории на плоскости',
            'Устройство рокария',
            'Посадка плодовых и ягодных деревьев и кустарников',
            'Подготовка участка под рулонный газон',
            'Отсевная площадка под грядки',
            'Устройство экопарковки',
            'Установка грядок',
            'Установка теплицы',
            'Укладка рулонного газона',
        ],
        price: '1 400 000',
    },
    {
        name: 'Петергоф',
        img: [
            'img/projects/petergof/1.jpg',
            'img/projects/petergof/2.jpg',
            'img/projects/petergof/3.jpg',
            'img/projects/petergof/4.jpg',
        ],
        list: [
            'Обустройство и укрепление дренажной канавы',
            'Посадка растений',
            'Укладка рулонного газона',
        ],
        price: '185 000',
    },
    {
        name: 'Репино',
        img: [
            'img/projects/repino/1.jpg',
            'img/projects/repino/2.jpg',
            'img/projects/repino/3.jpg',
            'img/projects/repino/4.jpg',
        ],
        list: [
            'Ландшафтное проектирование участка',
            'Планировка территории на плоскости',
            'Создание дренажной системы',
            'Устройство дорожного покрытия',
            'Устройство рокария',
            'Посадка цветника и живой изгороди',
        ],
        price: '400 000',
    },
];

const tabs = [
    {
        id: 'season',
        title: 'Сезоные выезды',
        info: [
            'Стоимость выезда рассчитывается индивидуально (взависимости от: площади участка, удалённости, сложности проводимых работ, количества задействованных людей).',
        ],
    },
    {
        id: 'autumn',
        title: 'Осень',
        info: [
            'Уход за цветниками (обрезка сухого, рыхление, прополка).',
            'Уход за газоном (осенняя подкормка)',
            'Стрижка газона',
            'Деление растений (по мере необходимости)',
            'Уборка листьев',
            'Подготовка растений к зиме,',
        ],
    },
    {
        id: 'spring',
        title: 'Весна',
        info: [
            'Обрезка плодовых (производится с ноября по март, до первого сокодвижения)',
            'Санитарная обрезка роз (производтся с апреля по май, удаление повреждённых веток после зимы)',
            'Внесение удобрения на все посадки (производится ранней весной по снегу)',
            'Обработка от вредителей и болезней (устойчивая температура от +5)',
            'Уход за газоном (скарификация, аэрация, мульчирование, удобрение, производится после полного просыхания газона)',

        ],
    },
    {
        id: 'summer',
        title: 'Лето',
        info: [
            'Уход за цветниками (прополка, обрезка сухого, рыхление)',
            'Формовочная обрезка (фигурная стрижка, стрижка изгородей, производитсяпо мере роста)',
            'Стрижка газона',
            'Обработка газона от сорняков (первая обработка производится после первого коса газона)',
            'Внесение удобрений ( по газону производится 1 раз в 2 недели, по цветниками в зависимости от растений)',
            'Обработка от вредителей и болезней (производится с интервалом в 10-14 дней)',
            'Обработка мощения от сорняков (производится 1 раз в месяц)',

        ],
    },
];

const landscape = [
    {
        title: 'Ландшафтное проектирование участка',
        img : 'img/landscape/1.jpg',
    },
    {
        title: 'Подготовка участка',
        img : 'img/landscape/2.jpg',
    },
    {
        title: 'Создание дренажной системы',
        img : 'img/landscape/3.jpg',
    },
    {
        title: 'Устройство дорожного покрытия',
        img : 'img/landscape/4.jpg',
    },
    {
        title: 'Альпийские горки, рокарии, альпинарии',
        img : 'img/landscape/5.jpg',
    },
    {
        title: 'Устройство ручьев, водоемов, каскадов',
        img : 'img/landscape/6.jpg',
    },
    {
        title: 'Строительство, маф',
        img : 'img/landscape/7.jpg',
    },
    {
        title: ' Подпорные стенки',
        img : 'img/landscape/8.jpg',
    },
    {
        title: 'Посадка растений',
        img : 'img/landscape/9.jpg',
    },
    {
        title: 'Устройство газона',
        img : 'img/landscape/10.jpg',
    },
];

export { projects, tabs, landscape };