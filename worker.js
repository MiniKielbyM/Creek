// worker.js

self.onmessage = function(e) {
    if (e.data === 'start') {
        updateCodeElement();
    }
};

function updateCodeElement() {
    setInterval(() => {
    self.postMessage(`#include "vex.h"

using namespace vex;

// A global instance of competition
competition Competition;

// define your global instances of motors and other devices here
brain Brain;

vex::controller Controller1 = controller(primary);
`);
    }, 1000); // Update every second
}