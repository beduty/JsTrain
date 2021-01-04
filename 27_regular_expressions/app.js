
const func1 = ()=>{

    // let re =/hello/;
    // let re = new RegExp("hello");
    let re =/hello/i; // 문자열에서 대소문자를 구분하지 않는다.

    console.log(re);
    console.log(re.source);

    // exec 대응되는 문자열을 찾는다. 
    let result = re.exec('hello helloworld');
    console.log(result);
    console.log(result[0]);
    console.log(result.index);
    console.log(result.input);

    // test 대응되는 문자열이 있는 지 검사한다. 
    result = re.test("Hello");
    console.log(result);  // 대문자가 하나 있어서 false다. 

    // match - exec와 동일하다.
    let str = 'Hello There';
    result = str.match(re);
    console.log(result);

    // search - 문자열이 있는 인덱스를 반환한다. 
    str = 'Brad Hello There';
    result = str.search(re);
    console.log(result);

    // replace - 대응되는 문자열을 찾아 다른 문자열로 치환한다. 
    str = 'hello There';
    const newStr = str.replace(re, 'Hi');
    console.log(newStr);
}

const func2 = ()=>{
    function reTest(re, str){
        if(re.test(str)){
            console.log(`${str} matches ${re.source}`);
        }
        else{
            console.log(`${str} does NOT match ${re.source}`);
        }
    }    

    let re, result, str;

    re = /hello/;
    str = 'Hello World';
    reTest(re, str);
    
    re = /hello/i;
    str = 'Hello World';
    reTest(re, str);

    re = /^h/; // Must start with
    reTest(re, str);

    re = /^h/i; // Must start with
    reTest(re, str);

    re = /world$/i; // Must ends with
    reTest(re,str);

    re = /  world$/i; // Must ends with
    reTest(re,str);

    re = /^hello$/i; // Must begin and end with
    reTest(re,str);

    str = 'Hello';
    re = /^hello$/i;
    reTest(re,str);

    re = /h.llo/i; // Matches any ONE character
    str = 'Hello';
    reTest(re,str);
    
    str = 'H%llo World';
    reTest(re,str);
    
    re = /h*llo/i;  // Matches andy character 0 or more times
    str = 'Hello';
    reTest(re,str);

    str = 'Heasdasdllow';
    reTest(re,str);
    
    str = 'H11&^%&^%ASDllo';
    reTest(re,str);

    str = 'Hllo';
    reTest(re,str);

    str = 'H   llo';
    reTest(re,str);

    re = /gre?a?y/i;  // Optional character
    str = 'Grey';
    reTest(re,str);

    str = 'Gray321';
    reTest(re,str);

    re = /gre?a?y\?/i; // Escape character
    str = 'Gray?';
    reTest(re,str);

    str = 'Grar?';
    reTest(re,str);

    str = 'Grayr?';
    reTest(re,str);
}
const func3 = ()=>{
    let re, str;
    function reTest(re, str){
        if(re.test(str)){
            console.log(`${str} matches ${re.source}`);
        }
        else{
            console.log(`${str} does NOT match ${re.source}`);
        }
    }       

    re = /gr[ae]y/i;  // Must be an a or e
    str = 'GrAy asdas';
    reTest(re, str);
  
    str = 'Grey';
    reTest(re, str);
    
    re = /[GF]ray/i;  // Must be a G of F
    str = 'gray';
    reTest(re, str);
    
    re = /[^GF]ray/i;  // G 와 F뺴고 아무거나
    str = 'gray';
    reTest(re, str);
    str = 'sray';
    reTest(re, str);

    re = /[A-Z]ray/; // 대문자 암거나. 
    str = 'Sray';
    reTest(re, str);

    re = /[a-z]ray/; // 소문자 암거나. 
    str = 'arayWWD';
    reTest(re, str);

    re = /[A-Za-z]ray/; // 대 소문자 암거나. 
    str = 'aray';
    reTest(re, str);
    

    re = /[0-9]ray/; // 숫자 암거나
    str = '8ray';
    reTest(re, str);

    re = /[0-9][0-9]ray/; // 대 소문자 암거나. 
    str = '8ray';
    reTest(re, str);
    str = '87ray';
    reTest(re, str);
}

