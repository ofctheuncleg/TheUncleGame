// components/Footer.js

export default function Footer() {
  return (
    <footer style={{
      padding: '1rem 2rem',
      backgroundColor: '#1a1a1a',
      color: '#00ff00',
      textAlign: 'center',
      marginTop: '3rem',
      borderTop: '2px solid #00ff00'
    }}>
      <p>© {new Date().getFullYear()} The Uncle Game. Todos os direitos reservados. Feito com <span style={{color:'#ff0000'}}>🔥</span> pelo time.</p>
    </footer>
  )
}
