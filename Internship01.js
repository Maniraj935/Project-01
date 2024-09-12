// Add scroll event listener to change background color of navbar on scroll window.addEventListener('scroll',function()

    const navbar=document.getElementById('navbar');
    window.addEventListener('scroll',function()
{
    if(Window.scrollY>50)
    {
        navbar.classList.add('Scrolled');
    }
    else
    {
        navbar.classList.remove('scrolled');
    }
});