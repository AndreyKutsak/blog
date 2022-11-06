import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./css/common.css";
import "./css/resset.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Preloader from "./components/prelaoder";
const root = ReactDOM.createRoot(document.getElementById("root"));
const data = {
	menu: {
		item: { link: "app.jsx", desc: "home", dropdown: false },
		item1: { link: "app.jsx", desc: "home", dropdown: false },
		item2: { link: "app.jsx", desc: "home", dropdown: false },
		item4: {
			link: "app.jsx",
			desc: "home",
			dropdown: {
				item: { link: "app.jsx", desc: "home", dropdown: false },
				item1: { link: "app.jsx", desc: "home", dropdown: false },
				item2: { link: "app.jsx", desc: "home", dropdown: false },
				item4: { link: "app.jsx", desc: "home", dropdown: false },
				item5: { link: "app.jsx", desc: "home", dropdown: false },
				item6: { link: "app.jsx", desc: "home", dropdown: false },
			},
		},
		item5: { link: "app.jsx", desc: "home", dropdown: false },
		item6: { link: "app.jsx", desc: "home", dropdown: false },
	},
	sidebar: {
		avatarBg:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/1280px-Gull_portrait_ca_usa.jpg",
		avatarBgAlt: "user baground",
		avatar:
			"https://parrotprint.com/wp/wp-content/uploads/2017/04/pexels-photo-27411.jpg",
		avatarAlt: "Anna pivovar",
		userName: "Anna Pivovar",
		userJob: "junior front enddeveloper",
		social: {
			inst: { url: "instagram.com", src: "", alt: "" },
			fb: { url: "fb.com", src: "", alt: "" },
		},
		userDesc:
			"lorem ipsumdolor sit amet, incor delivery lorem ipsumdolor sit amet, incor deliverylorem ipsumdolor sit amet, incor deliverylorem ipsumdolor sit amet, incor deliverylorem ipsumdolor sit amet, incor delivery",
	},
};
root.render(
	<main>
		<div className='wraper'>
			<Sidebar sidebar={data.sidebar}></Sidebar>
			<div className='content-wraper'>
				<Header menu={data.menu}></Header>
				<Preloader></Preloader>
			</div>
		</div>
	</main>
);
