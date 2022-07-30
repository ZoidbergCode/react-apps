let refresher = document.getElementById('pre-info__update');
function refresh() {
  (refresher.style = 'transition: all 0.7s linear; transform: rotate(360deg)'),
    setTimeout(function () {
      refresher.style = 'transition: none';
    }, 750);
}
refresher.addEventListener('click', refresh);
