jQuery(document).ready(function(){
    var money = 50
    var taber = 1
    jQuery(".image-button").on('click',function(){
        var lol1 = '<div class="nor2">Баланс: '
        var lol2 = '</div>'
        money = money+taber
        var lol3 = lol1+money+lol2
        jQuery('.nor2').html(lol3);
    });
    jQuery(".nor3").on('click',function(){
        var lol1 = '<div class="nor2">Баланс: '
        var lol2 = '</div>'
        if (money>=100){
            var lopy = Math.floor(Math.random() * (200 - 0) + 0);
            var lopy2 = 'Кейс открыт +'
            money = money-100+lopy
            alert(lopy2+lopy);
        }else{
            alert('Не хватает денег!');
        }
        var lol3 = lol1+money+lol2
        jQuery('.nor2').html(lol3);
    });
    jQuery(".lo1").on('click',function(){
        if (money>=10){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money-10
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            taber+=1
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+taber+kol2
            jQuery('.not0').html(pon4);
        }else{
            alert('Не хватает денег!');
        }
    });
    jQuery(".lo2").on('click',function(){
        if (money>=20){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money-20
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            taber+=2
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+taber+kol2
            jQuery('.not0').html(pon4);
        }else{
            alert('Не хватает денег!');
        }
    });
    jQuery(".lo3").on('click',function(){
        if (money>=50){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money-50
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            taber+=5
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+taber+kol2
            jQuery('.not0').html(pon4);
        }else{
            alert('Не хватает денег!');
        }
    });
    jQuery('.reg0').on('click',function(){
        var promocod = document.getElementById('bu1').value
        if (promocod == "hamster"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+5000
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "oleg"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+1000
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "hui"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money-5000
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "fuck"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money-1000
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "kiss me"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+999999
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "noob"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+3500
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "akakiy"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+25000
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "pop"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+1
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "hacker"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+5
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
        if (promocod == "zagor"){
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = money+2000
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            alert('Успешно');
        }
    })
    jQuery('.re1').on('click',function(){
        var saves = document.getElementById('bu2').value.split(' ')
        if (saves.length == 2) {
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '</div>'
            money = Number(saves[0])
            var lol3 = lol1+money+lol2
            jQuery('.nor2').html(lol3);
            taber = Number(saves[1])
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+Number(saves[1])+kol2
            jQuery('.not0').html(pon4);
            alert('Успешно');
        }
    })
});
