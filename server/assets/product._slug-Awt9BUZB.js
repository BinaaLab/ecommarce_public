import { n as getProduct } from "./store-data-ClyQ0q3f.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/product.$slug.tsx
var $$splitComponentImporter = () => import("./product._slug-DL1lXikX.js");
var $$splitNotFoundComponentImporter = () => import("./product._slug-DOGLqd-O.js");
var $$splitErrorComponentImporter = () => import("./product._slug-NGhgGRjL.js");
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = getProduct(params.slug);
		return { meta: [
			{ title: p ? `${p.title} — Technyh` : "منتج — Technyh" },
			{
				name: "description",
				content: p?.tagline ?? ""
			},
			{
				property: "og:title",
				content: p?.title ?? ""
			},
			{
				property: "og:description",
				content: p?.tagline ?? ""
			}
		] };
	},
	loader: ({ params }) => {
		const p = getProduct(params.slug);
		if (!p) throw notFound();
		return p;
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
