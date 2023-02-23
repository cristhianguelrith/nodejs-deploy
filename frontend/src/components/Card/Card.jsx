import "./Card.css"

function Card(props) {
    // console.log(props)
    const item = props.item;
    const tags = props.tags;
    return (
        <div className="Card">
            <h1>{item.nome}</h1>
            <img src={item.imageUrl} className="imagephoto" alt="" srcSet="" />
            <h2>{tags.nome}</h2>
        </div>
    )
}

export default Card;