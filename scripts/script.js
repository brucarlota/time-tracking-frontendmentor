
const url = '../data.json';

let html = '';
let main = document.querySelector('#main');

fetch(url, { mode: "no-cors" })
  .then((res) => res.json())
  .then((itens) => {
    console.log( typeof(itens), itens);
    html += `<div>`;
    
    for( item of itens ){
      html += `<div class='card ${item.title}'>
                <h1 class='title'>${item.title}</h1>`;
      console.log(item.title);
      const entries = Object.entries(item.timeframes);
      entries.forEach( x => {
        html += `<div class='${x[0]}'>
                  <h3 class='current'>${x[1]['current']}</h3>
                  <span class='previous'>${x[1]['previous']}</span>
                 </div>`;
      });
      html += `</div>
            </div>`;
    }
    main.innerHTML = html;
  });



