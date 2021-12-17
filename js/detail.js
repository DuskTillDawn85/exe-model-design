// 首屏轮播图
let images = document.getElementsByClassName("image");
let navs = document.getElementsByClassName("preview-wrap")[0].children;
const paginator = document.getElementsByClassName("paginator");

let count = 0;
let timer = 0;
// 初始化状态
const init = () => {
  images[count].style.opacity = 1;
  navs[count].style.border = "2px solid #e1c7ca";
};
init();

const setTimer = () =>
  setInterval(() => {
    count = count % images.length;
    images[count].style.opacity = 0;
    navs[count].style.border = "2px solid transparent";
    images[(count + 1) % images.length].style.opacity = 1;
    navs[(count + 1) % navs.length].style.border = "2px solid #e1c7ca";
    count++;
  }, 4000);

// nav点击切换当前图片
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", () => {
    clearInterval(timer);
    images[count].style.opacity = 0;
    navs[count].style.border = "2px solid transparent";
    count = [].indexOf.call(navs, navs[i]);
    init(); // 立即显示选中当前图片
    timer = setTimer(); // 根据当前index重新设置定时器
  });
}

// 点击左右按钮切换当前图片
for (let i = 0; i < paginator.length; i++) {
  paginator[i].addEventListener("click", () => {
    clearInterval(timer);
    images[count].style.opacity = 0;
    navs[count].style.border = "2px solid transparent";
    const index = [].indexOf.call(paginator, paginator[i]);
    index === 0 ? count-- : count++; // 左减右加
    init(); // 立即显示选中当前图片
    timer = setTimer(); // 根据当前index重新设置定时器
  });
}

timer = setTimer();
