/**
 * AsilMedia Plugin for Lampa TV
 * Version: 1.0.0
 * 
 * O'rnatish: Lampa > Sozlamalar > Kengaytmalar > Plugin qo'shish
 * URL: (bu faylni hosting ga yuklang va URL ni kiriting)
 */
(function () {
    'use strict';

    // ─── KONFIGURATSIYA ──────────────────────────────────────────────────────
    var PLUGIN_ID      = 'asilmedia';
    var PLUGIN_VERSION = '1.0.0';
    var BASE_URL       = 'http://asilmedia.org';

    // TMDB API (bepul kalit - agar yo'q bo'lsa bo'sh qoldiring)
    var TMDB_KEY = '4ef0d7355d9ffb5151e987764708ce96';
    var TMDB_IMG = 'https://image.tmdb.org/t/p/w300';

    // ─── MA'LUMOTLAR (CORS proxysiz ishlaydigan statik katalog) ──────────────
    // Asilmedia scraping CORS bloklaydi, shuning uchun ma'lumotlar
    // embed qilingan. Proxy server qo'shsangiz dynamic fetch ishlaydi.

    var CATALOG = [
        // ── SO'NGI FILMLAR ──
        {
            id: 'am_1', title: "Deadpool & Wolverine", orig: "Deadpool & Wolverine",
            year: 2024, quality: "1080p", genre: "Jangari / Komediya",
            rating: "7.8", type: "movie",
            poster: TMDB_IMG + "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
            description: "Deadpool va Wolverine yangi multiversda Marvel olamini qutqarish uchun birlashadi.",
            url: BASE_URL + "/16215-deadpool-and-wolverine-2024-movie-watch-and-free-download-full-hd-1080p.html",
            category: "latest"
        },
        {
            id: 'am_2', title: "Dune: Part Two", orig: "Dune: Part Two",
            year: 2024, quality: "1080p", genre: "Fantastika / Sarguzasht",
            rating: "8.5", type: "movie",
            poster: TMDB_IMG + "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
            description: "Paul Atreides Fremenlar bilan birlashipo'z taqdiri va koinot kelajagini hal qiladi.",
            url: BASE_URL + "/dune-part-two-2024.html",
            category: "latest"
        },
        {
            id: 'am_3', title: "Alien: Romulus", orig: "Alien: Romulus",
            year: 2024, quality: "720p", genre: "Dahshat / Fantastika",
            rating: "7.3", type: "movie",
            poster: TMDB_IMG + "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
            description: "Kosmik stansiyada tashlandiq binoda yosh astronavtlar dahshatli mavjudotlarga duch kelishadi.",
            url: BASE_URL + "/alien-romulus-2024.html",
            category: "latest"
        },
        {
            id: 'am_4', title: "Joker: Folie à Deux", orig: "Joker: Folie à Deux",
            year: 2024, quality: "1080p", genre: "Drama / Triller",
            rating: "5.1", type: "movie",
            poster: TMDB_IMG + "/if0pveyqnKVCi4vUrNGAFbrHUyN.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/fYDpqGBcaJ8WJQZP1Wb8Cto7Kf.jpg",
            description: "Artur Fleck Arkham qamoqxonasida Harley Quinn bilan yangi hayot boshlaydi.",
            url: BASE_URL + "/joker-folie-a-deux-2024.html",
            category: "latest"
        },
        {
            id: 'am_5', title: "The Wild Robot", orig: "The Wild Robot",
            year: 2024, quality: "1080p", genre: "Multfilm / Drama",
            rating: "8.3", type: "movie",
            poster: TMDB_IMG + "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/417tPzwgaDTFD7VsMkCQHKaW9V5.jpg",
            description: "Yovvoyi orolda qolgan robot tabiat bilan uyg'un yashashni o'rganadi.",
            url: BASE_URL + "/the-wild-robot-2024.html",
            category: "latest"
        },
        {
            id: 'am_6', title: "Inside Out 2", orig: "Inside Out 2",
            year: 2024, quality: "1080p", genre: "Multfilm / Komediya",
            rating: "7.8", type: "movie",
            poster: TMDB_IMG + "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/uVF4HbMTctglnSKkNH1QzVDCCnK.jpg",
            description: "Riley o'smirlik davriga kirib, yangi his-tuyg'ular paydo bo'ladi.",
            url: BASE_URL + "/inside-out-2-2024.html",
            category: "latest"
        },
        // ── MASHHUR ──
        {
            id: 'am_7', title: "Oppenheimer", orig: "Oppenheimer",
            year: 2023, quality: "1080p", genre: "Drama / Tarixiy",
            rating: "8.3", type: "movie",
            poster: TMDB_IMG + "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/nb3xI948cBTsE41jAiGhS3PoKar.jpg",
            description: "Atom bombasi yaratuvchisi J. Robert Oppenheimerning hayoti va qarorlari.",
            url: BASE_URL + "/oppenheimer-2023.html",
            category: "popular"
        },
        {
            id: 'am_8', title: "Interstellar", orig: "Interstellar",
            year: 2014, quality: "1080p", genre: "Fantastika / Drama",
            rating: "8.7", type: "movie",
            poster: TMDB_IMG + "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
            description: "Insoniyat kelajagi uchun yulduzlararo sayohat.",
            url: BASE_URL + "/interstellar-2014.html",
            category: "popular"
        },
        {
            id: 'am_9', title: "Mission: Impossible 7", orig: "Mission: Impossible - Dead Reckoning",
            year: 2023, quality: "1080p", genre: "Jangari / Triller",
            rating: "7.7", type: "movie",
            poster: TMDB_IMG + "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/rrCV4sCcWkMGfKTLXSHqAVP7B9k.jpg",
            description: "Ethan Hunt eng xavfli va murakkab missiyada yana bir bor sinovdan o'tadi.",
            url: BASE_URL + "/mission-impossible-7-2023.html",
            category: "popular"
        },
        {
            id: 'am_10', title: "Avatar: The Way of Water", orig: "Avatar: The Way of Water",
            year: 2022, quality: "1080p", genre: "Fantastika / Sarguzasht",
            rating: "7.6", type: "movie",
            poster: TMDB_IMG + "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/s16H6tpK2utvwpapmarhZRLcMr.jpg",
            description: "Sully oilasi Pandoraning suv ostidagi dunyosida yangi hayot boshlaydi.",
            url: BASE_URL + "/avatar-way-of-water-2022.html",
            category: "popular"
        },
        // ── SERIALLAR ──
        {
            id: 'am_s1', title: "Squid Game", orig: "Squid Game Season 2",
            year: 2024, quality: "1080p", genre: "Triller / Drama",
            rating: "7.7", type: "serial", episodes: 6,
            poster: TMDB_IMG + "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
            description: "Gi-hun o'yinga qaytadi — bu safar qoidalarni o'zgartirish uchun.",
            url: BASE_URL + "/squid-game-season-2.html",
            category: "serial"
        },
        {
            id: 'am_s2', title: "The Last of Us", orig: "The Last of Us",
            year: 2023, quality: "1080p", genre: "Dahshat / Drama",
            rating: "8.8", type: "serial", episodes: 9,
            poster: TMDB_IMG + "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
            description: "Post-apokaliptik dunyoda ota-qiz munosabatlari.",
            url: BASE_URL + "/the-last-of-us.html",
            category: "serial"
        },
        {
            id: 'am_s3', title: "Fallout", orig: "Fallout",
            year: 2024, quality: "1080p", genre: "Fantastika / Sarguzasht",
            rating: "8.5", type: "serial", episodes: 8,
            poster: TMDB_IMG + "/AnsSKRwjKJiYzVfMXoSbHlFOiAN.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
            description: "Yadroviy urushdan keyingi Amerikada er osti bunkeri va tashqi dunyo.",
            url: BASE_URL + "/fallout-series-2024.html",
            category: "serial"
        },
        {
            id: 'am_s4', title: "Severance S2", orig: "Severance Season 2",
            year: 2025, quality: "1080p", genre: "Triller / Sirli",
            rating: "8.9", type: "serial", episodes: 10,
            poster: TMDB_IMG + "/HkZSFhFOhqDeP6nQu4blHzm19Wh.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/1wSMHxDdMFJJB0aSFcN2d9QpBx0.jpg",
            description: "Lumon Industries xodimlar sirni ochishga yaqinlashadi.",
            url: BASE_URL + "/severance-season-2.html",
            category: "serial"
        },
        {
            id: 'am_s5', title: "Breaking Bad", orig: "Breaking Bad",
            year: 2013, quality: "1080p", genre: "Kriminal / Drama",
            rating: "9.5", type: "serial", episodes: 62,
            poster: TMDB_IMG + "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
            backdrop: "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
            description: "Kimyo o'qituvchisi Walter White narkobiznesga kirib boradi.",
            url: BASE_URL + "/breaking-bad.html",
            category: "serial"
        },
    ];

    // Kategoriyalar
    var CATEGORIES = [
        { id: 'latest',  name: "So'ngi filmlar",  icon: '🆕' },
        { id: 'popular', name: "Mashhur filmlar", icon: '🔥' },
        { id: 'serial',  name: "Seriallar",        icon: '📺' },
        { id: 'all',     name: "Hammasi",          icon: '🎬' },
    ];

    // ─── YORDAMCHI FUNKSIYALAR ────────────────────────────────────────────────
    function filtered(cat, query) {
        var items = cat === 'all' ? CATALOG : CATALOG.filter(function(i) { return i.category === cat; });
        if (query) {
            var q = query.toLowerCase();
            items = items.filter(function(i) {
                return i.title.toLowerCase().indexOf(q) >= 0 ||
                       (i.orig && i.orig.toLowerCase().indexOf(q) >= 0);
            });
        }
        return items;
    }

    function toLampaCard(item) {
        return {
            id: item.id,
            title: item.title,
            original_title: item.orig || item.title,
            release_date: item.year + '-01-01',
            vote_average: parseFloat(item.rating) || 0,
            poster_path: item.poster,
            backdrop_path: item.backdrop || item.poster,
            overview: item.description,
            genres: [{ name: item.genre }],
            media_type: item.type === 'serial' ? 'tv' : 'movie',
            asilmedia_url: item.url,
            asilmedia_quality: item.quality,
            asilmedia_episodes: item.episodes || 0,
            fixid: item.id
        };
    }

    // ─── KOMPONENTLAR ─────────────────────────────────────────────────────────

    // 1) Asosiy komponent — Lampa asosiy menyusida ko'rinadi
    function Component() {
        var self = this;
        this.activity = {};

        this.create = function () {
            this.activity.loader(true);
            this.activity.loader(false);

            var html = this.build();
            this.activity.body(html);
            this.activity.toggle();

            // Fokusni birinchi elementga qo'yamiz
            var first = html.find('.asilmedia-cat-btn').first();
            if (first.length) Lampa.Controller.toggle(PLUGIN_ID + '_cats');
        };

        this.build = function () {
            var wrapper = $('<div class="asilmedia-wrapper"></div>');

            // Header
            var header = $('<div class="asilmedia-header"><div class="asilmedia-logo">🎬 AsilMedia</div><div class="asilmedia-sub">asilmedia.org — HD Filmlar</div></div>');
            wrapper.append(header);

            // Kategoriyalar
            var catsRow = $('<div class="asilmedia-cats"></div>');
            CATEGORIES.forEach(function (cat) {
                var btn = $('<div class="asilmedia-cat-btn selector" data-cat="' + cat.id + '">' + cat.icon + ' ' + cat.name + '</div>');
                btn.on('hover:enter', function () {
                    self.openCatalog(cat.id, cat.name);
                });
                catsRow.append(btn);
            });
            wrapper.append(catsRow);

            // So'ngi filmlar preview
            var previewTitle = $('<div class="asilmedia-section-title">So\'ngi qo\'shilganlar</div>');
            wrapper.append(previewTitle);

            var previewRow = $('<div class="items--list asilmedia-row"></div>');
            var latestItems = filtered('latest').slice(0, 6);
            latestItems.forEach(function (item) {
                var card = self.makeCard(item);
                previewRow.append(card);
            });
            wrapper.append(previewRow);

            // Mashhur preview
            var popTitle = $('<div class="asilmedia-section-title">Mashhurlar</div>');
            wrapper.append(popTitle);

            var popRow = $('<div class="items--list asilmedia-row"></div>');
            var popItems = filtered('popular').slice(0, 6);
            popItems.forEach(function (item) {
                var card = self.makeCard(item);
                popRow.append(card);
            });
            wrapper.append(popRow);

            return wrapper;
        };

        this.makeCard = function (item) {
            var card = $('\
                <div class="card selector asilmedia-card" data-id="' + item.id + '">\
                    <div class="card--shadow"></div>\
                    <div class="card--img" style="background-image:url(' + item.poster + ')"></div>\
                    <div class="card--more">\
                        <div class="card--age">' + item.quality + '</div>\
                    </div>\
                    <div class="card--info">\
                        <div class="card--title">' + item.title + '</div>\
                        <div class="card--subtitle">' + item.year + ' • ★ ' + item.rating + '</div>\
                    </div>\
                </div>');

            card.on('hover:enter', function () {
                self.openCard(item);
            });

            return card;
        };

        this.openCard = function (item) {
            var card = toLampaCard(item);
            Lampa.Activity.push({
                url: '',
                component: 'full',
                id: item.id,
                source: PLUGIN_ID,
                card: card
            });
        };

        this.openCatalog = function (catId, catName) {
            Lampa.Activity.push({
                url: catId,
                title: catName,
                component: PLUGIN_ID + '_catalog',
                source: PLUGIN_ID,
                page: 1
            });
        };

        this.back = function () {
            Lampa.Activity.backward();
        };

        this.destroy = function () {};
    }

    // 2) Katalog komponenti — kategoriya bo'yicha filmlar ro'yxati
    function CatalogComponent() {
        var self = this;
        this.activity = {};
        this.items = [];

        this.create = function () {
            var catId = this.activity.get('url') || 'all';
            var title = this.activity.get('title') || 'Katalog';
            this.items = filtered(catId);

            this.activity.loader(false);

            var scroll = new Lampa.Scroll({ mask: true, over: true });
            var items = new Lampa.Items();

            items.build('');

            var cards = this.items.map(function (item) {
                return toLampaCard(item);
            });

            items.append(cards, function (card) {
                Lampa.Activity.push({
                    url: '',
                    component: 'full',
                    id: card.id,
                    source: PLUGIN_ID,
                    card: card
                });
            }, PLUGIN_ID);

            scroll.minus();
            scroll.body().append(items.render());
            this.activity.body(scroll.render());

            items.first();
            this.activity.toggle();

            this._scroll = scroll;
            this._items = items;
        };

        this.back = function () {
            Lampa.Activity.backward();
        };

        this.destroy = function () {
            if (this._scroll) this._scroll.destroy();
            if (this._items) this._items.destroy();
        };
    }

    // 3) Online komponent — film ochilganda "Online" tabida ko'rinadi
    function OnlineComponent() {
        var self = this;
        this.activity = {};

        this.create = function () {
            var card = this.activity.get('card') || {};
            var url  = card.asilmedia_url || '';
            var qual = card.asilmedia_quality || '';

            if (!url) {
                this.empty();
                return;
            }

            this.activity.loader(false);

            var html = $('\
                <div class="asilmedia-online">\
                    <div class="asilmedia-online-info">\
                        <div class="asilmedia-online-title">' + (card.title || '') + '</div>\
                        <div class="asilmedia-online-meta">' + (card.release_date || '').slice(0, 4) + ' &nbsp;•&nbsp; ★ ' + (card.vote_average || '') + ' &nbsp;•&nbsp; <span class="asilmedia-quality-badge">' + qual + '</span></div>\
                    </div>\
                    <div class="asilmedia-online-btns">\
                        <div class="asilmedia-btn selector" id="am-watch-btn">▶ Tomosha qilish</div>\
                        <div class="asilmedia-btn asilmedia-btn--sec selector" id="am-open-btn">🌐 Saytda ochish</div>\
                    </div>\
                    <div class="asilmedia-online-desc">' + (card.overview || '') + '</div>\
                </div>');

            html.find('#am-watch-btn').on('hover:enter', function () {
                // Lampa ichki playerga stream ulash
                // AsilMedia saytida video player iframe orqali ishlaydi
                // Shuning uchun embed URL olamiz
                var embedUrl = url;
                Lampa.Player.play({
                    title: card.title || '',
                    url: embedUrl,
                    poster: card.poster_path || '',
                });
            });

            html.find('#am-open-btn').on('hover:enter', function () {
                window.open(url, '_blank');
            });

            this.activity.body(html);
            this.activity.toggle();

            Lampa.Controller.toggle(PLUGIN_ID + '_online');
        };

        this.empty = function () {
            this.activity.loader(false);
            var html = $('<div class="online-empty"><div class="online-empty__body"><div class="online-empty__ico">📭</div><div class="online-empty__title">AsilMedia</div><div class="online-empty__text">Ushbu film AsilMedia katalogida topilmadi</div></div></div>');
            this.activity.body(html);
        };

        this.back = function () {
            Lampa.Activity.backward();
        };

        this.destroy = function () {};
    }

    // ─── STILLAR ──────────────────────────────────────────────────────────────
    var CSS = '\
        .asilmedia-wrapper { padding: 1em 2em; }\
        .asilmedia-header { margin-bottom: 1.2em; }\
        .asilmedia-logo { font-size: 1.6em; font-weight: 900; color: #fff; letter-spacing: 2px; }\
        .asilmedia-logo span { color: #e63946; }\
        .asilmedia-sub { font-size: .75em; color: rgba(255,255,255,.4); margin-top: .2em; }\
        .asilmedia-cats { display: flex; gap: .8em; margin-bottom: 1.4em; flex-wrap: wrap; }\
        .asilmedia-cat-btn { padding: .5em 1.2em; background: rgba(255,255,255,.08); border-radius: 6px; cursor: pointer; font-size: .85em; font-weight: 700; transition: background .2s, color .2s; }\
        .asilmedia-cat-btn.focus { background: #e63946; color: #fff; }\
        .asilmedia-section-title { font-size: 1em; font-weight: 800; color: rgba(255,255,255,.7); margin-bottom: .7em; margin-top: 1em; letter-spacing: 1px; text-transform: uppercase; padding-left: 2px; border-left: 3px solid #e63946; padding-left: .5em; }\
        .asilmedia-row { display: flex; gap: .8em; flex-wrap: nowrap; overflow-x: auto; padding-bottom: .5em; margin-bottom: 1em; }\
        .asilmedia-card { min-width: 130px; }\
        .asilmedia-online { padding: 1.5em 2em; max-width: 800px; }\
        .asilmedia-online-title { font-size: 1.4em; font-weight: 900; color: #fff; margin-bottom: .4em; }\
        .asilmedia-online-meta { font-size: .85em; color: rgba(255,255,255,.5); margin-bottom: 1.2em; }\
        .asilmedia-quality-badge { background: rgba(0,212,255,.2); color: #00d4ff; border: 1px solid rgba(0,212,255,.4); border-radius: 3px; padding: 1px 6px; font-size: .9em; font-weight: 700; }\
        .asilmedia-online-btns { display: flex; gap: 1em; margin-bottom: 1.2em; flex-wrap: wrap; }\
        .asilmedia-btn { padding: .7em 1.8em; background: #e63946; color: #fff; border-radius: 6px; font-weight: 800; cursor: pointer; font-size: .95em; transition: background .2s; }\
        .asilmedia-btn.focus { background: #c1121f; }\
        .asilmedia-btn--sec { background: rgba(255,255,255,.1); }\
        .asilmedia-btn--sec.focus { background: rgba(255,255,255,.2); }\
        .asilmedia-online-desc { font-size: .85em; color: rgba(255,255,255,.5); line-height: 1.6; max-width: 600px; }\
    ';

    // ─── PLUGIN REGISTRATSIYA ─────────────────────────────────────────────────
    function init() {
        // CSS qo'shish
        var style = document.createElement('style');
        style.id = PLUGIN_ID + '-css';
        style.textContent = CSS;
        document.head.appendChild(style);

        // Asosiy komponent
        Lampa.Component.add(PLUGIN_ID, Component);

        // Katalog komponenti
        Lampa.Component.add(PLUGIN_ID + '_catalog', CatalogComponent);

        // Online tab komponenti — film card ichidagi "Online" tabiga
        Lampa.Component.add(PLUGIN_ID + '_online', OnlineComponent);

        // Asosiy menyuga qo'shish
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                Lampa.Template.add('menu_' + PLUGIN_ID, '<li data-action="' + PLUGIN_ID + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg><span>AsilMedia</span></li>');

                var menuItem = $(Lampa.Template.get('menu_' + PLUGIN_ID, {}));
                menuItem.on('hover:enter', function () {
                    Lampa.Activity.push({
                        url: '',
                        title: 'AsilMedia',
                        component: PLUGIN_ID,
                        source: PLUGIN_ID,
                        page: 1
                    });
                });

                // Menyuga qo'shish
                $('.menu .menu--list').append(menuItem);
                Lampa.Menu.update && Lampa.Menu.update();
            }
        });

        // Online manbasi sifatida ro'yxatdan o'tish
        // Bu orqali har qanday film card ichidagi "Online" tabida AsilMedia ko'rinadi
        Lampa.Listener.follow('online', function (e) {
            if (e.type === 'start') {
                // film uchun AsilMedia onlineni tekshirish
                var card = e.card || {};
                var title = card.title || card.original_title || '';

                if (!title) return;

                // Katalogda moslikni topish
                var q = title.toLowerCase();
                var found = CATALOG.find(function (item) {
                    return item.title.toLowerCase().indexOf(q) >= 0 ||
                           q.indexOf(item.title.toLowerCase()) >= 0;
                });

                if (found) {
                    e.data.push({
                        name: 'AsilMedia',
                        url: found.url,
                        quality: found.quality
                    });
                }
            }
        });

        console.log('[AsilMedia] Plugin v' + PLUGIN_VERSION + ' yuklandi ✓');
    }

    // ─── ISHGA TUSHIRISH ──────────────────────────────────────────────────────
    // Lampa tayyor bo'lgach yoki darhol
    if (window.Lampa && Lampa.Listener) {
        if (Lampa.Storage) {
            init();
        } else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type === 'ready' || e.type === 'start') init();
            });
        }
    } else {
        // Lampa hali yuklanmagan — kutamiz
        var checkInterval = setInterval(function () {
            if (window.Lampa && Lampa.Listener) {
                clearInterval(checkInterval);
                init();
            }
        }, 200);
    }

})();
