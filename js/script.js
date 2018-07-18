
var menu = [
    ['HOME'],
    ['ABOUT',[
        ['US',
            ['VISUAL'],
            ['TECH'],
            ['P.R.']
        ],
        ['GOALS',
            ['TV'],
            ['RADIO'],
            ['WEB']
        ],
        ['HISTORY',
            ['PAST'],
            ['PRESENT'],
            ['FEAUTURE']
        ]
    ]
    ],
    ['CONTACTS']
    ],
    sum = '',
    sum2 = '',
    sum3 = '',
    sum4 = '',
    sum5 = '';
menu = menu.reverse();
menu[1][1] = menu[1][1].reverse();
menu[1][1][0] = menu[1][1][0].reverse();
menu[1][1][1] = menu[1][1][1].reverse();
menu[1][1][2] = menu[1][1][2].reverse();

function rec(x, y){
    if(y != x){
        sum += '<li class="m1"><a href="#">' + menu[y] + '</a></li>';
        return y + rec(x, y - 1);
    } else {return x;}
}
function rec2(x, y){
    if(y != x){
        sum2 += '<li><a href="#">' + menu[1][1][y] + '</a></li>';
        return y + rec2(x, y - 1);
    } else {return x;}
}
function rec3(x, y){
    if(y != x){
        sum3 += '<li><a href="#">' + menu[1][1][0][y] + '</a></li>';
        return y + rec3(x, y - 1);
    } else {return x;}
}
function rec4(x, y){
    if(y != x){
        sum4 += '<li><a href="#">' + menu[1][1][1][y] + '</a></li>';
        return y + rec4(x, y - 1);
    } else {return x;}
}
function rec5(x, y){
    if(y != x){
        sum5 += '<li><a href="#">' + menu[1][1][2][y] + '</a></li>';
        return y + rec5(x, y - 1);
    } else {return x;}
}
rec5(-1, menu[1][1][2].length-2);
rec4(-1, menu[1][1][1].length-2);
rec3(-1, menu[1][1][0].length-2);
rec2(-1, menu[1][1].length-1);
rec(-1, menu.length-1);

document.body.innerHTML = '<nav><ul>' + sum + '</ul></nav>';
var mLevelOne = document.querySelectorAll('.m1');
var oneX = mLevelOne[1];
oneX.innerHTML = '<a href="#">ABOUT</a><ul><li><a href="#">US</a><ul>' 
    + sum5 + '</ul></li><li><a href="#">GOALS</a><ul>' 
    + sum4 + '</ul></li><li><a href="#">HISTORY</a><ul>' 
    + sum3 + '</ul></li></ul>';