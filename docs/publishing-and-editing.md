# Publishing and Editing Guide

Bu dokuman; projeyi Netlify uzerine yayinlamak, Decap CMS panelini aktif etmek ve editor akislarini yonetmek icin hazirlandi.

## 1. Production Hazirligi

Yayin oncesi su alanlari kontrol et:

- `src/data/site-settings.json` icindeki `siteUrl`
- `public/admin/config.yml` icindeki `site_url`
- `public/admin/config.yml` icindeki `display_url`
- varsayilan OG gorseli
- Google Maps embed baglantisi
- telefon, WhatsApp ve e-posta alanlari

Varsayilan production adresi:

`https://companyintroduction.netlify.app`

Varsayilan admin adresi:

`https://companyintroduction.netlify.app/admin/`

## 2. Netlify Yayin Akisi

Netlify tarafinda:

1. Repo'yu Netlify'a bagla
2. Build command olarak `npm run build` kullan
3. Publish directory olarak `dist` ayarla
4. Node version olarak `20` kullan

Mevcut [netlify.toml](C:/Projects/CompanyIntroduction/netlify.toml) dosyasi su alanlari zaten tanimli getirir:

- admin redirect'leri
- admin icin guvenlik header'lari
- genel response guvenlik header'lari

## 3. Decap CMS Auth ve Editorial Workflow

Production ortaminda su Netlify ozellikleri aktif olmalidir:

1. `Identity`
2. `Git Gateway`

Ardindan:

1. Netlify Identity panelinden ilk editor kullanicisini davet et
2. Editor daveti kabul ettikten sonra `/admin/` uzerinden giris yap
3. Icerikler `editorial_workflow` ile draft-review-publish mantiginda yonetilir

Bu proje su backend yapisini kullanir:

- `backend.name: git-gateway`
- `publish_mode: editorial_workflow`

## 4. Icerik Duzenleme Mantigi

CMS uzerinden:

- tekil ayarlar `src/data/*.json`
- koleksiyon icerikleri `src/content/*`

dosyalarina yazilir.

Yeni hizmet eklemek icin:

1. Admin panelde `Hizmetler` bolumune gir
2. Yeni kayit olustur
3. Baslik, ozet, icerik ve opsiyonel SEO alanlarini doldur
4. Gerekirse `serviceType` degeri ekle

Yeni bolge eklemek icin:

1. `Hizmet Bolgeleri` koleksiyonuna gir
2. Yeni kayit olustur
3. Ozet ve icerigi doldur
4. Gerekirse `serviceAreaType` alanini duzenle

## 4.1 Editor Icin Hizli Ozet

Panelden rahatca degistirebilecegin alanlar:

- `Site Ayarlari`: site adi, slogan, telefon, WhatsApp, e-posta, adres, site URL, Google Maps embed, calisma saatleri
- `Sosyal Baglantilar`: Instagram, Facebook, X, YouTube ve benzeri linkler
- `Navigasyon`: ust menu ve footer linkleri
- `Ana Sayfa`: hero metinleri, buton metinleri, section basliklari ve CTA alanlari
- `Hizmetler`: yeni hizmet ekleme, hizmet siralama, ozet, icerik ve SEO alanlari
- `Genel Sayfalar`: hakkimizda, gizlilik, kurumsal sayfalar gibi tek sablonla calisan icerikler
- `Galeri`: gorsel kayitlari ve aciklamalari
- `Musteri Yorumlari`: isim, yorum, puan ve lokasyon
- `SSS`: soru-cevap kayitlari
- `Hizmet Bolgeleri`: yeni bolge ekleme, ozet, icerik ve SEO alanlari

Editor olarak gunluk kullanim mantigi kisaca su sekildedir:

1. `/admin/` adresinden giris yap
2. Sol menuden duzenlemek istedigin koleksiyonu sec
3. Kaydi acip metin veya link alanlarini guncelle
4. `Save` ile taslagi kaydet
5. Gerekirse `Publish` ile yayina al

Not: Icerik, iletisim bilgisi, link ve SEO metinleri icin gelistiriciye ihtiyac yoktur. Yalnizca yeni bir ozel sayfa sablonu, yeni bir bileşen tipi veya yapisal tasarim degisikligi istendiginde kod tarafinda mudahale gerekir.

## 5. SEO Kontrol Listesi

Yayin oncesi mutlaka kontrol et:

- her onemli sayfada baslik ve aciklama
- canonical URL'ler
- varsayilan OG gorseli
- sosyal linklerin gercek URL olmasi
- hizmet ve bolge iceriklerinde anlamli schema alanlari

## 6. Local Editor ve QA Akisi

Gelistirme sirasinda:

```bash
npm install
npm run dev
npm run check
npm run build
npm run qa
```

Kontrol edilmesi gereken temel sayfalar:

- `/`
- `/hizmetler/`
- `/hizmetler/[slug]`
- `/iletisim/`
- `/sss/`
- `/bolgeler/`
- `/yorumlar/`

## 7. Son Onay Listesi

Yayina cikmadan once:

1. `npm run qa` hatasiz calisiyor mu?
2. Gercek domain tanimli mi?
3. Admin girisi production ortaminda test edildi mi?
4. Telefon, WhatsApp, e-posta ve maps alanlari gercek veri mi?
5. Mobil gorunumde header, footer, CTA ve iletisim sayfasi kontrol edildi mi?
