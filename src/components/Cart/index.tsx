import { useEffect, useState } from "react";

import { Body } from "../Body";
import { Container } from "./styles";
import { Footer } from "../Footer";
import { Header } from "../Header";

import ICart from "../../models/Cart";
import { api } from "../../services/api";


export function Cart() {
    const [cart, setCart] = useState({
        items: [],
        totalizers: [],
        value: 0
      } as ICart);
    
      useEffect(() => {
        api.get("cart")
        .then(response => setCart(response.data));
      }, []);

    return (
        <Container>
            <Header />
            <Body items={cart.items} total={cart.value} totalizers={cart.totalizers}/>               
            <Footer />
        </Container>
    );
}