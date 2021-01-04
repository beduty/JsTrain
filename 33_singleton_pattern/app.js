const func1 = ()=>{
    const Singletom = (function(){
        let instance;
        function createInstance(){
            const object = new Object({name : "Brad"});
            return object;
        }
        return {
            getIntance : function(){
                if(!instance){
                    instance = createInstance();
                }
                return instance;
            }
        }
    })();

    const instanceA = Singletom.getIntance();
    const instanceB = Singletom.getIntance();
    console.log(instanceA);
    console.log(instanceB);
    console.log(instanceA === instanceB);

}

const func2 = ()=>{}
const func3 = ()=>{}
const func4 = ()=>{}
const func5 = ()=>{}

function init(){
    func1();
    func2();
    func3();
    func4();
    func5();
};

init();


