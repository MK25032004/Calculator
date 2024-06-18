let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let ans ="";
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click' ,(e)=>{
        if(e.target.innerHTML == '='){
            ans = eval(ans);
            input.value = ans;
        }
        else if(e.target.innerHTML == 'AC'){
            ans ="";
            input.value = ans;
        }
        else if(e.target.innerHTML == 'DEL'){
            ans = ans.substring(0,ans.length-1);
            input.value = ans;
        }
        else{
            ans +=e.target.innerHTML;
            input.value = ans;
        }
    })
})