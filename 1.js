const game = {
    name: 'minecraft',
    version:'1.6.4',
    data: '19.09.2013',
    creator: 'Notch',
}

function company()   {
    for (let key in game) {
        if (game.hasOwnProperty(key)) {
            console.log(key, game[key]);
        }
    }
}

company(game);