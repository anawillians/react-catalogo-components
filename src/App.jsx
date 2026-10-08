import Cabecalho from "./components/Cabecalho"
import CardCurso from "./components/CardCurso"
import Destaque from "./components/Destaque"
import Rodape from "./components/Rodape"
import "./App.css"

function App() {

  const cursos = [
    {
      nome: "Desenvolvimento de Sistemas",
      duracao: "1200 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 12
    },
    {
      nome: "Redes de Computadores",
      duracao: "1000 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: 8
    },
    {
      nome: "Manutenção de Computadores",
      duracao: "800 horas",
      modalidade: "Presencial",
      nivel: "Profissionalizante",
      vagas: 5
    },
    {
      nome: "Programação Web",
      duracao: "600 horas",
      modalidade: "Online",
      nivel: "Profissionalizante",
      vagas: 10
    },
    {
      nome: "Banco de Dados",
      duracao: "700 horas",
      modalidade: "Online",
      nivel: "Profissionalizante",
      vagas: 0
    },
    {
      nome: "Desenvolvimento Mobile",
      duracao: "900 horas",
      modalidade: "Híbrido",
      nivel: "Profissionalizante",
      vagas: 15
    }
  ]

  return (
    <>
      <Cabecalho />

      <main>
        <section className="cursos">
          <h2>Cursos disponíveis</h2>

          <div className="lista-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
              />
            ))}
          </div>
        </section>

        <section className="destaques">
          <h2>Por que estudar tecnologia?</h2>

          <Destaque
            titulo="Aprenda fazendo"
            texto="Desenvolva projetos durante sua formação."
          />

          <Destaque
            titulo="Prepare-se para o mercado"
            texto="Aprenda conhecimentos que podem ser usados em diferentes áreas."
          />

          <Destaque
            titulo="Pratique seus conhecimentos"
            texto="Coloque em prática o que você aprende durante o curso."
          />
        </section>
      </main>

      <Rodape />
    </>
  )
}

export default App