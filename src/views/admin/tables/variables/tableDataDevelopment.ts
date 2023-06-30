type RowObj = {
	profileImage: string,
	name: string;
	tech: string[];
	location: string,
	images: string[],
	date: string;
	progress: number;
	paidAmount: string;
	approved: boolean;
};

const tableDataComplex: RowObj[] = [
	{
		profileImage: "https://th.bing.com/th/id/OIP._6kSqsTmX5o4yeSjGnw48AHaLH?pid=ImgDet&rs=1",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'android', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: '12.Jan.2021',
		progress: 75.5,
		paidAmount: "$ 100.00",
		approved: false
	},
	{
		profileImage: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
		name: 'Raquel Murrilo',
		tech: [ 'apple' ],
		location: "Los Angeles",
		images: [""],
		date: '21.Feb.2021',
		progress: 35.4,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhgPHEfBMgZblG7cuUbne9AMzxUOekEzrEUB9ZkuNGjDG_go-5_g2YKJ93-2fpKGvYms&usqp=CAU",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: '13.Mar.2021',
		progress: 25,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYT9d_AhCloRLOyP1wODZup0okYSUlnSAwipS708LL_uitroYYt7NF5u0z1Y71xzVACU&usqp=CAU",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'android', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: '24.Jan.2021',
		progress: 100,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6laP7a5ghrmmy8fBzxlQ62GW7DQ-JqHLbg&usqp=CAU",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: 'Oct 24, 2022',
		progress: 75.5,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'android', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: 'Oct 24, 2022',
		progress: 75.5,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'android', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: '12.Jan.2021',
		progress: 75.5,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "",
		name: 'Raquel Murrilo',
		tech: [ 'apple' ],
		location: "Los Angeles",
		images: [""],
		date: '21.Feb.2021',
		progress: 35.4,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: '13.Mar.2021',
		progress: 25,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'android', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: '24.Jan.2021',
		progress: 100,
		paidAmount: "$ 49",
		approved: false
	},
	{
		profileImage: "",
		name: 'Raquel Murrilo',
		tech: [ 'apple', 'windows' ],
		location: "Los Angeles",
		images: [""],
		date: 'Oct 24, 2022',
		progress: 75.5,
		paidAmount: "$ 49",
		approved: false
	}
];
export default tableDataComplex;
