document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collecting form data
        const formData = {
            firstName: form.elements[0].value,
            lastName: form.elements[1].value,
            dob: form.elements[2].value,
            gender: form.elements[3].value,
            age: form.elements[4].value,
            address: form.elements[5].value,
            zipCode: form.elements[6].value,
            city: form.elements[7].value,
            country: form.elements[8].value,
            phone: form.elements[10].value,
            email: form.elements[9].value,
            password: form.elements[11].value,
            confirmPassword: form.elements[12].value
        };

        // Password validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert("Signup successful!");
                form.reset(); // Clear form fields
            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to sign up. Try again later.");
        }
    });
});
