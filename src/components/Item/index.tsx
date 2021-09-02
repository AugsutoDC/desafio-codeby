import { Container } from "./styles";
import { converterEmFloat, converterEmReal } from "../../helpers/helpers";

import IItem from "../../models/Total";

interface ItemProps {
    item: IItem;
}

export function Item(props: ItemProps) {
    return (
        <Container>
            <img src={props.item.imageUrl} alt={props.item.name} />
            <div>
                <p>{props.item.name}</p>
                <small>{converterEmReal(converterEmFloat(props.item.price/100))}</small>
                <strong>{converterEmReal(converterEmFloat(props.item.sellingPrice/100))}</strong>
            </div>
        </Container>
    );
}