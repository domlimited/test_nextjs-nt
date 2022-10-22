import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const layout = ( { children } ) => {
    return (
        <div>
            <AppHeader/>
                <main className="container">
                    {children}
                </main>
            <AppFooter />
        </div>
    );
}

export default layout;