import Card from"../Card/Card";
import "./ReadAll.css"



const items = [
    {
        _id: '1234',
        nome: 'Phineas e Ferb',
        imageUrl: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/13/2089303233-phineas-e-ferb.jpg'
    },
    {
        _id: '12345',
        nome: 'Finn e Jake',
        imageUrl: 'https://www.clipartmax.com/png/middle/40-407523_adventure-time-finn-and-jake-by-legaluslex-on-deviantart-adventure-time-finn.png'
    },
    {
        _id: '123456',
        nome: 'Dipper e Mabel Pines',
        imageUrl: 'https://super.abril.com.br/wp-content/uploads/2016/10/super_imggravity_falls_0_0.jpg?quality=90&strip=info&w=1024&resize=1200,800'
    },
    {
        _id: '1234567',
        nome: 'Goku e Vegeta',
        imageUrl: 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2022/05/legiao_eqoT4k3g8CUI.jpg.webp'
    },
];



function ReadAll() {
    return <div className="ReadAll">
            {items.map(function (item) {
                {console.log(item)};
                return <Card key={'card-' + item._id} item={item} />;
            })}
        </div>
}

export default ReadAll;