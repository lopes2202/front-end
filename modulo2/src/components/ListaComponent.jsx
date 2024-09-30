import React from 'react'

const ListaComponent = () => {
    function Car(props) {
        return <li>Eu sou um {props.brand}</li>;
    }

    function Garage() {
        const cars = [
            { id: 1, brand: 'Ford' },
            { id: 2, brand: 'BMW' },
            { id: 3, brand: 'Audi' }
        ];
        return (
            <>
                <h1>Quem vive na minha garagem?</h1>
                <ul>
                    {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
                </ul>
            </>
        );
    }

    return (
        <div>
            <Garage/>
        </div>
    )
}



export default ListaComponent