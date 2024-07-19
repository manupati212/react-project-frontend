$(document).ready(function() {
    $('#searchInput').on('input', function() {
        let query = $(this).val().toLowerCase();
        filterProjects(query);
    });

    function filterProjects(query) {
        $.get('/projects', function(data) {
            let filteredProjects = data.filter(project => project.name.toLowerCase().includes(query));
            displayProjects(filteredProjects);
        });
    }

    function displayProjects(projects) {
        $('#projectsContainer').empty();
        projects.forEach(project => {
            $('#projectsContainer').append(`<div>${project.name}</div>`);
        });
    }
});
