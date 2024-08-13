import { Nav } from "./Nav";

export const Header = (props) => {
  return (
    <>
      <header>
        <Nav />
        <h1>
          {props.title}
        </h1>
      </header>
    </>
  );
};
