import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "/assets/avatar.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "WYL.龙尊",
	bio: "拼搏努力奋进的少年",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3546704626322093",
		},
		{
			name: "TiktTok",
			icon: "fa7-brands:tiktok",
			url: "https://www.douyin.com/user/MS4wLjABAAAAUQAkKBeDuCLNR0SY052hvOcVBca2P9fCeWAxjbLE4CfohMtjBMp3VJh3uF2QWS3j?from_tab_name=main&relation=0&vid=7534151914452782393",
		},
	],
};
