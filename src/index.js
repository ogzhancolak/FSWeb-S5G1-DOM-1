const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const header = document.querySelectorAll('header a');
header.forEach(i => {
  i.classList.add('italic');
})

const headerNav1 = document.getElementsByClassName('italic')[0];
headerNav1.textContent = 'Servisler';
const headerNav2 = document.getElementsByClassName('italic')[1];
headerNav2.textContent = 'Ürünler';
const headerNav3 = document.getElementsByClassName('italic')[2];
headerNav3.textContent = 'Vizyon';
const headerNav4 = document.getElementsByClassName('italic')[3];
headerNav4.textContent = 'Özellikler';
const headerNav5 = document.getElementsByClassName('italic')[4];
headerNav5.textContent = 'Hakkımızda';
const headerNav6 = document.getElementsByClassName('italic')[5];
headerNav6.textContent = 'İletişim';

const ımg = document.getElementById('logo-img');
ımg.src = "http://localhost:9000/img/logo.png";

const ımg2 = document.getElementById('cta-img');
ımg2.src = "http://localhost:9000/img/cta.png";

const ımg3 = document.getElementById('middle-img');
ımg3.src = "http://localhost:9000/img/accent.png";

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = 'Bu DOM Mükemmel';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Başlayın';

const textContenth4 = document.querySelectorAll('section.main-content h4');
textContenth4[0].textContent = 'Özellikler';
textContenth4[1].textContent = 'Hakkında';
textContenth4[2].textContent = 'Servisler';
textContenth4[3].textContent = 'Ürünler';
textContenth4[4].textContent = 'Vizyon';

const textContentP = document.querySelectorAll('section.main-content p');
textContentP[0].textContent = 'Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[1].textContent = 'Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[2].textContent = 'Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[3].textContent = 'Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
textContentP[4].textContent = 'Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const footerH4 = document.querySelector('section.contact h4');
footerH4.textContent = 'İletişim';

const footerP = document.querySelectorAll('section.contact p');
footerP[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
footerP[1].textContent = '+90 (123) 456-7899';
footerP[2].textContent = 'satis@birsirketsitesi.com.tr';

const Copyright = document.querySelector('footer a');
Copyright.textContent = 'Copyright Bir Şirket Sitesi 2022'