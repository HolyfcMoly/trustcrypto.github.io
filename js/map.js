    // map

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap1 = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.78393906892987,37.56568549999993],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
            controls: ['zoomControl']
        },{suppressMapOpenBlock: true});
    
        myMap1.controls.remove('mapTools')
        .remove('geolocationControl')
        .remove('searchControl')
        .remove('routeButtonControl')
        .remove('trafficControl')
        .remove('typeSelector')
        .remove('fullscreenControl')
        .remove('rulerControl');
    
        myMap1.panes.get('ground').getElement().style.filter = 'invert(100%)';
        
        // Создание геообъекта с типом точка (метка).
        var myPlacemark = new ymaps.Placemark([55.78393906892987,37.56568549999993], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/svg/buble.svg',
            iconImageSize: [60, 60],
            iconImageOffset: [-15, -27]
        });
        myMap1.geoObjects.add(myPlacemark); 
    };