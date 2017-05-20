/**
 * Created by myl on 2017/2/20.
 */
function calculate() {
    var num1 = Number(document.getElementById("num1").value);
    var b = String(document.getElementById("operator").value);
    var num2 = Number(document.getElementById("num2").value);
    var s=0;
    switch (b){
        case'+':
            s=num1+num2;
            break;
        case '-':
            s=num1-num2;
            break;
        case '*':
            s=num1*num2;
            break;
        case '/':
            if(num2==0){
                alert('除数不能为0')
            }
            s=num1/num2;
            break;
    }
    document.getElementById("sum").innerText=s;
}
