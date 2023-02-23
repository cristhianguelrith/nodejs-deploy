import Card from"../Card/Card";
import "./ReadAll.css"

// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados

const items = [
    {
        _id: '1234',
        nome: 'Phineas e Ferb',
        imageUrl: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/13/2089303233-phineas-e-ferb.jpg',
        const: tags = [
            {
                nome: 'Phineas e Ferb'
            },
            {
                nome: 'DisneyXD'
            },
            {
                nome: 'Desenho Animado'
            },
        ]
    },
    {
        _id: '12345',
        nome: 'Finn e Jake',
        imageUrl: 'https://www.clipartmax.com/png/middle/40-407523_adventure-time-finn-and-jake-by-legaluslex-on-deviantart-adventure-time-finn.png',
        tag: 'Hora de Aventura'
    },
    {
        _id: '123456',
        nome: 'Dipper e Mabel',
        imageUrl: 'https://i.pinimg.com/474x/2c/0b/ba/2c0bbaf629ce5a77b324072edede5cef--dipper-and-mabel-mabel-pines.jpg',
        tag: 'Gravity Falls'
    },
    {
        _id: '1234567',
        nome: 'Goku e Vegeta',
        imageUrl: 'https://img.ifunny.co/images/bf0a76eeb429822bc7f0a7c540e4e4b442ee6af5c0cdcb6fe041c47cf2c4106f_1.jpg',
        tag: 'Dragon Ball Series'
    },
];

/*
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

// Sintaxe de concatenação de variáveis dentro do JSX, chaves: {}
// { VARIAVEL }
// Concatenar = unir de forma lógica

// Na verdade, as chaves representam que código JavaScript pode ser
// inserido dentro delas

function ReadAll() {
    return <div className="ReadAll">
        {items.map(function (item) {
            // {console.log(item)};
            return <Card key={'card-' + item._id} item={item} />;
        })}
    </div>
}

export default ReadAll;