export default function AngleDown(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.width} //24
        height={props.height} //24
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </>
  );
}
