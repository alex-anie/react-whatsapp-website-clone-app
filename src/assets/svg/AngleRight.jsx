export default function AngleRight(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </>
  );
}
