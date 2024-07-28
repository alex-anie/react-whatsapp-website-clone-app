import Download from "../assets/svg/Download";

export default function DownloadButton() {
  const bgColor = {};
  return (
    <>
      <button className="download-button" style={bgColor}>
        <span className="download-text"> Download</span>
        <Download />
      </button>
    </>
  );
}
