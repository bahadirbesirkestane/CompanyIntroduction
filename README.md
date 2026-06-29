# Avrupa Yaka Usta Hizmetleri Web Altyapisi

Astro, TypeScript, Tailwind CSS ve Decap CMS tabanli; yerel hizmet saglayicilari icin tekrar kullanilabilir statik web sitesi altyapisi. Bu kurulum ilk ornek musteri olarak Istanbul Avrupa Yakasi genelinde hizmet veren bir usta profiline gore duzenlenmistir.

## Amac

Bu proje ilk olarak il genelinde hizmet veren bir usta icin tasarlansa da, mimari olarak farkli yerel hizmet sektorlerine uyarlanabilecek sekilde kurgulanmistir.

## Teknoloji

- Astro
- TypeScript
- Tailwind CSS
- Decap CMS
- Markdown ve JSON tabanli icerik yonetimi
- Netlify uyumlu statik yayin modeli

## Temel Yapi

- `src/content`: Hizmetler, genel sayfalar, SSS, yorumlar, galeri ve bolge icerikleri
- `src/data`: Site ayarlari, navigation ve ana sayfa icerikleri
- `src/components`: Reusable UI, layout, card ve section bileşenleri
- `public/admin`: Decap CMS yonetim paneli

## Komutlar

```bash
npm install
npm run dev
npm run check
npm run build
npm run qa
```

## Production Domain Varsayimi

Proje varsayilan olarak su production adresine gore ayarlidir:

`https://companyintroduction.netlify.app`

Bu adres:
- [src/data/site-settings.json](C:/Projects/CompanyIntroduction/src/data/site-settings.json)
- [public/admin/config.yml](C:/Projects/CompanyIntroduction/public/admin/config.yml)

dosyalarinda tanimlidir. Custom domain kullanilacaksa bu iki nokta birlikte guncellenmelidir.

Admin panel varsayilan adresi:

`https://companyintroduction.netlify.app/admin/`

## Icerik Yonetimi

Decap CMS ile duzenlenebilen ana alanlar:

- Site ayarlari
- Navigation ve footer linkleri
- Ana sayfa bloklari
- Hizmetler
- Genel sayfalar
- Galeri
- Musteri yorumlari
- SSS
- Hizmet bolgeleri

## QA ve Yayin

Yayin oncesi minimum kontrol:

1. `npm run qa`
2. Ana sayfa, hizmetler, iletisim, SSS, bolgeler ve yorumlar sayfalarini kontrol et
3. `siteUrl`, sosyal linkler, OG gorseli ve Google Maps embed alanini gercek verilerle guncelle
4. Netlify Identity ve Git Gateway ayarlarini aktif et
5. [docs/prelaunch-checklist.md](C:/Projects/CompanyIntroduction/docs/prelaunch-checklist.md) dokumanindaki manuel kontrol adimlarini tamamla

Detayli yayin ve editor dokumani icin:

[docs/publishing-and-editing.md](C:/Projects/CompanyIntroduction/docs/publishing-and-editing.md)

Adim adim yayinlama, test, admin kullanim ve guncelleme operasyon rehberi icin:

[docs/project-release-guide.md](C:/Projects/CompanyIntroduction/docs/project-release-guide.md)
