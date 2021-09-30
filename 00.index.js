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
    
    console.log('--------------------------------------')
    
    // Reflect
    let obj2 = {
        id: '00002',
        name: 'xuchengcheng',
        age: 18
    }
    const flag = Reflect.has(obj, 'id')
    console.log(flag)
    
    console.log('--------------------------------------')
    
    // Symbol.itetator
    let obj3 = {
        id: '00003',
        name: 'xuchengcheng',
        age: 18,
        child: ['A', 'B', 'C'],
        [Symbol.iterator](){
            let index = 0
            const _this = this;
            return{
                next(){
                    return{
                        value: _this.child[index],
                        done: index++ >= _this.child.length
                    }
                }
            }
        }
    }
    
    for(let v of obj3){
        console.log(v)
    }
    
    console.log('--------------------------------')
    // Symbol.itetator + Generator
    let obj4 = {
        id: '00004',
        name: 'xuchengcheng',
        age: 18,
        child: ['A', 'B', 'C'],
        // [Symbol.iterator]: function *(){
        //     let index = 0
        //     const _this = this;
        //     for(let v of this.child){
        //         yield v
        //     }
        // },
        // yield函数简写
        *[Symbol.iterator](){
            let index = 0
            const _this = this;
            for(let v of this.child){
                yield v
            }
        }
    }
    
    for(let v of obj4){
        console.log(v)
    }
})()
