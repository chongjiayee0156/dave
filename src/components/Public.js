import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">swift task tracking website!</span></h1>
            </header>
            <main className="public__main">
                <p>This is a backend system for swift company's employees to track their tasks, assign tasks, and register roles.</p>
                <p>Normal employees can only access assigned tasks.</p>
                <p>Manager and admin have full access to all tasks and user's settings.</p>
                <br />
                <p>Owner: Chong Jia Yee</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public