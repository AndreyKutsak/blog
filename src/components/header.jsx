import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
function Header(props) {
	let menuItems = Object.values(props.menu);

	return (
		<header>
			<ul className='header-menu'>
				{menuItems.map(function (item) {
					let dropClass = "";
					if (item.dropdown) {
						dropClass = "dropdown-wraper";
					}
					return (
						<li className={`menu-item ${dropClass}`}>
							<a href={item.link}>{item.desc}</a>
							{(function () {
								if (item.dropdown) {
									return (
										<ul className='dropdown-menu'>
											{Object.values(item.dropdown).map(function (el) {
												return (
													<li className='dropdown-item'>
														<a href={el.link}>{el.desc}</a>{" "}
													</li>
												);
											})}
										</ul>
									);
								}
							})()}
						</li>
					);
				})}
			</ul>
			<form action='#' className='search-form'>
				<input type='text' placeholder='Поиск по блогу' />
			</form>
		</header>
	);
}
export default Header;
