console.log(document)

setTimeout(function(){
    myMessage.innerText = 'myMassage'
},300)
console.log(myMessage)

theMessageButton.addEventListener('click', function (){
    myMessage.innerText = 'Button pressed'
}); 