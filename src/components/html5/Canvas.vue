<style scoped>
  canvas {
    border: 1px solid black;
  }
</style>

<template>
  <div>
    <canvas id="rect"
            width="200"
            height="200"></canvas>
    <canvas id="line"
            width="200"
            height="200"></canvas>
    <canvas id="triangle"
            width="200"
            height="200"></canvas>
    <canvas id="arc"
            width="200"
            height="200"></canvas>
    <canvas id="bezier-curve"
            width="200px"
            height="200px"></canvas>
    <canvas id="style"
            width="200px"
            height="200px"></canvas>
    <canvas id="text"
            width="200px"
            height="200px"></canvas>
    <canvas id="img"
            width="200px"
            height="200px"></canvas>
    <canvas id="state"
            width="200px"
            height="200px"></canvas>
    <canvas id="solar"
            width="300px"
            height="300px"></canvas>
    <canvas id="time"
            width="300"
            height="300"></canvas>
  </div>
</template>
<script>
  export default {
    name: "Canvas",
    data() {
      return {};
    },
    methods: {
      fillRect() {
        // 绘制矩形图
        const canvas = document.querySelector("#rect");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d"); //获得 2d 上下文对象
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = "rgba(0,0,200,0.5)";
        ctx.fillRect(30, 30, 50, 50);

        ctx.save(); //保存坐原点平移之前的状态
        ctx.translate(80, 80);
        ctx.strokeRect(0, 0, 60, 60);
        ctx.restore(); //恢复到上一个状态
        ctx.translate(120, 120);
        ctx.fillRect(0, 0, 50, 50);
      },
      fillLine() {
        //绘制线段
        const canvas = document.querySelector("#line");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //新建一条path
        ctx.moveTo(10, 10); //把画笔移动到指定的坐标
        ctx.lineTo(80, 10); //绘制一套从当前位置到指定坐标的直线
        ctx.lineWidth = 10; //线宽
        ctx.closePath(); // 闭合路径
        ctx.stroke(); // 绘制路径

        const lineCap = ["butt", "round", "square"]; //线条末端样式
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(20 + 30 * i, 30);
          ctx.lineTo(20 + 30 * i, 100);
          ctx.lineWidth = 20;
          ctx.lineCap = lineCap[i];
          ctx.stroke();
        }

        ctx.lineWidth = 1;
        ctx.setLineDash([25, 5]); // [实线长度, 间隙长度]
        ctx.lineDashOffset = -0;
        ctx.strokeRect(100, 100, 90, 90);
      },
      fillTriangle() {
        //绘制(填充)三角形表框
        const canvas = document.querySelector("#triangle");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //新建一条path
        ctx.moveTo(10, 10);
        ctx.lineTo(50, 10);
        ctx.lineTo(50, 50);
        ctx.closePath(); // //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
        // ctx.stroke(); // stroke不会自动closePath()
        ctx.fill();

        var lineJoin = ["round", "bevel", "miter"]; // 线条与线条间接合处的样式
        ctx.lineWidth = 20;

        for (var i = 0; i < lineJoin.length; i++) {
          ctx.lineJoin = lineJoin[i];
          ctx.beginPath();
          ctx.moveTo(10, 30 + i * 50);
          ctx.lineTo(100, 100 + i * 50);
          ctx.lineTo(150, 50 + i * 50);
          ctx.lineTo(200, 100 + i * 50);
          ctx.lineTo(250, 50 + i * 50);
          ctx.stroke();
        }
      },
      fillArc() {
        //绘制圆弧
        const canvas = document.querySelector("#arc");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        ctx.beginPath(); //新建一条path
        ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150, 50, 40, 0, -Math.PI / 2, true);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(150, 150, 40, 0, Math.PI, false);
        ctx.fill();
      },
      fillCurve() {
        const canvas = document.getElementById("bezier-curve");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(10, 100); //起始点
        const cp1x = 50,
          cp1y = 30; //控制点
        const x = 120,
          y = 120; // 结束点
        //绘制二次贝塞尔曲线
        ctx.quadraticCurveTo(cp1x, cp1y, x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(10, 100, 10, 10);
        ctx.rect(cp1x, cp1y, 10, 10);
        ctx.rect(x, y, 10, 10);
        ctx.fill();
      },
      fillStyle() {
        //添加样式
        const canvas = document.getElementById("style");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            ctx.fillStyle =
              "rgb(" +
              Math.floor(255 - 42.5 * i) +
              "," +
              Math.floor(255 - 42.5 * j) +
              ",0)";
            ctx.fillRect(j * 50, i * 50, 50, 50);
          }
        }
      },
      fillText() {
        const canvas = document.querySelector("#text");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        ctx.font = "45px sans-serif";
        ctx.fillText("天若有情", 10, 60);
        ctx.strokeText("天若有情", 10, 150);
      },
      drawImg() {
        let img = new Image();
        img.src = "https://avatar.csdn.net/9/3/F/3_u012468376.jpg";
        const canvas = document.querySelector("#img");
        if (!canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        img.onload = function() {
          ctx.drawImage(img, 20, 20);
        };
      },
      state() {
        const canvas = document.getElementById("state");
        if (!canvas.getContext) return;
        var ctx = canvas.getContext("2d");

        ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
        ctx.save(); // 保存默认状态

        ctx.fillStyle = "red"; // 在原有配置基础上对颜色做改变
        ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

        ctx.save(); // 保存当前状态
        ctx.fillStyle = "#FFF"; // 再次改变颜色配置
        ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形

        ctx.restore(); // 重新加载之前的颜色状态
        ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形

        ctx.restore(); // 加载默认颜色配置
        ctx.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形
      },
      solar() {
        const sun = new Image();
        const earth = new Image();
        const moon = new Image();
        sun.src = "https://avatar.csdn.net/8/6/D/3_ailijing0823.jpg";
        earth.src = "https://avatar.csdn.net/1/D/A/3_weixin_40916042.jpg";
        moon.src = "https://avatar.csdn.net/3/A/E/3_baidu_32262373.jpg";

        let canvas = document.querySelector("#solar");
        const ctx = canvas.getContext("2d");
        const draw = () => {
          ctx.clearRect(0, 0, 300, 300); //清空所有的内容
          /*绘制 太阳*/
          ctx.drawImage(sun, 0, 0, 300, 300);

          ctx.save();
          ctx.translate(150, 150);

          //绘制earth轨道
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255,255,0,0.5)";
          ctx.arc(0, 0, 100, 0, 2 * Math.PI);
          ctx.stroke();

          let time = new Date();
          //绘制地球
          ctx.rotate(
            ((2 * Math.PI) / 60) * time.getSeconds() +
              ((2 * Math.PI) / 60000) * time.getMilliseconds()
          );
          ctx.translate(100, 0);
          ctx.drawImage(earth, -12, -12);

          //绘制月球轨道
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255,255,255,.3)";
          ctx.arc(0, 0, 40, 0, 2 * Math.PI);
          ctx.stroke();

          //绘制月球
          ctx.rotate(
            ((2 * Math.PI) / 6) * time.getSeconds() +
              ((2 * Math.PI) / 6000) * time.getMilliseconds()
          );
          ctx.translate(40, 0);
          ctx.drawImage(moon, -3.5, -3.5);
          ctx.restore();

          requestAnimationFrame(draw);
        };
        sun.onload = () => {
          draw();
        };
      },
      time() {
        let canvas = document.querySelector("#time");
        let ctx = canvas.getContext("2d");
        draw(ctx);
        function draw(ctx) {
          requestAnimationFrame(function step() {
            drawDial(ctx); //绘制表盘
            drawAllHands(ctx); //绘制时分秒针
            requestAnimationFrame(step);
          });
        }
        /*绘制时分秒针*/
        function drawAllHands(ctx) {
          let time = new Date();

          let s = time.getSeconds();
          let m = time.getMinutes();
          let h = time.getHours();

          let pi = Math.PI;
          let secondAngle = (pi / 180) * 6 * s; //计算出来s针的弧度
          let minuteAngle = (pi / 180) * 6 * m + secondAngle / 60; //计算出来分针的弧度
          let hourAngle = (pi / 180) * 30 * h + minuteAngle / 12; //计算出来时针的弧度

          drawHand(hourAngle, 60, 6, "red", ctx); //绘制时针
          drawHand(minuteAngle, 106, 4, "green", ctx); //绘制分针
          drawHand(secondAngle, 129, 2, "blue", ctx); //绘制秒针
        }
        /*绘制时针、或分针、或秒针
         * 参数1：要绘制的针的角度
         * 参数2：要绘制的针的长度
         * 参数3：要绘制的针的宽度
         * 参数4：要绘制的针的颜色
         * 参数4：ctx
         * */
        function drawHand(angle, len, width, color, ctx) {
          ctx.save();
          ctx.translate(150, 150); //把坐标轴的远点平移到原来的中心
          ctx.rotate(-Math.PI / 2 + angle); //旋转坐标轴。 x轴就是针的角度
          ctx.beginPath();
          ctx.moveTo(-4, 0);
          ctx.lineTo(len, 0); // 沿着x轴绘制针
          ctx.lineWidth = width;
          ctx.strokeStyle = color;
          ctx.lineCap = "round";
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        }

        /*绘制表盘*/
        function drawDial(ctx) {
          let pi = Math.PI;

          ctx.clearRect(0, 0, 300, 300); //清除所有内容
          ctx.save();

          ctx.translate(150, 150); //一定坐标原点到原来的中心
          ctx.beginPath();
          ctx.arc(0, 0, 148, 0, 2 * pi); //绘制圆周
          ctx.stroke();
          ctx.closePath();

          for (let i = 0; i < 60; i++) {
            //绘制刻度。
            ctx.save();
            ctx.rotate(-pi / 2 + (i * pi) / 30); //旋转坐标轴。坐标轴x的正方形从 向上开始算起
            ctx.beginPath();
            ctx.moveTo(110, 0);
            ctx.lineTo(140, 0);
            ctx.lineWidth = i % 5 ? 2 : 4;
            ctx.strokeStyle = i % 5 ? "blue" : "red";
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
          }
          ctx.restore();
        }
      }
    },

    mounted() {
      this.fillRect();
      this.fillLine();
      this.fillTriangle();
      this.fillArc();
      this.fillCurve();
      this.fillStyle();
      this.fillText();
      this.drawImg();
      this.state();
      this.solar();
      this.time();
    }
  };
</script>