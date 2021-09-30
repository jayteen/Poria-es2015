// Generator
(()=>{
    const createGenerator = function * (){
        console.log('1')
        yield 1
        console.log('2')
        yield 2
        console.log('3')
        yield 3
    }
    const generator = createGenerator()
    console.log(generator.next())
    console.log(generator.next())
    console.log(generator.next())
    console.log(generator.next())
})()

