import React from 'react';
import aboutImg from '../public/about-image.png';
import Image from 'next/image';

const AboutSection = () => {
	return (
		<div className="pt-20" id="about">
			<h1 className="text-[3rem] clashSemiBold text-white pb-8 px-10 md:px-20 font-semibold">
				MY BIO
			</h1>
			<div className="flex flex-col lg:flex-row gap-y-10  justify-between p-4 px-10 md:px-20 text-white">
				<div className="flex lg:w-[50%]">
					<Image
						src={aboutImg}
						alt="About DJ Luna Mar"
						className="lg:h-[650px] lg:w-auto w-full h-auto"
					/>
				</div>
				<div className="flex flex-col px-4 lg:w-[50%] text-[1.5rem] gap-y-10 text-justify leading-tight">
					<h2 className="clashSemiBold text-[2rem]">ABOUT ME</h2>
					<p className="mt-4">
						DJ Luna Mar, the Latin-American sensation, has been making waves in
						the music industry since 2016. Hailing from Hawthorne, California,
						her deep-rooted love for music blossomed early on.
					</p>
					<p className="mt-4 ">
						Luna Mar&apos;s energetic DJ sets and versatile genre mixing quickly
						earned her acclaim as an up-and-coming talent. Her debut single,
						&quot;Swishers and Coronas,&quot; was a hit, propelling her to new
						heights.
					</p>
					<p className="mt-4 ">
						A strong advocate for women in music, Luna Mar&apos;s passion and
						dedication ensure her status as a rising star and a formidable force
						for diversity in the industry.
					</p>
					<button className="flex justify-center items-center px-2 py-4 bg-white border-2 border-white rounded-4 font-clash-display  md:text-[2rem] leading-29 text-red-600  ">
						<span className="clashSemiBold">DOWNLOAD FULL BIO</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
