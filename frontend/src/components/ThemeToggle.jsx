function ThemeToggle({ isDark, onToggle }) {
    return (
        <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <span className="theme-icon">
                {isDark ? "☀" : "☾"}
            </span>

            <span>
                {isDark ? "Light" : "Dark"}
            </span>
        </button>
    );
}

export default ThemeToggle;