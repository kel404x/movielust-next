if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>a(e,n),t={module:{uri:n},exports:r,require:d};s[n]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts("fallback-aRZV8-4V-curWXtqc6QRL.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aRZV8-4V-curWXtqc6QRL/_buildManifest.js",revision:"5f3671207177cbcfbde449763cd1677d"},{url:"/_next/static/aRZV8-4V-curWXtqc6QRL/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/1576.efbf6071282de302.js",revision:"efbf6071282de302"},{url:"/_next/static/chunks/2664.e2e9760e9d830bfe.js",revision:"e2e9760e9d830bfe"},{url:"/_next/static/chunks/292.35b2d97ca501fbc7.js",revision:"35b2d97ca501fbc7"},{url:"/_next/static/chunks/3125-abb1075923ca0bfc.js",revision:"abb1075923ca0bfc"},{url:"/_next/static/chunks/3249.8b582535cb3822f9.js",revision:"8b582535cb3822f9"},{url:"/_next/static/chunks/3253.c9d7f5301696419d.js",revision:"c9d7f5301696419d"},{url:"/_next/static/chunks/3581.5b8a6d105603fcfc.js",revision:"5b8a6d105603fcfc"},{url:"/_next/static/chunks/376.cd362bb0c8b6bdc7.js",revision:"cd362bb0c8b6bdc7"},{url:"/_next/static/chunks/3886.42d6b86a7efa17c4.js",revision:"42d6b86a7efa17c4"},{url:"/_next/static/chunks/4049-6002d0e8070d66c6.js",revision:"6002d0e8070d66c6"},{url:"/_next/static/chunks/4601.00faade9911ee3b6.js",revision:"00faade9911ee3b6"},{url:"/_next/static/chunks/5303-e1d217cc6b1e5819.js",revision:"e1d217cc6b1e5819"},{url:"/_next/static/chunks/551-1be6ad2c212cde28.js",revision:"1be6ad2c212cde28"},{url:"/_next/static/chunks/556.2ce0889369d53f8f.js",revision:"2ce0889369d53f8f"},{url:"/_next/static/chunks/5807-452e11a2f657bd1f.js",revision:"452e11a2f657bd1f"},{url:"/_next/static/chunks/5996.0929bda4e6b2cc2f.js",revision:"0929bda4e6b2cc2f"},{url:"/_next/static/chunks/7126.6b5b90081e858e21.js",revision:"6b5b90081e858e21"},{url:"/_next/static/chunks/8392.8061263b881f40da.js",revision:"8061263b881f40da"},{url:"/_next/static/chunks/8494-94040eedc2c63116.js",revision:"94040eedc2c63116"},{url:"/_next/static/chunks/899-2e8fc2b345d5c644.js",revision:"2e8fc2b345d5c644"},{url:"/_next/static/chunks/9248.8652af0ad1a8d41e.js",revision:"8652af0ad1a8d41e"},{url:"/_next/static/chunks/9503-b7c86b1faf46e598.js",revision:"b7c86b1faf46e598"},{url:"/_next/static/chunks/9669-4e08b4fe3dcf40d5.js",revision:"4e08b4fe3dcf40d5"},{url:"/_next/static/chunks/framework-c2dab496e7e7122e.js",revision:"c2dab496e7e7122e"},{url:"/_next/static/chunks/main-f27babffb823c694.js",revision:"f27babffb823c694"},{url:"/_next/static/chunks/pages/%5Btype%5D/%5Bid%5D/%5Bname%5D-48ff9323189ea5ef.js",revision:"48ff9323189ea5ef"},{url:"/_next/static/chunks/pages/404-2fed275490e628b3.js",revision:"2fed275490e628b3"},{url:"/_next/static/chunks/pages/_app-913d301995bf9524.js",revision:"913d301995bf9524"},{url:"/_next/static/chunks/pages/_error-ca4d551445153203.js",revision:"ca4d551445153203"},{url:"/_next/static/chunks/pages/_offline-48f561ccd1bf1478.js",revision:"48f561ccd1bf1478"},{url:"/_next/static/chunks/pages/aboutus-e00124421816eb37.js",revision:"e00124421816eb37"},{url:"/_next/static/chunks/pages/account-b1c22ed2b8222a95.js",revision:"b1c22ed2b8222a95"},{url:"/_next/static/chunks/pages/cast/%5Btype%5D/%5Bid%5D/%5BcastContentName%5D-28263fc3d0849ef4.js",revision:"28263fc3d0849ef4"},{url:"/_next/static/chunks/pages/contactus-cc6dafc3fdb903b2.js",revision:"cc6dafc3fdb903b2"},{url:"/_next/static/chunks/pages/disclaimer-645005c1b0259090.js",revision:"645005c1b0259090"},{url:"/_next/static/chunks/pages/discover/movies-a8a9b983de7066a4.js",revision:"a8a9b983de7066a4"},{url:"/_next/static/chunks/pages/discover/shows-0cdfa9d1eb8b77a0.js",revision:"0cdfa9d1eb8b77a0"},{url:"/_next/static/chunks/pages/forgotpassword-5f45ef5cfdf363dd.js",revision:"5f45ef5cfdf363dd"},{url:"/_next/static/chunks/pages/index-a2ee2f6f6dea9801.js",revision:"a2ee2f6f6dea9801"},{url:"/_next/static/chunks/pages/login-2937e2845f0d0fa1.js",revision:"2937e2845f0d0fa1"},{url:"/_next/static/chunks/pages/peoplemovies/%5BpersonmovieId%5D-655cdb33825130cb.js",revision:"655cdb33825130cb"},{url:"/_next/static/chunks/pages/person/%5BpersonId%5D-e1e926b457f0c977.js",revision:"e1e926b457f0c977"},{url:"/_next/static/chunks/pages/play/movie/%5BplayMovieId%5D-0b5ed51814e85c39.js",revision:"0b5ed51814e85c39"},{url:"/_next/static/chunks/pages/play/show/%5Bname%5D/%5Bseason%5D/%5Bepisode%5D/%5BtotalEpisode%5D/%5BplayShowId%5D-456836425d551336.js",revision:"456836425d551336"},{url:"/_next/static/chunks/pages/production/%5BproductionId%5D-178f5da0fa891db4.js",revision:"178f5da0fa891db4"},{url:"/_next/static/chunks/pages/sentry_sample_error-babd93f7717bb28a.js",revision:"babd93f7717bb28a"},{url:"/_next/static/chunks/pages/showall/%5Btype%5D/%5Bcategory%5D-5b3c61241134cc8e.js",revision:"5b3c61241134cc8e"},{url:"/_next/static/chunks/pages/signin-ad14b796149a439b.js",revision:"ad14b796149a439b"},{url:"/_next/static/chunks/pages/signup-e5e0e029eef4d0a5.js",revision:"e5e0e029eef4d0a5"},{url:"/_next/static/chunks/pages/watchlist-5086c645f49f980f.js",revision:"5086c645f49f980f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3eb64c1478981218.js",revision:"3eb64c1478981218"},{url:"/_next/static/css/18998eb6a54e371e.css",revision:"18998eb6a54e371e"},{url:"/_next/static/css/2635b456ad27e1a1.css",revision:"2635b456ad27e1a1"},{url:"/_next/static/css/8051ab8a1dd3bcdc.css",revision:"8051ab8a1dd3bcdc"},{url:"/_next/static/css/857a1957ad90a1c1.css",revision:"857a1957ad90a1c1"},{url:"/_next/static/css/8c60baa93f9859b2.css",revision:"8c60baa93f9859b2"},{url:"/_next/static/css/9311ad12cd75f56e.css",revision:"9311ad12cd75f56e"},{url:"/_next/static/css/a1a7a7d099210bf3.css",revision:"a1a7a7d099210bf3"},{url:"/_next/static/css/a404f20556fb27a7.css",revision:"a404f20556fb27a7"},{url:"/_next/static/css/a8a3ec2419a11303.css",revision:"a8a3ec2419a11303"},{url:"/_next/static/css/b1c76156c7f9e1be.css",revision:"b1c76156c7f9e1be"},{url:"/_next/static/css/ca8ca5b3e803ecdf.css",revision:"ca8ca5b3e803ecdf"},{url:"/_next/static/css/d6aa7d7bd380639c.css",revision:"d6aa7d7bd380639c"},{url:"/_next/static/css/e40b2da636f8229b.css",revision:"e40b2da636f8229b"},{url:"/_next/static/css/ea8decce9e4b319c.css",revision:"ea8decce9e4b319c"},{url:"/_next/static/css/fd161a3621ce19d3.css",revision:"fd161a3621ce19d3"},{url:"/_next/static/media/bariol_regular-webfont.20e4f00e.woff",revision:"20e4f00e"},{url:"/_next/static/media/bariol_regular-webfont.889b2a8a.woff2",revision:"889b2a8a"},{url:"/_next/static/media/contact_background.5b993594.webp",revision:"7b6b671a66339188ed0e4b336e137fd2"},{url:"/_next/static/media/default_background.1736a699.webp",revision:"49c83e6b8b9d2e231831ad70de409acf"},{url:"/_next/static/media/forgot_pass.0cf6a327.png",revision:"620404139824a3aa04a9962a8d4e155f"},{url:"/_next/static/media/ghost.d64f365c.png",revision:"ed08cfd5b44ccbb436acdf4f4352022f"},{url:"/_next/static/media/login.50743a48.png",revision:"a22ca653f87a8925100c3329f8217735"},{url:"/_next/static/media/logo.fbab4ab5.png",revision:"1baffee2eb6066478835a31d4959ba2e"},{url:"/_next/static/media/password.7cda4bf2.png",revision:"78e0dea0d549ba7ba44e3ce8ee50cea7"},{url:"/_next/static/media/phone.6c51acea.png",revision:"9f2cc20edc03abee20410d2d67299660"},{url:"/_next/static/media/profile.27ca1260.png",revision:"a1531efa52d30934d4c4ea40cb8c25f8"},{url:"/_next/static/media/sad.ffd12046.png",revision:"41071b375e042aa13154c2fdf17bc429"},{url:"/_next/static/media/up.0bb47b80.png",revision:"b4ac959ece3d08dc1eb70656dcc36cb4"},{url:"/_offline",revision:"aRZV8-4V-curWXtqc6QRL"},{url:"/browserconfig.xml",revision:"97c13fd6179d280d76b69d5ea831e794"},{url:"/favicon.ico",revision:"8cd8d4a64a40a20862d9684cf3fa613f"},{url:"/favicon.png",revision:"18d9fc5bbd678c82bcf220231056d257"},{url:"/favicons/android-icon-144x144.png",revision:"28e5d2abc280deb6450b0af582182210"},{url:"/favicons/android-icon-192x192.png",revision:"ef4dd8d0d52f059b7dc8c2e41bbf6577"},{url:"/favicons/android-icon-36x36.png",revision:"08d8e7087f11367fe85aeccc41ccb062"},{url:"/favicons/android-icon-48x48.png",revision:"c633510f6edaf6292ab1b8ea5cc289b3"},{url:"/favicons/android-icon-72x72.png",revision:"bef65e7284a578db9a2b666287c31033"},{url:"/favicons/android-icon-96x96.png",revision:"de8bbd434be8a0864f3621c25e6b2932"},{url:"/favicons/apple-icon-114x114.png",revision:"4437a71a86da306c1f266861ebf72430"},{url:"/favicons/apple-icon-120x120.png",revision:"28b0b8fbe824627c374166e6d701fec8"},{url:"/favicons/apple-icon-144x144.png",revision:"28e5d2abc280deb6450b0af582182210"},{url:"/favicons/apple-icon-152x152.png",revision:"ced5850cd01dc24018b00e8aec118986"},{url:"/favicons/apple-icon-180x180.png",revision:"3328768fd0f7fd88c4d2118647331eda"},{url:"/favicons/apple-icon-57x57.png",revision:"5fcedacec387ab114005dcb99d5a556e"},{url:"/favicons/apple-icon-60x60.png",revision:"5bfa5ece9eac83f45c457b305871b8b8"},{url:"/favicons/apple-icon-72x72.png",revision:"bef65e7284a578db9a2b666287c31033"},{url:"/favicons/apple-icon-76x76.png",revision:"7eb6ccf360982c3c6095adef52aa5500"},{url:"/favicons/apple-icon-precomposed.png",revision:"11bf97d017f9bb6b6e9f067d3415f499"},{url:"/favicons/apple-icon.png",revision:"11bf97d017f9bb6b6e9f067d3415f499"},{url:"/favicons/favicon-16x16.png",revision:"b110ce77ea968c0948110b44a60e4ad9"},{url:"/favicons/favicon-32x32.png",revision:"2a29d23a9d171af1a0fc02ab711fb8f8"},{url:"/favicons/favicon-96x96.png",revision:"de8bbd434be8a0864f3621c25e6b2932"},{url:"/favicons/favicon.ico",revision:"3972d90e360e7c8955789e889ce7e971"},{url:"/favicons/ms-icon-144x144.png",revision:"28e5d2abc280deb6450b0af582182210"},{url:"/favicons/ms-icon-150x150.png",revision:"c4dff6b30217d15afb5089c79be25672"},{url:"/favicons/ms-icon-310x310.png",revision:"ee52142fa45e9551910ad4dba7123952"},{url:"/favicons/ms-icon-70x70.png",revision:"da492fa840070d37f0d5e5e27895a650"},{url:"/images/25559.jpg",revision:"049221ec0ea702bf289dbcc1cfb47829"},{url:"/images/25559.webp",revision:"49c83e6b8b9d2e231831ad70de409acf"},{url:"/images/25560.jpg",revision:"7a9bd82d3a637df03c9d44b1e26d31ff"},{url:"/images/25560.webp",revision:"7b6b671a66339188ed0e4b336e137fd2"},{url:"/images/25565.webp",revision:"b52ff142f4f2f58a907fab17408d1b7f"},{url:"/images/contact_background.webp",revision:"7b6b671a66339188ed0e4b336e137fd2"},{url:"/images/default_background.webp",revision:"49c83e6b8b9d2e231831ad70de409acf"},{url:"/images/forgot_pass.png",revision:"620404139824a3aa04a9962a8d4e155f"},{url:"/images/ghost.png",revision:"ed08cfd5b44ccbb436acdf4f4352022f"},{url:"/images/gifs/movielust.gif",revision:"65c4e4b5a21e279ff093421257cf41c1"},{url:"/images/login-background.webp",revision:"d090c8cf5a4789128b69a4342fedb78e"},{url:"/images/login.png",revision:"a22ca653f87a8925100c3329f8217735"},{url:"/images/logo.png",revision:"1baffee2eb6066478835a31d4959ba2e"},{url:"/images/man-smoking-cigarette.webp",revision:"06c5b49af4ebeb0a814c4c190fa7c88f"},{url:"/images/password.png",revision:"78e0dea0d549ba7ba44e3ce8ee50cea7"},{url:"/images/phone.png",revision:"9f2cc20edc03abee20410d2d67299660"},{url:"/images/placeholder-image-h.png",revision:"b256935755db07de186a66f136d01e25"},{url:"/images/placeholder-image.png",revision:"cfcc4b5e8c5b468e795d64c009b33229"},{url:"/images/player_loading.svg",revision:"99b997cdfb6f8830029527cb8ccc28ea"},{url:"/images/profile.png",revision:"a1531efa52d30934d4c4ea40cb8c25f8"},{url:"/images/sad.png",revision:"41071b375e042aa13154c2fdf17bc429"},{url:"/images/svgs/cancel.svg",revision:"b949acd2ed243866bb19f76aaad125b9"},{url:"/images/svgs/color_spinner.svg",revision:"0117fc3c26fad745e05529620ebb340e"},{url:"/images/svgs/facebook.svg",revision:"03d81152cfd0aba50b7078d233a86016"},{url:"/images/svgs/home-icon.svg",revision:"05c0cf6492d092f7d2df0847e614ba19"},{url:"/images/svgs/home.svg",revision:"d86fe2f0943494fa045f337763d9503b"},{url:"/images/svgs/imdb.svg",revision:"86feef38c701d14f73120971c8778cbc"},{url:"/images/svgs/instagram.svg",revision:"ec3a604cc495a5e575c145fceb7ff56a"},{url:"/images/svgs/logo.svg",revision:"bd6bc769091cf847d917327727c35a6f"},{url:"/images/svgs/movie-icon.svg",revision:"264ec6a85c680e948a8332f1bd2e0c8e"},{url:"/images/svgs/newlogo.svg",revision:"756cd21346d46b281b695dfcbe461fc4"},{url:"/images/svgs/orange_spinner.svg",revision:"9b1fe6c3f40863c01e9a81a020eff151"},{url:"/images/svgs/original-icon.svg",revision:"83060d1909e34fde7e98ec292e6c0c3b"},{url:"/images/svgs/player_loading.svg",revision:"99b997cdfb6f8830029527cb8ccc28ea"},{url:"/images/svgs/search-icon.svg",revision:"3594f2bde4fe4abbdb0a5300cdb9cc3f"},{url:"/images/svgs/series-icon.svg",revision:"d584b53835a16f90085e1e05d4677534"},{url:"/images/svgs/share.svg",revision:"0a3e351c81cd670726f5f8b77f321040"},{url:"/images/svgs/spinner.svg",revision:"01cdcfe5b505e684637c0734e7e840d9"},{url:"/images/svgs/spinning-tail.svg",revision:"61a0a9391b966bc840c41785cedd0aa8"},{url:"/images/svgs/star.svg",revision:"6032a8aeeb8172006f9a1914845cd12c"},{url:"/images/svgs/tmdb_attr.svg",revision:"56fd61eec148690af48f876dfd5c8718"},{url:"/images/svgs/twitter.svg",revision:"91fae390750a6c3a3c883309f4c4e74f"},{url:"/images/svgs/watchlist.svg",revision:"9f5a514fa394e718210919ec125f31c1"},{url:"/images/svgs/wikipedia-logo.svg",revision:"0e3b98c4177111b54fd28d1070a8b2ca"},{url:"/images/up.png",revision:"b4ac959ece3d08dc1eb70656dcc36cb4"},{url:"/images/yts_logo.png",revision:"d0b4f6744615b571ac34314aa8fe3d1c"},{url:"/manifest.json",revision:"443aa7dfdeaf1290710a98b0dc785a2f"},{url:"/maskables/128.png",revision:"34e0032e3e7f89fef3d2179d739ee473"},{url:"/maskables/192.png",revision:"00f53474c63b407f12fea2520b833074"},{url:"/maskables/384.png",revision:"e5d276653863b56afff252866f04e0fd"},{url:"/maskables/48.png",revision:"0000fa29cc6dcd9fcc1fc9144e3e8aa5"},{url:"/maskables/512.png",revision:"111050cd28e27c2eee29bb44158334a0"},{url:"/maskables/72.png",revision:"3f17950ad344995e1d6fcd3ddfaf7364"},{url:"/maskables/96.png",revision:"d7340855d3de27721b57283e69ff5bcb"},{url:"/maskables/maskable_icon.png",revision:"ec67b04543b86a94c8d7f6cbd96a113a"},{url:"/robots.txt",revision:"358f2269948bdbaa1e08fa217e738d58"},{url:"/ror.xml",revision:"c5af679e6d83ccbe9e62ed5071417565"},{url:"/sitemap.xml",revision:"1fb0dd25d81192542ca240e62c21ca4c"},{url:"/urllist.txt",revision:"7dfa756a01d2682ca93ae25a68464959"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
