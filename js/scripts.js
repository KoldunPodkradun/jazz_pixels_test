let content_item_active = document.querySelectorAll('.content__item_active'),
    map_feed_button = document.getElementById('map__feed-button'),
    content_map__info = document.getElementById('content__map__info'),
    content__map = document.getElementById('content__map');


if (content_item_active) {
    content_item_active.forEach((item) => {
        item.addEventListener('click', toggleFoo)
    });
}

if (map_feed_button) {
    map_feed_button.addEventListener('click', addClassFoo);
}

if (content_map__info) {
    content_map__info.addEventListener('click', removeClassFoo);
}


function toggleFoo() {
    this.classList.toggle('active');
}

function addClassFoo() {
    content__map.classList.add('open');
}

function removeClassFoo() {
    content__map.classList.remove('open');
}

