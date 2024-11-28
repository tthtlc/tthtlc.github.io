Detecting Cross-Site Request Forgery (CSRF) vulnerabilities in a web application involves a combination of manual testing, automated tools, and secure design reviews. Below are **20 specific actions** you can take to detect CSRF vulnerabilities:

---

### **1. Inspect HTTP Requests for Tokens**
Check the HTTP requests made by the client to ensure that every sensitive action (e.g., POST, DELETE) includes a CSRF token in the request body or headers.

---

### **2. Analyze Forms and Hidden Fields**
Examine forms for hidden fields that include a CSRF token. Verify whether these tokens are unique and tied to the user session.

---

### **3. Validate Referrer Headers**
Check if the application enforces a `Referer` or `Origin` header validation to ensure requests come from the same origin.

---

### **4. Test for Token Verification**
Manually remove or modify the CSRF token in a legitimate request to check if the application rejects the request properly.

---

### **5. Evaluate Missing Token Scenarios**
Submit requests without including a CSRF token to sensitive endpoints to see if they are accepted.

---

### **6. Test Session Association**
Ensure the CSRF token is bound to the user's session and cannot be reused across different sessions or users.

---

### **7. Check Cookies for SameSite Attributes**
Verify that cookies used for session management include the `SameSite` attribute, especially `SameSite=Strict` or `SameSite=Lax`.

---

### **8. Test GET Requests for State-Changing Actions**
Attempt to perform state-changing actions (e.g., changing user settings) using a GET request instead of POST, PUT, or DELETE.

---

### **9. Test CORS Configurations**
Inspect Cross-Origin Resource Sharing (CORS) policies to ensure that the application only allows trusted origins for sensitive requests.

---

### **10. Automated Scanning**
Use security tools like OWASP ZAP, Burp Suite, or Acunetix to identify CSRF vulnerabilities automatically.

---

### **11. Analyze API Endpoints**
Test whether RESTful API endpoints properly validate CSRF tokens or if they incorrectly assume APIs are immune to CSRF.

---

### **12. Simulate Attacker Requests**
Create a malicious page hosted on a different domain and attempt to perform sensitive actions on behalf of the victim without their knowledge.

---

### **13. Verify Logout Tokens**
Check if the logout functionality requires a CSRF token to prevent attackers from logging out users unexpectedly.

---

### **14. Test CSRF in Multi-Step Forms**
For multi-step forms or wizards, test whether the CSRF token is revalidated at each step.

---

### **15. Review AJAX Requests**
Inspect AJAX-based requests in the application to ensure CSRF tokens are included in all asynchronous requests.

---

### **16. Inspect URL Parameters**
Verify if the application uses CSRF tokens in URL parameters, which can lead to token leakage via referrer headers or browser history.

---

### **17. Perform Code Review**
Analyze the backend code for implementation of anti-CSRF measures, such as token generation, validation, and session binding.

---

### **18. Use Browser Developer Tools**
Monitor network activity in the browser's developer tools to identify requests missing CSRF tokens.

---

### **19. Inspect Third-Party Components**
Ensure third-party libraries or components integrated into the application also enforce CSRF protection.

---

### **20. Test Framework Defaults**
If using a web framework (e.g., Django, Spring, or Rails), ensure that its built-in CSRF protection is enabled and properly configured.

--- 

Combining these actions can help identify both the presence of CSRF vulnerabilities and the robustness of existing protections in a web application.
