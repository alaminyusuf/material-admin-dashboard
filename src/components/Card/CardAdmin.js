import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import styles from "../../assets/Styles/components/card";
const useStyles = makeStyles(styles);
const CardAdmin = ({ title, num, growth }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Card className={classes.root}>
				<CardHeader
					title={title}
					className={classes.heading}
					style={{
						zIndex: "5",
						textAlign: "center",
						marginTop: "5em",
					}}
				/>
				<CardContent>
					<h2 className={classes.nums}>{num}</h2>
					<div className={classes.small}>{growth}</div>
				</CardContent>
			</Card>
		</div>
	);
};

CardAdmin.propType = {
	title: PropTypes.string.isRequired,
	num: PropTypes.string.isRequired,
	growth: PropTypes.string.isRequired,
};

export default CardAdmin;
