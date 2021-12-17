// 首屏轮播图
let banners = document.getElementsByClassName("kv-img")[0].children;
let navs = document.getElementsByClassName("img-nav-wrap")[0].children;

let count = 0;
let timer = 0;
// 初始化状态
const init = () => {
  banners[count].style.opacity = 1;
  navs[count].style.border = "2px solid #e1c7ca";
};
init();

const setTimer = () =>
  setInterval(() => {
    count = count % banners.length;
    banners[count].style.opacity = 0;
    navs[count].style.border = "2px solid transparent";
    banners[(count + 1) % banners.length].style.opacity = 1;
    navs[(count + 1) % navs.length].style.border = "2px solid #e1c7ca";
    count++;
  }, 5000);

// nav点击切换当前图片
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", () => {
    clearInterval(timer);
    banners[count].style.opacity = 0;
    navs[count].style.border = "2px solid transparent";
    count = [].indexOf.call(navs, navs[i]);
    init(); // 立即显示选中当前图片
    timer = setTimer(); // 根据当前index重新设置定时器
  });
}

timer = setTimer();
