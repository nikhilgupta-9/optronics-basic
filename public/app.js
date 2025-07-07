//get location function 

document.addEventListener("DOMContentLoaded", function () {
  const mapPreview = document.getElementById("mapPreview");
  if (mapPreview) {
    mapPreview.style.display = "none";
  }
});


function getLocation (){
   var locationStatus = document.getElementById('locationStatus');
   var mapPreview = document.getElementById("mapPreview");

   if(navigator.geolocation){
    locationStatus.textContent = "Loading...";
    locationStatus.className = "location-status";
    locationStatus.style.display = "block";

    navigator.geolocation.getCurrentPosition(
        function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            document.getElementById("latitude").value = latitude.toFixed(6);
            document.getElementById("longitude").value = longitude.toFixed(6);

            locationStatus.textContent = "Location Obtained successfully";
            locationStatus.className = "location-status location-success";

            // show map preview
            if(mapPreview){
            const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;
            mapPreview.src = mapUrl;
            mapPreview.style.display = 'block';
            }
        },
        function(error){
        var errorMessage;
        switch(error.code){
            case error.PERMISSION_DENIED:
                errorMessage = "Location access was denied";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable";
                break;
            case error.TIMEOUT:
                errorMessage = "Request get timeout";
                break;
            case error.UNKNOWN_ERROR:
                errorMessage = "A unknown error occured.";
                break;
        }
        locationStatus.textContent = errorMessage;
        locationStatus.className = "location-status location-error";
        }
    );  
   }else{
    locationStatus.textContent = "Geolocation is not supported by this browser.";
    locationStatus.className = "location-status location-error";
   }
}

// address validation and character count 
document.addEventListener("DOMContentLoaded", function () {
    const address = document.getElementById("address");
    const addressCount = document.getElementById("addressCount");

    // get character in real time from user input 
    address.addEventListener("input", function(){
        const currentLength = address.value.length;
        addressCount.textContent = `Characters: ${currentLength} / 300`;

        if (currentLength > 250) {
        addressCount.style.color = "red";
        } else {
        addressCount.style.color = "";
        }
    });
  });


// Password strength meter. 
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password');

     const strengthBar = document.getElementById('passwordStrength');
    const strengthText = document.createElement('div');
    strengthText.className = 'strength-text';
    strengthBar.parentNode.insertBefore(strengthText, strengthBar.nextSibling);

    passwordInput.addEventListener("input", function() {
        const val = passwordInput.value;
        const { strength, score } = getPasswordStrength(val);

        // Clear previous classes
        strengthBar.className = "";
        strengthText.className = "strength-text";
        strengthText.textContent = "";

        if (val.length === 0) {
            strengthBar.style.display = 'none';
            strengthText.style.display = 'none';
        } else {
            strengthBar.style.display = 'block';
            strengthText.style.display = 'block';

            // Set width based on score (0-100)
            const widthPercent = Math.min(100, score * 25);
            strengthBar.style.width = widthPercent + '%';

            if (strength === 'weak') {
                strengthBar.classList.add("strength-weak");
                strengthText.textContent = 'Weak';
                strengthText.classList.add('text-danger');
            } else if (strength === "medium") {
                strengthBar.classList.add("strength-medium");
                strengthText.textContent = 'Medium';
                strengthText.classList.add('text-warning');
            } else if (strength === 'strong') {
                strengthBar.classList.add("strength-strong");
                strengthText.textContent = 'Strong';
                strengthText.classList.add('text-success');
            }
        }
    });

    function getPasswordStrength(password) {
        const commonPasswords = ['password', '123456', 'qwerty', 'letmein', 'welcome'];
        if (commonPasswords.includes(password.toLowerCase())) {
            return { strength: 'weak', score: 1 };
        }

        let strengthScore = 0;
        
        // Length score
        if (password.length >= 12) strengthScore += 3;
        else if (password.length >= 8) strengthScore += 2;
        else if (password.length >= 6) strengthScore += 1;
        
     
        if (/[a-z]/.test(password)) strengthScore++;
        if (/[A-Z]/.test(password)) strengthScore++;
        if (/[0-9]/.test(password)) strengthScore++;
        if (/[^A-Za-z0-9]/.test(password)) strengthScore += 2; // Extra points for special chars
        
        if (/(.)\1{2,}/.test(password)) strengthScore = Math.max(0, strengthScore - 1);

        if (strengthScore <= 3 || password.length < 6) return { strength: 'weak', score: strengthScore };
        if (strengthScore <= 6) return { strength: 'medium', score: strengthScore };
        return { strength: 'strong', score: strengthScore };
    }
});

