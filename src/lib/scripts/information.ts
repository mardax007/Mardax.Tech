

function getHomepageInfo() {
    return {
        title: "Hi, I'm Martijn",
        description: "This is my homepage. I hope you enjoy it!",
        location: "The Netherlands",
        codeURL: "./code.svg",
        codeAlt: "Code",
        lowResEarthURL: "./lowresEarth.png",
        highResEarthURL: "./highresEarth.png",
        earthAlt: "Earth",
        categories: {
            work: {
                catName: "Work",
                catColor: "linear-gradient(117deg, #5d5d5f, #030303)",
                titleColor: "linear-gradient(ANGLEdeg, #969699, #1e1e22)",
                default: true,
            },
            play: {
                catName: "Play",
                catColor: "linear-gradient(117deg, #8080ff, #f85392)",
                titleColor: "linear-gradient(ANGLEdeg, #adf1e0, #8075ff 28%, #ff7171 98%)",
            }
        }
    }
}

export { getHomepageInfo };