import Card from "./components/Card";
import Header from "./components/Header";

import "./assets/styles/App.css"
import { useRef, useState } from "react";
import type { RefObject } from "react";

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
  const [btnValue, setBtnValue] = useState('');

  const goodRef = useRef(null);
  const evilRef = useRef(null);

  const handleFilter = (reference: RefObject<HTMLButtonElement>) => {
    if (reference.current) {
      setBtnValue(reference.current.textContent || "");
    }
  }

  const filteredArr = btnValue ? data.filter(el => el.type === btnValue) : data;

  return (
    <>
      <Header />

      <section id="btn-section">
        <button type="button" ref={goodRef} onClick={() => handleFilter(goodRef)}>Good</button>
        <button type="button" ref={evilRef} onClick={() => handleFilter(evilRef)}>Evil</button>
      </section>

      <main>
        {filteredArr.map((el) => {
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
