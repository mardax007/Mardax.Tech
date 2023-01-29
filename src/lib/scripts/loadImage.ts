
async function loadImage(src: string) {
    return "https://firebasestorage.googleapis.com/v0/b/mardaxtech-portfolio.appspot.com/o/" + src.replaceAll("/", "%2F") + "?alt=media";
}

export default loadImage;