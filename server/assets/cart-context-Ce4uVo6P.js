import { createContext, useContext, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { toast } from "sonner";
//#region src/lib/cart-context.tsx
var CartContext = createContext(null);
var RATES = {
	SAR: {
		rate: 1,
		symbol: "ر.س"
	},
	AED: {
		rate: .98,
		symbol: "د.إ"
	},
	USD: {
		rate: .27,
		symbol: "$"
	}
};
function CartProvider({ children }) {
	const [items, setItems] = useState([]);
	const [currency, setCurrency] = useState("SAR");
	const [language, setLanguage] = useState("ar");
	const addItem = (i, qty = 1) => {
		setItems((prev) => {
			if (prev.find((p) => p.id === i.id)) return prev.map((p) => p.id === i.id ? {
				...p,
				qty: p.qty + qty
			} : p);
			return [...prev, {
				...i,
				qty
			}];
		});
		toast.success("أُضيف إلى السلة", { description: i.title });
	};
	const removeItem = (id) => setItems((p) => p.filter((x) => x.id !== id));
	const updateQty = (id, qty) => setItems((p) => p.map((x) => x.id === id ? {
		...x,
		qty: Math.max(1, qty)
	} : x));
	const format = (price) => {
		const { rate, symbol } = RATES[currency];
		return `${(price * rate).toFixed(currency === "USD" ? 2 : 0)} ${symbol}`;
	};
	const count = items.reduce((s, x) => s + x.qty, 0);
	const subtotal = items.reduce((s, x) => s + x.qty * x.price, 0);
	return /* @__PURE__ */ jsx(CartContext.Provider, {
		value: {
			items,
			count,
			subtotal,
			currency,
			language,
			setCurrency,
			setLanguage,
			addItem,
			removeItem,
			updateQty,
			format
		},
		children
	});
}
function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
