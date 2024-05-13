function TimelineEvents(props) {
    return (
        <ul className="timeline">
            {props.timelineEvents.map(event => (
                <li key={event.id}>
                    <div className="event">
                        <div className="event-date">{event.date}</div>
                        <div className="event-description">{event.description}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TimelineEvents;