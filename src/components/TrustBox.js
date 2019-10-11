import React from "react"
const TrustBox = () => {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null)
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true)
    }
  }, [])
  return (
    <div
      ref={ref} // We need a reference to this element to load the TrustBox in the effect.
      className="trustpilot-widget" // Renamed this to className.
      // [ long list of data attributes...]
      data-locale="en-US"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="5be9ca90e3add900013241a3"
      data-style-height="24px"
      data-style-width="100%"
      data-theme="dark"
      style={{ marginBottom: "2rem" }}
    >
      <a
        href="https://www.trustpilot.com/review/americanprofitconsulting.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Trustpilot
      </a>
    </div>
  )
}
export default TrustBox
