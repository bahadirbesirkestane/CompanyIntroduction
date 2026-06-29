# Post-Deploy Verification

Bu liste, deploy tamamlandiktan hemen sonra production ortaminda yapilacak son kontrolleri tanimlar.

## 1. Sayfa Erisimi

Asagidaki sayfalar production ortaminda aciliyor mu?

- `/`
- `/hizmetler/`
- `/hizmetler/gider-acma/`
- `/hizmetler/cati-tamiri/`
- `/galeri/`
- `/iletisim/`
- `/sss/`
- `/bolgeler/`
- `/yorumlar/`
- `/admin/`

## 2. SEO Dogrulamasi

- canonical URL production domain ile mi geliyor?
- OG image production domain ile mi sunuluyor?
- `WebSite`, `LocalBusiness`, `WebPage`, `Service`, `Place`, `ContactPage` schema'lari sayfalarda mevcut mu?
- robots meta beklenen sekilde `index,follow` veya `noindex,nofollow` uretiliyor mu?

## 3. Iletisim Dogrulamasi

- telefon linki tiklandiginda `tel:` dogru formatta mi?
- WhatsApp linki tiklandiginda mesajli acilis saglaniyor mu?
- e-posta linki dogru calisiyor mu?
- harita embed production ortaminda yukleniyor mu?

## 4. CMS Dogrulamasi

- `/admin/` uzerinden giris aciliyor mu?
- editor girisi sonrasi koleksiyonlar dogru gorunuyor mu?
- test amacli bir draft icerik olusturulabiliyor mu?
- publish sonrasi degisiklik production'da gorunuyor mu?

## 5. Son Kullanici Deneyimi

- mobilde header ve footer okunakli mi?
- CTA butonlari yeterince gorunur mu?
- iletisim sayfasi en kritik aksiyonlari ilk ekranda sunuyor mu?
- hizmet detay ve bolge detay sayfalari guven veren bir yapi gosteriyor mu?

## 6. Deploy Sonrasi Kapatma

Production dogrulamasi tamamlandiktan sonra:

1. test amacli gecici icerikleri temizle
2. editor kullanici rollerini netlestir
3. gerekiyorsa dokumandaki domain ve marka adlarini final verilerle guncelle
