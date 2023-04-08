const tabs = document.querySelector('.tabs');
const tabsBtn = document.querySelectorAll('.tabs__item-btn');
const card = document.querySelectorAll('.card__product');

    tabs.addEventListener('click', (tab) => {
        const tabTarget = tab.target;
        if (tabTarget.classList.contains('tabs__item-btn')) {
            const path = tabTarget.dataset.path;

            tabsBtn.forEach(el => {
                el.classList.remove('tabs__item--active');
                tabTarget.classList.add('tabs__item--active')
            });

            card.forEach(el => {
                el.classList.remove('card__product--visible');
            });
            document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
                el.closest('.card__product').classList.add('card__product--visible');
            });

            if(path == 'all') {
                card.forEach(el => {
                    el.classList.add('card__product--visible');
                });
            }
            
        }
    });