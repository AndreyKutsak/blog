import { React } from "react";
import "../css/sidebar.css";
function Sidebar(props) {
	let data = props.sidebar;
	return (
		<div className='sidebar'>
			<div className='avatar-wraper'>
				<img src={data.avatar} alt={data.avatarAlt} className='user-avatar' />
				<img
					src={data.avatarBg}
					alt={data.avavtarBgAlt}
					className='avatar-bg'
				/>
			</div>
			<p className='user-name'>{data.userName}</p>
			<p className='user-job'>{data.userJob}</p>
			{(function () {
				if (Object.values(data.social).length > 0) {
					return (
						<ul className='social-list'>
							{Object.values(data.social).map(function (item) {
								return (
									<li className='social-item'>
										<a href={item.url}>
											<img src={item.src} alt={item.alt} />
										</a>
									</li>
								);
							})}
						</ul>
					);
				}
			})()}
			<p className='user-desc'>{data.userDesc}</p>
			<div className='btn-wraper'>
				<a href='' className='btn btn-works'>
					Мои работы
				</a>
				<a href='' className='btn btn-write'>
					Написать мне
				</a>
			</div>
		</div>
	);
}
export default Sidebar;
