# Project Release Guide

Bu dokuman; projeyi yayina almak, test etmek, admin panele girmek, icerik guncellemek ve sonraki bakim surecini yonetmek icin tek parca operasyon rehberi olarak hazirlandi.

## 1. Bu proje nasil calisiyor?

Bu proje:

- Astro tabanli statik site olarak build alir
- Netlify uzerinde yayinlanmak icin hazirlanmistir
- Icerikleri Decap CMS paneli uzerinden dosya tabanli olarak yonetir
- Veritabani kullanmaz
- Icerik degisikliklerini Git tabanli workflow ile kaydeder

Yani mantik su sekildedir:

1. Kod tabani bir Git repository icinde durur
2. Netlify bu repository'den siteyi build eder
3. Admin panelde yapilan degisiklikler repository'ye commit olarak yazilir
4. Netlify yeni commit'i alip siteyi tekrar yayinlar

## 2. Projeyi git'e baglamamiz gerekli mi?

Kisa cevap: Evet, pratikte gerekli.

Sebebi su:

- Netlify, projeyi bir repository uzerinden takip etmeyi sever
- Decap CMS `git-gateway` mantigi ile calisir
- Admin panelden yapilan degisikliklerin kayda alinmasi icin arka tarafta Git tabanli bir akisa ihtiyac vardir
- Versiyon gecmisi, geri donus, kim ne degistirdi takibi ve guvenli yayin sureci icin Git en dogru yaklasimdir

Bu nedenle production kurulumunda onerilen yapi:

1. Projeyi GitHub repository'sine koy
2. Netlify'i bu repository'ye bagla
3. Netlify Identity ve Git Gateway'i aktif et
4. Admin paneli bu akis uzerinden kullan

Git olmadan lokal klasorden manuel build alip yayinlamak teknik olarak mumkun olabilir; ancak:

- admin panel akisi zayiflar
- icerik degisiklikleri duzenli kaydedilmez
- rollback ve takip zorlasir
- editor kullanim senaryosu profesyonel seviyede olmaz

Bu proje yapisi icin tavsiye edilen model kesin olarak `Git + Netlify + Decap CMS` kombinasyonudur.

## 3. Yayin oncesi hazirlik

Yayina cikmadan once su alanlari netlestir:

### 3.1 Domain bilgileri

Kontrol edilecek dosyalar:

- [src/data/site-settings.json](C:/Projects/CompanyIntroduction/src/data/site-settings.json)
- [public/admin/config.yml](C:/Projects/CompanyIntroduction/public/admin/config.yml)

Kontrol edilecek alanlar:

- `siteUrl`
- `site_url`
- `display_url`

Bu uc alan production domain ile uyumlu olmali.

Ornek:

- Site domaini: `https://ornekdomain.com`
- Admin panel: `https://ornekdomain.com/admin/`

### 3.2 Gercek iletisim verileri

Panelden veya kaynak dosyalardan guncellenecek alanlar:

- telefon
- WhatsApp numarasi
- e-posta
- adres
- sosyal medya linkleri
- Google Maps embed linki
- OG gorseli
- logo

### 3.3 Netlify hazirligi

Netlify tarafinda ihtiyac duyulanlar:

1. Netlify hesabi
2. GitHub repository baglantisi
3. Build komutu: `npm run build`
4. Publish klasoru: `dist`
5. Node surumu: `20`
6. `Identity` aktif
7. `Git Gateway` aktif

## 4. Netlify uzerinden yayinlama adimlari

## 4.1 GitHub repository olusturma

1. GitHub uzerinde yeni bir repository olustur
2. Bu proje dosyalarini o repository'ye push et
3. Repository'nin ana branch'ini belirle

Temel mantik:

- `main` veya `master` branch production kaynagi olur

## 4.2 Netlify'e baglama

1. Netlify'e gir
2. `Add new site` veya benzeri secenekle repository bagla
3. GitHub repository'yi sec
4. Build komutunu `npm run build` olarak tanimla
5. Publish directory olarak `dist` ver
6. Deploy baslat

## 4.3 Domain baglama

1. Netlify site ayarlarina gir
2. Custom domain kullanacaksan domain ekle
3. DNS yonlendirmelerini tamamla
4. SSL'in aktif olmasini bekle

Domain baglandiktan sonra:

- [src/data/site-settings.json](C:/Projects/CompanyIntroduction/src/data/site-settings.json)
- [public/admin/config.yml](C:/Projects/CompanyIntroduction/public/admin/config.yml)

icindeki domain alanlarini final domain ile eslestir.

## 4.4 Admin altyapisini aktif etme

Netlify panelinde:

1. `Identity` ozelligini ac
2. `Git Gateway` ozelligini ac
3. Ilk editor kullanicisini davet et
4. Davet mailini kabul et

Bu adim tamamlanmadan `/admin/` girisi saglikli calismaz.

## 5. Local test nasil yapilir?

Bu proje icin local test uygundur ve yayina cikmadan once kesinlikle yapilmalidir.

