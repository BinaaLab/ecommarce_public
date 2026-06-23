import { t as SiteLayout } from "./site-layout-BVo2ccEI.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/product.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
	className: "container mx-auto px-4 py-20 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "text-3xl font-bold",
		children: "المنتج غير موجود"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/",
		className: "text-primary mt-4 inline-block",
		children: "العودة للرئيسية"
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
