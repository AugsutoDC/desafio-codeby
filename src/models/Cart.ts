import ITotal from "./Item";
import IItem from "./Total";

export default interface ICart {
    value: number;
    totalizers: ITotal[];
    items: IItem[];
}