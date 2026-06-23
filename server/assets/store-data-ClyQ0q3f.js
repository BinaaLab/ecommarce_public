//#region src/lib/store-data.ts
var covers = [
	"linear-gradient(135deg,#1e3a8a,#2563eb)",
	"linear-gradient(135deg,#8b5cf6,#ec4899)",
	"linear-gradient(135deg,#f59e0b,#fbbf24)",
	"linear-gradient(135deg,#10b981,#0ea5e9)",
	"linear-gradient(135deg,#38bdf8,#3b82f6)",
	"linear-gradient(135deg,#475569,#1e40af)",
	"linear-gradient(135deg,#7c3aed,#d4af37)",
	"linear-gradient(135deg,#f97316,#fbbf24)"
];
var products = [
	{
		id: "1",
		slug: "ai-resume",
		title: "السيرة الذاتية بـ AI",
		tagline: "اجتاز أنظمة الفرز الآلي ATS",
		description: "دليل عملي وأدوات ذكاء اصطناعي لكتابة سيرة ذاتية احترافية تتجاوز فلاتر ATS وتصل ليد الموظف فعلاً.",
		price: 29,
		oldPrice: 58,
		category: "الباحثون عن عمل",
		badge: "خصم الإطلاق -50%",
		cover: covers[0],
		image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
		rating: 4.9,
		reviewsCount: 312,
		sales: 1840,
		reviews: sampleReviews("الدليل")
	},
	{
		id: "2",
		slug: "ai-short-videos",
		title: "فيديوهات قصيرة بالـ AI",
		tagline: "قناة تيك توك بدون كاميرا",
		description: "ورشة شاملة لإنشاء فيديوهات قصيرة احترافية بالكامل عبر أدوات الذكاء الاصطناعي، من السكريبت للنشر.",
		price: 39,
		category: "صناع المحتوى",
		badge: "الأكثر طلباً",
		cover: covers[1],
		image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
		rating: 4.8,
		reviewsCount: 198,
		sales: 920,
		reviews: sampleReviews("الورشة")
	},
	{
		id: "3",
		slug: "ai-product-photography",
		title: "تصوير المنتجات بـ AI",
		tagline: "إعلانات احترافية بثوانٍ",
		description: "حوّل صور منتجاتك العادية إلى صور إعلانية احترافية باستخدام أدوات الذكاء الاصطناعي بدون استوديو.",
		price: 49,
		category: "رواد الأعمال",
		badge: "جديد",
		cover: covers[2],
		image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
		rating: 4.7,
		reviewsCount: 145,
		sales: 670,
		reviews: sampleReviews("الدورة")
	},
	{
		id: "4",
		slug: "ai-social-media",
		title: "إدارة السوشيال ميديا بـ AI",
		tagline: "30 بوست في ساعة واحدة",
		description: "نظام متكامل لتخطيط وإنشاء وجدولة محتوى سوشيال ميديا احترافي بمساعدة الذكاء الاصطناعي.",
		price: 49,
		category: "صناع المحتوى",
		badge: "NEW",
		cover: covers[3],
		image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
		rating: 5,
		reviewsCount: 421,
		sales: 2310,
		reviews: sampleReviews("النظام")
	},
	{
		id: "5",
		slug: "linkedin-pro",
		title: "بناء LinkedIn احترافي",
		tagline: "بروفايل يجذب recruiters",
		description: "خطوة بخطوة لبناء بروفايل LinkedIn متكامل يجذب المُوظّفين ويفتح لك فرص عمل بدون تقديم.",
		price: 29,
		category: "الباحثون عن عمل",
		badge: "مطلوب",
		cover: covers[4],
		image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
		rating: 4.6,
		reviewsCount: 187,
		sales: 540,
		reviews: sampleReviews("الدليل")
	}
];
var bundles = [
	{
		id: "b1",
		slug: "starter-pack",
		title: "البداية السريعة",
		audience: "للباحثين عن عمل",
		contents: "السيرة الذاتية + LinkedIn",
		hook: "وظيفة أحلامك تبعد خطوة واحدة!",
		price: 45,
		oldPrice: 58,
		cover: "linear-gradient(135deg,#475569,#1e40af)",
		badge: "Starter"
	},
	{
		id: "b2",
		slug: "creator-pack",
		title: "صانع المحتوى المحترف",
		audience: "لصنّاع المحتوى",
		contents: "فيديوهات + سكريبتات + إدارة سوشيال",
		hook: "كل ما تحتاجه لتصبح صانع محتوى محترف!",
		price: 99,
		oldPrice: 137,
		cover: "linear-gradient(135deg,#7c3aed,#d4af37)",
		badge: "الأكثر مبيعاً"
	},
	{
		id: "b3",
		slug: "business-pack",
		title: "رائد الأعمال الرقمي",
		audience: "لرواد الأعمال",
		contents: "تصوير منتجات + متجر + شعارات",
		hook: "ابدأ تجارتك الإلكترونية اليوم!",
		price: 109,
		oldPrice: 147,
		cover: "linear-gradient(135deg,#f97316,#fbbf24)",
		badge: "Business"
	}
];
function sampleReviews(name) {
	const authors = [
		"سارة محمد",
		"أحمد علي",
		"نورة الفهد",
		"خالد العتيبي",
		"هند السالم"
	];
	const comments = [
		`${name} فاق توقعاتي، التصميم رائع والاستخدام سهل جداً.`,
		`جودة ممتازة وقيمة مقابل السعر معقولة. أنصح فيه بشدة.`,
		`أفضل ${name} اشتريته! غيّر طريقة عملي بالكامل.`,
		`منتج رائع لكن أتمنى إضافة المزيد من الخيارات مستقبلاً.`,
		`تجربة مذهلة، الدعم سريع والتسليم فوري.`
	];
	return authors.map((a, i) => ({
		id: `r${i}`,
		author: a,
		rating: 5 - i % 2,
		comment: comments[i],
		date: `قبل ${i + 1} أسبوع`
	}));
}
var orders = [
	{
		id: "#10421",
		customer: "سارة محمد",
		product: "أجندة رقمية ٢٠٢٦",
		amount: 49,
		status: "مكتمل",
		date: "اليوم"
	},
	{
		id: "#10420",
		customer: "أحمد علي",
		product: "حزمة قوالب دراسية",
		amount: 35,
		status: "مكتمل",
		date: "اليوم"
	},
	{
		id: "#10419",
		customer: "نورة الفهد",
		product: "مخطط رمضان",
		amount: 25,
		status: "قيد المعالجة",
		date: "أمس"
	},
	{
		id: "#10418",
		customer: "خالد العتيبي",
		product: "قالب خطة عمل",
		amount: 89,
		status: "مكتمل",
		date: "أمس"
	},
	{
		id: "#10417",
		customer: "هند السالم",
		product: "حزمة سوشيال ميديا",
		amount: 45,
		status: "مكتمل",
		date: "قبل يومين"
	},
	{
		id: "#10416",
		customer: "محمد القحطاني",
		product: "متعقّب العادات",
		amount: 29,
		status: "مرتجع",
		date: "قبل ٣ أيام"
	}
];
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
//#endregion
export { products as i, getProduct as n, orders as r, bundles as t };
