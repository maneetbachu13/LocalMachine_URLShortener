export function logEvent(eventType, details){
    const logEntry = {
        timestamp: new Date().toISOString(),
        eventType,
        details,
    };
    let logs=JSON.parse(localStorage.getItem('appLogs')) || [];
    logs.push(logEntry);
    localStorage.setItem('appLogs',JSON.stringify(logs));
}