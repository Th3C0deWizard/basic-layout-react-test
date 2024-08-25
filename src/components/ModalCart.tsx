type Product = {
  name: string;
  price: number;
  amount: number;
  image: string;
};

import CloseIcon from "../icons/CloseIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";
import TrashIcon from "../icons/TrashIcon";
import "../styles/ModalCart.css";
import { useState, useEffect, useCallback } from "react";

type ModalCartProps = {
  show: boolean;
  close: () => void;
  buy: () => void;
};

export default function ModalCart({ show, close, buy }: ModalCartProps) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const [totalAmount, setTotalAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const updateTotal = useCallback(() => {
    let totalAmount = 0;
    let total = 0;
    cart.forEach((product: Product) => {
      totalAmount += product.amount;
      total += product.amount * product.price;
    });
    setTotalAmount(totalAmount);
    setTotal(total);
  }, [cart, setTotalAmount, setTotal]);

  useEffect(() => {
    const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(updatedCart);
    updateTotal();
  }, [show, updateTotal]);

  const buyProducts = () => {
    localStorage.setItem("cart", "[]");
    buy();
    close();
  };

  const addPr = (index: number) => {
    console.log(cart[index].amount);
    cart[index].amount++;
    updateProducts();
  };

  const subtractPr = (index: number) => {
    if (cart[index].amount > 1) {
      cart[index].amount--;
    }
    updateProducts();
  };

  const deletePr = (index: number) => {
    cart.splice(index, 1);
    updateProducts();
  };

  const updateProducts = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    updateTotal();
  };

  return (
    <>
      {show ? (
        <section className="modal">
          <section className="product-list">
            <CloseIcon
              width={20}
              height={20}
              className="close"
              onClick={() => close()}
            />
            <h2>Products</h2>
            <hr />
            {cart.length === 0 ? (
              <div className="empty-list">
                <h1>Products list 📋</h1>
              </div>
            ) : (
              <table>
                <tbody>
                  {/* Iterar sobre los productos */}
                  {cart.map((product: Product, index: number) => (
                    <tr key={index}>
                      <td>
                        <img src={product.image} alt="Product" width="130" />
                      </td>
                      <td>{product.name}</td>
                      <td className="amount">
                        <MinusIcon
                          width={24}
                          height={24}
                          className=""
                          onClick={() => subtractPr(index)}
                        />
                        <span> {product.amount} </span>
                        <PlusIcon
                          width={24}
                          height={24}
                          className=""
                          onClick={() => addPr(index)}
                        />
                      </td>
                      <td>$ {product.price}</td>

                      <td>
                        {" "}
                        <TrashIcon
                          width={24}
                          height={24}
                          className="trash"
                          onClick={() => deletePr(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
          <section className="summary">
            <h2>Purchase Summary</h2>
            <hr />
            <div className="summary-list">
              <div>
                <h3>Products</h3>
                <span>{totalAmount}</span>
              </div>
              <div>
                <h3>Total</h3>
                <span>$ {total}</span>
              </div>
            </div>
            <button onClick={buyProducts}>Buy Products</button>
          </section>
        </section>
      ) : null}
    </>
  );
}
