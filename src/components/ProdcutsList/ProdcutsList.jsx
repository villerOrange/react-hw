import { drillData } from "../../data/data";
import ProductCard from "../ProductCard/ProductCard";

export default function ProdcutsList() {
    return (
        <div>
            {drillData.map(el =>
                <ProductCard {...el} key={el.name} />
            )}
        </div>
    )
}