const func4 = ()=>{
    let re, str;
    function reTest(re, str){
        if(re.test(str)){
            console.log(`${str} matches ${re.source}`);
        }
        else{
            console.log(`${str} does NOT match ${re.source}`);
        }
    }      

    re = /Hel{3}o/i; // l이 3개 연속되어야 한다.
    str = 'Helllo';
    reTest(re, str);
    str = 'Hello';
    reTest(re, str);

    re = /Hel{2,4}o/i; // l이 2개 ~ 4개 연속되어야 한다.
    str = 'Hello';
    reTest(re, str);
    str = 'Helllo';
    reTest(re, str);
    str = 'Hellllo';
    reTest(re, str);
    str = 'Helllllo';
    reTest(re, str);
    
    re = /Hel{2,}o/i; // l이 적어도 2개 이상 되어야 한다.
    str = 'Helllllo';
    reTest(re, str);

    str = 'Helo';
    reTest(re, str);
}

const func5 = ()=>{
    let re, str;
    function reTest(re, str){
        if(re.test(str)){
            console.log(`${str} matches ${re.source}`);
        }
        else{
            console.log(`${str} does NOT match ${re.source}`);
        }
    }     

    re = /^([0-9]x){3}$/;  // ()으로 그룹으로 묶여있다. 숫자와 'x'로 묶인것이 3개 반복되어야 한다. 
                            // 시작(^)과 끝($)으로 묶여있기 때문에 4번 반복되면 false다. 
    str = '9x9x9x6x';
    reTest(re,str);

    str = '1x8x6x';
    reTest(re,str);
}

const func6 = ()=>{
    let re, str;
    function reTest(re, str){
        if(re.test(str)){
            console.log(`${str} matches ${re.source}`);
        }
        else{
            console.log(`${str} does NOT match ${re.source}`);
        }
    }     

    re = /\w/; // 문자(a-z A-Z 0~9) 중 하나라도 있으면 true이다.
    str = '123sASD';
    reTest(re,str);

    str = '!';
    reTest(re,str);

    re = /\w+/; // 문자(a-z A-Z 0~9) 중 하나라도 있으면 true이다.    
    str = '!&*&';
    reTest(re,str);
      
    str = '!&*&s';
    reTest(re,str);

    str = '_';
    reTest(re,str);
    
    re = /\W/; // 특수문자가 포함되어야 한다.
    str = '123';
    reTest(re,str);  

    str = '^&(*&(k';
    reTest(re,str);  
    
    re = /\d/;    // Match any digit
    str = '123as';
    reTest(re,str);
    str = 'as123';
    reTest(re,str); 

    re = /\d+/;    // Match any digit 0 or more times
    str = '123as';
    reTest(re,str); 

    re = /\D/;    // Match any Non-digit
    str = '123';
    reTest(re,str); 
    str = '123#%';
    reTest(re,str); 

    re = /\s/;    // Match whitespace char
    str = '123 ';
    reTest(re,str); 
    str = '1 23#%';
    reTest(re,str); 

    re = /\S/;    // Match non-whitespace char
    str = '123 ';
    reTest(re,str); 
    str = '  ';
    reTest(re,str); 
    str = '';
    reTest(re,str); 

    re = /Hell\b/i; // Word boundary
    str = "Hello, Welcome to Hell";
    reTest(re,str);

    str = "Hell";
    reTest(re,str);
}
const func7 = ()=>{
    let re, str;
    function reTest(re, str){
        if(re.test(str)){
            console.log(`${str} matches ${re.source}`);
        }
        else{
            console.log(`${str} does NOT match ${re.source}`);
        }
    }     

    re = /x(?=y)/;  // x다음에 y가 와야 한다.
    str = 'xy';
    reTest(re,str);
    str = 'x y';
    reTest(re,str);
    str = 'xy12$#';
    reTest(re,str);

    re = /x(?!y)/;  // x다음에 y가 오면 안된다.
    str = 'xa';
    reTest(re,str);
    str = 'x y';
    reTest(re,str);
    str = 'xy';
    reTest(re,str);
}
















const func8 = ()=>{}
const func9 = ()=>{}
const func10 = ()=>{}
const func11 = ()=>{}

function init(){
    // func1();
    // func2();
    // func3();
    // func4();
    // func5();
    // func6();
    func7();
    func8();
    func9();
    func10();
    func11();
}
init();