import styled from "styled-components";
// import "./Button.css";

//* Create a FormControl(div) using "styled-components" :
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  margin-top: 0.3rem;
  border: 1px solid #77536b;
  color: white;
  border-radius: 4px;
  background: #6f5265;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #483742;
    border-color: #483742;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;

//! Styled-Components package :
//? Problem : Currently we're using just CSS for that regular CSS files with regular selectors, mostly class selectors but also sometimes combined with tag selectors for example. We're importing these files into our component files, but as I emphasized multiple times, this does not result in those styles being scoped to this component only. So that means that if we had any other element anywhere else in a DOM that had a CSS class on it, this style for example, would target it and would affect it. So it's not like we only care the elements in this component, no, every element on the entire page is affected because by default, those styles are not scoped. Now that is not necessarily a problem. You can of course be careful about your selectors. You can use class selectors or ID selectors here, it is regular CSS after all, you can use any selector and you can ensure that the IDs and the classes you are selecting are only used in the places where you want to apply the styling. But of course, especially in larger projects, it could happen that a name is used twice. That css class, for example, is used in different parts of the application and therefore unfortunately styles spill over to our components and you might want to avoid this. And there are various ways of avoiding this,including Approach number one is to use a package called "styled-components".
//? Solution : "Styled-components" is a package that helps you build  components which have certain styles attached to them where the styles really only affect the components to which they were attached and not any other components.Because what this package does in the end is it looks at the styles we set up here and then it wraps these styles into generated class names where it guarantees that every class name is unique so that it can spill over to other components of the app. And it will then add these classes as global CSS.But now since we have unique class names for every styled component, the style set up here will never be able to affect the number of component in the app because these unique class names are really well unique per style component.(view documentation)
//? Styled components, like their name suggest are simply normal components which means they can receive props. Props that can be accessed in the style declaration and used to determine values for style rules but we are not using them within the styles in the example.
//? this case : This does work and it especially works at the place where you are using the "Button" component so in the form itself. So whatever props that you pass to the "Button" component from the "CourseInput" component are automatically applied on the button that  that you decorate using styled components.
//? So in essence, the Button is now not a normal component but a styled component, so it does receive those props that were passed from outside
