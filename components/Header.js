// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      borderBottom: '2px solid #00ff00'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Aqui tu coloca a foto do velho em forma de desenho */}
        <img src="/images/uncle-avatar.png" alt="The Uncle Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #00ff00' }} />
        <h1 style={{ fontWeight: 'bold', fontSize: '1.7rem' }}>The Uncle Game</h1>
      </div>
      <nav>
        <Link href="/"><a style={{ marginRight: '1.5rem', color: '#00ff00', textDecoration: 'none', fontWeight: '600' }}>Home</a></Link>
        <Link href="/julgamento"><a style={{ color: '#00ff00', textDecoration: 'none', fontWeight: '600' }}>Julgamento</a></Link>
      </nav>
    </header>
  )
}
