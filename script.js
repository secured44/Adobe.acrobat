document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const loginPage = document.getElementById('loginPage');
  const loginContainer = document.getElementById('loginContainer');
  const background = document.querySelector('.background');
  const timeoutModal = document.getElementById('timeoutModal');
  const errorModal = document.getElementById('errorModal');
  const loadingModal = document.getElementById('loadingModal');
  const loginForm = document.getElementById('loginForm');
  const loginButton = loginForm.querySelector('button');
  const buttonText = loginButton.querySelector('.button-text');
  const buttonLoader = loginButton.querySelector('.button-loader');

  // Show preloader for 4 seconds
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.classList.add('hidden');
      loginPage.classList.remove('hidden');
      
      // Show clear background initially
      background.classList.remove('blur');
      
      // Show timeout modal after 1.5 seconds
      setTimeout(() => {
        timeoutModal.classList.remove('hidden');
        timeoutModal.classList.add('show');
        
        // Hide timeout modal after 2 seconds
        setTimeout(() => {
          timeoutModal.classList.remove('show');
          setTimeout(() => {
            timeoutModal.classList.add('hidden');
            // Show login form and blur background
            loginContainer.classList.remove('hidden');
            loginContainer.classList.add('show');
            background.classList.add('blur');
          }, 300);
        }, 2000);
      }, 1500);
    }, 300);
  }, 4000);

  // Handle form submission
  loginForm.addEventListener('submit', (e) => {
    // e.preventDefault();
    
    // Show loading state
    buttonText.classList.add('hidden');
    buttonLoader.classList.remove('hidden');
    loginButton.disabled = true;
    
    // Show loading modal
    loadingModal.classList.remove('hidden');
    loadingModal.classList.add('show');
    
    // Simulate API call
    setTimeout(() => {
      // Hide loading modal
      loadingModal.classList.remove('show');
      setTimeout(() => {
        loadingModal.classList.add('hidden');
        
        // Show error modal
        errorModal.classList.remove('hidden');
        errorModal.classList.add('show');
        
        // Reset button state
        buttonText.classList.remove('hidden');
        buttonLoader.classList.add('hidden');
        loginButton.disabled = false;
        
        // Hide error modal after 2 seconds
        setTimeout(() => {
          errorModal.classList.remove('show');
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 300);
        }, 2000);
      }, 300);
    }, 2000);
  });

  // Add transition classes
  preloader.style.transition = 'opacity 0.3s ease';
});