// Symbol.itetator
(()=>{
    const a = Symbol()
    const b = Symbol()
    console.log(a === b)
    
    const c = Symbol('c')
    const d = Symbol('d')
    const e = Symbol.for('e')
    const obj = {
        id: '111',
        name: 'xuqicheng',
        [c]: 'Symbol(\'c\')',
        [d](){},
        [e]: 'Symbol.for(\'e\')'
    }
    console.log(obj)
    
    console.log(Object.getOwnPropertySymbols(obj))
    
    console.log('-------------------------')

    console.log(c)
    console.log(Symbol.for('c'))
    console.log(c === Symbol.for('c'))
    console.log(obj[Symbol.for('c')])

    console.log('-------------------------')

    const m = Symbol.for('m')
    const n = Symbol.for('m')
    console.log(m === n)

    console.log('-------------------------')

    console.log(Symbol.for('e'))
    console.log(e === Symbol.for('e'))
    console.log(obj[Symbol.for('e')])


})()