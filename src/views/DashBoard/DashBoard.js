import React from "react";

import Grid from "@material-ui/core/Grid";
import CardAdmin from "../../components/Card/CardAdmin";
import CardInfo from "../../components/Card/CardInfo";
import Tables from "./../../components/Table/Table";

import { primaryColor, secondaryColor, blackColor } from "../../Utils/Colors";
//  importing graph data
import { data2 } from "../../Variables/GraphData";

// importing Core styles
import Styled from "styled-components";

const DashBoard = () => {
	return (
		<>
			<CardContainer>
				<Grid container spacing={4} justify='center'>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<CardAdmin
							color={primaryColor(500)}
							title={"Requests"}
							num={30}
							growth={"+2.5%"}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<CardAdmin
							color={secondaryColor(900)}
							title={"Spendings"}
							num={180}
							growth={"-31.8%"}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<CardAdmin
							color={blackColor(900)}
							title={"Tasks"}
							num={452}
							growth={"+4.9%"}
						/>
					</Grid>
				</Grid>

				<Grid container justify='center' spacing={3}>
					<Grid item xs={12} sm={12} md={5}>
						<CardInfo type={"doughnut"} data={data2} />
					</Grid>
				</Grid>
			</CardContainer>
			<Tables />
		</>
	);
};

const CardContainer = Styled.div`
margin-bottom:4em ;
`;

export default DashBoard;
