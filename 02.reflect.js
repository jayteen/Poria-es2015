// Reflect
(()=>{
    let obj2 = {
        id: '00002',
        name: 'xuchengcheng',
        age: 18
    }
    const flag = Reflect.has(obj, 'id')
    console.log(flag)
})()