import { n as useCart } from "./cart-context-Ce4uVo6P.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Bell, ChevronDown, Globe, Menu, Search, ShoppingBag, User, X } from "lucide-react";
var technyh_logo_png_asset_default = {
	version: 1,
	asset_id: "a24c187d-66c2-4a01-bfa7-0851eb377886",
	project_id: "e2db943f-0644-4c4a-8151-1795ebdea9b0",
	url: "/__l5e/assets-v1/a24c187d-66c2-4a01-bfa7-0851eb377886/technyh-logo.png",
	r2_key: "a/v1/e2db943f-0644-4c4a-8151-1795ebdea9b0/a24c187d-66c2-4a01-bfa7-0851eb377886/technyh-logo.png",
	original_filename: "technyh-logo.png",
	size: 697544,
	content_type: "image/png",
	created_at: "2026-06-22T12:42:29Z"
};
//#endregion
//#region src/components/site-layout.tsx
function SiteLayout({ children }) {
	const { count, format } = useCart();
	const [showBanner, setShowBanner] = useState(true);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "sticky top-0 z-40",
				children: [showBanner && /* @__PURE__ */ jsxs("div", {
					className: "bg-coral text-white relative",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-xs md:text-sm font-bold",
						children: [/* @__PURE__ */ jsx(Bell, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: "عروض الإطلاق — خصم 20% إضافي على جميع الباقات! ينتهي خلال 6 أيام و 23 ساعة" })]
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => setShowBanner(false),
						className: "absolute top-1/2 -translate-y-1/2 left-3 p-1 hover:bg-white/20 rounded-full",
						"aria-label": "إغلاق",
						children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
					})]
				}), /* @__PURE__ */ jsx("header", {
					className: "bg-primary text-primary-foreground shadow-md",
					children: /* @__PURE__ */ jsxs("div", {
						className: "container mx-auto px-4 h-16 flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								to: "/cart",
								className: "relative bg-white text-foreground rounded-full pr-3 pl-2.5 py-1.5 flex items-center gap-1.5 text-xs font-bold hover:bg-white/90 transition",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "bg-coral text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-black",
										children: count
									}),
									/* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4" }),
									/* @__PURE__ */ jsx("span", { children: format(0) })
								]
							}),
							/* @__PURE__ */ jsx("button", {
								className: "bg-white text-foreground rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/90 transition",
								children: /* @__PURE__ */ jsx(Search, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ jsx(LangCurrencyPill, {}),
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "mx-auto bg-white rounded-full px-4 py-1.5 flex items-center",
								children: /* @__PURE__ */ jsx("img", {
									src: technyh_logo_png_asset_default.url,
									alt: "Technyh",
									className: "h-7 w-auto"
								})
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/login",
								className: "p-2 rounded-full hover:bg-white/10 transition-colors border border-white/30",
								title: "حسابي",
								children: /* @__PURE__ */ jsx(User, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ jsx(MobileMenu, {})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "border-t border-border mt-20 bg-secondary/40",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("img", {
							src: technyh_logo_png_asset_default.url,
							alt: "Technyh",
							className: "h-8 w-auto mb-3"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed",
							children: "متجرك الأول للمنتجات الرقمية، القوالب، والأدوات الإبداعية."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-bold mb-3",
							children: "المتجر"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-2 text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "hover:text-foreground",
									children: "جميع المنتجات"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "hover:text-foreground",
									children: "الأكثر مبيعاً"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/",
									className: "hover:text-foreground",
									children: "العروض"
								}) })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-bold mb-3",
							children: "الدعم"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-2 text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("li", { children: "الأسئلة الشائعة" }),
								/* @__PURE__ */ jsx("li", { children: "تواصل معنا" }),
								/* @__PURE__ */ jsx("li", { children: "سياسة الإرجاع" })
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-bold mb-3",
							children: "تابعنا"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "support@technyh.com"
						})] })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-border py-4 text-center text-xs text-muted-foreground",
					children: "© ٢٠٢٦ Technyh. جميع الحقوق محفوظة."
				})]
			})
		]
	});
}
function Stars({ rating, size = 14 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-0.5",
		style: { direction: "ltr" },
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ jsx("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: i <= Math.round(rating) ? "#fbbf24" : "none",
			stroke: "#fbbf24",
			strokeWidth: "2",
			children: /* @__PURE__ */ jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
		}, i))
	});
}
function LangCurrencyPill() {
	const { language, currency, setLanguage, setCurrency } = useCart();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: () => setOpen((o) => !o),
			className: "bg-white text-foreground rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-bold hover:bg-white/90 transition",
			children: [
				/* @__PURE__ */ jsx(Globe, { className: "w-3.5 h-3.5" }),
				/* @__PURE__ */ jsx("span", { children: language === "ar" ? "العربية" : "English" }),
				/* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "|"
				}),
				/* @__PURE__ */ jsx("span", { children: currency === "SAR" ? "ر.س" : currency === "AED" ? "د.إ" : "$" }),
				/* @__PURE__ */ jsx(ChevronDown, { className: "w-3 h-3" })
			]
		}), open && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 z-40",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ jsxs("div", {
			className: "absolute top-full mt-2 right-0 bg-white text-foreground rounded-xl shadow-xl border border-border p-3 z-50 w-44 space-y-3",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] uppercase tracking-wide text-muted-foreground mb-1.5 font-bold",
					children: "اللغة"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-1",
					children: ["ar", "en"].map((l) => /* @__PURE__ */ jsx("button", {
						onClick: () => setLanguage(l),
						className: `text-xs py-1.5 rounded-md font-bold ${language === l ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"}`,
						children: l === "ar" ? "العربية" : "English"
					}, l))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-[10px] uppercase tracking-wide text-muted-foreground mb-1.5 font-bold",
					children: "العملة"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-3 gap-1",
					children: [
						"SAR",
						"AED",
						"USD"
					].map((c) => /* @__PURE__ */ jsx("button", {
						onClick: () => setCurrency(c),
						className: `text-xs py-1.5 rounded-md font-bold ${currency === c ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"}`,
						children: c
					}, c))
				})] }),
				/* @__PURE__ */ jsx(Link, {
					to: "/dashboard",
					onClick: () => setOpen(false),
					className: "block text-center text-xs py-1.5 rounded-md bg-coral text-white font-bold",
					children: "لوحة التحكم"
				})
			]
		})] })]
	});
}
function MobileMenu() {
	return /* @__PURE__ */ jsx("button", {
		className: "p-2 rounded-full hover:bg-white/10 transition-colors",
		"aria-label": "القائمة",
		children: /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
	});
}
//#endregion
export { Stars as n, SiteLayout as t };
