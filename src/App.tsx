import Header from "./components/Header"
import Card from "./components/Card"

import "./assets/styles/App.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Card character="Mario" />
        <Card />
        <Card />
      </main>
    </>
  )
}

export default App
