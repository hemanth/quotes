var quotes = new XMLHttpRequest();
quotes.open('GET', 'quotes', false);
quotes.send(null);
var wisdom = quotes.responseText.split('\n');

quote=document.getElementById('quote')

setInterval(function(){
quote.textContent=wisdom[Math.floor(Math.random() * wisdom.length)]
},6000);
