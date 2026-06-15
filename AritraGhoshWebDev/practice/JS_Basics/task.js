const paras = document.querySelectorAll('p');
// innerText vs textContent:
// innerText: gives only the visible text (not the hidden ones)
// textContent: gives all the texts (including the hidden ones)
paras.forEach(para => {
    if(para.innerText.includes('error')) {
        para.classList.add('error');
    }
    else if(para.textContent.includes('success')) {
        para.classList.add('success');
    }
});


console.log(paras);

// toggling class
const title = document.querySelector('.title');

title.classList.toggle('test');