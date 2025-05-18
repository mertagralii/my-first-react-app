import { useState } from "react";
import PhoneBook from "./PhoneBook";

export default function App() {
  const isLoggedIn = true;
  // let content;

  // if(isLoggedIn) {
  //   content = <Content />;
  // } else {
  //   content = <LoginForm />;
  // }

  // jsx içinde tek return olması gerekiyor
  return (
    <div className="container">
      <Navbar />
      <hr />
      <PhoneBook />
      {isLoggedIn ? <Content /> : <LoginForm />}
    </div>
  );
}

function Content() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Merhaba React Dünyası</h1>
      <p>İlk react projemi geliştiriyorum. React eğlenceli görünüyor.</p>
      <Btn />
      <hr />
      {/* burada state'i bir üst component içine aldık */}
      <CounterBtn count={count} onClick={handleClick} />
      <CounterBtn count={count} onClick={handleClick} />
      <CounterBtn count={count} onClick={handleClick} />
      <hr />
      <Profile />
    </>
  );
}

function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div>
        <label htmlFor="exampleInputPassword1" className="form-label mt-4">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          autoComplete="off"
        />
      </div>
      <div className="my-3">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

function Navbar() {
  const isAdmin = true;

  const navData = [
    {
      id: 1,
      title: "Anasayfa",
      url: "#/",
    },
    {
      id: 2,
      title: "Özellikler",
      url: "#/features",
    },
    {
      id: 3,
      title: "Fiyatlandırma",
      url: "#/pricing",
    },
  ];

  // react ekosisteminde aşağıdaki klasik yöntem yerine es6 arrow func yapısı
  // ve array method kullanılıyor

  // const navItems = [];

  // for (const item of navData) {
  //   // react ile bir veri koleksiyonunu gruplarken
  //   //react'ın sorunsuz çalışabilmesi için mutlaka gruplanan her bir elemana eşsiz bir key vermeliyiz.
  //   // id kelimesi html tarafında rezerve edilen bir attr olduğu react key kullanıyor
  //   //temelden aynı yaklaşım. key unique olmalı
  //   // biz bu işi çözmek için genelde aldığımız/kullandığımız verideki id bilgisini ekliyoruz.
  //   //sağlıklı işlem yapabilmek için asla rastgele veya index gibi değerleri key olarak vermeliyiz.
  //   navItems.push(
  //     <li className="nav-item">
  //       <a className="nav-link" href={item.url}>
  //         {item.title}
  //       </a>
  //     </li>
  //   );
  // }

  return (
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="navbar-nav me-auto">
          {navData.map((x) => (
            <MenuItem key={x.id} url={x.url} title={x.title} />
          ))}
          {isAdmin && (
            <li className="nav-item">
              <a className="nav-link" href="#">
                Admin
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

//arayüzü tarif edicez
// react çalışma mantığı ile düşünme

// props - properties
function MenuItem({ url, title }) {
  function handleClick(e) {
    e.preventDefault(); // tarayıcının varsayılan davranışını engelle

    console.log(e.target); // doğrudan dom elementini verir. İşe yarayabilir.
  }

  return (
    <li className="nav-item">
      <a onClick={handleClick} className="nav-link" href={url}>
        {title}
      </a>
    </li>
  );
}

function Profile() {
  const user = {
    name: "Orhan Ekici",
    bio: "Merhaba ben yazılım eğitimleri veriyorum.",
    linkedinUrl: "https://www.linkedin.com/in/orhanekici/",
    avatarUrl: "/assets/img/100879484.jpg",
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={user.avatarUrl}
        className="card-img-top"
        alt={`${user.name} profil fotosu`}
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.bio}</p>
        <a href={user.linkedinUrl} target="_blank" className="btn btn-primary">
          linkedin
        </a>
      </div>
    </div>
  );
}

function Btn() {
  // butonu yakaladık id den eriştik
  // add event listener
  // event adını yazdık ve tıklandığında çağıracağı func. ismini yazdık

  // arr ise isimlendirmeyi ben yaparım
  const label = "Tıkla";
  // const myArr = ['Orhan', 'Ekici'];
  // const [firstName, lastName] = myArr;
  const myObj = {
    firstName: "Orhan",
    lastName: "Ekici",
  };
  // obje ise mutlaka prop ismini vermeliyim
  const { firstName, lastName } = myObj;

  function handleClick() {
    console.log(firstName, lastName);
  }

  // destructuring
  // [], {}

  return (
    <button onClick={handleClick} className="btn btn-primary">
      {label}
    </button>
  );
}

// her component kendi bacağından asılır
// componentler bağımsız ve tekrar kullanılabilir şekilde
// çalışmak üzere tasarlanmıştır.
function CounterBtn({ count, onClick }) {
  // use kelimesi react içinde hook kullandığınız anlamına gelir
  // hook kanca
  // useState = componentin hafızası (bileşenin hafızası)
  // const [count, setCount] = useState(0); // bunu eklediğinde otomatik olararak yukarda import kısmı çıkıyor eğer o olmazsa bu çalışmaz.
  // ikinci değer alan fonksiyonu ilk aldığımız veride değişiklik yapmak ve bunu reacta haber vermek için kullanıyoruz.

  // function handleClick() {
  //   if (count >= 10) {
  //     return;
  //   }
  //   setCount(count + 1);
  // }.

  // re-render

  return (
    <button onClick={onClick} className="btn btn-primary">
      sayaç : {count}
    </button>
  );
}
