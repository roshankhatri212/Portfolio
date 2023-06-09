import React, { useState } from 'react';
import {
	FaLinkedinIn,
	FaFilePdf,
	FaWhatsapp,
	FaGithub,
	
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

// import Pdf from '../../../assets/files/resume.pdf';
import { textColor, primaryColor } from '../../../helpers/colors';
import { IconItem } from './styled';

export default function Icon({ title }) {
	let href = '';
	let className = 'icon';
	const [iconColor, setIconColor] = useState(primaryColor);

	if (title === 'resume') {
		className = 'resume icon';
	} 

	switch (title) {
		case 'linkedin':
			href = 'https://www.linkedin.com/in/roshankc/';
			break;
		case 'email':
			href = 'mailto:roshankhatri212@gmail.com';
			break;
		case 'whatsapp':
			href =
				'https://api.whatsapp.com/send/?phone=%2B9779861284977&text&type=phone_number&app_absent=0';
			break;
			case 'github':
			href =
				'https://www.github.com/roshankhatri212';
			break;
		// case 'resume':
		// 	href = Pdf;
		// 	break;
		// case 'location':
		// 	href =
		// 		'https://www.google.com.br/maps/place/S%C3%A3o+Paulo,+SP/@2.3139502,-60.759315,3z/data=!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571';
		// 	break;
		default:
			break;
	}

	return (
		<IconItem>
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className={className}
				onMouseEnter={() => {
					setIconColor(textColor);
				}}
				onMouseLeave={() => {
					setIconColor(primaryColor);
				}}
			>
				{title === 'linkedin' && <FaLinkedinIn fill={iconColor} />}
				{title === 'email' && <GrMail fill={iconColor} />}
				{title === 'whatsapp' && <FaWhatsapp fill={iconColor} />}
				{title === 'github' && <FaGithub fill={iconColor} />}
				{title === 'resume' && (
					<>
						<FaFilePdf fill={iconColor} />
						<span style={{ color: iconColor }}>Resume</span>
					</>
				)}
				{/* {title === 'location' && (
					<>
						<FaMapMarkerAlt fill={iconColor} />
						<span style={{ color: iconColor }}>Nepal</span>
					</>
				)} */}
			</a>
		</IconItem>
	);
}
