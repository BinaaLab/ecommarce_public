import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
//#region src/routes/login.tsx?tsr-split=component
function LoginPage() {
	const [mode, setMode] = useState("login");
	const navigate = useNavigate();
	function submit(e) {
		e.preventDefault();
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 -z-10 opacity-40",
				style: { background: "radial-gradient(50% 50% at 50% 50%, oklch(0.7 0.25 270) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ jsxs(Link, {
				to: "/",
				className: "absolute top-6 right-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), "العودة للمتجر"]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md bg-card border border-border rounded-3xl p-8 shadow-brand",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "block text-3xl font-black text-gradient-brand text-center mb-2",
						children: "Technyh"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-black text-center mb-1",
						children: mode === "login" ? "أهلاً بعودتك!" : "إنشاء حساب جديد"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground text-center mb-6",
						children: mode === "login" ? "سجّل دخولك للمتابعة" : "ابدأ رحلتك معنا اليوم"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-secondary p-1 rounded-full flex mb-6",
						children: [{
							k: "login",
							l: "تسجيل دخول"
						}, {
							k: "signup",
							l: "حساب جديد"
						}].map((t) => /* @__PURE__ */ jsx("button", {
							onClick: () => setMode(t.k),
							className: `flex-1 py-2 rounded-full text-sm font-bold transition ${mode === t.k ? "gradient-brand text-primary-foreground shadow-brand" : "text-muted-foreground"}`,
							children: t.l
						}, t.k))
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: submit,
						className: "space-y-3",
						children: [
							mode === "signup" && /* @__PURE__ */ jsx(Field, {
								icon: User,
								type: "text",
								placeholder: "الاسم الكامل"
							}),
							/* @__PURE__ */ jsx(Field, {
								icon: Mail,
								type: "email",
								placeholder: "البريد الإلكتروني"
							}),
							/* @__PURE__ */ jsx(Field, {
								icon: Lock,
								type: "password",
								placeholder: "كلمة المرور"
							}),
							mode === "login" && /* @__PURE__ */ jsx("div", {
								className: "text-left",
								children: /* @__PURE__ */ jsx("button", {
									type: "button",
									className: "text-xs text-primary hover:underline",
									children: "نسيت كلمة المرور؟"
								})
							}),
							/* @__PURE__ */ jsx("button", {
								className: "w-full gradient-brand text-primary-foreground py-3 rounded-full font-bold shadow-brand hover:opacity-90 transition",
								children: mode === "login" ? "دخول" : "إنشاء الحساب"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 my-5",
						children: [
							/* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-border" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted-foreground",
								children: "أو"
							}),
							/* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-border" })
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						className: "w-full border border-border bg-card hover:bg-secondary py-3 rounded-full font-bold flex items-center justify-center gap-2 transition",
						children: [/* @__PURE__ */ jsxs("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							children: [
								/* @__PURE__ */ jsx("path", {
									fill: "#4285f4",
									d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								}),
								/* @__PURE__ */ jsx("path", {
									fill: "#34a853",
									d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								}),
								/* @__PURE__ */ jsx("path", {
									fill: "#fbbc04",
									d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								}),
								/* @__PURE__ */ jsx("path", {
									fill: "#ea4335",
									d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								})
							]
						}), "المتابعة باستخدام Google"]
					})
				]
			})
		]
	});
}
function Field({ icon: Icon, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(Icon, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
			...props,
			className: "w-full bg-secondary border border-transparent focus:border-ring focus:bg-card outline-none rounded-xl pr-10 pl-4 py-3 text-sm transition"
		})]
	});
}
//#endregion
export { LoginPage as component };
