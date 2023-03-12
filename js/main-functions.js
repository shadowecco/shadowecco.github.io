var freePikLink = 'https://www.freepik.com'
var unSplashLink = 'https://unsplash.com/'
var replitLink = 'https://replit.com/@HelenYates/'
var githubLink = 'https://shadowecco.github.io/projects/web/'
var githubCode = 'https://github.com/shadowecco/shadowecco.github.io/tree/main/projects/web/'

//Footer Credits

function projectFooterText(picloc, artloc, artName, siteloc, siteName) {
    $('.project-credits').html(
        '<a href="' +
        picloc +
        '">Image</a> by <a href="' +
        artloc +
        '"> ' + artName + ' </a> on <a href="' +
        siteloc +
        '">' + siteName + '</a>'
    );
}


//Project Template

/* function projectFunction(startLink, endLink) {
    window.open(startLink + endLink, '_blank');
}

function gitcodeFunction(startLink, endLink) {
    window.open(startLink + endLink, '_blank');
}

function imgFunction(startLink, endLink) {
    window.open(startLink + endLink, '_blank');
} */