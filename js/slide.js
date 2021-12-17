window.onload = () => {
  // 控制滚动至可视区域时显示元素进入动画
  let threshold = 100; // 滚出页面多少像素播放slide动画
  let slideDoms = document.getElementsByClassName("slidable");
  const clientHeight = document.documentElement.clientHeight;

  const setAnimClass = () => {
    for (let i = 0; i < slideDoms.length; i++) {
      // 最底部元素不需要偏移量
      threshold = i === slideDoms.length - 1 ? 0 : 100;
      if (slideDoms[i].getBoundingClientRect().top < clientHeight - threshold)
        !slideDoms[i].classList.contains("slideIn") && slideDoms[i].classList.add("slideIn");
    }
  };

  const header = document.getElementById("fixed-header");
  const setHeaderDisplay = () => {
    let scrollTop = document.documentElement.scrollTop;

    // 滚动距离小于200隐藏
    scrollTop < 200
      ? header.classList.remove("fixed-header-show")
      : header.classList.add("fixed-header-show");
  };

  setAnimClass(); // 初始化

  window.addEventListener("scroll", () => {
    setAnimClass();
    setHeaderDisplay();
  });

  // 点击左上角LOGO返回首页
  document
    .getElementsByClassName("logo")[0]
    .addEventListener("click", () => (window.location.href = "./home.html"));
};
