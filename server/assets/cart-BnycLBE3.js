import { i as products } from "./store-data-ClyQ0q3f.js";
import { t as SiteLayout } from "./site-layout-BVo2ccEI.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Minus, Plus, Trash2 } from "lucide-react";
//#region src/routes/cart.tsx?tsr-split=component
function CartPage() {
	const [items, setItems] = useState([{
		...products[0],
		qty: 1
	}, {
		...products[3],
		qty: 1
	}]);
	const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
	const tax = subtotal * .15;
	const total = subtotal + tax;
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "container mx-auto px-4 py-10",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-black mb-6",
			children: "سلة المشتريات"
		}), items.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "text-center py-16 bg-card border border-border rounded-2xl",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground mb-4",
				children: "السلة فارغة"
			}), /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "gradient-brand text-primary-foreground px-6 py-2.5 rounded-full font-bold inline-block",
				children: "تسوق الآن"
			})]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lg:col-span-2 space-y-3",
				children: items.map((it) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card border border-border rounded-2xl p-4 flex gap-4 items-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-20 h-20 rounded-xl flex-shrink-0",
							style: { background: it.cover }
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-bold",
									children: it.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: it.category
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mt-2",
									children: [
										/* @__PURE__ */ jsx("button", {
											onClick: () => setItems(items.map((x) => x.id === it.id ? {
												...x,
												qty: Math.max(1, x.qty - 1)
											} : x)),
											className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary",
											children: /* @__PURE__ */ jsx(Minus, { className: "w-3 h-3" })
										}),
										/* @__PURE__ */ jsx("span", {
											className: "w-8 text-center font-bold",
											children: it.qty
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => setItems(items.map((x) => x.id === it.id ? {
												...x,
												qty: x.qty + 1
											} : x)),
											className: "w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary",
											children: /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3" })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-left",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "font-black text-primary",
								children: [it.price * it.qty, " ر.س"]
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => setItems(items.filter((x) => x.id !== it.id)),
								className: "text-destructive text-xs mt-2 inline-flex items-center gap-1 hover:underline",
								children: [/* @__PURE__ */ jsx(Trash2, { className: "w-3 h-3" }), " حذف"]
							})]
						})
					]
				}, it.id))
			}), /* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border rounded-2xl p-6 h-fit",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "font-bold mb-4",
						children: "ملخص الطلب"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-sm mb-4",
						children: [
							/* @__PURE__ */ jsx(Row, {
								label: "المجموع الفرعي",
								value: `${subtotal.toFixed(2)} ر.س`
							}),
							/* @__PURE__ */ jsx(Row, {
								label: "ضريبة (١٥٪)",
								value: `${tax.toFixed(2)} ر.س`
							}),
							/* @__PURE__ */ jsx("div", {
								className: "border-t border-border pt-2 mt-2",
								children: /* @__PURE__ */ jsx(Row, {
									label: "الإجمالي",
									value: `${total.toFixed(2)} ر.س`,
									bold: true
								})
							})
						]
					}),
					/* @__PURE__ */ jsx("button", {
						className: "w-full gradient-brand text-primary-foreground py-3 rounded-full font-bold shadow-brand hover:opacity-90 transition",
						children: "إتمام الشراء"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground text-center mt-3",
						children: "دفع آمن • تسليم فوري"
					})
				]
			})]
		})]
	}) });
}
function Row({ label, value, bold }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `flex justify-between ${bold ? "font-black text-base" : "text-muted-foreground"}`,
		children: [/* @__PURE__ */ jsx("span", { children: label }), /* @__PURE__ */ jsx("span", {
			className: bold ? "text-primary" : "text-foreground",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
