const result = document.getElementById('result')
const btns = document.getElementsByClassName('btn')
const equal = document.getElementById('equal')

result.value = 0

for(btn of btns){

    let val = btn.value

    btn.addEventListener('click', ()=>{
        if(val == 'C'){
            result.value = 0
        }else{
            if(result.value == 0){
                result.value = val
            }else{
                result.value += val;
            }
        }

    })
}
equal.addEventListener('click', ()=>{
    let toCount = result.value.replace(/x/g, '*').replace(/:/g, '/');

    result.value = eval(toCount)
})
window.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        let toCount = result.value.replace(/x/g, '*').replace(/:/g, '/');

        result.value = eval(toCount)
    }
})