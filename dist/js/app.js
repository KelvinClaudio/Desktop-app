const getTime = () => {
   const getTime = new Date();
   
   let hours = getTime.getHours();
   let minutes = getTime.getMinutes();
   let seconds = getTime.getSeconds();
   
   const timeArr = [hours, minutes, seconds]
   return timeArr;
}

const showTime = () => {
   const time = document.querySelector('.clock');

   const arrTime = getTime()
   
   arrTime[0] = arrTime[0] < 10 ? '0' + arrTime[0] : arrTime[0]
   arrTime[1] = arrTime[1] < 10 ? '0' + arrTime[1] : arrTime[1]
   arrTime[2] = arrTime[2] < 10 ? '0' + arrTime[2] : arrTime[2]
   
   time.textContent = `${arrTime[0]} : ${arrTime[1]} : ${arrTime[2]}`
   setInterval(showTime, 1000)
}
showTime()
// Can also be included with a regular script tag
const timeStr = getTime()
function update (){
   let title;
   if(parseInt(timeStr[0]) >= 5 && parseInt(timeStr[0]) < 11) {
      title = ["Good Morning, nomi ", "Have a nice day :)"]
         
   }else if(parseInt(timeStr[0]) >= 11 && parseInt(timeStr[0]) < 18) {
      title = ["Good Aftenoon, nomi ", "Have a nice day :)"];
   }else if(parseInt(timeStr[0]) >= 18 || parseInt(timeStr[0]) < 5) {
      title = ["Good Night, nomi ", "Don't forget to sleep -o-"]
   }
   return title;

}
const title = update()

var typed = new Typed('#type', {
   strings: [`${title[1]}`, `${title[0]}`,`${title[1]}`],
   typeSpeed: 80,
   backSpeed: 80,
   startDelay: 300,
   backDelay: 3000,  
   smartBackspace: false,
   cursorChar: '_'
 });
 var typed2 = new Typed('#gsearch', {
   strings: ['Search Something...', 'Search on Google...'],
   typeSpeed: 60,
   backSpeed: 60,
   attr: 'placeholder',
   bindInputFocusEvents: true,
   smartBackSpace: true,
   loop: true
 });

const toggleBtn = document.querySelector('.google');
const form = document.querySelector('.form')
let bool = true
function toggleForm () {
   if(bool){
      form.style.visibility = 'visible';
      form.style.transform = 'scale(1)';
      bool = false
   }else{
      form.style.visibility = 'hidden';
      form.style.transform = 'scale(0)';
      bool = true
   }
}

toggleBtn.addEventListener('click', e => {
   if(e.target.matches('.google, .google *')) {
      toggleForm()
   }
})


const searchBtn = document.querySelector('.form i');
const input = document.querySelector('input')

const clearField = () => input.value = ''

const searchItem = () => {
   let val = document.querySelector('input').value;
   if(val !== ''){
      window.location.href = `https://www.google.com/search?safe=strict&ei=aYDqXsHtPNG1mgfzlpqgBA&q=${val}&oq=${val}&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEM6BwgAEIMBEEM6BQgAEIMBOgcIABCxAxBDOggIABCxAxCRAlCvMljlSGCRS2gAcAB4AYABwgKIAeUNkgEHOC4zLjIuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiBxsWv24nqAhXRmuYKHXOLBkQQ4dUDCAw&uact=5`
   }
}

searchBtn.addEventListener('click', searchItem , clearField)
window.addEventListener("keyup", function(event) {
   // Number 13 is the "Enter" key on the keyboard
   if (event.keyCode === 13) {
      searchItem()
      clearField()
   }
 });