window.formbutton = window.formbutton || function() {
    (formbutton.q = formbutton.q || []).push(arguments)
};
formbutton("create", {
    action: "https://formspree.io/f/xvodvkrw",
    title: "Contact Me",
    fields: [{
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "#00203FFF"
        },
        button: {
            backgroundColor: "#00203FFF"
        }
    }
});