var container = document.getElementsByClassName('container');
var box = document.getElementsByClassName('box');
var numberOfBoxes = 5;


var dragedBox;
for (var i = 0; i < box.length; i++) {
  // initiate order
  // box[i].style.order = i+1;

  box[i].addEventListener('dragstart',(e)=>{
    // e.preventDefault();
    // dragedBox = e.target.dataset.position;
    // e.target.style.oreder = ;
    // console.log(e.target);
    e.dataTransfer.setData('text/plain',e.target.dataset.position);
  });

  box[i].addEventListener('drop',(e)=>{
    e.preventDefault();
    var dataEventOrder = e.dataTransfer.getData('text/plain');
    for (var i = 0; i < box.length; i++) {
      if (box[i].dataset.position === dataEventOrder) {
        box[i].dataset.position = e.target.dataset.position ;
        console.log(box[i] , e.target.dataset.position);
      }
    }
    // box[dataEventOrder].style.order = e.target.dataset.position;
    // box[dataEventOrder].dataset.position = e.target.dataset.position;
    e.target.dataset.position = dataEventOrder;
    console.log(e.dataTransfer.getData('text/plain'));
    // e.target.style.order = dragedBox;
    // var bla = e.dataTransfer.getData('text/plain');
    // console.log(bla);
  });

};




// function onDrop(event) {
//   // var data = event.dataTransfer.getData("text/plain");
//   // event.target.textContent = data;
//   event.preventDefault();
//   console.log(2);
// }