## 5.1 Kurulum

Terminalde proje klasorunde:

```bash
npm install
```

## 5.2 Gelistirme sunucusu

Lokal olarak projeyi gormek icin:

```bash
npm run dev
```

Sonra tarayicida Astro'nun verdigi local adresi ac.

Genelde su formatta olur:

- `http://localhost:4321`

## 5.3 Teknik kontrol komutlari

Kod ve build sagligini kontrol etmek icin:

```bash
npm run check
npm run build
npm run qa
```

Komutlarin anlami:

- `npm run check`: Astro ve tip kontrolu yapar
- `npm run build`: production build alir
- `npm run qa`: check ve build adimlarini birlikte calistirir

Yayina cikmadan once minimum beklenti:

- `npm run qa` hatasiz gecmeli

## 6. Manuel test adimlari

Bu kisim cok onemli. Teknik build temiz olsa bile manuel kontrol yapilmalidir.

## 6.1 Sayfa bazli kontrol

Su sayfalari tek tek ac:

- `/`
- `/hizmetler/`
- en az 2 adet hizmet detay sayfasi
- `/iletisim/`
- `/sss/`
- `/bolgeler/`
- bir bolge detay sayfasi
- `/yorumlar/`
- `/galeri/`
- `/admin/`

## 6.2 Masaustu kontrol listesi

Bakilacak noktalar:

- header duzgun mu?
- menu linkleri calisiyor mu?
- WhatsApp butonlari gorunur mu?
- telefon linkleri calisiyor mu?
- footer linkleri dogru mu?
- harita alani varsa yukleniyor mu?
- koyu mod ac/kapa sorunsuz mu?
- uzun metinler tasma yapiyor mu?

## 6.3 Mobil kontrol listesi

Dar ekranlarda kontrol et:

- hero basliklari okunuyor mu?
- butonlar kolay tiklanabilir mi?
- floating WhatsApp butonu ekrani kapatmiyor mu?
- kartlar ust uste duzgun akiyor mu?
- yatay kaydirma olusuyor mu?
- harita alaninda tasma var mi?
- footer okunabilir mi?

## 6.4 SEO ve paylasim kontrolu

Bakilacaklar:

- canonical URL dogru domainle uretiliyor mu?
- OG gorseli tanimli mi?
- sayfa basliklari anlamli mi?
- aciklamalar dolu mu?
- hizmet ve bolge sayfalarinda schema uretiliyor mu?

## 7. Admin alana nasil girilir?

Admin panel adresi:

- production: `https://alanadiniz.com/admin/`
- mevcut varsayim: `https://companyintroduction.netlify.app/admin/`

## 7.1 Ilk giris

1. Netlify Identity aktif olmali
2. Size editor daveti gonderilmis olmali
3. Davet mailindeki link ile sifre olustur
4. Sonra `/admin/` adresine git
5. E-posta ve sifre ile giris yap

Eger giris ekraninda sorun varsa once su alanlari kontrol et:

- Netlify Identity acik mi?
- Git Gateway acik mi?
- dogru domain uzerinden mi giriliyor?
- davet kabul edildi mi?

## 7.2 Panelde neler degistirilebilir?

Admin panelden genel olarak su alanlar yonetilebilir:

- site ayarlari
- telefon, WhatsApp, e-posta, adres
- sosyal medya linkleri
- logo veya medya referanslari
- ana sayfa metinleri ve buton alanlari
- hizmetler
- genel icerik sayfalari
- galeri
- musteri yorumlari
- SSS
- hizmet bolgeleri
- SEO alanlari

## 8. Admin panelde nasil degisiklik yapilir?

Genel kullanim mantigi:

1. `/admin/` adresine gir
2. Sol menuden ilgili bolumu sec
3. Kaydi ac
4. Metin, link veya medya alanlarini guncelle
5. `Save` ile kaydet
6. Gerekiyorsa `Publish` ile yayina al

## 8.1 Site ayarlari guncelleme

Su degisiklikler buradan yapilir:

- site adi
- slogan
- telefon
- WhatsApp
- e-posta
- adres
- Google Maps embed
- calisma saatleri
- site URL

Bu alanlar degistiginde:

- header
- footer
- iletisim sayfasi
- schema verileri
- canonical ve bazi SEO ciktlari

etkilenebilir.

Ozellikle `site URL` degisiyorsa production domain ile tutarli oldugundan emin ol.

## 8.2 Ana sayfa guncelleme

Buradan degistirilebilir:

- hero basligi
- hero aciklamasi
- hero CTA metinleri
- section basliklari
- ana CTA alani

## 8.3 Hizmet ekleme

1. `Hizmetler` koleksiyonuna gir
2. Yeni kayit olustur
3. Baslik yaz
4. Ozet gir
5. Detayli icerigi yaz
6. SEO baslik/aciklama varsa ekle
7. Siralama alanini duzenle
8. Kaydet ve publish et

Bundan sonra hizmet listesi ve ilgili statik sayfa otomatik uretilir.

