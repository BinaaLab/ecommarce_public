import { n as useCart } from "./cart-context-Ce4uVo6P.js";
import { i as products, t as bundles } from "./store-data-ClyQ0q3f.js";
import { n as Stars, t as SiteLayout } from "./site-layout-BVo2ccEI.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Briefcase, Camera, CheckCircle2, ChevronLeft, ChevronRight, Clock, CreditCard, FileText, Globe2, Headphones, Heart, Minus, Plus, Quote, Rocket, ShieldCheck, Smartphone, Sparkles, Store, Target, Video } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(LaunchHero, {}), /* @__PURE__ */ jsxs("div", {
		className: "container mx-auto px-4 py-8 space-y-12",
		children: [
			/* @__PURE__ */ jsx(Section, {
				title: "حزمة الإطلاق المثالية",
				subtitle: "منتجات رقمية مصمّمة لكل احتياج",
				children: /* @__PURE__ */ jsx(ProductMarquee, { items: products })
			}),
			/* @__PURE__ */ jsx(CategoriesSection, {}),
			/* @__PURE__ */ jsx(Section, {
				title: "تصفّح حسب الفئة",
				subtitle: "اختر المسار الذي يناسبك",
				children: /* @__PURE__ */ jsx(ProductGrid, {
					items: products,
					cols: 3
				})
			}),
			/* @__PURE__ */ jsx(BundlesSection, {}),
			/* @__PURE__ */ jsx(WhyTechnyh, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(FAQ, {}),
			/* @__PURE__ */ jsx(Section, {
				title: "طرق الدفع المتاحة",
				children: /* @__PURE__ */ jsx("div", {
					className: "bg-card border border-border rounded-2xl p-5 flex items-center justify-center gap-6 flex-wrap",
					children: [
						"Visa",
						"Mastercard",
						"Mada",
						"Apple Pay",
						"STC Pay"
					].map((p) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-sm font-bold text-muted-foreground",
						children: [/* @__PURE__ */ jsx(CreditCard, { className: "w-4 h-4" }), p]
					}, p))
				})
			})
		]
	})] });
}
function Section({ title, subtitle, children }) {
	return /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between mb-4",
		children: [
			/* @__PURE__ */ jsx("button", {
				className: "p-2 rounded-full hover:bg-secondary text-muted-foreground",
				children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xl font-black",
					children: title
				}), subtitle && /* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: subtitle
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				className: "p-2 rounded-full hover:bg-secondary text-muted-foreground",
				children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" })
			})
		]
	}), children] });
}
function ProductGrid({ items, cols }) {
	return /* @__PURE__ */ jsx("div", {
		className: `grid ${cols === 4 ? "grid-cols-2 md:grid-cols-4" : cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"} gap-4`,
		children: items.map((p) => /* @__PURE__ */ jsx(ProductCard, { p }, p.id))
	});
}
function ProductMarquee({ items }) {
	return /* @__PURE__ */ jsx("div", {
		className: "relative overflow-hidden group",
		style: { maskImage: "linear-gradient(to left, transparent, black 8%, black 92%, transparent)" },
		children: /* @__PURE__ */ jsx("div", {
			className: "flex gap-3 animate-marquee group-hover:[animation-play-state:paused]",
			style: { width: "max-content" },
			children: [...items, ...items].map((p, i) => /* @__PURE__ */ jsx("div", {
				className: "w-[260px] flex-shrink-0",
				children: /* @__PURE__ */ jsx(ProductCard, { p })
			}, `${p.id}-${i}`))
		})
	});
}
var productIcons = {
	"1": FileText,
	"2": Video,
	"3": Camera,
	"4": Smartphone,
	"5": Briefcase
};
function ProductCard({ p }) {
	const { addItem, format } = useCart();
	const Icon = productIcons[p.id] ?? Sparkles;
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-card border border-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow",
		children: [/* @__PURE__ */ jsx(Link, {
			to: "/product/$slug",
			params: { slug: p.slug },
			className: "block relative",
			children: /* @__PURE__ */ jsxs("div", {
				className: "aspect-[4/3] flex items-center justify-center text-white relative overflow-hidden",
				style: { background: p.cover },
				children: [p.badge && /* @__PURE__ */ jsx("span", {
					className: "absolute top-2 right-2 bg-white text-primary text-[10px] px-2 py-0.5 rounded-full font-black shadow",
					children: p.badge
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative flex flex-col items-center gap-3 text-center px-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center",
						children: /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-white" })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-lg font-black drop-shadow-lg line-clamp-2",
						children: p.title
					})]
				})]
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-4 flex-1 flex flex-col",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-bold text-sm line-clamp-1 mb-1",
					children: p.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground line-clamp-2 mb-3",
					children: p.tagline
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-baseline gap-2 mb-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-lg font-black text-primary",
						children: format(p.price)
					}), p.oldPrice && /* @__PURE__ */ jsx("span", {
						className: "text-xs text-muted-foreground line-through",
						children: format(p.oldPrice)
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 mt-auto",
					children: [/* @__PURE__ */ jsx("button", {
						className: "p-1.5 rounded-full hover:bg-secondary text-muted-foreground flex-shrink-0",
						"aria-label": "مفضلة",
						children: /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4" })
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => addItem({
							id: p.id,
							title: p.title,
							price: p.price,
							cover: p.cover,
							image: p.image
						}),
						className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold py-2 rounded-full text-center transition",
						children: "أضف للسلة"
					})]
				})
			]
		})]
	});
}
function LaunchHero() {
	return /* @__PURE__ */ jsx("section", {
		className: "text-white relative overflow-hidden",
		style: { background: "linear-gradient(135deg,#dc2626 0%,#ea580c 50%,#d4af37 100%)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 py-10 md:py-14 text-center",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-1.5 text-xs font-bold mb-4",
					children: [/* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4" }), " عروض الإطلاق — الأسبوع الأول فقط"]
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "text-3xl md:text-5xl font-black leading-tight mb-3",
					children: [
						"خصم 20% إضافي",
						/* @__PURE__ */ jsx("br", { className: "md:hidden" }),
						" على جميع الباقات"
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "opacity-90 text-sm md:text-base mb-5",
					children: "منتجات رقمية بالذكاء الاصطناعي — جاهزة للاستخدام بالعربي"
				}),
				/* @__PURE__ */ jsx(Countdown, {}),
				/* @__PURE__ */ jsx("a", {
					href: "#bundles",
					className: "inline-block mt-6 bg-white text-primary px-7 py-3 rounded-full font-black text-sm hover:bg-white/90 transition shadow-lg",
					children: "احصل على الخصم الآن"
				})
			]
		})
	});
}
function Countdown() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-center gap-2 md:gap-3",
		children: [/* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 opacity-80" }), [
			{
				v: "06",
				l: "أيام"
			},
			{
				v: "23",
				l: "ساعة"
			},
			{
				v: "45",
				l: "دقيقة"
			},
			{
				v: "12",
				l: "ثانية"
			}
		].map((p) => /* @__PURE__ */ jsxs("div", {
			className: "bg-white/15 backdrop-blur rounded-xl px-3 py-2 min-w-14",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-xl md:text-2xl font-black",
				children: p.v
			}), /* @__PURE__ */ jsx("div", {
				className: "text-[10px] opacity-80",
				children: p.l
			})]
		}, p.l))]
	});
}
function CategoriesSection() {
	return /* @__PURE__ */ jsx(Section, {
		title: "الفئات",
		subtitle: "اختر ما يناسب طموحك",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
			children: [
				{
					icon: Target,
					name: "الباحثون عن عمل",
					count: 2,
					grad: "from-blue-600 to-indigo-700"
				},
				{
					icon: Smartphone,
					name: "صناع المحتوى",
					count: 2,
					grad: "from-fuchsia-500 to-pink-600"
				},
				{
					icon: Store,
					name: "رواد الأعمال",
					count: 1,
					grad: "from-orange-500 to-amber-500"
				}
			].map((c) => /* @__PURE__ */ jsxs("div", {
				className: `bg-gradient-to-br ${c.grad} text-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow`,
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0",
					children: /* @__PURE__ */ jsx(c.icon, { className: "w-7 h-7" })
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "font-black text-base",
					children: c.name
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-xs opacity-90 mt-0.5",
					children: [c.count, " منتجات"]
				})] })]
			}, c.name))
		})
	});
}
function BundlesSection() {
	return /* @__PURE__ */ jsxs("section", {
		id: "bundles",
		className: "scroll-mt-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-center mb-6",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-2xl md:text-3xl font-black",
				children: "الباقات الموفّرة"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: "وفّر أكثر عند الشراء كباقة كاملة"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-5",
			children: bundles.map((b, i) => /* @__PURE__ */ jsx(BundleCard, {
				b,
				featured: i === 1
			}, b.id))
		})]
	});
}
function BundleCard({ b, featured }) {
	const { addItem, format } = useCart();
	const saving = b.oldPrice - b.price;
	const pct = Math.round(saving / b.oldPrice * 100);
	return /* @__PURE__ */ jsxs("div", {
		className: `relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border ${featured ? "border-primary ring-2 ring-primary/30 md:-translate-y-2" : "border-border"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "h-28 text-white relative flex items-center justify-center",
			style: { background: b.cover },
			children: [/* @__PURE__ */ jsx("span", {
				className: "absolute top-3 right-3 bg-white text-foreground text-[10px] px-2 py-0.5 rounded-full font-black shadow",
				children: b.badge
			}), /* @__PURE__ */ jsxs("div", {
				className: "text-center px-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs opacity-90 mb-0.5",
					children: b.audience
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xl font-black",
					children: b.title
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-bold mb-1",
					children: b.hook
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground mb-4",
					children: b.contents
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-baseline gap-2 mb-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-3xl font-black text-primary",
						children: format(b.price)
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm text-muted-foreground line-through",
						children: format(b.oldPrice)
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "text-xs font-bold text-coral mb-4",
					children: [
						"وفّر ",
						format(saving),
						" (",
						pct,
						"%)"
					]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => addItem({
						id: b.id,
						title: `باقة ${b.title}`,
						price: b.price,
						cover: b.cover
					}),
					className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-black py-2.5 rounded-full transition",
					children: "أضف للسلة"
				})
			]
		})]
	});
}
function WhyTechnyh() {
	return /* @__PURE__ */ jsx(Section, {
		title: "لماذا Technyh؟",
		subtitle: "مزايا تجعل تجربتك مميّزة",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-4 gap-4",
			children: [
				{
					icon: Globe2,
					t: "محتوى عربي 100%",
					d: "مصمّم للسوق العربي"
				},
				{
					icon: Sparkles,
					t: "تطبيقات عملية جاهزة",
					d: "ابدأ التنفيذ فوراً"
				},
				{
					icon: Headphones,
					t: "دعم فني مستمر",
					d: "واتساب مباشر"
				},
				{
					icon: ShieldCheck,
					t: "ضمان استرداد 30 يوم",
					d: "بدون أسئلة"
				}
			].map((f) => /* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border rounded-2xl p-5 text-center shadow-sm",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "w-12 h-12 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-3",
						children: /* @__PURE__ */ jsx(f.icon, { className: "w-6 h-6 text-primary-foreground" })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "font-bold text-sm",
						children: f.t
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-xs text-muted-foreground mt-1",
						children: f.d
					})
				]
			}, f.t))
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsx(Section, {
		title: "شهادات عملائنا",
		subtitle: "نتائج حقيقية من مستخدمين حقيقيين",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-4",
			children: [
				{
					name: "أحمد",
					role: "خريج جديد",
					text: "حصلت على 3 مقابلات في أسبوع!"
				},
				{
					name: "سارة",
					role: "صانعة محتوى",
					text: "قناتي وصلت 10K متابع بدون ما أظهر"
				},
				{
					name: "محمد",
					role: "رائد أعمال",
					text: "بعت أول منتج في 48 ساعة"
				}
			].map((r) => /* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border rounded-2xl p-5 shadow-sm relative",
				children: [
					/* @__PURE__ */ jsx(Quote, { className: "w-7 h-7 text-primary/20 absolute top-3 left-3" }),
					/* @__PURE__ */ jsx(Stars, {
						rating: 5,
						size: 14
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-bold mt-3 leading-relaxed",
						children: r.text
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mt-4 pt-4 border-t border-border",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black",
							children: r.name[0]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-bold text-sm",
							children: r.name
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: r.role
						})] })]
					})
				]
			}, r.name))
		})
	});
}
function FAQ() {
	const items = [
		{
			q: "هل المحتوى يناسب المبتدئين؟",
			a: "نعم — مشروح خطوة بخطوة بأمثلة عملية تناسب أي مستوى."
		},
		{
			q: "هل هناك دعم فني؟",
			a: "نعم، عبر واتساب مباشر مع فريق الدعم لأي سؤال."
		},
		{
			q: "هل يمكنني استرداد المبلغ؟",
			a: "نعم، خلال 30 يوم من الشراء بدون أسئلة."
		}
	];
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsx(Section, {
		title: "أسئلة شائعة",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-2xl mx-auto space-y-3",
			children: items.map((it, i) => /* @__PURE__ */ jsxs("div", {
				className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm",
				children: [/* @__PURE__ */ jsxs("button", {
					onClick: () => setOpen(open === i ? null : i),
					className: "w-full flex items-center justify-between gap-3 p-4 text-right",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-2 font-bold text-sm",
						children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-primary" }), it.q]
					}), open === i ? /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" })]
				}), open === i && /* @__PURE__ */ jsx("div", {
					className: "px-4 pb-4 text-sm text-muted-foreground leading-relaxed",
					children: it.a
				})]
			}, it.q))
		})
	});
}
//#endregion
export { Index as component };
