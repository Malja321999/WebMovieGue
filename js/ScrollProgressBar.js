let scrollPrecentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop - document.body.scrollTop;

  let scrollValue = Math.round(
    ((pos * 100) /
      (document.documentElement.clientHeight - document.body.clientHeight)) *
      -1
  );

  scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
  progressValue.innerHTML = `<p>${scrollValue}%</p>`;
};
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;
