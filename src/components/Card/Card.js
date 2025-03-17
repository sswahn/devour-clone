

const Card = ({ header, content, footer }) => {
  return (
    <div className="card"> 
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
      <div className="card-footer">{footer}</div>
    </div>
  )
}

export default Card
