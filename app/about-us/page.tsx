import { GridPatternDashed } from "@/components/dashed-grid-pattern"
import Footer from "@/components/footerLogos"
import Link from "next/link"

export default function AboutUs() {
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
            <Link
              href="/"
              className="px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Voltar ao Início
            </Link>
          </div>
        </nav>

        <main className="container mx-auto grid gap-8 px-4 md:px-6">
          <div>
            <h1 className="select-none text-center font-bungee text-4xl tracking-wide [text-shadow:3px_3px_0_rgba(0,0,0,0.05),_6px_6px_0_rgba(0,0,0,0.02)]">
              <span className="text-[#34D399]">S</span>
              <span className="text-[#60A5FA]">O</span>
              <span className="text-[#F87171]">B</span>
              <span className="text-[#FBBF24]">R</span>
              <span className="text-[#F472B6]">E</span>
              <span className="inline-flex rotate-5 text-white transition-all [text-shadow:none] hover:rotate-0">
                🧮
              </span>
              <span className="text-[#34D399]">N</span>
              <span className="text-[#60A5FA]">Ó</span>
              <span className="text-[#F87171]">S</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-slate-800">
            <section>
              <h2 className="text-2xl font-bold text-[#60A5FA] mb-4">Aventura Matemática na Vila dos Avatares</h2>
              <p className="mb-4">
                Na Vila dos Avatares, viviam quatro grandes amigos: Hozana, Guga e Ícaro. Cada um deles adorava resolver desafios,
                mas o que mais gostavam mesmo... era de matemática!
              </p>
              <p className="mb-4">
                Um dia, enquanto brincavam perto do rio Amazonas, apareceu uma coruja muito sábia chamada Corujuba. Ela trouxe um
                bilhete mágico com um convite especial:
              </p>
              <blockquote className="italic border-l-4 border-[#60A5FA] pl-4 text-slate-700 mb-4">
                "Heróis da Matemática, precisamos da ajuda de vocês! O Reino dos Números foi invadido pela Confusão dos Erros.
                Só quem conseguir resolver os desafios poderá salvar a Rainha Adição!"
              </blockquote>
              <p className="mb-4">
                Animados, os amigos apertaram o botão azul brilhante do bilhete. De repente, <strong>PUF!</strong> – foram
                transportados para dentro do mundo do <strong>QuizMath</strong>!
              </p>
              <p className="mb-4">
                Lá, tudo era colorido e cheio de sinais, somas e figuras dançantes. Cada avatar teve que escolher um caminho: fácil,
                médio ou difícil. Mas, para avançar, era preciso resolver os problemas com atenção, usando raciocínio e uma ajudinha
                da Libras, que aparecia com mágica nas mãos de um ajudante sorridente.
              </p>
              <p className="mb-4">
                A cada acerto, o caminho se iluminava com pontos dourados e um "Muito bem!" ecoava pelos céus. Mas, se errassem, não
                tinha problema – aparecia uma dica amiga dizendo onde estava a confusão, e todos podiam tentar de novo.
              </p>
              <p className="mb-4">
                No final da jornada, juntos, os avatares somaram todas as respostas certas e libertaram a Rainha Adição, que sorriu
                e disse:
              </p>
              <blockquote className="italic border-l-4 border-[#60A5FA] pl-4 text-slate-700 mb-4">
                “Parabéns, pequenos gênios! Agora vocês mostraram que a matemática também é lugar de diversão, amizade e inclusão!”
              </blockquote>
              <p className="mb-4">
                E assim, com um botão de “Jogar Novamente”, voltaram para a Vila dos Avatares – prontos para viver mais uma aventura
                no mundo encantado do <strong>QuizMath</strong>!
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#34D399] mb-4">Nossa Missão</h2>
              <p className="mb-4">
                QuizMath é um recurso educacional digital inovador, desenvolvido para transformar a maneira como alunos
                com deficiência auditiva aprendem operações matemáticas básicas. Criado como parte de uma dissertação de
                mestrado no Programa de Pós-Graduação em Educação Inclusiva (PROFEI) da Universidade Federal do Amapá
                (UNIFAP), nossa plataforma tem como foco tornar a matemática acessível, envolvente e culturalmente
                relevante.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#60A5FA] mb-4">Nosso Compromisso com a Inclusão</h2>
              <p className="mb-4">
                A inclusão é o princípio fundamental do QuizMath. Entendemos a importância de fornecer ferramentas de
                aprendizado que atendam às necessidades específicas de alunos com deficiência auditiva. Cada aspecto do
                QuizMath é projetado para garantir uma experiência de aprendizado eficaz e contínua:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Integração com Libras:</span> Todas as perguntas e alternativas são
                  acompanhadas por vídeos em Libras, garantindo total compreensão para alunos cuja primeira língua é
                  Libras.
                </li>
                <li>
                  <span className="font-semibold">Design Acessível:</span> Nossa interface apresenta botões grandes,
                  cores de alto contraste e navegação simplificada, tornando mais fácil para usuários com diferentes
                  níveis de familiaridade tecnológica interagir com a plataforma.
                </li>
                <li>
                  <span className="font-semibold">Contextualização Cultural:</span> Acreditamos que o aprendizado é mais
                  eficaz quando é relevante. Portanto, os problemas matemáticos no QuizMath são contextualizados na
                  realidade amazônica, usando cenários familiares aos alunos da região, como compras em feiras locais,
                  transporte fluvial e atividades escolares.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F87171] mb-4">Nossa Fundamentação Pedagógica</h2>
              <p className="mb-4">
                O QuizMath é construído sobre uma sólida base pedagógica. Ele é fundamentado na Teoria dos Campos
                Conceituais de Vergnaud, especificamente no campo aditivo, e alinhado às diretrizes da Base Nacional
                Comum Curricular (BNCC). Fornecemos feedback imediato para cada resposta, promovendo o aprendizado por
                meio da tentativa e erro e reforçando os conceitos de forma eficaz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FBBF24] mb-4">Nossa Tecnologia</h2>
              <p className="mb-4">
                Tecnologicamente, o QuizMath é desenvolvido usando React.js, garantindo alto desempenho e
                acessibilidade. Nosso código aberto reflete nosso compromisso com a colaboração e permite que outras
                instituições adaptem a ferramenta aos seus contextos específicos. A plataforma está disponível
                gratuitamente online e pode ser acessada em qualquer navegador atualizado, seja em um celular, tablet ou
                computador, sem necessidade de instalação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F472B6] mb-4">Nosso Impacto</h2>
              <p className="mb-4">O QuizMath foi projetado para gerar um impacto significativo em várias frentes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Para os Alunos:</span> Oferecemos uma experiência de aprendizado
                  autônoma, capacitando alunos com deficiência auditiva a aprender matemática em seu próprio ritmo, com
                  suporte visual e em Libras.
                </li>
                <li>
                  <span className="font-semibold">Para os Professores:</span> Fornecemos uma ferramenta pronta para uso
                  que facilita as práticas de sala de aula inclusivas, economizando tempo dos professores na preparação
                  de materiais adaptados.
                </li>
                <li>
                  <span className="font-semibold">Para os Pesquisadores:</span> Apresentamos um modelo replicável de
                  como tecnologia e educação inclusiva podem ser integradas de forma eficaz.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#34D399] mb-4">Nosso Futuro</h2>
              <p className="mb-4">
                QuizMath é mais do que apenas um recurso digital; é um passo em direção a uma educação mais inclusiva e
                equitativa. Estamos comprometidos com a melhoria contínua e a expansão, com planos de incluir outras
                operações matemáticas e desenvolver versões offline para alcançar ainda mais alunos.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
      <GridPatternDashed />
    </>
  )
}
