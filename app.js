let title=document.querySelector('#title');
let author=document.querySelector('#author');
let date=document.querySelector('#date');
let status=document.querySelector('#status');
let submit=document.querySelector('.submit');
let title_label=document.querySelector('.title');
let author_label=document.querySelector('.author');
let date_label=document.querySelector('.date');
let status_label=document.querySelector('.status');
let content=document.querySelector('.content')

console.log(title.value)


let library=[]
function getInfo(){
    title_label.textContent=title.value;
author_label.textContent=author.value;
date_label.textContent=date.value;
status_label.textContent=status.value
}
function book(){
    let card=document.createElement('div');
    card.classList.add('card');
let ptitle=document.createElement('p');
let authorname=document.createElement('p');
let datePublish=document.createElement('p');
let status2=document.createElement('p');

ptitle.classList.add('title');
datePublish.textContent=`Date Published : ${date.value}`;
authorname.textContent=`Author Name :${author.value}  `;
ptitle.textContent=`Title : ${title.value}`;
status2.textContent=`Status : ${status.value} `
content.appendChild(card);
card.appendChild(ptitle);
card.appendChild(authorname);
card.appendChild(datePublish);
card.appendChild(status2);
library.push(card);
let btn=document.createElement('button');
btn.classList.add('remove');
 btn.textContent='Remove';
card.appendChild(btn);
btn.addEventListener('click',()=>{
    card.remove();
})

}






submit.addEventListener('click', (e) => {
    e.preventDefault();
   
    if (title.value.trim() === '' || author.value.trim() === ''  ) {
        return;
    }
    book();  
 

    title.value = '';
    author.value = '';
    date.value = '';
});
