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
var Vehicle =function(name,model){
    this.name=name;
    this.model=model;

    this.comment=function (){
        console.log("是一辆车")
    }
}

var car1=new Vehicle('bigcar1','big');
car1.comment();
console.log(car1);

