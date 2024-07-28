import Download from "../assets/svg/Download";

export default function DownloadButton() {
  return (
    <>
      <button className="download-button">
        <span className="download-text"> Download</span>
        <Download />
      </button>
    </>
  );
}
