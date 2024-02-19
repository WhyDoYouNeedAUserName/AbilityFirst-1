// Function to retrieve the value of a parameter from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the "id" parameter from the URL
    var parameterName = document.getElementById('linkButton').getAttribute('data-parameter');
    var linkUrl = document.getElementById('linkButton').getAttribute('data-url');
    
    var idParameter = getParameterByName(parameterName);

    // Add the "id" parameter to the link button
    var linkButton = document.getElementById('linkButton');
    if (linkButton) {
        linkButton.href = linkUrl + '?id=' + idParameter;
    }
});


        // Function to include HTML files using Fetch API
        async function includeHTML() {
            const elements = document.querySelectorAll('[include-html]');

            for (const element of elements) {
                const url = element.getAttribute('include-html');

                if (url) {
                    const response = await fetch(url);

                    if (response.ok) {
                        const html = await response.text();
                        element.innerHTML = html;
                    } else {
                        console.error(`Failed to fetch HTML from ${url}`);
                    }
                }
            }
        }

        // Call the function to include HTML files
        includeHTML();


/* This will add teh role based menu

// Function to load Caspio role menu script
function loadCaspioScript(url) {
    var caspioScript = document.createElement('script');
    caspioScript.type = 'text/javascript';
    caspioScript.src = url;
    document.body.appendChild(caspioScript);
}

document.addEventListener('DOMContentLoaded', function () {  

    // Load Caspio scripts after the menu is included
    loadCaspioScript('https://c8afw558.caspio.com/dp/7ce9c000ece61586d7864d0db0fb/emb');
});
*/


