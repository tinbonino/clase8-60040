

function Home() {
  return (
    <div>
        <h1>Bienvenidos a mi página web</h1>
        <p>{import.meta.env.VITE_MENSAJE}</p>
        <h2>Felicitaciones por llegar hasta acá y por comprometerse los sábados eh!!</h2>
    </div>
  )
}

export default Home