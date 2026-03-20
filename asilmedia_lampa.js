/**
 * ============================================================
 *  AsilMedia + O'zbek/Rus TV  —  Lampa Plugin
 *  Versiya: 2.0
 *  O'rnatish: Lampa → Sozlamalar → Kengaytmalar → Plugin URL
 * ============================================================
 */
(function () {
  'use strict';
 
  // ── MANIFEST ────────────────────────────────────────────────
  var MANIFEST = {
    type: 'complex',
    version: '2.0',
    name: 'AsilMedia',
    description: 'O\'zbek/Rus filmlar va jonli efir',
    url: ''                          // GitHub pages URLni shu yerga qo'ying
  };
 
  // ── O'ZBEK VA RUS TV KANALLARI ──────────────────────────────
  var TV_CHANNELS = [
    // O'ZBEKISTON
    { name: "O'zbekiston",      group: "O'zbek TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/O%27zbekiston_TV_logo.svg/200px-O%27zbekiston_TV_logo.svg.png",   url: "https://stream8.cinerama.uz/1001/tracks-v1a1/playlist.m3u8" },
    { name: "Yoshlar",          group: "O'zbek TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Yoshlar_TV.svg/200px-Yoshlar_TV.svg.png",                           url: "https://stream8.cinerama.uz/1002/tracks-v1a1/playlist.m3u8" },
    { name: "Sport UZ",         group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1003/tracks-v1a1/playlist.m3u8" },
    { name: "Toshkent",         group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1004/tracks-v1a1/playlist.m3u8" },
    { name: "Bolajon",          group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1005/tracks-v1a1/playlist.m3u8" },
    { name: "Madaniyat",        group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1006/tracks-v1a1/playlist.m3u8" },
    { name: "Dunyo bo'ylab",    group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1007/tracks-v1a1/playlist.m3u8" },
    { name: "Navo",             group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1008/tracks-v1a1/playlist.m3u8" },
    { name: "Mahalla",          group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1009/tracks-v1a1/playlist.m3u8" },
    { name: "Milliy",           group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1010/tracks-v1a1/playlist.m3u8" },
    { name: "O'zbekiston 24",   group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1011/tracks-v1a1/playlist.m3u8" },
    { name: "UzReport TV",      group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1013/tracks-v1a1/playlist.m3u8" },
    { name: "Zo'r TV",          group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1014/tracks-v1a1/playlist.m3u8" },
    { name: "Sevimli TV",       group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1017/tracks-v1a1/playlist.m3u8" },
    { name: "MY5",              group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1016/tracks-v1a1/playlist.m3u8" },
    { name: "Qaraqalpaqstan",   group: "O'zbek TV", logo: "",                                                                                                                              url: "https://stream8.cinerama.uz/1025/tracks-v1a1/playlist.m3u8" },
    // ROSSIYA
    { name: "Rossiya 1",        group: "Rossiya TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rossiya-1_logo.svg/200px-Rossiya-1_logo.svg.png",                  url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/russia1hd/playlist.m3u8" },
    { name: "Rossiya 24",       group: "Rossiya TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rossiya-24_logo.svg/200px-Rossiya-24_logo.svg.png",                url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/russia24hd/playlist.m3u8" },
    { name: "NTV",              group: "Rossiya TV", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NTV_Russia_logo.svg/200px-NTV_Russia_logo.svg.png",                url: "https://cdn.ntv.ru/unknown_russia/tracks-v1a1/playlist.m3u8" },
    { name: "Rossiya K",        group: "Rossiya TV", logo: "",                                                                                                                             url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/kultura/playlist.m3u8" },
    { name: "Zvezda",           group: "Rossiya TV", logo: "",                                                                                                                             url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/zvezda/playlist.m3u8" },
    { name: "Match TV",         group: "Rossiya TV", logo: "",                                                                                                                             url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/matchtv/playlist.m3u8" },
    { name: "MIR",              group: "Rossiya TV", logo: "",                                                                                                                             url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/mir/playlist.m3u8" },
    { name: "Karusel",          group: "Rossiya TV", logo: "",                                                                                                                             url: "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/karusel/playlist.m3u8" },
    { name: "OTR",              group: "Rossiya TV", logo: "",                                                                                                                             url: "http://zabava-htlive.cdn.ngenix.net/hls/CH_R01_OTR_KLNG_FILIAL/variant.m3u8" },
    { name: "5 Kanal",          group: "Rossiya TV", logo: "",                                                                                                                             url: "http://zabava-htlive.cdn.ngenix.net/hls/CH_5TV/variant.m3u8" },
    { name: "RBC",              group: "Rossiya TV", logo: "",                                                                                                                             url: "https://rbctv.akamaized.net/hls/live/571293/rbctv_web/playlist.m3u8" },
    { name: "RT Russian",       group: "Rossiya TV", logo: "",                                                                                                                             url: "https://rt-news.secure2.footprint.net/rt_russian/ngrp:rt_russian_all/playlist.m3u8" },
    { name: "RTR Planeta",      group: "Rossiya TV", logo: "",                                                                                                                             url: "https://dvr-player.smotrim.ru/live/smil:rtrp.smil/playlist.m3u8" }
  ];
 
  // ── ASILMEDIA FILMLAR ────────────────────────────────────────
  var MOVIES = [
    { id:1,  title:"Deadpool & Wolverine",     year:2024, rating:7.8, genre:"Jangari",   poster:"https://image.tmdb.org/t/p/w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",  url:"http://asilmedia.org/16215-deadpool-and-wolverine-2024-movie-watch-and-free-download-full-hd-1080p.html" },
    { id:2,  title:"Dune: Part Two",           year:2024, rating:8.5, genre:"Fantastika", poster:"https://image.tmdb.org/t/p/w300/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", url:"http://asilmedia.org/dune-part-two.html" },
    { id:3,  title:"Oppenheimer",              year:2023, rating:8.3, genre:"Drama",     poster:"https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",  url:"http://asilmedia.org/oppenheimer.html" },
    { id:4,  title:"Inside Out 2",             year:2024, rating:7.8, genre:"Multfilm",  poster:"https://image.tmdb.org/t/p/w300/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",  url:"http://asilmedia.org/inside-out-2.html" },
    { id:5,  title:"Alien: Romulus",           year:2024, rating:7.3, genre:"Dahshat",   poster:"https://image.tmdb.org/t/p/w300/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",  url:"http://asilmedia.org/alien-romulus.html" },
    { id:6,  title:"The Wild Robot",           year:2024, rating:8.3, genre:"Multfilm",  poster:"https://image.tmdb.org/t/p/w300/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",  url:"http://asilmedia.org/wild-robot.html" },
    { id:7,  title:"Interstellar",             year:2014, rating:8.7, genre:"Fantastika", poster:"https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", url:"http://asilmedia.org/interstellar.html" },
    { id:8,  title:"Avatar: The Way of Water", year:2022, rating:7.6, genre:"Sarguzasht", poster:"https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", url:"http://asilmedia.org/avatar2.html" },
    { id:9,  title:"Mission Impossible 7",     year:2023, rating:7.7, genre:"Jangari",   poster:"https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg",   url:"http://asilmedia.org/mi7.html" },
    { id:10, title:"Joker: Folie à Deux",      year:2024, rating:5.1, genre:"Triller",   poster:"https://image.tmdb.org/t/p/w300/if0pveyqnKVCi4vUrNGAFbrHUyN.jpg",  url:"http://asilmedia.org/joker2.html" },
    { id:11, title:"Fast X",                   year:2023, rating:5.9, genre:"Jangari",   poster:"https://image.tmdb.org/t/p/w300/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",  url:"http://asilmedia.org/fast-x.html" },
    { id:12, title:"Moana 2",                  year:2024, rating:6.5, genre:"Multfilm",  poster:"https://image.tmdb.org/t/p/w300/yh64qwwgiMBnYKC6V1RqzqqC3vB.jpg",  url:"http://asilmedia.org/moana2.html" },
    // Seriallar
    { id:13, title:"Squid Game S2",            year:2024, rating:7.7, genre:"Triller",   poster:"https://image.tmdb.org/t/p/w300/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",  url:"http://asilmedia.org/squid-game-s2.html",    type:"tv" },
    { id:14, title:"The Last of Us",           year:2023, rating:8.8, genre:"Drama",     poster:"https://image.tmdb.org/t/p/w300/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",  url:"http://asilmedia.org/the-last-of-us.html",   type:"tv" },
    { id:15, title:"Fallout",                  year:2024, rating:8.5, genre:"Fantastika", poster:"https://image.tmdb.org/t/p/w300/AnsSKRwjKJiYzVfMXoSbHlFOiAN.jpg", url:"http://asilmedia.org/fallout-series.html",   type:"tv" },
    { id:16, title:"Severance S2",             year:2025, rating:8.9, genre:"Triller",   poster:"https://image.tmdb.org/t/p/w300/HkZSFhFOhqDeP6nQu4blHzm19Wh.jpg",  url:"http://asilmedia.org/severance-s2.html",     type:"tv" },
    { id:17, title:"Breaking Bad",             year:2013, rating:9.5, genre:"Kriminal",  poster:"https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",   url:"http://asilmedia.org/breaking-bad.html",     type:"tv" },
    { id:18, title:"Shogun",                   year:2024, rating:8.6, genre:"Tarixiy",   poster:"https://image.tmdb.org/t/p/w300/jFfHVQWOzgCPFpSR7dFSblT3bpE.jpg",  url:"http://asilmedia.org/shogun.html",           type:"tv" }
  ];
 
  // ── STILLAR ─────────────────────────────────────────────────
  var STYLE = [
    '.am-wrap{padding:1.4em 2em}',
    '.am-head{display:flex;align-items:center;gap:12px;margin-bottom:1.2em}',
    '.am-logo{font-size:1.5em;font-weight:900;letter-spacing:2px;color:#fff}',
    '.am-logo em{color:#e63946;font-style:normal}',
    '.am-head-sub{font-size:.7em;color:rgba(255,255,255,.35);letter-spacing:1px}',
    '.am-tabs{display:flex;gap:8px;margin-bottom:1.2em;border-bottom:1px solid rgba(255,255,255,.08);padding-bottom:.8em}',
    '.am-tab{padding:.45em 1.1em;border-radius:4px;font-size:.82em;font-weight:700;letter-spacing:.5px;cursor:pointer;background:rgba(255,255,255,.06);color:rgba(255,255,255,.5);border:1px solid transparent;transition:all .15s}',
    '.am-tab.focus,.am-tab:hover{background:#e63946;color:#fff;border-color:#e63946}',
    '.am-row-title{font-size:.78em;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.45);margin:.9em 0 .5em;padding-left:.4em;border-left:2px solid #e63946}',
    '.am-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;margin-bottom:1.2em}',
    '.am-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden;cursor:pointer;transition:border-color .15s,transform .15s}',
    '.am-card.focus,.am-card:hover{border-color:#e63946;transform:scale(1.03)}',
    '.am-card-img{width:100%;aspect-ratio:2/3;object-fit:cover;display:block;background:#111}',
    '.am-card-body{padding:6px 8px 8px}',
    '.am-card-title{font-size:.75em;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#e8eaf0}',
    '.am-card-meta{font-size:.65em;color:rgba(255,255,255,.35);margin-top:2px;display:flex;gap:6px}',
    '.am-card-star{color:#f9ca24}',
    '.am-badge{font-size:.6em;padding:1px 4px;border-radius:2px;font-weight:800;letter-spacing:.5px}',
    '.am-badge-tv{background:rgba(255,183,77,.15);color:#ffb74d}',
    // TV kanal kartalari
    '.am-ch-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-bottom:1.2em}',
    '.am-ch-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:6px;padding:12px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:border-color .15s,transform .15s}',
    '.am-ch-card.focus,.am-ch-card:hover{border-color:#00d4ff;transform:scale(1.03)}',
    '.am-ch-logo{width:52px;height:52px;object-fit:contain;border-radius:4px}',
    '.am-ch-nologo{width:52px;height:52px;background:rgba(255,255,255,.08);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:1.6em}',
    '.am-ch-name{font-size:.78em;font-weight:700;text-align:center;color:#e8eaf0}',
    '.am-ch-group{font-size:.62em;color:rgba(255,255,255,.3);text-align:center}',
    // Pleyer ekrani
    '.am-play{padding:2em 2.5em;max-width:700px}',
    '.am-play-title{font-size:1.4em;font-weight:900;color:#fff;margin-bottom:.3em}',
    '.am-play-meta{font-size:.8em;color:rgba(255,255,255,.4);margin-bottom:1.2em;display:flex;gap:12px;flex-wrap:wrap}',
    '.am-play-meta b{color:#f9ca24}',
    '.am-btn-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:1.2em}',
    '.am-btn{padding:.65em 1.6em;border-radius:5px;font-weight:800;font-size:.9em;cursor:pointer;letter-spacing:.5px;border:none;transition:opacity .15s}',
    '.am-btn.focus,.am-btn:hover{opacity:.85}',
    '.am-btn-red{background:#e63946;color:#fff}',
    '.am-btn-dark{background:rgba(255,255,255,.12);color:#fff}',
    '.am-play-desc{font-size:.8em;color:rgba(255,255,255,.4);line-height:1.6;max-width:580px}'
  ].join('');
 
  // ── YORDAMCHI ───────────────────────────────────────────────
  function inject_style() {
    if (document.getElementById('am-style')) return;
    var s = document.createElement('style');
    s.id = 'am-style';
    s.textContent = STYLE;
    document.head.appendChild(s);
  }
 
  // Controller fokuslash
  function ctrl(name, el) {
    Lampa.Controller.add(name, {
      toggle: function () { Lampa.Controller.collectionSet(el); Lampa.Controller.collectionFocus(false, el); },
      left:   function () { Navigate.move('left'); },
      right:  function () { Navigate.move('right'); },
      up:     function () { Navigate.move('up'); },
      down:   function () { Navigate.move('down'); },
      back:   function () { Lampa.Activity.backward(); }
    });
    Lampa.Controller.toggle(name);
  }
 
  // ── ASOSIY KOMPONENT ────────────────────────────────────────
  function MainComp() {
    var self = this;
    this.activity = {};
    this._tab = 'movies';
 
    this.create = function () {
      inject_style();
      self._render();
    };
 
    this._render = function () {
      var wrap = $('<div class="am-wrap"></div>');
 
      // Logo
      wrap.append('<div class="am-head"><div><div class="am-logo">ASIL<em>MEDIA</em></div><div class="am-head-sub">asilmedia.org • jonli efir</div></div></div>');
 
      // Tablar
      var tabs = $('<div class="am-tabs"></div>');
      [
        { id: 'movies', label: '🎬 Filmlar' },
        { id: 'tv',     label: '📺 Jonli efir' },
        { id: 'search', label: '🔍 Qidiruv' }
      ].forEach(function (t) {
        var btn = $('<div class="am-tab selector" data-tab="' + t.id + '">' + t.label + '</div>');
        if (t.id === self._tab) btn.addClass('focus');
        btn.on('hover:enter', function () {
          self._tab = t.id;
          wrap.find('.am-tab').removeClass('focus');
          btn.addClass('focus');
          content.empty();
          self._buildContent(content, t.id);
        });
        tabs.append(btn);
      });
      wrap.append(tabs);
 
      // Kontent maydoni
      var content = $('<div class="am-content"></div>');
      self._buildContent(content, self._tab);
      wrap.append(content);
 
      // Scroll
      var scroll = new Lampa.Scroll({ mask: true, over: true });
      scroll.minus();
      scroll.body().append(wrap);
 
      self.activity.loader(false);
      self.activity.body(scroll.render());
      self.activity.toggle();
 
      self._scroll = scroll;
 
      // Controller
      var cname = 'am_main_' + Date.now();
      Lampa.Controller.add(cname, {
        toggle: function () { Lampa.Controller.collectionSet(wrap); Lampa.Controller.collectionFocus(false, wrap); },
        left:   function () { Navigate.move('left'); },
        right:  function () { Navigate.move('right'); },
        up:     function () { Navigate.move('up'); },
        down:   function () { Navigate.move('down'); },
        back:   function () { Lampa.Activity.backward(); }
      });
      Lampa.Controller.toggle(cname);
    };
 
    this._buildContent = function (cont, tab) {
      if (tab === 'movies') self._buildMovies(cont);
      else if (tab === 'tv') self._buildTV(cont);
      else if (tab === 'search') self._buildSearch(cont);
    };
 
    // ── FILMLAR ──
    this._buildMovies = function (cont) {
      var films  = MOVIES.filter(function (m) { return m.type !== 'tv'; });
      var series = MOVIES.filter(function (m) { return m.type === 'tv'; });
 
      cont.append('<div class="am-row-title">So\'ngi filmlar</div>');
      var fg = $('<div class="am-grid"></div>');
      films.forEach(function (m) { fg.append(self._movieCard(m)); });
      cont.append(fg);
 
      cont.append('<div class="am-row-title">Seriallar</div>');
      var sg = $('<div class="am-grid"></div>');
      series.forEach(function (m) { sg.append(self._movieCard(m)); });
      cont.append(sg);
    };
 
    this._movieCard = function (m) {
      var card = $('<div class="am-card selector"></div>');
      var img = $('<img class="am-card-img" loading="lazy">');
      img.attr('src', m.poster || '');
      img.on('error', function () { $(this).hide(); });
      var body = $('<div class="am-card-body"></div>');
      var badge = m.type === 'tv' ? '<span class="am-badge am-badge-tv">SERIAL</span> ' : '';
      body.html('<div class="am-card-title">' + badge + m.title + '</div><div class="am-card-meta"><span>' + m.year + '</span><span class="am-card-star">★ ' + m.rating + '</span><span>' + m.genre + '</span></div>');
      card.append(img).append(body);
      card.on('hover:enter', function () { self._openMovie(m); });
      return card;
    };
 
    this._openMovie = function (m) {
      Lampa.Activity.push({
        url: '', title: m.title,
        component: 'am_player',
        am_item: m,
        page: 1
      });
    };
 
    // ── JONLI EFIR TV ──
    this._buildTV = function (cont) {
      var groups = {};
      TV_CHANNELS.forEach(function (ch) {
        if (!groups[ch.group]) groups[ch.group] = [];
        groups[ch.group].push(ch);
      });
      Object.keys(groups).forEach(function (grp) {
        cont.append('<div class="am-row-title">' + grp + '</div>');
        var row = $('<div class="am-ch-grid"></div>');
        groups[grp].forEach(function (ch) {
          var card = $('<div class="am-ch-card selector"></div>');
          if (ch.logo) {
            var logo = $('<img class="am-ch-logo" loading="lazy">');
            logo.attr('src', ch.logo);
            logo.on('error', function () { $(this).replaceWith('<div class="am-ch-nologo">📺</div>'); });
            card.append(logo);
          } else {
            card.append('<div class="am-ch-nologo">📺</div>');
          }
          card.append('<div class="am-ch-name">' + ch.name + '</div>');
          card.append('<div class="am-ch-group">' + ch.group + '</div>');
          card.on('hover:enter', function () { self._playTV(ch); });
          row.append(card);
        });
        cont.append(row);
      });
    };
 
    this._playTV = function (ch) {
      Lampa.Player.play({
        title: ch.name,
        url: ch.url,
        poster: ch.logo || ''
      });
      Lampa.Player.playlist([{ title: ch.name, url: ch.url }]);
    };
 
    // ── QIDIRUV ──
    this._buildSearch = function (cont) {
      var input = $('<input class="selector" placeholder="Kino nomi kiriting..." style="width:100%;padding:.7em 1em;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:5px;color:#fff;font-size:.9em;outline:none;margin-bottom:1em">');
      cont.append(input);
      var results = $('<div class="am-grid"></div>');
      cont.append(results);
 
      input.on('input', function () {
        var q = $(this).val().toLowerCase().trim();
        results.empty();
        if (!q) return;
        MOVIES.filter(function (m) {
          return m.title.toLowerCase().indexOf(q) >= 0;
        }).forEach(function (m) {
          results.append(self._movieCard(m));
        });
      });
 
      // Fokus inputga
      setTimeout(function () { input.focus(); }, 200);
    };
 
    this.back    = function () { Lampa.Activity.backward(); };
    this.pause   = function () {};
    this.stop    = function () {};
    this.destroy = function () { if (self._scroll) self._scroll.destroy(); };
  }
 
  // ── PLAYER KOMPONENTI (film ochilganda) ─────────────────────
  function PlayerComp() {
    var self = this;
    this.activity = {};
 
    this.create = function () {
      inject_style();
      var item = this.activity.get('am_item');
      if (!item) { Lampa.Activity.backward(); return; }
 
      var wrap = $('<div class="am-play"></div>');
 
      var poster = item.poster ? '<img src="' + item.poster + '" style="float:right;width:120px;border-radius:6px;margin:0 0 1em 1.5em" onerror="this.remove()">' : '';
      wrap.append(poster);
      wrap.append('<div class="am-play-title">' + item.title + '</div>');
      wrap.append('<div class="am-play-meta"><span>' + item.year + '</span><span class="am-card-star">★ <b>' + item.rating + '</b></span><span>' + item.genre + '</span></div>');
 
      var btns = $('<div class="am-btn-row"></div>');
 
      // Saytda ochish tugmasi
      var watchBtn = $('<div class="am-btn am-btn-red selector">▶ Saytda Ko\'rish</div>');
      watchBtn.on('hover:enter', function () {
        // Lampa ichida iframe orqali ochish
        Lampa.Activity.push({
          url: item.url,
          title: item.title,
          component: 'iframe',
          page: 1
        });
      });
      btns.append(watchBtn);
 
      // Orqaga
      var backBtn = $('<div class="am-btn am-btn-dark selector">← Orqaga</div>');
      backBtn.on('hover:enter', function () { Lampa.Activity.backward(); });
      btns.append(backBtn);
 
      wrap.append(btns);
 
      if (item.genre) {
        wrap.append('<div class="am-play-desc">Janr: ' + item.genre + ' &nbsp;|&nbsp; Yil: ' + item.year + '</div>');
      }
 
      var scroll = new Lampa.Scroll({ mask: true, over: true });
      scroll.minus();
      scroll.body().append(wrap);
 
      this.activity.loader(false);
      this.activity.body(scroll.render());
      this.activity.toggle();
 
      self._scroll = scroll;
 
      var cname = 'am_player_' + Date.now();
      Lampa.Controller.add(cname, {
        toggle: function () { Lampa.Controller.collectionSet(wrap); Lampa.Controller.collectionFocus(false, wrap); },
        left:   function () { Navigate.move('left'); },
        right:  function () { Navigate.move('right'); },
        up:     function () { Navigate.move('up'); },
        down:   function () { Navigate.move('down'); },
        back:   function () { Lampa.Activity.backward(); }
      });
      Lampa.Controller.toggle(cname);
    };
 
    this.back    = function () { Lampa.Activity.backward(); };
    this.pause   = function () {};
    this.stop    = function () {};
    this.destroy = function () { if (self._scroll) self._scroll.destroy(); };
  }
 
  // ── PLUGIN REGISTRATSIYA ────────────────────────────────────
  function register() {
    inject_style();
 
    // Komponentlarni qo'shish
    Lampa.Component.add('asilmedia',   MainComp);
    Lampa.Component.add('am_player',   PlayerComp);
 
    // Menyuga qo'shish
    var menuHtml = '<li class="menu__item selector" data-action="asilmedia">' +
      '<div class="menu__ico">🎬</div>' +
      '<div class="menu__text">AsilMedia</div>' +
      '</li>';
 
    // Menyuni kuzatib turamiz
    Lampa.Listener.follow('app', function (e) {
      if (e.type === 'ready') {
        setTimeout(function () {
          var menu = $('.menu .menu--list');
          if (menu.length && !menu.find('[data-action="asilmedia"]').length) {
            var item = $(menuHtml);
            item.on('hover:enter', function () {
              Lampa.Activity.push({
                url: '',
                title: 'AsilMedia',
                component: 'asilmedia',
                page: 1
              });
            });
            menu.append(item);
          }
        }, 500);
      }
    });
 
    // Manifest
    if (Lampa.Manifest && Lampa.Manifest.plugins) {
      Lampa.Manifest.plugins.push(MANIFEST);
    }
 
    console.log('[AsilMedia] Plugin v2.0 yuklandi ✓');
  }
 
  // ── ISHGA TUSHIRISH ─────────────────────────────────────────
  if (window.Lampa && Lampa.Listener) {
    register();
  } else {
    var t = setInterval(function () {
      if (window.Lampa && Lampa.Listener) {
        clearInterval(t);
        register();
      }
    }, 300);
  }
 
})();
 
