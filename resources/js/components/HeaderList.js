import AuthOptions from "./AuthOptions";
import CategoryService from "../services/CategoryService";
import GuestOptions from "./GuestOptions";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function HeaderList(props) {
    const defaultCategory = { id: 0, name: "All" };
    const [categories, setCategories] = useState([defaultCategory]);
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
    const [cart, setCart] = useState([]);

    const active = "active dropdown-item category-option";
    const inactive = "dropdown-item category-option";

    useEffect(() => {
        CategoryService.getCategories()
            .then((res) => {
                const newList = categories.concat(res.data);
                setCategories(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleClickCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleOpenCart = () => {
        alert(JSON.stringify(cart));
    };

    const updateCart = (cart) => {
        setCart(cart);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    App
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsible-navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="collapsible-navbar"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="categories-drop"
                                data-toggle="dropdown"
                            >
                                Categories
                            </a>
                            <div className="dropdown-menu">
                                {categories.map((category, i) => (
                                    <a
                                        key={"category-" + category.id}
                                        className={
                                            selectedCategory.id == category.id
                                                ? active
                                                : inactive
                                        }
                                        onClick={() =>
                                            handleClickCategory(category)
                                        }
                                    >
                                        {category.name}
                                    </a>
                                ))}
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                id="cart"
                                onClick={handleOpenCart}
                                className="dropdown-item"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="#FFF"
                                    className="bi bi-cart2"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                </svg>
                                {cart.length === 0 ? (
                                    ""
                                ) : (
                                    <span className="badge badge-pill badge-light">
                                        {cart.length}
                                    </span>
                                )}
                            </a>
                        </li>
                    </ul>
                    {props.auth == "1" ? <AuthOptions /> : <GuestOptions />}
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <ItemList
                            key={"selected-category-" + selectedCategory.id}
                            category={selectedCategory}
                            cart={cart}
                            updateCart={updateCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderList;

if (document.getElementById("header-list")) {
    const propsContainer = document.getElementById("header-list-props");
    const props = Object.assign({}, propsContainer.dataset);

    ReactDOM.render(
        <HeaderList {...props} />,
        document.getElementById("header-list")
    );
}
