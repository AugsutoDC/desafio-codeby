import { Item } from "../Item";
import { Container } from "./styles";

import { converterEmFloat, converterEmReal } from "../../helpers/helpers";

import IItem from "../../models/Total";
import ITotal from "../../models/Item";

interface BodyProps {
    items: IItem[];
    total: number;
    totalizers: ITotal[];
}

export function Body(props: BodyProps) {
    return (
        <Container>
             <div className="produtos" >
                 {props.items.map(item => (
                     <Item key={item.id} item={item}/>
                 ))}             
            </div>
            <div className="totais">
                <div className="total-geral">
                    <span>Total</span>
                    <span>{converterEmReal(converterEmFloat(props.total/100))}</span>
                </div>                    

                {(props.total / 100) > 10 && (
                    <div className="frete-gratis">
                        <strong>Parabéns, sua compra tem frete grátis !</strong>
                    </div>
                )}                
            </div>
        </Container>
    );
}