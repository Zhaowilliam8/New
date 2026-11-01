var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5d4dfcebd0d683048ef8a60534c803e7";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


<script>
document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentUrl = new URL(window.location.href);

    // 判断当前语言
    const currentLang = currentUrl.searchParams.get('lg') === 'en' ? 'en' : 'zh';

    // 高亮当前语言图片
    langButtons.forEach(function (button) {
        if (button.dataset.lang === currentLang) {
            button.classList.add('active');
        }
    });

    // 点击语言图片后切换
    langButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            langButtons.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
</script>
