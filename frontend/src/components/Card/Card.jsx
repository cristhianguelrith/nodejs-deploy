import "./Card.css"

function Card(props) {
    // console.log(props)
    const item = props.item;
    const tags = item.tags
    
    return (
        <div className="Card">
            <h1>{item.nome}</h1>

            {tags && (
                <div className="Tag_Wrapper">
                    {tags.map(function (tag, index) {
                        return (
                            <div key={`tag-${index}`} className="Tag">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            )}
            <img src={item.imageUrl} className="imagephoto" alt="" srcSet="" />
        </div>
    );
}

export default Card;