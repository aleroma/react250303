import {PageHeader} from "./Layout/PageHeader.jsx";
import {PageFooter} from "./Layout/PageFooter.jsx";
import {MainContent} from "./Layout/MainContent.jsx";

export const Layout = () => {
    return (
        <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
            <PageHeader/>
            <MainContent/>
            <PageFooter/>
        </div>
    )
}
