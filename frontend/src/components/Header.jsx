import ThemeToggle from "./ThemeToggle";

function Header({ isDark, onThemeToggle }) {
    return (
        <header className="header">

            <div>
                <p className="eyebrow">
                    PERSONAL PRODUCTIVITY
                </p>

                <h1>TaskFlow</h1>

                <p className="subtitle">
                    Keep your day clear and your work moving.
                </p>
            </div>


            <div className="header-right">

                <div className="header-status">
                    <span className="status-dot"></span>
                    <span>Local workspace</span>
                </div>

                <ThemeToggle
                    isDark={isDark}
                    onToggle={onThemeToggle}
                />

            </div>

        </header>
    );
}

export default Header;