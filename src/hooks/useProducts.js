import { useState, useEffect } from "react";

const useProducts = () => {
    const [allProducts, setAllProducts] = useState(() => {
        const savedData = localStorage.getItem("products");
        return savedData ? JSON.parse(savedData) : [];
    });

    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(allProducts));
    }, [allProducts]);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: allProducts.length > 0 ? Math.max(...allProducts.map((p) => p.id)) + 1 : 1,
        };
        setAllProducts([...allProducts, newProduct]);
    };

    const deleteProduct = (id) => {
        setAllProducts(allProducts.filter((product) => product.id !== id));
    };

    const handleUpdate = (id, updatedData) => {
        setAllProducts(allProducts.map((p) => (p.id === id ? { ...p, ...updatedData } : p)));
        setIsEditing(false);
        setCurrentId(null);
    };

    return {
        allProducts,
        addProduct,
        deleteProduct,
        handleUpdate,
        isEditing,
        setIsEditing,
        currentId,
        setCurrentId,
    };
};

export default useProducts;