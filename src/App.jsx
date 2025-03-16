import {PageHeader} from "./PageHeader.jsx";
import {PageFooter} from "./PageFooter.jsx";
import {MainContent} from "./MainContent.jsx";

export const App = () => {
    return (
        <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
            <PageHeader/>
            <MainContent/>
            <PageFooter/>
        </div>
    )
}
