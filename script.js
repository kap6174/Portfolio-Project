var navMenu = document.querySelectorAll("nav a")
// console.log(navMenu)

for(var i = 0; i < navMenu.length; i++)
{
    navMenu[i].addEventListener('click', function(event){
        event.preventDefault();
        var elementId = this.textContent.trim().toLowerCase();
        var element = document.getElementById(elementId);
        
        var interval = setInterval(function(){
            var target = element.getBoundingClientRect();
            if(target.top <= 0)
            {
                clearInterval(interval);
                return;
            }
            else
            {
                window.scrollBy(0, 50);
            }
        }, 10);
    });
}