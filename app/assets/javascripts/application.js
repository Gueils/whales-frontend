//= require app-bundle
//= require vendor-bundle
//= require application_non_webpack
//= require highlight
//= require workspace

setInterval(function() {
    engines = document.getElementsByClassName('whales__belugas__engines__item');
    randomElement = Math.floor(Math.random() * engines.length);

    for (i = 0; i < engines.length; i += 1 ) {
        engines[i].className = 'whales__belugas__engines__item hidden';
    };

    const selectedEngine = engines[randomElement];
    selectedEngine.className = 'whales__belugas__engines__item';
}, 5000);
