import { StrictMode } from "react"; // component
import { createRoot } from "react-dom/client"; // foksiyon
// import ifadelerinde belirttiğimiz veri/fonksiyon/bileşen eğer default kelimesi ile export edildiyse
// o zaman { } içinde çağırmamıza gerek yok
// ayrıca istediğimiz ismi verebiliriz.
// bir modül içerisinde (modül = dosya) tek bir default tanımı olabilir
// default = varsayılan
import App from "./App.jsx"; // js dosyası

createRoot(document.getElementById("root")).render(<App />); // render => oluşturup ekrana yazdırma(basma)anlamına geliyor.
