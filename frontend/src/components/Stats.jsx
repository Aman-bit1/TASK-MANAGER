function Stats({ total, pending, completed }) {
    return (
        <section className="stats">

            <div className="stat">
                <span className="stat-label">Total</span>
                <strong>{total}</strong>
            </div>

            <div className="stat">
                <span className="stat-label">Pending</span>
                <strong>{pending}</strong>
            </div>

            <div className="stat">
                <span className="stat-label">Completed</span>
                <strong>{completed}</strong>
            </div>

        </section>
    );
}

export default Stats;