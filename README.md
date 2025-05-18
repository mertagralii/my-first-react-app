
# React Projesi Oluşturma (Vite ile)

## 🚀 Gereksinimler

Başlamadan önce bilgisayarında şu yazılımlar kurulu olmalı:

- **Node.js** – JavaScript'i tarayıcı dışında çalıştırmak için gereken ortam.
- **npm (Node Package Manager)** – JavaScript paketlerini yöneten araçtır. Node.js ile birlikte kurulur.

### 📥 İndir:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)  

---

## 🔧 Kurulum Adımları

1. Projeyi oluşturacağımız klasöre geliyoruz, sağ tıklayıp “CMD” veya “Terminal” açıyoruz.

2. Aşağıdaki komutla Vite projesi başlatıyoruz:

```bash
npm create vite@latest
```

3. Sırasıyla:  
   - Proje adı giriyoruz → örnek: `my-first-react-app`  
   - Framework olarak React  
   - Dil olarak JavaScript seçiyoruz  

4. Klasöre giriyoruz:

```bash
cd my-first-react-app
```

5. VS Code ile projeyi açmak için:

```bash
code .
```

6. Terminalde bağımlılıkları yüklemek için:

```bash
npm install
```

> ℹ️ Vite bazı dosyaları kurar ama `node_modules` klasörü için bu komut şarttır.

---

## 📁 Proje Yapısı

- `node_modules/` → Kurulu tüm npm paketlerini içerir  
- `public/` → Statik dosyalar (ASP.NET `wwwroot` gibi)  
- `package.json` → Paketlerin listesi, sürümleri ve komutlar burada yer alır  

---

## 🧠 Ekstra Bilgiler (Kısaca)

| Teknoloji   | Açıklama                                                  |
|-------------|----------------------------------------------------------|
| React       | Bileşen tabanlı UI geliştirme kütüphanesi                |
| Next.js     | React tabanlı SSR (sunucu taraflı render) destekleyen framework |
| Vite        | Hızlı build ve hot-reload sunan geliştirme aracı         |
| Bootswatch  | Bootstrap için hazır tema şablonları                      |
| html-to-jsx | HTML kodlarını JSX'e çevirmenizi sağlar (online tool)     |

---

## 🔗 Yararlı Kaynaklar

- [React Öğrenme](https://reactjs.org/tutorial/tutorial.html)  
- [Next.js Başlangıç](https://nextjs.org/docs/getting-started)  
- [Vite Kılavuz](https://vitejs.dev/guide/)  
- [HTML → JSX Dönüştürücü](https://magic.reactjs.net/htmltojsx.htm)  
- [Bootswatch](https://bootswatch.com/)  
- [Bootswatch CDN](https://www.jsdelivr.com/package/npm/bootswatch)  
- [JavaScript MDN](https://developer.mozilla.org/tr/docs/Web/JavaScript)
- [JavaScript Öğren](https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide)
