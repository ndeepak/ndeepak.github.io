// Function to fetch GitHub profile data
function fetchGitHubProfile() {
    fetch("https://api.github.com/users/ndeepak")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch profile data");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("profileImage").src = data.avatar_url;
            document.getElementById("fullName").textContent = data.name || "Deepak Nagarkoti";
            document.getElementById("bio").textContent = data.bio || "No bio available.";
            document.getElementById("followersInformation").textContent = `Followed by ${data.followers} people on GitHub.`;
            document.getElementById("githublink").href = data.html_url;

            document.getElementById("mainContainer").hidden = false;
            document.getElementById("loading").hidden = true;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("loading").textContent = "Failed to load profile data.";
        });
}

// Function to fetch GitHub repositories
function fetchGitHubRepositories() {
    fetch("https://api.github.com/users/ndeepak/repos")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch repositories");
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                document.getElementById("project__name").textContent = data[0].name;
                document.getElementById("source_code").href = data[0].html_url;

                if (data.length > 1) {
                    document.getElementById("project__name1").textContent = data[1].name;
                    document.getElementById("source_code1").href = data[1].html_url;
                }
            }
        })
        .catch(error => {
            console.error(error);
        });
}

// Initialize Data Fetch
fetchGitHubProfile();
fetchGitHubRepositories();
