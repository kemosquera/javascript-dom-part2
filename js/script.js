document.addEventListener("DOMContentLoaded", () => {
    // Handle form submission in index.html
    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) {
        submitBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent page refresh

            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const city = document.getElementById("city").value;
            const province = document.getElementById("province").value;

            let membership = document.querySelector('input[name="membership"]:checked').value;

            document.getElementById("output").innerHTML = `
                <h3>User Information</h3>
                <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
                <p><strong>Membership:</strong> ${membership}</p>
            `;

            // Clear form fields after submission
            document.getElementById("main-form").reset();
        });
    }

    // Handle calculations in excel.html
    const calculateBtn = document.getElementById("calculate-btn");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", () => {
            let numberStr = document.getElementById("numbers").value.trim();
            if (!numberStr) {
                alert("Please enter numbers separated by spaces.");
                return;
            }

            let numberArr = numberStr.split(" ").filter(n => n !== "").map(Number);
            let operation = document.querySelector('input[name="operation"]:checked').value;
            let result;

            switch (operation) {
                case "sum":
                    result = numberArr.reduce((acc, num) => acc + num, 0);
                    break;
                case "average":
                    result = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length;
                    break;
                case "max":
                    result = Math.max(...numberArr);
                    break;
                case "min":
                    result = Math.min(...numberArr);
                    break;
            }

            document.getElementById("result").innerText = `Result: ${result}`;
        });
    }
});