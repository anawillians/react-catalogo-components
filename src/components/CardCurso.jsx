function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <div className="card-curso">
      <h2>💻 {nome}</h2>

      <p><strong>⏱ Duração:</strong> {duracao}</p>
      <p><strong>📍 Modalidade:</strong> {modalidade}</p>
      <p><strong>🎓 Nível:</strong> {nivel}</p>

      <p>
        <strong>
          {vagas > 0
            ? `🟢 Vagas disponíveis: ${vagas}`
            : "🔴 Turma completa"}
        </strong>
      </p>
    </div>
  )
}

export default CardCurso