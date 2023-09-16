function displayWindowProperties() {
    const userAgent = window.navigator.userAgent;
    console.log('User Agent:', userAgent);

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    console.log('Screen Width:', screenWidth);
    console.log('Screen Height:', screenHeight);

    const currentURL = window.location.href;
    const currentPath = window.location.pathname;
    console.log('Current URL:', currentURL);
    console.log('Current Path:', currentPath);

   
    sessionStorage.setItem('sessionData', 'This is session data');

    const sessionData = sessionStorage.getItem('sessionData');
    console.log('Session Storage Data:', sessionData);

    localStorage.setItem('localData', 'This is local data');

    const localData = localStorage.getItem('localData');
    console.log('Local Storage Data:', localData);
}

window.addEventListener('load', displayWindowProperties);
