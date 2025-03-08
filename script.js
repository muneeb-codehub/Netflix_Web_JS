document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    if (body.classList.contains("signin-page")) {
        generateSignInPage();
    } else if (body.classList.contains("signup-page")) {
        generateSignUpPage();
    }
});

function generateSignInPage() {
    const container = document.createElement("div");
    container.classList.add("signin-container");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerHTML = `<a href="index.html"><img src="logo.png" alt="Netflix Logo"></a>`;

    const box = document.createElement("div");
    box.classList.add("signin-box");

    box.innerHTML = `
        <h2>Sign In</h2>
        <form id="signin-form">
            <input type="email" placeholder="Email or mobile number" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Sign In</button>
            <p class="or-text">OR</p>
            <button class="signin-code">Use a Sign-In Code</button>
            <a href="#" class="forgot-password">Forgot password?</a>
            <div class="remember-me">
                <input type="checkbox" id="remember">
                <label for="remember">Remember me</label>
            </div>
        </form>
        <p class="signup-link">New to Netflix? <a href="signup.html">Sign up now.</a></p>
    `;

    container.appendChild(logo);
    container.appendChild(box);
    document.body.appendChild(container);

    document.getElementById("signin-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your account has been created successfully!");
    });
}

function generateSignUpPage() {
    const container = document.createElement("div");
    container.classList.add("signup-container");

    container.innerHTML = `
        <h2>Finish setting up your account</h2>
        <p>Enter your details to create your membership.</p>
        <form id="signup-form">
            <label for="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required>

            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required>

            <label for="password">Create Password</label>
            <input type="password" id="password" placeholder="Create password" required>

            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm password" required>

            <label for="age">Age</label>
            <input type="number" id="age" placeholder="Enter your age" required>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required>

            <label for="gender">Gender</label>
            <select id="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label for="city">City</label>
            <input type="text" id="city" placeholder="Enter your city" required>

            <label for="country">Country</label>
            <input type="text" id="country" placeholder="Enter your country" required>

            <label for="plan">Choose a Plan</label>
            <select id="plan" required>
                <option value="">Choose a Plan</option>
                <option value="basic">Basic - $9.99</option>
                <option value="standard">Standard - $25.99</option>
                <option value="premium">Premium - $69.99</option>
            </select>

            <button type="submit">Sign Up</button>
        </form>
    `;

    document.body.appendChild(container);

    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your account has been created successfully!");
    });
}