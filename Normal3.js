jQuery(document).ready(function(){
    var money = 50
    var taber = 1
    jQuery(".image-button").on('click',function(){
        jQuery('.nor2').remove();
        var lol1 = '<div class="nor2">Баланс: '
        var lol2 = '<br>Кейс 0$-50$</div>'
        money = money+taber
        var lol3 = lol1+money+lol2
        jQuery(this).parent().append(lol3)
    });
    jQuery(".nor3").on('click',function(){
        jQuery('.nor2').remove();
        var lol1 = '<div class="nor2">Баланс: '
        var lol2 = '<br>Кейс 0$-50$</div>'
        if (money>=30){
            var lopy = Math.floor(Math.random() * (50 - 0) + 0);
            var lopy2 = 'Кейс открыт +'
            money = money-30+lopy
            alert(lopy2+lopy);
        }else{
            alert('Не хватает денег!');
        }
        var lol3 = lol1+money+lol2
        jQuery('.image-button').parent().append(lol3)
    });
    jQuery(".lo1").on('click',function(){
        if (money>=10){
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = money-10
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            taber+=1
            jQuery('.not0').remove();
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+taber+kol2
            jQuery('.not1').parent().append(pon4)
        }else{
            alert('Не хватает денег!');
        }
    });
    jQuery(".lo2").on('click',function(){
        if (money>=20){
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = money-20
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            taber+=2
            jQuery('.not0').remove();
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+taber+kol2
            jQuery('.not1').parent().append(pon4)
        }else{
            alert('Не хватает денег!');
        }
    });
    jQuery(".lo3").on('click',function(){
        if (money>=50){
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = money-50
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            taber+=5
            jQuery('.not0').remove();
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+taber+kol2
            jQuery('.not1').parent().append(pon4)
        }else{
            alert('Не хватает денег!');
        }
    });
    jQuery('.reg0').on('click',function(){
        var promocod = document.getElementById('bu1').value
        if (promocod == "hamster"){
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = money+5000
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            alert('Успешно');
        }
        if (promocod == "oleg"){
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = money+1000
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            alert('Успешно');
        }
        if (promocod == "hui"){
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = money-5000
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            alert('Успешно');
        }
    })
    jQuery('.re1').on('click',function(){
        var saves = document.getElementById('bu2').value.split(' ')
        if (saves.length == 2) {
            jQuery('.nor2').remove();
            var lol1 = '<div class="nor2">Баланс: '
            var lol2 = '<br>Кейс 0$-50$</div>'
            money = Number(saves[0])
            var lol3 = lol1+money+lol2
            jQuery('.image-button').parent().append(lol3)
            jQuery('.not0').remove();
            taber = Number(saves[1])
            var kol1 = '<div class="not0"> >>> '
            var kol2 = ' <<< </div>'
            var pon4 = kol1+Number(saves[1])+kol2
            jQuery('.not1').parent().append(pon4)
            alert('Успешно');
        }
    })
});
