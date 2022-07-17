
let submit = document.getElementById('submit');
let content1 = document.getElementById('card-rate1');
let content2 = document.getElementById('card-rate2');
let rating = document.querySelectorAll('.btn_rating');
let star_score = 3;
let score = document.querySelector('.score');




function onSubmit (){
    content1 = document.getElementById('card-rate1').style.display = 'none';
    content2 = document.getElementById('card-rate2').style.display = 'block';
    score.textContent = star_score;
}
submit.addEventListener('click', onSubmit);




rating.forEach( btn => {
    btn.addEventListener('click', ratingClick);
})

function ratingClick (event){
    rating.forEach(btn =>{
        btn.classList.remove('active');
    })
    
    if(event.target.classList.contains('btn_rating')){
        event.target.classList.add('active');
    }else{
        event.target.parentElement.classList.add('active');
    }

    star_score = event.target.textContent;
    console.log(star_score);
}



