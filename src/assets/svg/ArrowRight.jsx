export default function ArrowRight(props) {
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
        {...props}
      >
        <line x1="5" x2="19" y1="12" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </>
  );
}
