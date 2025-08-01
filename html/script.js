document.addEventListener('DOMContentLoaded', function() {

    // 1. スクロールアニメーション
    const targets = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // isIntersectingプロパティで、要素がビューポートに入ったか判定
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // ビューポートを基準
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたらトリガー
    });

    // 各ターゲット要素を監視
    targets.forEach(target => {
        observer.observe(target);
    });

    // 2. モバイルメニューの開閉機能
    const menuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('.header-nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('is-active');
        nav.classList.toggle('is-open');
    });

    // 3. ナビゲーションリンクをクリックしたらメニューを閉じる
    const navLinks = document.querySelectorAll('.header-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('is-open')) {
                menuButton.classList.remove('is-active');
                nav.classList.remove('is-open');
            }
        });
    });

});
