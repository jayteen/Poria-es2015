(()=>{
    let obj = {
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
    
    for(let v of obj){
        console.log(v)
    }
    
    // Symbol.itetator + Generator
    let obj2 = {
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
    
    for(let v of obj2){
        console.log(v)
    }
})()