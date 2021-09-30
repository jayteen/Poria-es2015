// Symbol.itetator
(()=>{
    const a = Symbol()
    const b = Symbol()
    console.log(a === b)
    
    const c = Symbol('c')
    const d = Symbol('d')
    const obj = {
        id: '111',
        name: 'xuqicheng',
        c,
        d
    }
    console.log(obj)
    
    console.log(Object.getOwnPropertySymbols(obj))
})()