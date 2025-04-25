import { GridPatternDashed } from "@/components/dashed-grid-pattern"
import Footer from "@/components/footerLogos"
import Link from "next/link"

export default function HowToPlay() {
  return (
    <>
      <div className="grid min-h-screen justify-items-center pt-20 pb-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 font-bungee text-xl">
              <span className="text-[#34D399]">Q</span>
              <span className="text-[#60A5FA]">U</span>
              <span className="text-[#F87171]">I</span>
              <span className="text-[#FBBF24]">Z</span>
              <span className="text-[#F472B6]">M</span>
              <span className="text-[#60A5FA]">A</span>
              <span className="text-[#34D399]">T</span>
              <span className="text-[#FBBF24]">H</span>
            </Link>
            <div className="flex gap-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Início
              </Link>
              <Link
                href="/about-us"
                className="px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Sobre Nós
              </Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto grid gap-8 px-4 md:px-6">
          <div>
            <h1 className="select-none text-center font-bungee text-4xl tracking-wide [text-shadow:3px_3px_0_rgba(0,0,0,0.05),_6px_6px_0_rgba(0,0,0,0.02)]">
              <span className="text-[#34D399]">C</span>
              <span className="text-[#60A5FA]">O</span>
              <span className="text-[#F87171]">M</span>
              <span className="text-[#FBBF24]">O</span>
              <span className="inline-flex rotate-5 text-white transition-all [text-shadow:none] hover:rotate-0">
                🎮
              </span>
              <span className="text-[#F472B6]">J</span>
              <span className="text-[#60A5FA]">O</span>
              <span className="text-[#34D399]">G</span>
              <span className="text-[#FBBF24]">A</span>
              <span className="text-[#F87171]">R</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-slate-800">
            <section>
              <p className="mb-6 text-lg">
                Ao abrir o Quiz-Math, você se deparará com uma tela intuitiva e fácil de usar.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#34D399] text-white">
                    1
                  </span>
                  <div>
                    <span className="font-semibold">Título e Slogan:</span> No topo, você verá o título "QUIZ MATH" e o
                    slogan "Pratique seus conhecimentos de matemática!".
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#60A5FA] text-white">
                    2
                  </span>
                  <div>
                    <span className="font-semibold">Níveis de Dificuldade:</span> Logo abaixo, você pode escolher entre
                    três opções de dificuldade: Fácil, Médio e Difícil.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F87171] text-white">
                    3
                  </span>
                  <div>
                    <span className="font-semibold">Botão "Jogar":</span> No centro da tela, há um botão "JOGAR" que
                    você usará para iniciar o quiz após selecionar a dificuldade.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FBBF24] text-white">
                    4
                  </span>
                  <div>
                    <span className="font-semibold">Parceria Institucional:</span> Na parte inferior, aparecem os logos
                    da UNIFAP Digital e PROFEI, confirmando a parceria institucional.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F472B6] text-white">
                    5
                  </span>
                  <div>
                    <span className="font-semibold">Avatar em Libras:</span> O avatar em Libras irá te dar as instruções
                    iniciais.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#34D399] mb-4">Como Jogar</h2>
              <p className="mb-4">Agora, vamos ao que interessa: jogar o Quiz-Math!</p>

              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#60A5FA] text-white">
                    1
                  </span>
                  <div>
                    <span className="font-semibold">Selecionando a Dificuldade:</span> Clique no botão correspondente ao
                    nível de dificuldade que você deseja (Fácil, Médio ou Difícil).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F87171] text-white">
                    2
                  </span>
                  <div>
                    <span className="font-semibold">Iniciando o Quiz:</span> Após escolher a dificuldade, clique no
                    botão "Jogar" para começar.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FBBF24] text-white">
                    3
                  </span>
                  <div>
                    <span className="font-semibold">Escolhendo seu Avatar:</span> Depois de iniciar, o aluno poderá
                    selecionar o avatar que mais lhe agradar.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F472B6] text-white">
                    4
                  </span>
                  <div>
                    <span className="font-semibold">Respondendo às Perguntas:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Cada pergunta será exibida com o enunciado em texto e traduzido para Libras pelo avatar.</li>
                      <li>Você terá alternativas de múltipla escolha (A, B, C, D) para responder.</li>
                      <li>Para escolher sua resposta, basta clicar na alternativa desejada.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#34D399] text-white">
                    5
                  </span>
                  <div>
                    <span className="font-semibold">Recebendo Feedback:</span> O Quiz-Math te dará feedback imediato
                    sobre suas respostas:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Se você acertar, receberá uma mensagem de confirmação.</li>
                      <li>Se você errar, a resposta correta será exibida para que você possa aprender com o erro.</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#60A5FA] mb-4">Analisando seus Resultados</h2>
              <p className="mb-4">Ao final do quiz, você verá uma tela com o seu desempenho:</p>

              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F87171] text-white">
                    1
                  </span>
                  <div>
                    <span className="font-semibold">Número de Acertos e Erros:</span> A tela mostrará quantos acertos e
                    erros você teve.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FBBF24] text-white">
                    2
                  </span>
                  <div>
                    <span className="font-semibold">Pontuação Total:</span> Sua pontuação total será exibida e
                    armazenada no navegador para que você possa acompanhar seu progresso ao longo do tempo.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F472B6] text-white">
                    3
                  </span>
                  <div>
                    <span className="font-semibold">Opções para Continuar:</span> Você terá opções para jogar novamente
                    na mesma dificuldade ou voltar ao início para selecionar outra dificuldade.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F87171] mb-4">Funcionalidades Principais</h2>
              <p className="mb-4">O Quiz-Math oferece diversas funcionalidades para uma experiência completa:</p>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#34D399] mb-2">Seleção de Dificuldade</h3>
                  <p className="text-sm">
                    Escolha entre os níveis Fácil, Médio e Difícil para adaptar o quiz ao seu nível de conhecimento.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#60A5FA] mb-2">Tradução em Libras</h3>
                  <p className="text-sm">
                    O avatar do VLibras traduz as perguntas e o feedback para Libras, garantindo a acessibilidade.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#F87171] mb-2">Pontuação Local</h3>
                  <p className="text-sm">
                    Seu progresso e pontuação são salvos no navegador (LocalStorage) para que você possa acompanhar sua
                    evolução.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#FBBF24] mb-2">Feedback Imediato</h3>
                  <p className="text-sm">
                    Você recebe feedback em tempo real sobre suas respostas, sabendo na hora se acertou ou errou.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#F472B6] mb-2">Reinício Rápido</h3>
                  <p className="text-sm">
                    Você pode repetir o quiz na mesma dificuldade ou mudar para outra com apenas um clique.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FBBF24] mb-4">Solução de Problemas Comuns</h2>
              <p className="mb-4">Se você encontrar algum problema ao usar o Quiz-Math, aqui estão algumas soluções:</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#F87171] mb-2">Avatar não carrega</h3>
                  <p>Verifique sua conexão com a internet e recarregue a página.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#60A5FA] mb-2">Pontuação não aparece</h3>
                  <p>Limpe o cache do seu navegador ou tente acessar o Quiz-Math em outro dispositivo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-[#34D399] mb-2">Travamento durante o quiz</h3>
                  <p>Feche e abra novamente o navegador.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
      <GridPatternDashed />
    </>
  )
}
