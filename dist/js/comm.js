const headerEl = document.querySelector("#header");
// 페이지에 스크롤 이벤트 추가
window.addEventListener(
  "scroll",
  // _.throttle(함수, 시간)
  // 스크롤이 300ms마다 한번씩 실행되도록 설정
  _.throttle(function () {
    console.log(window.scrollY);
    // 페이지의 스크롤 위치가 200px 보다 크면
    if (window.scrollY > 200) {
      gsap.to(headerEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 페이지의 스크롤 위치가 200px 보다 작으면
      gsap.to(headerEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// AOS
AOS.init();

// 화면bg전환
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#about",
  {
    backgroundColor: gsap.getProperty("html", "--light"),
  },
  {
    scrollTrigger: {
      trigger: ".color-dark",
      scrub: true,
      end: "bottom bottom",
    },
    backgroundColor: gsap.getProperty("html", "--dark"),
  }
);

// 애니메이션 작동
const animatedElement = document.querySelector(".about-ani-txt");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 700) {
    animatedElement.style.webkitAnimation =
      "focus-in-contract 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    animatedElement.style.animation =
      "focus-in-contract 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
  }
});
const animatedElement2 = document.querySelector(".about-ani");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 700) {
    animatedElement2.style.webkitAnimation = "bounce-in-left 3s both";
    animatedElement2.style.animation = "bounce-in-left 3s both";
  }
});
