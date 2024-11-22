import Label from "../Label/Label";

export default function ProductCard({ name, price, brands, image, description }) {
    return (
        <div style={{ border: '1px solid black', margin: '8px' }}>

            <img src={image} alt={`${name} img`} style={{
                width: '100px', height: '100px', objectFit: 'contain'
            }} />

            <p>{`${name}. Цена: ${price}`}</p>

            <div style={{
                display: 'flex'
            }}>{brands.map(el => <Label name={el} key={el} />)}
            </div>

        </div>
    )
}
