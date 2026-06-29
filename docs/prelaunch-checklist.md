# Prelaunch Checklist

Bu liste, production yayina gecmeden once manuel olarak kontrol edilmesi gereken son adimlari toplar.

## 1. Domain ve URL Kontrolu

- `src/data/site-settings.json` icindeki `siteUrl` production domain ile ayni mi?
- `public/admin/config.yml` icindeki `site_url` ve `display_url` ayni domaini mi kullaniyor?
- `/admin/` adresi dogru aciliyor mu?
- canonical URL'ler beklenen production domainiyle mi uretiliyor?

## 2. Admin Girisi

- Netlify Identity aktif mi?
- Git Gateway aktif mi?
- Davet edilen editor kullanicisi `/admin/` uzerinden giris yapabiliyor mu?
- Yeni bir taslak icerik olusturulup editorial workflow akisi test edildi mi?

## 3. Sosyal Linkler

- Instagram linki dogru profile gidiyor mu?
- Facebook linki dogru sayfaya gidiyor mu?
- YouTube linki varsa dogru kanala gidiyor mu?
- Footer ve schema ciktilarinda hatali `#` link kaldi mi?

## 4. Google Maps Embed

- Iletisim sayfasindaki harita dogru bolgeyi gosteriyor mu?
- Mobil gorunumde iframe tasma yapmadan calisiyor mu?
- Harita acilmazsa yedek iletisim bilgileri hala yeterince gorunur mu?

## 5. OG Gorseli ve Sosyal Paylasim

- `defaultSeo.ogImage` gercek gorsel dosyasina isaret ediyor mu?
- Paylasim yapildiginda gorsel, baslik ve aciklama dogru geliyor mu?
- Ana sayfa ve hizmet detay sayfalarinda ayri bir sorun var mi?

## 6. Mobil Sayfa Kontrolu

Su sayfalari dar ekranlarda manuel kontrol et:

- `/`
- `/hizmetler/`
- `/hizmetler/gider-acma/`
- `/hizmetler/cati-tamiri/`
- `/iletisim/`
- `/sss/`
- `/bolgeler/`

Kontrol noktalar:

- header satir kirilmasi ve menu okunabilirligi
- CTA butonlarinin kolay tiklanabilir olmasi
- footer kolonlarinin alt alta duzgun akmasi
- iframe ve kartlarda yatay tasma olmamasi
- basliklarin ve uzun metinlerin dengeli gorunmesi

## 7. Son Teknik Kontrol

- `npm run qa` hatasiz calisiyor mu?
- build ciktilarinda placeholder domain kalmis mi?
- iletisim telefon ve WhatsApp linkleri dogru formata sahip mi?
- schema script'leri sayfada uretiliyor mu?

## 8. Onay

Yayin icin hazir sayilmasi icin su dort alan birlikte tamam olmalidir:

1. production domain dogru
2. admin girisi dogrulandi
3. mobil manuel kontrol tamamlandi
4. `npm run qa` temiz gecti
