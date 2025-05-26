
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

- [React Öğrenme](https://tr.react.dev/learn)  
- [Next.js Başlangıç](https://nextjs.org/docs/getting-started)  
- [Vite Kılavuz](https://vitejs.dev/guide/)  
- [HTML → JSX Dönüştürücü](https://magic.reactjs.net/htmltojsx.htm)  
- [Bootswatch](https://bootswatch.com/)  
- [Bootswatch CDN](https://www.jsdelivr.com/package/npm/bootswatch)  
- [JavaScript MDN](https://developer.mozilla.org/tr/docs/Web/JavaScript)
- [JavaScript Öğren](https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide)


## React Genel Notlarım 

React tamamen componentler üzerine çalışıyor kısaca ana mantık şu 

App adında bir ana fonksiyonumuz ve Navbar, footer vs gibi birden fazla birsürü başka component(bileşenlerimiz var.)

bir yazdığımız bütün bileşenleri ana fonksiyonumuz olan App fonksiyonunda topluyoruz bunu yaparken de fonksiyonumuzu eklemek için ise <Fonksiyonİsmi /> gibi bir etikek kullanıyoruz.
Ama uyarı ! Fonskiyon isimlerini PascalCase yazmak zorundasın ve çağırıken de yukardaki örnek gibi büyük harfle başlamalı yoksa html ile çakışır sorun yaşarsın 

Örnek bir kod sana 

`export` `default` anahtar kelimeleri dosyadaki ana bileşeni belirtir.

```react.js

export default function MyApp() { --> Ana Fonksiyonumuz
  return (
    <div>
      <h1>Uygulamama hoşgeldiniz</h1>
      <MyButton /> --> Burada da çağırdık artık projede gözüküyor.
    </div>
  );
}

function MyButton() { --> Bileşenimiz
  return (
    <button>
      Ben bir butonum
    </button>
  );
}
```

## Burası Tamam şimdi asıl konumuza gelelim. 

Eskiden bir html etiketine style atamak istediğimizde class yazar oradan da style adını girerdik yada normal bir class atamak için bile class yazardık. Ama Reacta className yazıyoruz!

Koşullu ifadeler falan aynı if elselerden bahsediyorum ama şöyle kullanımları da var not olarak dursun bakarsın 

```react.js
// Eski Usul Kullanımı Böyle 
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

// Daha kompakt bir yazım
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

// Sen dedin ki else ihtiyaç yok daha farklısı lazım al

<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

 ## Geldik Listeleme Kısmına

Normalde Listeleme için ilk önce bir dizi yada liste açardık ardından döngüler ile birlikte bütün dizini yada listeyi yazdırırdık. Burada da aynı şekilde yapabilirsin ama şöyle bir yöntem de var.

```react.js

const products = [ --> bu bizim obje listemiz
  { title: 'Lahana', id: 1 },
  { title: 'Sarımsak', id: 2 },
  { title: 'Elma', id: 3 },
];

// Burada yaptığımız Kısım
// bütün products listesini aşağıdaki li etiketi formatına göre listeleyip sonrasında bu li listesini listItems'e aktardık.

const listItems = products.map(product =>    // map bizim products listemizi kopyalıyor ana listede değişiklik yapmıyor
  <li key={product.id}> {product.title} </li> // Key'in olayı diğer li'lerden ayırmak için kullanıyoruz. Veritabanındaki Id değeri gibi düşün.
);

return (
  <ul>{listItems}</ul> --> ardından bu li listesini de ul'ye aktardık.
);
```

## Şimdi de fonksiyon kullanımına geldik.

Her bir bileşenin içine fonksiyon tanımlayabiliyoruz. Kullanıcı bu fonksiyonu tetiklediğinde o component'e yöneltede biliyoruz.

```react.js

function MyButton() { --> Bu bizim bileşenimiz (component)
  function handleClick() { --> o bileşenin içinde yer alan fonkisyonumuz
    alert('Bana tıkladın!');
  }

  return ( --> Buranın altına da html kodlarımızı yazıyoruz
    <button onClick={handleClick}>  --> İşte tam olarak burada da fonksiyonumuzu tetikletiyoruz. (Kullanıcı butona tıklarsa yukardaki fonksiyonu çalıştır gibi)
      Bana tıkla
    </button>
  );

// MyButton yazımına bakarsan bunun bir component olduğunu anlarsın. Componentlerin yazım biçimi PascalCaste idi.
// handleClick ise bir fonksiyon olduğu içinde onu camelCase yazdık.

}
```

## Ekranı Güncelleme (useState)

### 🔥 Ne İşe Yarar?

useState, React’te component bazlı bir değişken tanımlamaya yarar.
Bu değişkenin değeri değiştiğinde, component kendini yeniden render eder.
Yani sen bir state’i değiştirince, React ekranı yeniden çiziyor — çünkü değiştiğini fark ediyor.

📌 Normal bir let ile tanımlarsan değişiklik ekrana yansımaz. Ama useState ile yaparsan otomatik olarak ekranı günceller.(React tetiklenir.)

---

### ⚙️ Söz Dizimi

```jsx
const [deger, setDeger] = useState(ilkDeger);

deger: Anlık değeri temsil eder

setDeger: Değeri değiştiren fonksiyondur (React'e "değişti" demenin yolu budur)

useState(ilkDeger): Başlangıç değeri verilir
```

useState ile dizi/obje tutma
```jsx

const [kullanicilar, setKullanicilar] = useState([]); --> bu sefer bir dizi obje değeri atatık bunlara başlangıçta
const [kullanici, setKullanici] = useState({ ad: '', yas: 0 }); --> burada da dedik ki kullanici değişkeninin başlangıçta ad '' ve yas '' olarak iki tane objesi var ve bunlar boş
```
State sadece sayı/string değil, array veya object de olabilir. Örneğin back-end'den gelen kullanıcı listesini burada tutabilirsin.

✅ Örnek Kullanım
```jsx
function Sayac() {
  const [sayac, setSayac] = useState(0); --> sayac'ın başlangıç değeri  oldu

  function arttir() { --> bir sayı arttırma fonksiyonu açtık
    setSayac(sayac + 1); --> Değişiklik yapacağımızda SetSayacı kullanacağımız için onu çağrıdık ve sayaç değerini 1 arttırdık.
  }

  return (
    <div>
      <p>Sayaç: {sayac}</p> --> Program çalıştığında atanan ilk değer olan 0 gelicek
      <button onClick={arttir}>Arttır</button> --> kullanıcı butona basar ve program arttir fonksiyonuna gider.
    </div>
  );
}
Not: sayac++ kullanırsan çalışmaz çünkü bu şekilde React’e “değişiklik oldu” sinyali gitmez.

// Reacta sinyal vermen gerekiyor
```

🎯 useState ile Sık Yapılanlar

Durum	Açıklama
Sayı artırma/azaltma	Sayaç uygulamaları
Boolean tutmak	true/false (örnek: modal açık mı?)
String tutmak	Input alanındaki yazılar
Object / Array tutmak	Daha kompleks veri yönetimi

🧠 Bonus: State Güncellemeyi Fonksiyonla Yapmak
``` jsx
setSayac(prev => prev + 1); 
Bu yazım, önceki değere göre update yapmak istediğinde önemlidir.
Çünkü React bazen güncellemeleri sıraya alır, ve eski değeri yanlış okuyabilirsin.
```
🚫 Hatalı Kullanım
```jsx
let sayac = 0;
function tikla() {
  sayac += 1;
  // Bu ekranda gösterilmez çünkü React render tetiklemez. useState renderi tetikler.
}
```
🔚 Kural: useState sadece bileşen (component) içinde en üst seviyede çağrılır.
```js
// Doğru ✅
function App() {
  const [data, setData] = useState(null); --> böyle yaparsak eğer o component'de yapılan bütün değişiklikleri yakalayabiliriz.
}

// Yanlış ❌
if (x > 5) {
  const [data, setData] = useState(null);  // böyle olmaz
}
```
Örnek bir Code : Sayaç 

```js
import { useState } from "react";

// React Akışı 
// İlk başta kullanacağımız useStateleri belirledik (Sadece sayaç kullanacağımız için sayaçtan gittik)
// ardından bunu ana componentimize yazdık.
// sonrasında bu ana componentimizde neler olmasını istediğini yazdık (fonskiyon olarak ben sadece sayaç arttırma ve azaltma işlemi yapmak istedim)
// ardından return dedik ve altına da index.html sayfamızda olacak olan componentleri yazdık
// Bu diper componentlere de bir veri göndermek istediğim içi (c#'da method'a veri göndermek gibi veri gönderdim, birisine sayacı diğer ikisine de fonksiyonu)
// ardından birisinde sadece sayacın ekrana basılması için olan kısmı yazdım
// diğerinde de sayacı arttıran fonksiyonu yazdım
//  diğerinde de sayacı azaltan fonksiyonu yazdım


export default function App() { // Ana Component'imiz.
  const [count, setCount] = useState(0);  // Başlangıçta count değerini 0 olarak veriyoruz. setCount ise değişikliği yapıcak yaptığında da sayfa re-rendering olcak


  function handleInputChange(e) { // Sayacımızı inputtan gelen değere göre değiştiren Fonksiyon
    console.log("handleInputChange fonksiyonu çalıştırıldı.");
    const value = Number(e.target.value) // e.target.value ==> İnput'a yazılan yeni değeri verir.
    setCount(value);
    console.log('Sayac İnputtan gelen değere göre değiştirildi.');
  }

  function updateCount() { // Sayacımızı arttıran fonksiyon
    console.log('Update Count Fonksiyonu Çalıştı');
    setCount(count + 1); // count'un değerini 1 arttırıyor.
    console.log('Sayaç Arttırıldı.');
  }

  function decreaseCount() { // Sayacımızı azaltan fonksiyon
    console.log('decreaseCount Fonksiyonu Çalıştı.');
    setCount(count - 1); // count değerini 1 azaltıyor.
    console.log('Sayaç Azaltıldı.');
  }

  function countReset() { // Sayacımızı Sıfırlayan Fonksiyon
    console.log('Sayac Sıfırlama Fonksiyonu çağrıldı.');
    setCount(0)
    console.log('Sayac Sıfırlandı.');
  }

  return (
    <>
      <SayacGiris count={count} onChange={handleInputChange} />
      <SayacEkrani sayac={count} />  {/* Sayac Ekranı Componenti buda da sayac adında bir değer gönderdik değeri de count*/}
      <SayacButonu updateCount={updateCount} /> {/* Sayac Butonu  Componenti buda da UpdateCount adında bir function gönderdik */}
      <SayacAzaltButonu decreaseCount={decreaseCount} /> {/* Sayac Azalt Butonu  Componenti buda da decreaseCount adında bir function gönderdik */}
      <SayacSifirlamaButonu countReset={countReset} />
    </>
  )
}

function SayacGiris({ count, onChange }) { // Sayacı Elle girmemizi saylayan Componentimiz
  return (
    <>
      <label>
        Sayaç Değeri Gir:{" "}
        <input type="number" value={count} onChange={onChange} /> {/* value ==> Değeri gösterir , onChange ==>  kullanıcı input’a yazdığında bu fonksiyon tetiklenir. */}
      </label>
    </>
  )
}

function SayacEkrani({ sayac }) { // Sayac Ekranı fonksiyonumuz içinde sayac adında bir değer geliyor.
  return (
    <>
      <p>Sayac : {sayac} </p> {/* Sayacı gösteriyoruz */}
    </>
  )
}

function SayacButonu({ updateCount }) { // bunda ise UpdateCount adında bir fonksiyon var.
  return (
    <>
      <button onClick={updateCount}>Arttir</button> {/* Burda da UpdateCount fonksiyonunu onclik ile çağırıyoruz. */}
    </>
  )
}

function SayacAzaltButonu({ decreaseCount }) { // bunda ise decreaseCount adında bir fonksiyon var.
  return (
    <>
      <button onClick={decreaseCount}>Azalt</button> {/* Burda da UpdateCount fonksiyonunu onclik ile çağırıyoruz. */}
    </>
  )
}

function SayacSifirlamaButonu({ countReset }) { // bunda ise countReset adında bir fonksiyon var.
  return (
    <>
      <button onClick={countReset}>Sıfırla</button>  {/* Burda da countReset fonksiyonunu onclik ile çağırıyoruz. */}
    </>
  )
}

```
