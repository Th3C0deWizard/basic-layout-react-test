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

type ModalCartProps = {
  show: boolean;
  close: () => void;
};

export default function ModalCart({ show, close }: ModalCartProps) {
  const products = JSON.parse(localStorage.getItem("cart") || "[]");

  let totalAmount = 0;
  let total = 0;
  products.forEach((product: Product) => {
    totalAmount += product.amount;
    total += product.amount * product.price;
  });

  const buyProducts = () => {
    localStorage.setItem("cart", "[]");
    alert("Thanks for your purchase");
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
            {products.length === 0 ? (
              <div className="empty-list">
                <h1>Products list 📋</h1>
              </div>
            ) : (
              <table>
                <tbody>
                  {/* Iterar sobre los productos */}
                  {products.map((product: Product, index: number) => (
                    <tr key={index}>
                      <td>
                        <img src={product.image} alt="Product" width="130" />
                      </td>
                      <td>{product.name}</td>
                      <td className="amount">
                        <MinusIcon width={24} height={24} className="" />
                        <span> {product.amount} </span>
                        <PlusIcon width={24} height={24} className="" />
                      </td>
                      <td>$ {product.price}</td>

                      <td>
                        {" "}
                        <TrashIcon width={24} height={24} className="trash" />
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
