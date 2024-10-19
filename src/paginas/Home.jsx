

function Home() {
  return (
    <div>
        <h1>Bienvenidos a mi página web</h1>
        <p>{import.meta.env.VITE_MENSAJE}</p>
    </div>
  )
}

export default Home