import { Fragment } from "react"

export function DagoMolina() {
    let universidad='CESDE'
    let Val1 = 1
    let val2 = 2

    return (
        <Fragment>
            <h1 className="text-center">Hola, soy Dago</h1>
            <h4>Un gusto</h4>
            <h5>y estudio en {universidad}</h5>
            <h6>{Val1 + val2}</h6>
        </Fragment>
    )
}