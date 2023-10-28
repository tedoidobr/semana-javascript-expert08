onmessage = ({ data }) => {
    debugger
    setTimeout(() => {
        self.postMessage({
            status: 'done'
        })

    }, 2000);
}