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
      {isLoggedIn ? <Content /> : <LoginForm />}
    </div>
  );
}

function Content() {
  return (
    <>
      <h1>Merhaba React Dünyası</h1>
      <p>İlk react projemi geliştiriyorum. React eğlenceli görünüyor.</p>
      <Btn />
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

  return (
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
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

function Profile() {
  const user = {
    name: "Orhan Ekici",
    bio: "Merhaba ben yazılım eğitimleri veriyorum.",
    linkedinUrl: "https://www.linkedin.com/in/orhanekici/",
    avatarUrl: "/assets/img/avatar.webp",
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
  return <button className="btn btn-primary">Tıkla</button>;
}
