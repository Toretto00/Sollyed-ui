import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import { DefaultLayout } from '@/components/Layout';
import MyCommunity from './page/MyCommunity';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Pages = route.component;

                        let Layout = DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Pages />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <Routes>
                    <Route
                        path="/myCommunity"
                        element={<MyCommunity></MyCommunity>}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
