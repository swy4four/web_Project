// console.log('hello,world');

/* let name ='song';
console.log(name);  */

/* const interestRate=0.3;
let interestRate=1;
console.log(interestRate); */

// 数据类型
/* let name ='song'; //String
let age =21;    //Number 
let isApproved=false; // boolean
let firstName=undefined; 
let selectColor=null;
 */

/* let selectedColors =['red','blue'];
selectedColors[2]='green'; 
selectedColors[3]=3;
console.log(selectedColors); */

/* function greet(name){
    console.log('hello,world'+name);
}

greet('song'); */

/* console.log(
    '%cThis text is styled!',
    'color: red; background: yellow; font-size: 24px;'
  )  */

/* var languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
  ];
  
  console.table(languages);

  var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
  };
  
  console.table(languages); */

/*   function greet(user) {
    console.count();
    return 'hi ' + user;
  }
  
  greet('bob')
  //  : 1
  // "hi bob"
  
  greet('alice')
  //  : 2
  // "hi alice"
  
  greet('bob')
  //  : 3
  // "hi bob" */

//构造函数
/* var Vehicle =function(name,model){
    this.name=name;
    this.model=model;

    this.comment=function (){
        console.log("是一辆车")
    }
}

var car1=new Vehicle('bigcar1','big');
car1.comment();
console.log(car1);
 */

/* 2024.5.21 面向对象 */

/* 使用对象字面量 */
/* const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },

  draw: function () {
    console.log("draw");
  },
};

circle.draw(); */

/* factory funcation 工厂函数 */

/* function createCircle(radius){
  return{
    radius,//半径
    draw: function () {//方法
      console.log('draw方法');
    }
  };
}

const circle=createCircle(1);
circle.draw(); */

//构造方法 constructor funcation

/* function Circle(radius){
  this.radius=radius;
  this.draw=function(){
    console.log('it`s draw ');
  }
}

const another= new Circle(1);
console.log(another);
another.draw(); */

