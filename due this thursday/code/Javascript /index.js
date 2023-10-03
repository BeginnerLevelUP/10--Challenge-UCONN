
class Shape {
    constructor(shape) {
        this._shape = shape || [];
        this._color;
    }
    setColor(color) {
        // Validate color input here if needed
        this._color = color;
    }

    // Getter for the color
    get color() {
        return this._color;
    }

    
    render(){
        if(Array.isArray(this._shape)){
            // done because to generate a circle with a polygon tag would be alot more time consuming
            return `<circle cx="${this._shape[0]}" cy="${this._shape[1]}" r="${this._shape[2]}" fill="${this.color}" /> `;

        }else{
            return `<polygon points="${this._shape}" fill="${this.color}" />`;

        }
    }

}

class Circle extends Shape {
    constructor(shape) {
        super(['150','100','80'])
    }
}

class Square extends Shape {
    constructor() {
        super('56,18 244,18 244,182 56,182');
    }
}

class Triangle extends Shape {
    constructor(shape) {
        super('150, 18 244, 182 56, 182');
    }
}
const test = new Triangle()

const inquirer = require('inquirer');
const fs=require('fs');
inquirer.prompt([
    {
        type:'input',
        message:'Enter Logo Text',
        name:'text'
    },
    {
        type: 'input',
        message: 'Enter Text Color',
        name: 'textColor'
    },
    {
        type: 'input',
        message: 'Enter Logo Color',
        name: 'shapeColor'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape',
        choices: ['Circle', 'Square', 'Triangle'],
    }
]).then(response=>{

   if(response.text.length>3){
    console.log('Overly Complicated Logo - Text Length can only be 3 characters ')
   }
   else{
       function createLogo(shape) {
           fs.writeFile('logo.svg', `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
  <text x="150" y="125" font-size="45" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>
`, error => error ? console.log(error) : console.log('sucessfully created file'));
       }

       let userShape;
       switch (response.shape) {
           case 'Circle':
               userShape = new Circle()
               userShape.setColor(response.shapeColor)
               createLogo(userShape.render())
               break;
           case 'Square':
               userShape = new Square()
               userShape.setColor(response.shapeColor)
               createLogo(userShape.render())
               break;
           case 'Triangle':
               userShape = new Triangle
               userShape.setColor(response.shapeColor)
               createLogo(userShape.render())
       }
   }
})


module.exports = { Shape, Circle, Square, Triangle };