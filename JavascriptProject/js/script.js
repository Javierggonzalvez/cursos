'use strict'

window.addEventListener('load', function (){

    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', function(){
        results.innerHTML = 'hola<br/>mundo';
    
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.Value;
        console.log(hobby);
        
        //get gender
        var genderField = document.getElementById('gender');
        var gender = genderField.options[genderField.selectedIndex].value;
        console.log(gender)
    });

});