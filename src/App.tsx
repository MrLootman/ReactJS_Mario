import Card from "./components/Card";
import Header from "./components/Header";

import "./assets/styles/App.css"

const data = [
  {
    firstname: "Bowser",
    type: "Evil",
    imgSrc:
      "https://mariopartylegacy.com/wp-content/uploads/2018/07/bowserprofile.png",
  },
  {
    firstname: "Mario",
    type: "Good",
    imgSrc:
      "https://media.istockphoto.com/id/458294725/fr/photo/super-mario.jpg?s=612x612&w=0&k=20&c=mZf-iNR-FvTV_u_Yih4Sy0LGG6oLsqWDV0ziKnFDNtU=",
  },
  {
    firstname: "Peach",
    type: "Good",
    imgSrc: "https://generation-nintendo.com/images/encyclopedie/54s7qi8a.png",
  },
];

function App() {
  return (
    <>
      <Header />

      <main>
        {data.map((el) => {
          return (
            <Card key={el.firstname} firstname={el.firstname} imgSrc={el.imgSrc} />
          )
        })}
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
