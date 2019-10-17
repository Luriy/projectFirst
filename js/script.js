var btn_prev = document.querySelector('#slide .slideButtons .prev');
var btn_next = document.querySelector('#slide .slideButtons .next');

var images = document.querySelectorAll('#slide .slideBasic img');
var i = 0;

btn_prev.onclick = function(){
    images[i].className = '';
    i--;
     
    if(i < 0){
        i = images.length - 1;
    }
     
    images[i].className = 'showed';
}

btn_next.onclick = function(){
    images[i].className = '';
    i++;
        if(i >= images.length){
             i = 0;
        }
    images[i].className = 'showed';
}

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length > 2) {
            statusElm.append('<div>Name is valid!</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Name is not valid!</div>')
        }

        if(email.length >= 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>E-mail is valid!</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>E-mail is not valid!</div>')
        }

        if(subject.length >= 10) {
            statusElm.append('<div>Message is valid!</div>')
        }   else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid!</div>')
        }
    })
})


