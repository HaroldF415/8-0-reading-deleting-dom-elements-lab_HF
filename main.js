const allPostLink = document.querySelector("header nav ul li:first-child");
allPostLink.remove();

const featSpan = document.querySelector(".featured article aside p span");
featSpan.remove();

const lastPost = document.querySelector(".posts article:last-child");
lastPost.remove();

const nonFeatPostTitles = document.querySelectorAll(".posts h3");
nonFeatPostTitles.forEach( post => post.remove() );
