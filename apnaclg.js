
const counters = document.querySelectorAll(".count");
const interval = 4000;
// Find the maximum target value among all counters
const maxTarget = Math.max(
  ...Array.from(counters).map((counter) =>
    parseInt(counter.getAttribute("data-target"))
  )
);
counters.forEach((counter) => {
   let start = 0 ;
   let end = parseInt(counter.getAttribute("data-target"));
   let duration = Math.floor( interval / end) ;
   let setCounter = setInterval(function(){
    start +=1 ;
    counter.textContent = start;
    if(start === end){
      clearInterval(setCounter);
    }
   } ,duration );
});


















