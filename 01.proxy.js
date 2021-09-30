// 代理 Proxy
(()=>{
    let obj = {
        id: '00001',
        name: 'xuchengcheng',
        age: 18
    }
    
    let objProxy = new Proxy(obj, {
        get(target, property){
            console.log(target, property)
        },
        set(target, property, value){
            console.log(target, property, value)
        }
    })
    
    console.log(objProxy.name)
})()