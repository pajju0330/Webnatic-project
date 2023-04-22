const page = document.getElementById('page');
const menuToggle = document.getElementById('menu_toggle');
const content = document.getElementById('content');

menuToggle.onclick = () => {
    page.classList.toggle('real');

}

content.onclick = () => {
    page.classList.remove('real')
}

const imgArr = [
    {
        "img":"https://images.unsplash.com/photo-1624724831528-f33cfa46871f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "sub" : "Bangalore is India's Silicon Valley, nah, It's Paradise!!!!"
    },
    {
        "img":"https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "sub" : "You got it right, The city of JOY"
    },
    {
        "img":"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "sub" : "Meet me at the tea fields, in Kerala"
    }
]


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const sub1 = document.getElementById('sub1');
const sub2 = document.getElementById('sub2');
const sub3 = document.getElementById('sub3');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let cnt = 1;
next.onclick = () => {
    if(cnt === 1){
        img1.src = imgArr[0].img;
        sub1.innerHTML = imgArr[0].sub;
    }
    if(cnt === 2){
        img2.src = imgArr[0].img;
        sub2.innerHTML = imgArr[0].sub;
        img1.src = imgArr[1].img;
        sub1.innerHTML = imgArr[1].sub;
    }
    if(cnt === 3){
        img3.src = imgArr[1].img;
        sub3.innerHTML = imgArr[1].sub;
        img2.src = imgArr[1].img;
        sub2.innerHTML = imgArr[1].sub;
        img1.src = imgArr[2].img;
        sub1.innerHTML = imgArr[2].sub;
    }
    console.log(cnt);
    cnt++;
    if(cnt === 4) cnt = 1;
}
prev.onclick = () => {
    if(cnt === 1){
        img1.src = imgArr[0].img;
    }
    if(cnt === 2){
        img2.src = imgArr[1].img;
    }
    if(cnt === 3){
        img3.src = imgArr[2].img;
    }
    console.log(cnt);
    cnt--;
    if(cnt === 0) cnt = 3;
}

const order = document.querySelector(".order");

function handleOrderClick() {
  if (!order.classList.contains("animate")) {
    order.classList.add("animate");
    setTimeout(function() {
      order.classList.remove("animate");
    }, 10000);
  }
}

function init() {
  order.addEventListener("click", handleOrderClick);
}

init();