## 8.4 Genel sayfa ekleme

Kurumsal veya bilgilendirici sayfalar icin:

1. `Genel Sayfalar` alanina gir
2. Yeni sayfa ac
3. Baslik, slug ve icerik alanlarini doldur
4. SEO alanlarini gir
5. Kaydet ve publish et

## 8.5 SSS, yorum ve bolge yonetimi

Ayni mantik gecerli:

1. ilgili koleksiyonu sec
2. yeni kayit ekle veya var olan kaydi ac
3. alanlari guncelle
4. kaydet
5. publish et

## 9. Degisiklik yapinca ne olur?

Bu projede admin panel degisiklikleri dosya tabanli ve Git tabanli calisir.

Yani tipik akis:

1. Editor panelde degisiklik yapar
2. Degisiklik kaydedilir
3. Arka planda repository'ye commit veya editorial workflow kaydi olusur
4. Netlify yeni degisikligi algilar
5. Site yeniden build edilir
6. Guncel icerik yayina yansir

Bu nedenle her icerik degisikligi icin gelistiriciye donmek gerekmez.

## 10. Guncelleme gerektiginde nasil aksiyon alinmali?

Bu sorunun cevabi degisikligin tipine gore degisir.

## 10.1 Sadece icerik guncellemesi ise

Ornekler:

- telefon degisimi
- WhatsApp degisimi
- yeni hizmet ekleme
- hizmet metni guncelleme
- yorum ekleme
- SSS guncelleme
- sosyal medya linki degistirme

Yapilacak aksiyon:

1. Admin panele gir
2. Ilgili kaydi guncelle
3. Kaydet
4. Publish et
5. Production'da kontrol et

Bu durumda yeni kod yazmaya gerek yoktur.

## 10.2 Tasarim veya yapi degisikligi ise

Ornekler:

- yeni bir ozel sayfa tasarimi
- farkli kart tipi
- yeni moduler section tipi
- navigasyon davranisi degisikligi
- farkli formul veya entegrasyon

Yapilacak aksiyon:

1. once ihtiyaci netlestir
2. gelistirme tarafinda kod degisikligi yap
3. local test yap
4. `npm run qa` calistir
5. sonra yayina al

Bu kisim artik editor degil, gelistirme gorevidir.

## 10.3 Domain veya admin altyapisi degisirse

Ornekler:

- Netlify subdomain'den custom domain'e gecis
- farkli editor kullanicilarin eklenmesi
- Netlify Identity ayarlarinin degismesi

Yapilacak aksiyon:

1. domain ayarlarini guncelle
2. `siteUrl`, `site_url`, `display_url` alanlarini esitle
3. `/admin/` girisini tekrar test et
4. canonical ve OG ciktisini kontrol et

## 11. Hangi durumda mutlaka gelistirici destegi gerekir?

Su durumlarda teknik mudahale gerekir:

- yeni sayfa sablonu eklemek
- yeni reusable component tipi tanimlamak
- farkli bir CMS akisi kurmak
- baska hosting altyapisine gecmek
- schema yapisini genisletmek
- performans iyilestirme veya kod refactor yapmak
- admin panelde olmayan yeni alanlar eklemek

## 12. Yayin sonrasi dogrulama

Deploy tamamlandiktan sonra su kontrolleri yap:

1. Ana sayfa aciliyor mu?
2. Hizmetler sayfasi aciliyor mu?
3. Hizmet detay sayfalari aciliyor mu?
4. Iletisim sayfasi aciliyor mu?
5. Telefon ve WhatsApp linkleri calisiyor mu?
6. Harita varsa gorunuyor mu?
7. `/admin/` girisi aciliyor mu?
8. Panelden yapilan test degisikligi yayina yansiyor mu?
9. Mobilde CTA butonlari rahat tiklaniyor mu?
10. Koyu mod sorunsuz mu?

## 13. Onerilen calisma duzeni

Gunumuz operasyonu icin en saglikli yapi su olur:

1. Kod ve yapisal degisiklikler gelistirme sureciyle yapilir
2. Icerik ve iletisim guncellemeleri admin panelden yapilir
3. Tüm production yayinlari Git ve Netlify uzerinden izlenir
4. Her onemli guncelleme sonrasi temel manuel kontrol yapilir

## 14. Hizli ozet

Kisa cevaplarla:

- Projeyi Git'e baglamak gerekli mi? Evet, kesinlikle onerilir ve Decap CMS icin pratikte gerekir.
- Icerik degisikligi icin her seferinde istek gondermek gerekir mi? Hayir, panelden kendiniz yapabilirsiniz.
- Kod degisikligi gerektiren durumlar olur mu? Evet, ama bunlar icerik degil yapisal gelistirme isleridir.
- Yayina cikmadan once en kritik teknik kontrol ne? `npm run qa`
- Yayina cikmadan once en kritik manuel kontrol ne? mobil gorunum, WhatsApp/telefon linkleri ve admin girisi

