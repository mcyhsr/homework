/**
 * Created by Administrator on 2017/3/3.
 */
var num1=0;
var sign=0;
var flag=0;
var result=0;
// 显示数字
function num(x) {
    var str=document.getElementById('rel').textContent;
    str+=String(x);
    document.getElementById('rel').textContent=str;
}
// 添加小数点
function dot() {
    var str=document.getElementById('rel').textContent;
    if(str.indexOf('.')>0){
    }
    else {
        str = str + '.';
        document.getElementById('rel').textContent = str;
    }
}
// 清屏
function zero() {
    document.getElementById('rel').textContent='';
    sign=0;
    flag=0;
    num1=0;
    result=0;
    return sign;
}
// 回退
function back() {
    var str=document.getElementById('rel').textContent;
    var str1=str.substr(0,(str.length)-1);
    document.getElementById('rel').textContent=str1;
}
// 加减乘除
function multiply() {
    if(flag==0){
        num1=Number(document.getElementById('rel').textContent);
        document.getElementById('rel').textContent='';
        sign=1;
        flag=flag+1;
        return[sign,num1];
    }
    else{
        middle();
        document.getElementById('rel').textContent='';
        sign=1;
        return[sign,num1];
    }
}
function divide() {
    if(flag==0){
        num1=Number(document.getElementById('rel').textContent);
        document.getElementById('rel').textContent='';
        sign=2;
        flag=flag+1;
        return[sign,num1];
    }
    else{
        middle();
        document.getElementById('rel').textContent='';
        sign=2;
        return[sign,num1];
    }
}
function plus() {
    if(flag==0){
        num1=Number(document.getElementById('rel').textContent);
        document.getElementById('rel').textContent='';
        sign=3;
        flag=flag+1;
        return[sign,num1];
    }
    else{
        middle();
        document.getElementById('rel').textContent='';
        sign=3;
        return[sign,num1];
    }
}
function minus() {
    if(flag==0){
        num1=Number(document.getElementById('rel').textContent);
        document.getElementById('rel').textContent='';
        sign=4;
        flag=flag+1;
        return[sign,num1];
    }
    else{
        middle();
        document.getElementById('rel').textContent='';
        sign=4;
        return[sign,num1];
    }
}
function sin() {
    var num4=Number(document.getElementById('rel').textContent);
    var num5=Math.sin(num4*Math.PI/180);
    num5=parseFloat(num5.toFixed(8));
    document.getElementById('rel').textContent=num5;
}
function cos() {
    var num4=Number(document.getElementById('rel').textContent);
    var num5=Math.cos(num4*Math.PI/180);
    num5=parseFloat(num5.toFixed(8));
    document.getElementById('rel').textContent=num5;
}
function tan() {
    var num4=Number(document.getElementById('rel').textContent);
    var num5=Math.tan(num4*Math.PI/180);
    num5=parseFloat(num5.toFixed(8));
    document.getElementById('rel').textContent=num5;
}
function sqrt() {
    if(flag==0){
        var num4=Number(document.getElementById('rel').textContent);
        var num5=Math.sqrt(num4);
        num5=parseFloat(num5.toFixed(8));
        document.getElementById('rel').textContent=num5;
    }
    else {
        middle();
        document.getElementById('rel').textContent='';
        sign=5;
        return[sign,num1];
    }
}
// 中间计算
function middle() {
    var num3=Number(document.getElementById('rel').textContent);
    var midrel=0;
    if(sign==1){
        midrel=accMul(num1,num3);
        num1=midrel;
        return num1;
    }
    else if(sign==2){
        if(num3==0){
            zero();
            document.getElementById('rel').textContent='除数不能为0';
        }
        else {
            midrel=accDiv(num1,num3);
            midrel=parseFloat(midrel.toFixed(8));
            num1=midrel;
            return num1;
        }
    }
    else if(sign==3){
        midrel=accAdd(num1,num3);
        num1=midrel;
        return num1;
    }
    else if(sign==4){
        midrel=accSub(num1,num3);
        num1=midrel;
        return num1;
    }
    else  if(sign==5){
        midrel==Math.sqrt(num1);
        num1=midrel;
        return num1;
    }
    else if(sign==6){
        num1=result;
        return num1;
    }
}
// 计算及显示结果
function rel() {
    var num2=Number(document.getElementById('rel').textContent);
    if (sign==1){
            result=accMul(num1,num2);
            result=String(result);
            document.getElementById('rel').textContent=result;
            sign=6;
            return result;
    }
    else if(sign==2){
            if(num2==0){
                zero();
                document.getElementById('rel').textContent='除数不能为0';
            }
            else{
                result=accDiv(num1,num2);
                result=parseFloat(result.toFixed(8));
                result=String(result);
                document.getElementById('rel').textContent=result;
                sign=6;
                return result;
            }
    }
    else if(sign==3){
        result=accAdd(num1,num2);
        result=String(result);
        document.getElementById('rel').textContent=result;
        sign=6;
        return result;
    }
    else if(sign==4){
        result=accSub(num1,num2);
        result=String(result);
        document.getElementById('rel').textContent=result;
        sign=6;
        return result;
    }
    else if(sign==5){
        result=Math.sqrt(num1);
        result=String(result);
        document.getElementById('rel').textContent=result;
        sign=6;
        return result;
    }
}
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0};
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0};
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}
function accSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0};
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0};
    m=Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}
function accDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){};
    try{t2=arg2.toString().split(".")[1].length}catch(e){};
    with(Math){
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1);
    }
}
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){};
    try{m+=s2.split(".")[1].length}catch(e){};
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}