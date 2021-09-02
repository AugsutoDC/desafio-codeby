import { useEffect, useState } from "react";

import { Body } from "../Body";
import { Container } from "./styles";
import { Footer } from "../Footer";
import { Header } from "../Header";

import ICart from "../../models/cart";

export function Cart() {
    const [cart, setCart] = useState({
        items: [],
        totalizers: [],
        value: 0
      } as ICart);
    
      useEffect(() => {
        fetch("http://localhost:3000/api/cart")
        .then(response => response.json())
        .then(data => setCart(data));
      }, []);

    return (
        <Container>
            <Header />
            <Body items={cart.items} total={cart.value} totalizers={cart.totalizers}/>               
            <Footer />
        </Container>
    );
}