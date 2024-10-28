
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const activityCat = document.getElementById("activityCat");
    const selectedCat = document.getElementById("selectedCat");
    const choiceList = document.getElementById("choiceList");

    // Populate categories
    for (const c of categories) {
        activityCat.appendChild(new Option(c, c)); // Value is the category itself
    }

    // Event listener for category selection
    activityCat.addEventListener("change", () => {
        selectedCat.innerHTML = '<option value="">Select an Activity</option>'; // Clear previous options
        const selectedCategory = activityCat.value;

        for (const a of activities) {
            if (a.category === selectedCategory) {
                selectedCat.appendChild(new Option(a.name, a.id)); // Use id as the value
            }
        }
    });

    // Event listener for activity selection
    selectedCat.addEventListener("change", () => {
        actDetails.innerHTML = ''; // Clear previous details
        const selectedId = selectedCat.value;

        const selectedActivity = activities.find(a => a.id === selectedId);
        if (selectedActivity) {
            actDetails.innerHTML = `
                <p><strong>Name:</strong> ${selectedActivity.name}</p>
                <p><strong>Description:</strong> ${selectedActivity.description}</p>
                <p><strong>Location:</strong> ${selectedActivity.location}</p>
                <p><strong>Price:</strong> $${selectedActivity.price.toFixed(2)}</p>
            `;
        }
    });
});
