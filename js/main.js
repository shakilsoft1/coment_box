document.getElementById('btn-post').addEventListener('click',function(){
    const comentBox=document.getElementById('new-coment');
    const newComent=comentBox.value;
    const commentContainer=document.getElementById('coment-container');
    const p=document.createElement('p');
    p.innerText=newComent;
    commentContainer.appendChild(p);
    comentBox.value='';

})