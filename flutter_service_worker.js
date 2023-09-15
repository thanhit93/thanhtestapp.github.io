'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f043246e7471e2781b3c7cce9c4e425f",
"index.html": "cbfb7b6c1dc1f3ac2760a2a140955154",
"/": "cbfb7b6c1dc1f3ac2760a2a140955154",
"firebase-messaging-sw.js": "331a8e33543b10d62c3609d55430bf51",
"main.dart.js": "276a3637cf5a8b71b3ec79ca751634b5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "447591046520d4ab8d7eaa9b3fccfc07",
"icons/Icon-192.png": "8b8f8eac1511816df28747c2e5e589f2",
"icons/Icon-maskable-192.png": "8b8f8eac1511816df28747c2e5e589f2",
"icons/Icon-maskable-512.png": "0163a69b46b615fbd11c0f9ebd295b4d",
"icons/Icon-512.png": "0163a69b46b615fbd11c0f9ebd295b4d",
"manifest.json": "dba3ca42d8d8280d7d297a93c469d96d",
"assets/AssetManifest.json": "7a33e270f1a5afb21085913fd8e7e9cc",
"assets/NOTICES": "c5d31ce4cf34bc4c9c7f9229ddb85823",
"assets/FontManifest.json": "f4509679815d5e30ffe1175da69f683d",
"assets/icons/app_icon.png": "3989fef83268c6791d7e14339fe35031",
"assets/icons/coworker.png": "3d852f3b52262d1aa29aec782b26922c",
"assets/icons/app_icon_density.png": "6270344430679711b81476e29878caa7",
"assets/packages/libphonenumber_plugin/js/libphonenumber.js": "88b22ae35b39feec4fae0bf38bb37813",
"assets/packages/libphonenumber_plugin/js/stringbuffer.js": "6841824b0e11a399b78d135a7bfb5c53",
"assets/packages/libphonenumber_plugin/assets/js/libphonenumber.js": "88b22ae35b39feec4fae0bf38bb37813",
"assets/packages/libphonenumber_plugin/assets/js/stringbuffer.js": "6841824b0e11a399b78d135a7bfb5c53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "6b65f4c70807ef7dd4960da6977d416d",
"assets/fonts/MaterialIcons-Regular.otf": "1302ba19c4d6f31743c7ae9220260900",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/world_notext_front.png": "e41afccd9cdddd3554799d80b0a04528",
"assets/assets/images/security_centre_sms.png": "8526e90c3a58a0d22333c3187b642b39",
"assets/assets/images/2fa.png": "e5b664e3f8a7863830f6300cfa75a00b",
"assets/assets/images/VCA_bg35.png": "1823240e4e5dc7453a7fe3fffdb61e62",
"assets/assets/images/uzpay_icon.png": "87b09620bdb4abd73add0af8e5504125",
"assets/assets/images/UnionPay_logo.svg": "9b59a572fd6306d853d1820e9f9551cb",
"assets/assets/images/account_closed.png": "20016fadec002207a6b3d07f57ceabb3",
"assets/assets/images/card_transaction_transfer.png": "e0011668ab4cfc26acbcf156d123db79",
"assets/assets/images/card_transaction_atm.png": "3f0cf94bc3d97e9a1170a4f249d702a3",
"assets/assets/images/fxp_app_launcher_icon.png": "2c5fa437f809fb8237935c6587d67a70",
"assets/assets/images/security_centre_2fa.png": "6eca915f0303dced5c43ed03613adc4b",
"assets/assets/images/new_utgl_logo_black.png": "da888a85a6ea98661b02ad309e495354",
"assets/assets/images/getting_started_multi_assets.svg": "c3b8039284ed6c41d506bcbd5860da05",
"assets/assets/images/fffaa7451bfc147c471fc42edcc1871e.png": "e0ee60b47ecfd94b4a4bbf08d6e77cd9",
"assets/assets/images/fxp_logo.png": "c749d9f4158bf70c32df290cc5d1bf9f",
"assets/assets/images/uzpay_card_application_landing.png": "4ba9ae004026afd35ebe8fdcb2f5e65c",
"assets/assets/images/account_upgrade.png": "520c7ab412dc27b2a698ee6757f8f2a1",
"assets/assets/images/getting_started_notifications_setting.svg": "cebf69c30ccf0a2a8a3090c5838ec0a5",
"assets/assets/images/new_utgl_logo_blue.png": "afc35a3b724ff0f786c36220d48d2656",
"assets/assets/images/icon_earn_landing.svg": "229f2fe6cd5c094737e3d218692b27e7",
"assets/assets/images/new_utgl_logo_blue.svg": "4a160e68a003134f2fc8aa01d099d4ec",
"assets/assets/images/DOT.svg": "ab69780d3ba5cb371415468783c1a9d3",
"assets/assets/images/earn_background.svg": "a1f5b7da5f60f21bbb7ce0986c850259",
"assets/assets/images/bg_asset_injection.png": "bec2813ea86ab8c4562b7537ab2f0a7a",
"assets/assets/images/uzpay_app_launcher_icon.png": "20e682815697232e48011c6f746d584d",
"assets/assets/images/card_transaction_repayment.png": "1e5217162e1acd0f14d844feb55bf365",
"assets/assets/images/pending_icon.svg": "807fd9abda86890f82a6135ac64cfae1",
"assets/assets/images/account_pending.png": "6fba978f687fd946b02866d94a5efeb8",
"assets/assets/images/card_activation.png": "2900c5945a33ac3716ab966bde59d844",
"assets/assets/images/illi_3@2x.png": "484fcfe2dd04685a7d3413866f77a5e5",
"assets/assets/images/getting_started_card_control.svg": "7103b2e1a85b94f356601d383e5aba91",
"assets/assets/images/search_folder.svg": "b8a2415cf876501276e0edd8a2ab3958",
"assets/assets/images/utgl_icon.png": "173c4acd3938061329c0157882b1539e",
"assets/assets/images/card_transaction_purchase.png": "471b63ec070319d1e1e9b739ec5da0d9",
"assets/assets/images/card_benefit.png": "a00240f0c48bde8f8ef32914dea0b898",
"assets/assets/images/illi_1@2x.png": "030793fc1a20cd5f6b39c6d5d85ee2e1",
"assets/assets/images/getting_started_swap_assets.svg": "3c51cb48a009c84e24b3debd626da602",
"assets/assets/images/security_centre_2fa_google_gray.png": "224d6c8845a103fdcd13fd771dfae538",
"assets/assets/images/search_zero.svg": "be9ec23323cc04b903884fd24f04590a",
"assets/assets/images/asset.svg": "4ba37d9fdc1bfef7dc11ea3ff996bbeb",
"assets/assets/images/getting_started_card_activation.svg": "8e7f487c7d359dc69354d9f1d854f215",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/illi_4@2x.png": "4022937673bfc17ba68e499c32eca736",
"assets/assets/images/create_anti_phishing_code.png": "c8984ecd0a6f74abe6831ed772991802",
"assets/assets/images/discover_banner_pay.png": "793779d5b350c39abcccb46cdaf6d584",
"assets/assets/images/new_utgl_logo_white.png": "d1d4de3b42654cd64c9de46e1ee4c723",
"assets/assets/images/video_selfie.png": "852730bcbc98634f68c52afa8bc8f892",
"assets/assets/images/discover_banner_shopping.png": "ef5c3c5e6215ca952b143d873c2880d8",
"assets/assets/images/carousel_card_img1.png": "f6358bb2249b9f065caf2a200d119a8d",
"assets/assets/images/bill_payment_index_upload_document.svg": "51b71d88edb3b6f42277ec4708fbcc47",
"assets/assets/images/fxp_card_application_landing.png": "6cca438ff1066ed36f2fc8d1c185f790",
"assets/assets/images/card_transaction_late_repayment_interest.png": "09996432c9f8f8bba480414390cd3cc4",
"assets/assets/images/biometric_graphic.png": "a929cb6ee6a1d254096ca3d4479ece76",
"assets/assets/images/pending_icon_2.svg": "1d49ee56679df77a06622438d931bef5",
"assets/assets/images/world_card_blank.png": "7b175a586061779a7db9b374add12b84",
"assets/assets/images/world_card_full.svg": "96f2ac4cc8b12fe40fff28535862ea53",
"assets/assets/images/getting_started_pay_your_bill.svg": "30dc8a2cbd7283fa49e1b588b6b5d17b",
"assets/assets/images/security_centre_email.png": "f7cab1adef27a0d2a0326ff945516175",
"assets/assets/images/new_utgl_logo_white.svg": "9157efea87a5e87b35bfc421384a7b10",
"assets/assets/images/getting_started_card_collateral.svg": "eed2df20f0b2115abb7d9c4a1ca948ef",
"assets/assets/images/security_centre_anti_phishing_code.png": "9002de42e9dd4cb52334a5d60794cc02",
"assets/assets/images/carousel_bg_pattern.png": "e6de835aa99cb816d37890fb0daf5e7c",
"assets/assets/images/utgl_app_launcher_icon.png": "618e931443f2e998443b0b30474acb94",
"assets/assets/images/world_card_half.png": "b6dec8e795705fd41905f7832ee30fef",
"assets/assets/images/notification_bell.svg": "430e9657f91c232a5db6813a947bd3df",
"assets/assets/images/security_centre_2fa_google.png": "70f24f53cff122d51dd6b1d9e3b6c643",
"assets/assets/images/enable_google_1.png": "65fe45a4fc1e7de0196358074e79f549",
"assets/assets/images/copy_icon.png": "db38b887fee6a42d351621e285dc0e51",
"assets/assets/images/application_fee_graphic.png": "bfe5c9b7f85e22056157c3f23c3ad82d",
"assets/assets/images/check_circle.png": "0be413f45d921cd2f593077fda52cf0c",
"assets/assets/images/account_locked.png": "99114768369a80ef2921a28d39aca2bc",
"assets/assets/images/getting_started_earn_and_invest.svg": "ce389d63ab3529802afb460d4a23e6ed",
"assets/assets/images/earn_landing_bg_image.jpg": "58be71409be0cc8848aecdbe0511d9d5",
"assets/assets/images/enable_google_2.png": "5c7dbf24568b8ac23197cc0f7590dea8",
"assets/assets/images/application_fee_waive.png": "46927a8c7c93b15baad54c9b3cd6135d",
"assets/assets/images/fxp_login_side.png": "670deb45dac51d7eca4cd1ccca2cdbe1",
"assets/assets/images/magic_email.png": "74eab85f7d8e1f8230ec1ab58e333be2",
"assets/assets/lottie_animations/google_auth.json": "29ee3580d1e4fa8a392e22149772c273",
"assets/assets/lottie_animations/invoice_upload.json": "c1b119d8ae1666a8b8795218c190ebc6",
"assets/assets/lottie_animations/account_success.json": "ea9b65d782a2c6d77cb12941538572e6",
"assets/assets/lottie_animations/credit_card.json": "ec882425e90982829f8efa807405c034",
"assets/assets/lottie_animations/verify_id.json": "b574b53ad1cf305ff06688b06c3b5d46",
"assets/assets/lottie_animations/invoice_email_white.json": "85922edb4bc5415dec304b9ee36e936f",
"assets/assets/lottie_animations/upload_animation.json": "5cc5e68ae1ee00d4f605baead14f4329",
"assets/assets/lottie_animations/anim_success.json": "840d62209db9dcfc4a596355254a755b",
"assets/assets/lottie_animations/mobile-otp.json": "cebff9e2834581cefef1091a5eb31452",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/card_selfie.json": "97dfbe62ca8bee8995dbbf8ad1991c3c",
"assets/assets/lottie_animations/extract_file.json": "2d7300e562c47a46733a4e04a49c8d22",
"assets/assets/lottie_animations/139217-hourglass_(1).json": "887d6ca1bba6c1f1d88a58e93a55ec39",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/icomoon.ttf": "a70a647ed0b41e2f1012b11d981b56db",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Outfit-Bold.ttf": "e28d1b405645dfd47f4ccbd97507413c",
"assets/assets/fonts/Outfit-Regular.ttf": "9f444021dd670d995f9341982c396a1d",
"assets/assets/fonts/Outfit-Black.ttf": "d032ccd62028487a6c8d70a07bda684b",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Outfit-Thin.ttf": "8f281fc8ba39d6f355190c14b6532b44",
"assets/assets/fonts/Outfit-SemiBold.ttf": "f4bde7633a5db986d322f4a10c97c0de",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Outfit-ExtraLight.ttf": "f257db4579a91feb1c1f0e80daae48ae",
"assets/assets/fonts/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Outfit-ExtraBold.ttf": "d649fd9b3a7e7c6d809b53eede996d18",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Outfit-Medium.ttf": "3c88ad79f2a55beb1ffa8f68d03321e3",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/Outfit-Light.ttf": "905f109c79bd9683fc22eaffe4808ffe",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/binCode.json": "f9d10427682aa607f1b04f9ba2450c35",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
