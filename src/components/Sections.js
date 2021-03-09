import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Text, Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"text-align": "center",
	"padding": "100px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"children": "About Us"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "20px 0 0 0",
			"children": <>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</>
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"margin": "40px 0 20px 0",
			"justify-content": "space-around",
			"sm-flex-direction": "column"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"padding": "10px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
			"width": "320px",
			"max-width": "100%"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"padding": "10px"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
			"width": "320px",
			"max-width": "100%"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"padding": "10px"
		}
	},
	"image2": {
		"kind": "Image",
		"props": {
			"src": "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80",
			"width": "320px",
			"max-width": "100%"
		}
	}
};

const Sections = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Image {...override("image")} />
			</Box>
			<Box {...override("box2")}>
				<Image {...override("image1")} />
			</Box>
			<Box {...override("box3")}>
				<Image {...override("image2")} />
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Sections, { ...Section,
	defaultProps,
	overrides
});
export default Sections;