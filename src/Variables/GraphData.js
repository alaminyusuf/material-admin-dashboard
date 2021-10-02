import { primaryColor, secondaryColor, blackColor } from "../Utils/Colors";

const colors = [primaryColor(500), secondaryColor(700), blackColor(900)];

export const data2 = {
	labels: ["Apple", "Mango", "PineApple", "orange"],
	datasets: [
		{
			label: "adds",
			data: [1144, 2444, 3444, 4444],
			backgroundColor: colors,
		},
	],
};
