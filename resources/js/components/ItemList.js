import InfiniteScroll from "react-infinite-scroller";
import ProductModal from "./ProductModal";
import ProductService from "../services/ProductService";
import React, { useState } from "react";

function ItemList(props) {
    const [itemList, setItemList] = useState([]);
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedCategory, setSelectedCategory] = useState(props.category);

    if (props.category !== selectedCategory) {
        setSelectedCategory(props.category);
    }

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    const handleAddToCart = (product, quantityToCart) => {
        let alreadyInCart = false;
        props.cart.map((cart, i) => {
            if (cart.id == product.id) {
                cart.quantity++;
                alreadyInCart = true;
            }
        });

        let newCart;
        if (!alreadyInCart) {
            newCart = props.cart.concat({id: product.id, quantity: quantityToCart})
        } else {
            newCart = props.cart;
        }

        props.updateCart(newCart);

        product.quantity -= quantityToCart;

        setShowModal(false);
    }

    const getCategoryColor = (categoryId) => {
        let classes = "badge badge-pill ";
        switch (categoryId) {
            case 1:
                classes += "badge-primary";
                break;
            case 2:
                classes += "badge-success";
                break;
            case 3:
                classes += "badge-danger";
                break;
            case 4:
                classes += "badge-warning";
                break;
            case 5:
                classes += "badge-dark";
                break;
            default:
                break;
        }
        return classes;
    };

    const nItems = 30;
    const loadProductList = (page) => {
        setTimeout(() => {
            ProductService.getProducts(page, nItems, selectedCategory.id)
                .then((res) => {
                    const newList = itemList.concat(res.data);
                    setItemList(newList);
                    setHasMoreItems(res.data.length === 0 ? false : true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 500);
    };

    return (
        <div>
            <div id="category-name" className="text-center">
                {selectedCategory.name}
            </div>
            <InfiniteScroll
                threshold={0}
                pageStart={0}
                loadMore={loadProductList}
                hasMore={hasMoreItems}
                className="grid-container"
                loader={
                    <div key={0} className="text-center">
                        loading data ...
                    </div>
                }
            >
                {itemList.map((product, i) => (
                    <div
                        onClick={() => handleOpenModal(product)}
                        className="grid-item card"
                        key={product.id}
                    >
                        <img src="/images/no_img.jpeg" />
                        <div className="product-details">
                            <b>{product.title}</b>
                            <br />
                            {product.price} €<br />
                            <span
                                className={getCategoryColor(
                                    product.category_id
                                )}
                            >
                                {product.category.name}
                            </span>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
            <ProductModal
                selectedProduct={selectedProduct}
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleAddToCart={handleAddToCart}
            />
            {hasMoreItems ? (
                ""
            ) : (
                <h4 id="no-more-data" className="text-center">
                    No more data.
                </h4>
            )}
        </div>
    );
}

export default ItemList;
