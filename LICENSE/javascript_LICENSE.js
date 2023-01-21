// An array of license objects
var licenses = [
    { name: 'Showreel', link: 'https://pixabay.com/de/music/zukunftiger-bass-showreel-99195/' },
    { name: 'Where the Light is', link: 'https://pixabay.com/music/acoustic-group-where-the-light-is-15702/' },
    { name: 'The Beat of Nature', link: 'https://pixabay.com/music/solo-guitar-the-beat-of-nature-122841/' },
    { name: 'Summer trip with a guitar', link: 'https://pixabay.com/music/folk-summer-trip-with-a-guitar-112939/' }
];

// Get the <ul> element
var list = document.getElementById("license-list");

// Loop through the array of licenses
for (var i = 0; i < licenses.length; i++) {
    // Create a new <li> element
    var item = document.createElement("li");

    // Create a new <a> element
    var link = document.createElement("a");
    link.href = licenses[i].link;
    link.innerHTML = licenses[i].name;

    // Append the <a> element to the <li> element
    item.appendChild(link);

    // Append the <li> element to the <ul> element
    list.appendChild(item);
}
