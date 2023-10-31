export default function isFormValid (form) {
    const nameValid = 1 < form.name.length < 50;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = regex.test(form.email);
    return nameValid && emailValid;
}