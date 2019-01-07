let staticCache = 'my-cache-1'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(staticCache).then(function(cache){
            return cache.addAll(
                [
                    './img/1.jpg',
                    './img/2.jpg',
                    './img/3.jpg',
                    './img/4.jpg',
                    './img/5.jpg',
                    './img/6.jpg',
                    './img/7.jpg',
                    './img/8.jpg',
                    './img/9.jpg',
                    './img/10.jpg',
                    './js/main.js',
                    './js/dbhelper.js',
                    './js/restaurant_info.js',
                    './css/styles.css',
                    './',
                    './index.html',
                    './restaurant.html',
                    './data/restaurants.json',
                    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                    'http://localhost:5500/data/restaurants.json',
                    ' http://localhost:5500/data/restaurants.json',
                    'http://localhost:5500/data/restaurants.json',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A ',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoiamFncmFqNTI1NCIsImEiOiJjanB5Nm1ydDgxbDE2NDJudG5sNHhmeDA1In0.ORTfhQOgg1-UY4cE8MHy8A',
                    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
                    ' https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'

                ]
            );
        })
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
       caches.keys().then(function(cacheNames) {
          return Promise.all(
             cacheNames.filter(function(cacheName) {
                return cacheName.startsWith("my-cache") && cacheName != staticCache
             }).map(function(cacheName){
                return caches.delete(cacheName);
             })
          );
       })
    );
  });

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request)
        })
    )
})


