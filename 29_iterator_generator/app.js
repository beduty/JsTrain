// Generator는 함수가 특정지점에서 끝나고, 
// 다음 실행 때는 끝난 시점에서 다시 시작되는 개념을 제공한다.

const func1 = ()=>{
    function nameIterator(names){
        let nextIndex = 0;
        return {
            next : function(){
                return nextIndex < names.length ? 
                {value : names[nextIndex++], done:false} :
                {done:true}
            }
        }   
    }
    const arrName = ['Jack', 'Jill', 'John'];
    const names = nameIterator(arrName);
    console.log(names.next().value);
    console.log(names.next().value);
    console.log(names.next().value);
    console.log(names.next().done);
    console.log(names.next().done);
}

const func2 = ()=>{
    // ** Generator ** 는 함수가 특정지점에서 끝나고, 
    // 다음 실행 때는 끝난 시점에서 다시 시작되는 개념을 제공한다.
    function* sayNames(){
        yield 'Jack';
        yield 'Jill';
        yield 'John';
    }
    // next로 그 다음 값을 가져올 수 있다.
    const name = sayNames();
    console.log(name.next());
    console.log(name.next());
    console.log(name.next());
    console.log(name.next());
}

const func3 = ()=>{

    function* createIds(){
        let index  = 1;
        while(true){
            yield index++
        }
    }
    const gen = createIds();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
}

function init(){
    // func1();
    // func2();
    func3();
}

init();