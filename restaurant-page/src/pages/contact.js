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
            li.textContent = "Twitter: @atmarcels";
            list.appendChild(li);
            
            li = document.createElement("li");
            li.textContent = "Instagram: @atmarcelspies";
            list.appendChild(li);
    
            li = document.createElement("li");
            li.textContent = "Discord: @atmarcelspeak";
            list.appendChild(li);

            container.appendChild(list);
        }
        description.appendChild(container);


        const heading2 = document.createElement("h3");
        heading2.textContent = "Other Contacts";
        description.appendChild(heading2);
        const container2 = document.createElement("div");
        {
            const list = document.createElement("ul");
            let li = document.createElement("li");
            li.textContent = "Number: 9876954321";
            list.appendChild(li);
            
            li = document.createElement("li");
            li.textContent = "Addres: Boston, Cool Street 4";
            list.appendChild(li);

            container2.appendChild(list);
        }
        description.appendChild(container2);
    }
    content.appendChild(description);
}