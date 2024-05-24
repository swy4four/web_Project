window.onload = function () {
  init();
};

var ctx,
  c,
  tid,
  score = 0,
  scoreDisplay;
var bg,
  up,
  down,
  bird,
  birdSrc = ["img/0.gif", "img/1.gif", "img/2.gif"];
var birdindex = 0; //计数

//入口
function init() {
  c = document.getElementById("mycanvas");
  c.width = 800;
  c.height = 600;
  ctx = c.getContext("2d");
  scoreDisplay = document.getElementById("score"); // 正确的初始化时机
  bg = new DI(0, 0, 800, 600, "img/bg.png");
  up = new DI(800, 0, 50, 250, "img/up.png");
  down = new DI(800, 350, 50, 250, "img/down.png");
  bird = new DI(10, 279, 42, 32, "img/0.gif");
  tid = setInterval(drawing, 100); //每100毫秒调用一次 drawing 函数

  //按回车键 暂停 等待添加
  document.onkeydown = function (e) {
    if (e.keyCode == 32) {
      bird.y = bird.y - 50;
    }
    // 按回车键重新开始游戏
    if (e.keyCode == 13) {
      if (confirm("是否重新开始")) {
        location.reload();
      }
    }
  };
}

//绘制
function drawing() {
  bg.draw();
  up.draw();
  down.draw();
  bird.draw();
  circ();
}

function circ() {
  //鸟撞到天空
  if (bird.y <= 0 || bird.y + bird.height >= 600) {
    gameOver();
  }
  //鸟撞到上柱子的情况
  var upboolean =
    bird.x + bird.width > up.x &&
    bird.x < up.x + up.width &&
    bird.y > up.y &&
    bird.y < up.y + up.height;
  var downboolean =
    bird.x + bird.width > down.x &&
    bird.x < down.x + up.width &&
    bird.y + bird.height > down.y &&
    bird.y + bird.height < down.y + down.height;
  if (upboolean || downboolean) {
    clearInterval(tid);
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("game over，撞柱子", 300, 200);
    btn.style.display = "block";
  }

  bird.y = bird.y + 5;
  //障碍物在画布内
  if (up.x + up.width > 0) {
    up.x = up.x - 10;
    down.x = down.x - 10;
  } else {
    up.x = c.width;
    down.x = c.width;

    up.height = 150 + parseInt(200 * Math.random());

    down.y = up.height + 100;
    down.height = c.height - down.y;
    score++; // 增加分数
    scoreDisplay.innerText = score; // 更新显示分数
  }
}
function gameOver() {
  clearInterval(tid);
  ctx.fillStyle = "red";
  ctx.font = "30px Arial";
  ctx.fillText("game over 撞到天空或地面 ", 300, 200);
  btn.style.display = "block";
}

//图片绘制
function DI(x, y, width, height, src) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  var img = new Image(); //创建图像对象

  if (width == 42) {
    this.draw = function () {
      birdindex++;
      img.src = birdSrc[birdindex % 3];
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };
  } else {
    //绘制图片方法
    this.draw = function () {
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };
  }
  img.src = src;
}
