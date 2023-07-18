let events = (function () {

    let events = {}

    function on(eventName, func) {
        if (eventName in events) {
            events[eventName].push(func);
        }
        else {
            let arr = [1, 2];
            events[eventName] = [];
            events[eventName].push(func);
        }
    }

    function off(eventName, func) {
        let index = -1;

        for (let i = 0; i < events[eventName].length; i++) {
            let f = events[eventName][i]
            if (f == func) {
                index = i;
            }

        }

        if (index != -1) {
            events[eventName].splice(index, 1);
        }
    }

    function emit(eventName, data = []) {
        events[eventName].forEach(function (f) {
            f(...data);
        });
    }

    return { on, off, emit };
})()