// get device information 
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    let browser = "Unknown Browser";
    let os = "Unknown OS";

    // Browser detection
    if (userAgent.includes("Edg")) {
        browser = "Microsoft Edge";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browser = "Opera";
    } else if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        browser = "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        browser = "Mozilla Firefox";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        browser = "Safari";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
        browser = "Internet Explorer";
    }

    // OS detection
    if (userAgent.includes("Windows")) {
        os = "Windows";
    } else if (userAgent.includes("Macintosh") || userAgent.includes("MacIntel")) {
        os = "MacOS";
    } else if (userAgent.includes("Linux")) {
        os = "Linux";
    } else if (userAgent.includes("Android")) {
        os = "Android";
    } else if (userAgent.includes("iOS") || userAgent.includes("iPhone") || userAgent.includes("iPad")) {
        os = "iOS";
    }

    return {
        platform: platform,
        browser: browser,
        userAgent: userAgent,
        os: os
    };
}

// form validation 

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("customerForm");

    form.addEventListener("submit", (e)=>{
        // prevent auto form submission 
        e.preventDefault();   

        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value.trim();
        const password = document.getElementById('password').value;
        const cpassword = document.getElementById('confirmPassword').value;

        // validation flags 
        let isValid = true;
        let errors = [];

        // name validation 
        if(name === ""){
            document.getElementById("fullNameError").textContent = "Full Name is required.";
            isValid = false;
        }

        // email validation 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            document.getElementById("emailError").textContent = "Please enter a valid email address";
            isValid = false;
        }

        // phone validation 
        if(!/^\d{10}$/.test(phone)){
            document.getElementById('phoneError').textContent = "Phone number must be exactly 10 digit numbers.";
            isValid = false;
        }

        // DOB 
        if(dob === ""){
            document.getElementById('dobError').textContent = "Date of Birth is requried";
            isValid = false;
        }

        // check password and check passord must be same  
        if(password.length < 6){
            document.getElementById("passwordError").textContent = "Password must be atleast 6 character!";
            isValid = false;
        }

        if(password !== cpassword){
            document.getElementById('cpasswordError').textContent = "Password and Confirm password is not matched.";
            isValid = false;
        }


        // if validation 
        if(isValid){
            const deviceInfo = getDeviceInfo();

            const customerData = {
                name, email, phone, dob, address, 
                gender: document.querySelector('input[name="gender"]:checked')?.value || "",
                password,
                device: deviceInfo
            };

            localStorage.setItem(`customer_${phone}`, JSON.stringify(customerData));
            console.log("Saved Customer Data:", customerData);
            alert("Registration Successful ✅");
            form.reset();
            document.getElementById('passwordStrength').style.display = 'none';
            document.getElementById("mapPreview").src = "";

            // form error message clear after submission 
            document.querySelectorAll(".error-msg").forEach(el=>el.textContent="");
            
            // other information clear after form submission 
            document.getElementById("mapBody").style.display = 'none';
            document.getElementById("locationStatus").style.display = 'none';
            document.getElementById("passwordStrength").style.display = 'none';
        }

    })
})



// toggle function 
function toggleTheme(){
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') === 'dark'?'light':'dark';
    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}
