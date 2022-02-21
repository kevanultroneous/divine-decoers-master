import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomTemplePage from "./Pages/CustomTemplePage"
import MainPage from "./Pages/MainPage"
import NotFound from "./Pages/NotFound"
import PersonalViewPage from "./Pages/PersonalViewPage"

const SystemRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/customtemples" element={<CustomTemplePage />} />
                <Route path="/viewitem" element={<PersonalViewPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default SystemRoute