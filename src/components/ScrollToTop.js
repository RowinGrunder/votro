import { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";

// scroll to top when redirecting to new page
const ScrollToTop = ({history, children}) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    }
  }, [])

  return <Fragment>{ children }</Fragment>
}

export default withRouter(ScrollToTop);