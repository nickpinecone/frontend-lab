const content = document.querySelector("#content");

export default function showContactPage() {
    const title = document.createElement("div");
    title.classList.add("title");
    {
        const heading = document.createElement("h1");
        heading.textContent = "Contact Us";
        title.appendChild(heading);
    }
    content.appendChild(title);

    const description = document.createElement("div");
    description.classList.add("description");
    {
        const heading = document.createElement("h3");
        heading.textContent = "Our Socials";
        description.appendChild(heading);
    
        const container = document.createElement("div");
        {
            const list = document.createElement("ul");
            let li = document.createElement("li");
            li.textContent = "Twitter: @marcels.pies";
            list.appendChild(li);
            
            li = document.createElement("li");
            li.textContent = "Fair Prices";
            list.appendChild(li);
    
            li = document.createElement("li");
            li.textContent = "Huge Selection";
            list.appendChild(li);
    
            li = document.createElement("li");
            li.textContent = "Blazingly Fast Delivery";
            list.appendChild(li);
            
    
            container.appendChild(list);
        }
        description.appendChild(container);
    }
    content.appendChild(description);
}