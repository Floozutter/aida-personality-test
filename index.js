const preload = {
    type: "preload",
    images: []
}

const hello_world = {
    type: "html-keyboard-response",
    stimulus: `
        Hello, world! <br>
        <i>Press any key to continue.</i>
    `
};

jsPsych.init({
    timeline: [
        preload,
        hello_world
    ],
    on_finish: () => {}
});
