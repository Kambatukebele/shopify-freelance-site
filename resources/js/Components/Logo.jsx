const Logo = ({ logo }) => {
  return (
    <>
      <a className="w-[100px] block" href="#">
        <img
          className="block w-full h-full object-cover object-center"
          src={logo}
          alt=""
        />
      </a>
    </>
  );
};
export default Logo;
