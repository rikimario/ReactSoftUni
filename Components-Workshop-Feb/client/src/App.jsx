
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"

function App() {

  return (
    <>
      <Header />

      <main className="main">

        <section className="card users-container">

          <Search />
          <UserList />
        </section>
      </main>

      <Footer />
    </>

  )
}

export default App
