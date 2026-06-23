import { i as products } from "./store-data-ClyQ0q3f.js";
import { t as Route } from "./product._slug-Awt9BUZB.js";
import { n as Stars, t as SiteLayout } from "./site-layout-BVo2ccEI.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Download, Heart, RefreshCw, ShieldCheck, ShoppingBag, Star } from "lucide-react";
//#region src/routes/product.$slug.tsx?tsr-split=component
function ProductPage() {
	const p = Route.useLoaderData();
	const [tab, setTab] = useState("desc");
	const [newRating, setNewRating] = useState(5);
	const [newComment, setNewComment] = useState("");
	const [reviews, setReviews] = useState(p.reviews);
	const related = products.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 4);
	function submitReview(e) {
		e.preventDefault();
		if (!newComment.trim()) return;
		setReviews([{
			id: Date.now().toString(),
			author: "أنت",
			rating: newRating,
			comment: newComment,
			date: "الآن"
		}, ...reviews]);
		setNewComment("");
		setNewRating(5);
	}
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "container mx-auto px-4 py-8",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "text-sm text-muted-foreground mb-6",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "الرئيسية"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ jsx("span", { children: p.category }),
					/* @__PURE__ */ jsx("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: p.title
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-2 gap-10 mb-12",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-square rounded-3xl flex items-center justify-center text-white shadow-brand",
					style: { background: p.cover },
					children: /* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-5xl font-black mb-2 drop-shadow-lg",
							children: p.title
						}), /* @__PURE__ */ jsx("div", {
							className: "text-sm opacity-80",
							children: p.category
						})]
					})
				}), /* @__PURE__ */ jsxs("div", { children: [
					p.badge && /* @__PURE__ */ jsx("span", {
						className: "inline-block gradient-brand text-primary-foreground text-xs px-3 py-1 rounded-full font-bold mb-3",
						children: p.badge
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl font-black mb-2",
						children: p.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-muted-foreground mb-4",
						children: p.tagline
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [
							/* @__PURE__ */ jsx(Stars, {
								rating: p.rating,
								size: 18
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-sm font-bold",
								children: p.rating
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-sm text-muted-foreground",
								children: [
									"(",
									p.reviewsCount,
									" تقييم)"
								]
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-sm text-muted-foreground",
								children: [
									"• ",
									p.sales,
									" عملية بيع"
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-baseline gap-3 mb-6",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-4xl font-black text-gradient-brand",
							children: [p.price, " ر.س"]
						}), p.oldPrice && /* @__PURE__ */ jsxs("span", {
							className: "text-lg text-muted-foreground line-through",
							children: [p.oldPrice, " ر.س"]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-foreground/80 leading-relaxed mb-6",
						children: p.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-3 mb-8",
						children: [/* @__PURE__ */ jsxs("button", {
							className: "flex-1 gradient-brand text-primary-foreground py-4 rounded-full font-bold shadow-brand hover:opacity-90 transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "w-5 h-5" }), "إضافة للسلة"]
						}), /* @__PURE__ */ jsx("button", {
							className: "w-14 h-14 border border-border rounded-full hover:bg-secondary transition flex items-center justify-center",
							children: /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5" })
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-3 gap-3 border-t border-border pt-6",
						children: [
							{
								icon: Download,
								t: "تحميل فوري"
							},
							{
								icon: ShieldCheck,
								t: "دفع آمن"
							},
							{
								icon: RefreshCw,
								t: "تحديثات مجانية"
							}
						].map((f) => /* @__PURE__ */ jsxs("div", {
							className: "text-center",
							children: [/* @__PURE__ */ jsx(f.icon, { className: "w-5 h-5 mx-auto mb-1 text-primary" }), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: f.t
							})]
						}, f.t))
					})
				] })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-border flex gap-6 mb-6",
				children: [{
					k: "desc",
					l: "الوصف"
				}, {
					k: "reviews",
					l: `التقييمات (${reviews.length})`
				}].map((t) => /* @__PURE__ */ jsx("button", {
					onClick: () => setTab(t.k),
					className: `pb-3 font-bold text-sm border-b-2 transition ${tab === t.k ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`,
					children: t.l
				}, t.k))
			}),
			tab === "desc" && /* @__PURE__ */ jsxs("div", {
				className: "prose max-w-none text-foreground/80 leading-loose",
				children: [/* @__PURE__ */ jsx("p", { children: p.description }), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 mt-4",
					children: [
						/* @__PURE__ */ jsx("li", { children: "✓ تصميم احترافي وعصري" }),
						/* @__PURE__ */ jsx("li", { children: "✓ متوافق مع جميع الأجهزة" }),
						/* @__PURE__ */ jsx("li", { children: "✓ سهل الاستخدام والتخصيص" }),
						/* @__PURE__ */ jsx("li", { children: "✓ دعم فني مدى الحياة" }),
						/* @__PURE__ */ jsx("li", { children: "✓ تحديثات دورية مجانية" })
					]
				})]
			}),
			tab === "reviews" && /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-3 gap-8",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-2 space-y-4",
					children: reviews.map((r) => /* @__PURE__ */ jsxs("div", {
						className: "bg-card border border-border rounded-2xl p-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-2",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-10 h-10 rounded-full gradient-brand text-primary-foreground flex items-center justify-center font-bold",
									children: r.author[0]
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-bold text-sm",
									children: r.author
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: r.date
								})] })]
							}), /* @__PURE__ */ jsx(Stars, { rating: r.rating })]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-foreground/80 leading-relaxed",
							children: r.comment
						})]
					}, r.id))
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: submitReview,
					className: "bg-card border border-border rounded-2xl p-5 h-fit sticky top-20",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-bold mb-3",
							children: "شاركنا تقييمك"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-1 mb-3",
							style: { direction: "ltr" },
							children: [
								1,
								2,
								3,
								4,
								5
							].map((i) => /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setNewRating(i),
								className: "p-1",
								children: /* @__PURE__ */ jsx(Star, {
									className: "w-6 h-6",
									fill: i <= newRating ? "#fbbf24" : "none",
									stroke: "#fbbf24"
								})
							}, i))
						}),
						/* @__PURE__ */ jsx("textarea", {
							value: newComment,
							onChange: (e) => setNewComment(e.target.value),
							placeholder: "اكتب رأيك بالمنتج...",
							rows: 4,
							className: "w-full border border-border rounded-xl p-3 text-sm outline-none focus:border-ring resize-none mb-3"
						}),
						/* @__PURE__ */ jsx("button", {
							className: "w-full gradient-brand text-primary-foreground py-2.5 rounded-full font-bold hover:opacity-90 transition",
							children: "إرسال التقييم"
						})
					]
				})]
			}),
			related.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-black mb-6",
					children: "منتجات مشابهة"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: related.map((rp) => /* @__PURE__ */ jsxs(Link, {
						to: "/product/$slug",
						params: { slug: rp.slug },
						className: "bg-card border border-border rounded-2xl overflow-hidden hover:shadow-brand hover:-translate-y-1 transition-all",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[4/3] flex items-center justify-center text-white",
							style: { background: rp.cover },
							children: /* @__PURE__ */ jsx("span", {
								className: "text-2xl font-black drop-shadow",
								children: rp.title.split(" ")[0]
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-bold text-sm mb-1 line-clamp-1",
								children: rp.title
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between mt-2",
								children: [/* @__PURE__ */ jsx(Stars, { rating: rp.rating }), /* @__PURE__ */ jsxs("span", {
									className: "font-black text-primary",
									children: [rp.price, " ر.س"]
								})]
							})]
						})]
					}, rp.id))
				})]
			})
		]
	}) });
}
//#endregion
export { ProductPage as component };
