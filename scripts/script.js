
const url = '../data.json';

let html = '';
let main = document.querySelector('#time-tracking');

fetch(url, { mode: "no-cors" })
  .then((res) => res.json())
  .then((itens) => {
    
    for( item of itens ){
      const className = item.title.replace(' ', '-').toLowerCase();

      html += `<div class='item-wrap ${className}' onclick='activeTimeframe(this)'>
                <div class='item'>
                  <div class='title'>
                    <h4>${item.title}</h4>
                    <span class='ellipsis'>...</span>
                  </div>`;
      
      const entries = Object.entries(item.timeframes);
      entries.forEach(data => {
        
        const opt = data[0] == 'weekly' ? 'Week' : 'Month';
        const previous = data[0] == 'daily' ? `Yesterday - ${data[1]['previous']}hrs` 
                                            : `Last ${opt} - ${data[1]['previous']}hrs`

        html += `<div class='timeframe ${data[0]}'>
                  <h3 class='current'>${data[1]['current']}hrs</h3>
                  <span class='previous'>${previous}</span>
                 </div>`;
      });
      html +=   `</div>
              </div>`;
    }
    main.innerHTML = html;
    document.querySelectorAll('.daily').forEach(e => e.classList.add('visible'));
  });


const activeOption = (elem) => {
  const optionsList = document.querySelectorAll('.option ul li');
  optionsList.forEach(e => e.classList.remove('active'));
  elem.classList.add('active');

  const options = document.querySelectorAll('.timeframe');
  const selected = document.querySelectorAll(`.${elem.innerHTML}`);
  options.forEach( e => e.classList.remove('visible'));
  selected.forEach(
    e => e.classList.add('visible')
  )
}

const activeTimeframe = (elem) => {
  const itemList = document.querySelectorAll('.item-wrap');
  itemList.forEach(e => e.classList.remove('active'));
  elem.classList.add('active');


}