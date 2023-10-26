import Clock from './deps/clock.js';
import View from './view.js';
const view = new View()
const clock = new Clock()

let took = ''
view.cofigureOnFileChange(file => {
    clock.start((time) => {
        took = time;
        view.updateElapsedTime(`Process started ${time}`)
    })

    setTimeout(() => {
        clock.stop()
        view.updateElapsedTime(`Process took ${took.replace('ago', '')}`)
    }, 5000)
})
