import { i as products, r as orders } from "./store-data-ClyQ0q3f.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Bell, DollarSign, LayoutDashboard, Package, Plus, Search, ShoppingCart, Star, TrendingUp, Users } from "lucide-react";
//#region src/routes/dashboard.tsx?tsr-split=component
function Dashboard() {
	const [tab, setTab] = useState("overview");
	const revenue = orders.filter((o) => o.status === "مكتمل").reduce((s, o) => s + o.amount, 0);
	const totalSales = products.reduce((s, p) => s + p.sales, 0);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-secondary/30 flex",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "w-64 bg-card border-l border-border h-screen sticky top-0 p-5 flex flex-col",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "text-2xl font-black text-gradient-brand mb-8",
					children: "Technyh"
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "space-y-1 flex-1",
					children: [
						{
							k: "overview",
							l: "نظرة عامة",
							i: LayoutDashboard
						},
						{
							k: "products",
							l: "المنتجات",
							i: Package
						},
						{
							k: "orders",
							l: "الطلبات",
							i: ShoppingCart
						},
						{
							k: "customers",
							l: "العملاء",
							i: Users
						}
					].map((it) => /* @__PURE__ */ jsxs("button", {
						onClick: () => setTab(it.k),
						className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition ${tab === it.k ? "gradient-brand text-primary-foreground shadow-brand" : "text-muted-foreground hover:bg-secondary"}`,
						children: [/* @__PURE__ */ jsx(it.i, { className: "w-4 h-4" }), it.l]
					}, it.k))
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "text-sm text-muted-foreground hover:text-foreground border-t border-border pt-4",
					children: "← العودة للمتجر"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "bg-card border-b border-border px-6 h-16 flex items-center gap-4 sticky top-0 z-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 max-w-md relative",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							placeholder: "بحث...",
							className: "w-full bg-secondary rounded-full pr-10 pl-4 py-2 text-sm outline-none"
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						className: "p-2 hover:bg-secondary rounded-full",
						children: /* @__PURE__ */ jsx(Bell, { className: "w-4 h-4" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "w-9 h-9 rounded-full gradient-brand text-primary-foreground flex items-center justify-center font-bold",
						children: "م"
					})
				]
			}), /* @__PURE__ */ jsxs("main", {
				className: "p-6",
				children: [
					tab === "overview" && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
								className: "text-2xl font-black",
								children: "مرحباً، مالك المتجر 👋"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: "إليك ملخص أداء متجرك اليوم"
							})] }), /* @__PURE__ */ jsxs("button", {
								className: "gradient-brand text-primary-foreground px-5 py-2.5 rounded-full font-bold shadow-brand flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }), " منتج جديد"]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
							children: [
								/* @__PURE__ */ jsx(Stat, {
									icon: DollarSign,
									label: "الإيرادات",
									value: `${revenue} ر.س`,
									delta: "+١٢٪"
								}),
								/* @__PURE__ */ jsx(Stat, {
									icon: ShoppingCart,
									label: "الطلبات",
									value: orders.length.toString(),
									delta: "+٨٪"
								}),
								/* @__PURE__ */ jsx(Stat, {
									icon: Package,
									label: "المنتجات",
									value: products.length.toString(),
									delta: "+٢"
								}),
								/* @__PURE__ */ jsx(Stat, {
									icon: TrendingUp,
									label: "إجمالي المبيعات",
									value: totalSales.toLocaleString(),
									delta: "+٢٤٪"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid lg:grid-cols-3 gap-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-2 bg-card border border-border rounded-2xl p-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-5",
									children: [/* @__PURE__ */ jsx("h2", {
										className: "font-bold",
										children: "أداء المبيعات"
									}), /* @__PURE__ */ jsxs("select", {
										className: "text-sm bg-secondary rounded-full px-3 py-1 outline-none",
										children: [/* @__PURE__ */ jsx("option", { children: "آخر ٧ أيام" }), /* @__PURE__ */ jsx("option", { children: "آخر شهر" })]
									})]
								}), /* @__PURE__ */ jsx(SalesChart, {})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "bg-card border border-border rounded-2xl p-6",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "font-bold mb-4",
									children: "الأكثر مبيعاً"
								}), /* @__PURE__ */ jsx("div", {
									className: "space-y-3",
									children: [...products].sort((a, b) => b.sales - a.sales).slice(0, 4).map((p) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "w-10 h-10 rounded-lg flex-shrink-0",
												style: { background: p.cover }
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex-1 min-w-0",
												children: [/* @__PURE__ */ jsx("div", {
													className: "font-bold text-sm truncate",
													children: p.title
												}), /* @__PURE__ */ jsxs("div", {
													className: "text-xs text-muted-foreground",
													children: [p.sales, " بيع"]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "font-black text-primary text-sm",
												children: [p.price, " ر.س"]
											})
										]
									}, p.id))
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-card border border-border rounded-2xl p-6 mt-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "font-bold",
									children: "آخر الطلبات"
								}), /* @__PURE__ */ jsxs("button", {
									onClick: () => setTab("orders"),
									className: "text-sm text-primary inline-flex items-center gap-1 hover:underline",
									children: ["عرض الكل ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3 h-3" })]
								})]
							}), /* @__PURE__ */ jsx(OrdersTable, { rows: orders.slice(0, 5) })]
						})
					] }),
					tab === "products" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-black",
							children: "المنتجات"
						}), /* @__PURE__ */ jsxs("button", {
							className: "gradient-brand text-primary-foreground px-5 py-2.5 rounded-full font-bold shadow-brand flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }), " منتج جديد"]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "bg-card border border-border rounded-2xl overflow-hidden",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ jsx("thead", {
								className: "bg-secondary text-muted-foreground",
								children: /* @__PURE__ */ jsxs("tr", { children: [
									/* @__PURE__ */ jsx(Th, { children: "المنتج" }),
									/* @__PURE__ */ jsx(Th, { children: "الفئة" }),
									/* @__PURE__ */ jsx(Th, { children: "السعر" }),
									/* @__PURE__ */ jsx(Th, { children: "المبيعات" }),
									/* @__PURE__ */ jsx(Th, { children: "التقييم" }),
									/* @__PURE__ */ jsx(Th, { children: "الحالة" })
								] })
							}), /* @__PURE__ */ jsx("tbody", { children: products.map((p) => /* @__PURE__ */ jsxs("tr", {
								className: "border-t border-border hover:bg-secondary/50",
								children: [
									/* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-10 h-10 rounded-lg flex-shrink-0",
											style: { background: p.cover }
										}), /* @__PURE__ */ jsx("span", {
											className: "font-bold",
											children: p.title
										})]
									}) }),
									/* @__PURE__ */ jsx(Td, { children: p.category }),
									/* @__PURE__ */ jsxs(Td, {
										className: "font-bold text-primary",
										children: [p.price, " ر.س"]
									}),
									/* @__PURE__ */ jsx(Td, { children: p.sales }),
									/* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-yellow-400 stroke-yellow-400" }), p.rating]
									}) }),
									/* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx("span", {
										className: "bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-bold",
										children: "نشط"
									}) })
								]
							}, p.id)) })]
						})
					})] }),
					tab === "orders" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-black mb-6",
						children: "جميع الطلبات"
					}), /* @__PURE__ */ jsx("div", {
						className: "bg-card border border-border rounded-2xl p-6",
						children: /* @__PURE__ */ jsx(OrdersTable, { rows: orders })
					})] }),
					tab === "customers" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-black mb-6",
						children: "العملاء"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
						children: Array.from(new Set(orders.map((o) => o.customer))).map((name, i) => /* @__PURE__ */ jsxs("div", {
							className: "bg-card border border-border rounded-2xl p-5 flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-full gradient-brand text-primary-foreground flex items-center justify-center font-bold text-lg",
								children: name[0]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-bold",
									children: name
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-xs text-muted-foreground",
									children: [i + 2, " طلبات"]
								})]
							})]
						}, name))
					})] })
				]
			})]
		})]
	});
}
function Stat({ icon: Icon, label, value, delta }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-card border border-border rounded-2xl p-5",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center",
					children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" })
				}), /* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full",
					children: delta
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-2xl font-black",
				children: value
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-xs text-muted-foreground",
				children: label
			})
		]
	});
}
function SalesChart() {
	const data = [
		42,
		65,
		48,
		78,
		92,
		70,
		105
	];
	const max = Math.max(...data);
	const days = [
		"س",
		"ح",
		"ن",
		"ث",
		"ر",
		"خ",
		"ج"
	];
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-end gap-3 h-48",
		style: { direction: "ltr" },
		children: data.map((v, i) => /* @__PURE__ */ jsxs("div", {
			className: "flex-1 flex flex-col items-center gap-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full gradient-brand rounded-t-lg transition-all hover:opacity-80",
				style: { height: `${v / max * 100}%` }
			}), /* @__PURE__ */ jsx("span", {
				className: "text-xs text-muted-foreground",
				children: days[i]
			})]
		}, i))
	});
}
function OrdersTable({ rows }) {
	return /* @__PURE__ */ jsxs("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ jsx("thead", {
			className: "text-muted-foreground text-right",
			children: /* @__PURE__ */ jsxs("tr", { children: [
				/* @__PURE__ */ jsx(Th, { children: "الطلب" }),
				/* @__PURE__ */ jsx(Th, { children: "العميل" }),
				/* @__PURE__ */ jsx(Th, { children: "المنتج" }),
				/* @__PURE__ */ jsx(Th, { children: "المبلغ" }),
				/* @__PURE__ */ jsx(Th, { children: "الحالة" }),
				/* @__PURE__ */ jsx(Th, { children: "التاريخ" })
			] })
		}), /* @__PURE__ */ jsx("tbody", { children: rows.map((o) => /* @__PURE__ */ jsxs("tr", {
			className: "border-t border-border",
			children: [
				/* @__PURE__ */ jsx(Td, {
					className: "font-bold",
					children: o.id
				}),
				/* @__PURE__ */ jsx(Td, { children: o.customer }),
				/* @__PURE__ */ jsx(Td, {
					className: "text-muted-foreground",
					children: o.product
				}),
				/* @__PURE__ */ jsxs(Td, {
					className: "font-bold text-primary",
					children: [o.amount, " ر.س"]
				}),
				/* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx("span", {
					className: `text-xs px-2 py-0.5 rounded-full font-bold ${o.status === "مكتمل" ? "bg-emerald-100 text-emerald-700" : o.status === "قيد المعالجة" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`,
					children: o.status
				}) }),
				/* @__PURE__ */ jsx(Td, {
					className: "text-muted-foreground",
					children: o.date
				})
			]
		}, o.id)) })]
	});
}
function Th({ children }) {
	return /* @__PURE__ */ jsx("th", {
		className: "text-right p-3 text-xs font-bold uppercase",
		children
	});
}
function Td({ children, className = "" }) {
	return /* @__PURE__ */ jsx("td", {
		className: `p-3 ${className}`,
		children
	});
}
//#endregion
export { Dashboard as component };
