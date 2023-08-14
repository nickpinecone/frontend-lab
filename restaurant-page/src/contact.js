export default function createContact() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("contact-wrapper");

    wrapper.insertAdjacentHTML(
        "afterbegin",
        `
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.4485396420707!2d-71.10966085528413!3d42.34565033706961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379edf345355f%3A0x8ebf04db304d5029!2s1060%20Beacon%20St%2C%20Brookline%2C%20MA%2002446!5e0!3m2!1sen!2sus!4v1692011320914!5m2!1sen!2sus"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div class="panel">

            <ul>
                <li>Twitter: <span id="tag">@atmarcels</span></li>
                <li>Instagram: <span id="tag">@atmarcelspies</span></li>
                <li>Number: 9876954321</li>
                <li>Address: Boston, Cool Street 4</li>
            </ul>
        </div>
        `
    )

    return wrapper;
};