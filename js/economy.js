var oldprice = $('.old-price').html()
var newprice = $('.new-price').html()
var op = oldprice.substr(0,oldprice.length-2)
var np = newprice.substr(0,oldprice.length-2)
var result = op - np
$('.economy').html('Вы экономите: '+result+' ₸')