function Destaque({ titulo, texto }) {
  return (
    <div className="destaque">
      <div className="icone-destaque">✦</div>

      <div>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </div>
  )
}

export default Destaque