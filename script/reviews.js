console.log('connected');

const reviews = [
    {
       id:1,
       title: "Great stay. Would definitely recommend",
       text: "Good location, value for money, great experiences, everything was clean"
    },
    {
        id:2,
        title: "Comfortable",
        text: "Spacious rooms lovely high ceilings, view of the amphitheater from window, good location 10 mins from old town/ marina, close to bus station, close to supermarket/ convenience stores, well equipped kitchen for cooking. Apartment was on 4th floor - didn't bother us - but there is no lift."
     },
     {
        id:3,
        title: "Exceptional",
        text: "Very comfortable apartment, excellent air conditioning, excellent location and a nice addition in the form of fruit and wine in the fridge. We are very satisfied!"
     },
     {
        id:4,
        title: "Outstanding",
        text: "Very well-kept rooms, everything perfect and tidy upon arrival we also found a welcome drink, very friendly and helpful people. An experience to absolutely repeat."
     },
     {
        id:5,
        title: "Very good",
        text: "Everything was great, no complaints"
     }
];

const title = document.getElementById('review-title');
const text = document.getElementById('review-text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.rand-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showReview(currentItem);
});

function showReview(review){
    const item = reviews[review];
    title.textContent = item.title;
    text.textContent = item.text;
};

nextBtn.addEventListener('click', function(){  
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showReview(currentItem);
});
prevBtn.addEventListener('click', function(){  
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showReview(currentItem);
});

randomBtn.addEventListener('click', function(){  
    showReview(getRandomNumber());
});

function getRandomNumber(){
    return Math.floor(Math.random()*reviews.length);
}