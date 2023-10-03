const { Shape, Circle, Square, Triangle } = require('./index.js');




describe('Shape',()=>{
    describe('Passing Required Test',()=>{
        it('should generate color and svg',()=>{
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})