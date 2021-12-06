
const url = '../data.json';

let html = '';
let main = document.querySelector('#time-tracking');

fetch(url, { mode: "no-cors" })
  .then((res) => res.json())
  .then((itens) => {
    
    for( item of itens ){
      const className = item.title.replace(' ', '-').toLowerCase();
      
      html += `<div class='item-wrap ${className}'>
                <div class='item'>
                  <h4 class='title'>${item.title}</h4>`;
      const entries = Object.entries(item.timeframes);
      entries.forEach( x => {
        html += `<div class='timeframe ${x[0]}'>
                  <h3 class='current'>${x[1]['current']}</h3>
                  <span class='previous'>${x[1]['previous']}</span>
                 </div>`;
      });
      html +=   `</div>
              </div>`;
    }
    main.innerHTML = html;
    document.querySelectorAll('.daily').forEach(e => e.classList.add('visible'));
  });


const selectOption = (param) => {
  const optionsList = document.querySelectorAll('.option ul li');
  optionsList.forEach(e => e.classList.remove('active'));
  param.classList.add('active');

  const options = document.querySelectorAll('.timeframe');
  const selected = document.querySelectorAll(`.${param.innerHTML}`);
  options.forEach( e => e.classList.remove('visible'));
  selected.forEach(
    e => e.classList.add('visible')
  )
  
  
}
