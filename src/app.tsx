// The Main View
// eslint-disable-next-line react-refresh/only-export-components
const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// function filterPizza(props) {
//   const pizza = getPizza(props.id);
//   const pizzas = getPizzas();

//   const data = pizzaData.filter((data) => data.id == 1);
//   console.log(pizza);
// }
function getPizza(id) {
  return pizzaData.find((data) => data.id === id);
}
function getPizzas() {
  return pizzaData;
}

function Pizza(props) {
  // const pizza = getPizza(props.pizzaObj.id);

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="noImg" />
      <div className="pizzas">
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price} </span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = getPizzas();
  return (
    <main className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {/* <Pizza id={1} imgName="spinaci" pizzaname="Pizza Spinaci" />*/}
        {pizzas.length > 0 ? (
          pizzaData.map((data) => <Pizza pizzaObj={data} key={data.name} />)
        ) : (
          <h1>Menu Work In Progress</h1>
        )}
      </ul>
    </main>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   fontTransform: "uppercase",
  //   textAlign: "center",
  //   marginBottom: "50px",
  // };
  return (
    <header className="header">
      <h1>The Pizza Corp.</h1>
    </header>
  );
}

function Footer() {
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTimer(new Date().toLocaleTimeString());
  //     }, 30 * 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  // const hour = new Date().getHours();
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log("isOpen :", isOpen);
  // if (hour >= openhour && hour <= closehour) {
  //   console.log("Iya kita Buka");
  // } else {
  //   console.log("Tidak kita tidak buka");
  // }

  return (
    <footer className="footer">
      <h3>
        {isOpen && (
          <div className="order">
            <p>
              Kami buka sampai jam {closehour}:00 silakan beli di toko kami atau
              pesan online Terima Kasih!.
            </p>
            <button className="btn">Order</button>
          </div>
        )}
        {isOpen || (
          <div className="order">
            <p>TUTUP!</p>
          </div>
        )}
      </h3>
    </footer>
  );
}
