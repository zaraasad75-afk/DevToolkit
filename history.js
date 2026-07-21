function saveHistory(tool, action) {

    let history = JSON.parse(localStorage.getItem("toolHistory")) || [];

    history.unshift({
        tool: tool,
        action: action,
        time: new Date().toLocaleString()
    });

    if (history.length > 10) {
        history.pop();
    }

    localStorage.setItem("toolHistory", JSON.stringify(history));
}

function getHistory() {
    return JSON.parse(localStorage.getItem("toolHistory")) || [];
}

function clearHistory() {
    localStorage.removeItem("toolHistory");
}