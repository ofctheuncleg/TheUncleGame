
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Head>
        <title>The Uncle Game</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">"A vida é uma ânsia em ter, e o tédio em possuir."</h1>
      <p className="text-xl">Bem-vindo ao conselho mais lógico da internet. Aqui não tem mimimi, só realidade.</p>
    </div>
  )
}
