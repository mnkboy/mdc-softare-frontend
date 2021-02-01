import React from 'react'
import { useParams } from 'react-router-dom'
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

const PromovidoDetalle = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Promovido detalle:  </h1>
            <h2>{id}</h2>
            <Example1></Example1>
            <Example2></Example2>
            <Example3></Example3>
        </div>
    )
}

export default PromovidoDetalle

