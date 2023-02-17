import "./Card.css"

function Card(props) {
    console.log(props)
    const item = props.item;
    return (
        <div className="Card">
            <h1>{item.nome}</h1>
            <img src={item.imageUrl} className="imagephoto" alt="" srcSet="" />
        </div>
    )
}

export default Card;